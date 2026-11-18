const origins = new Set(['https://openpowerbox.com', 'https://www.openpowerbox.com']);
const recipient = 'milogoehring@gmail.com';
export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    const headers = {'Content-Type':'application/json', 'Cache-Control':'no-store', 'Vary':'Origin'};
    if (origins.has(origin)) headers['Access-Control-Allow-Origin'] = origin;
    const reply = (status, body) => new Response(JSON.stringify(body), {status, headers});
    if (new URL(request.url).pathname !== '/submit') return reply(404, {error:'Not found.'});
    if (!origins.has(origin)) return reply(403, {error:'Please use the form on OpenPowerBox.com.'});
    if (request.method === 'OPTIONS') return new Response(null, {status:204,headers:{...headers,'Access-Control-Allow-Methods':'POST','Access-Control-Allow-Headers':'Content-Type','Access-Control-Max-Age':'600'}});
    if (request.method !== 'POST') return reply(405, {error:'Use POST.'});
    if (!request.headers.get('Content-Type')?.startsWith('application/json')) return reply(415,{error:'Expected JSON.'});
    let data;
    try {
      const reader = request.body.getReader(); let size=0; const chunks=[];
      while (true) {const {done,value}=await reader.read(); if(done) break;size+=value.length;if(size>16000){await reader.cancel();return reply(413,{error:'Message is too long.'});}chunks.push(value);}
      data=JSON.parse(await new Blob(chunks).text());
    } catch {return reply(400,{error:'Please check the form and try again.'});}
    if (!data || typeof data !== 'object' || Array.isArray(data)) return reply(400,{error:'Invalid form.'});
    if (data.website) return reply(200,{ok:true});
    const limits={name:80,email:254,subject:120,message:3000};
    for(const [field,max] of Object.entries(limits)) {
      if(typeof data[field]!=='string'||!data[field].trim()||data[field].length>max) return reply(400,{error:`Please check your ${field}.`});
      data[field]=data[field].trim();
    }
    if (/[\r\n\x00-\x1f]/.test(data.name+data.subject+data.email) || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)) return reply(400,{error:'Please enter a valid name, subject, and email address.'});
    if (!['feedback','inquiry'].includes(data.kind) || !['private','public'].includes(data.audience)) return reply(400,{error:'Invalid message type.'});
    const publicStory=data.kind==='feedback' && data.audience==='public';
    if(publicStory && data.consent!==true) return reply(400,{error:'Public stories require publication permission.'});
    if(data.kind==='inquiry' && data.audience!=='private') return reply(400,{error:'Inquiries are private.'});
    try {
      const {success}=await env.CONTACT_LIMIT.limit({key:request.headers.get('CF-Connecting-IP')||'unknown'});
      if(!success) return reply(429,{error:'Please wait a minute before sending another message.'});
      const kind=data.kind==='inquiry'?'Build inquiry':publicStory?'Public story for review':'Private feedback';
      await env.EMAIL.send({
        from:{email:`${data.kind==='inquiry'?'inquiry':'feedback'}@openpowerbox.com`,name:'OpenPowerBox website'},
        to:recipient,replyTo:data.email,
        subject:`[OpenPowerBox — ${kind}] ${data.subject}`,
        text:[`Name: ${data.name}`,`Reply to: ${data.email}`,`Type: ${kind}`,'',data.message,'',publicStory?'Publication permission: the submitter explicitly agreed to publish their display name, title, and story after team review, and confirmed permission to share the material. Do not publish the email address.':'Private message: do not publish.'].join('\n')
      });
      return reply(200,{ok:true});
    } catch {return reply(503,{error:'Your message could not be sent. Please try again or email the team directly.'});}
  }
};
