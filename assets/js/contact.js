(() => {
  'use strict';
  const panel=document.querySelector('[data-contact-kind]');
  if(!panel) return;
  const form=panel.querySelector('form');
  const status=panel.querySelector('.contact-status');
  const button=form.querySelector('[type="submit"]');
  const consentArea=form.querySelector('.public-consent');
  const consent=form.querySelector('[name="consent"]');
  form.hidden=false;
  function syncAudience(){
    const isPublic=new FormData(form).get('audience')==='public';
    if(consentArea){
      consentArea.hidden=!isPublic;consent.required=isPublic;
      if(!isPublic) consent.checked=false;
      form.querySelector('.audience-description').textContent=isPublic
        ?'The team will review your story before publication. Your email address will not appear in the post.'
        :'Only the team will receive your message.';
    }
  }
  form.addEventListener('change',syncAudience);
  form.addEventListener('input',()=>{status.textContent='';});
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(button.disabled||!form.reportValidity()) return;
    const data=Object.fromEntries(new FormData(form));
    for(const field of ['name','email','subject','message']){
      data[field]=data[field].trim();
      if(!data[field]){
        const input=form.elements.namedItem(field);
        input.setCustomValidity('Please enter a value, not only spaces.');input.reportValidity();
        input.addEventListener('input',()=>input.setCustomValidity(''),{once:true});return;
      }
    }
    data.kind=panel.dataset.contactKind;data.audience=data.audience||'private';data.consent=!!consent?.checked;
    button.disabled=true;button.textContent='Sending…';status.textContent='';
    try{
      const response=await fetch(panel.dataset.contactEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),signal:AbortSignal.timeout(20000)});
      const result=await response.json();
      if(!response.ok||!result.ok) throw new Error(result.error||'The message could not be sent. Please try again.');
      form.reset();syncAudience();
      status.textContent=data.audience==='public'?'Your story was sent to the team for review. It has not been published.':'Your message was sent to the team. Thank you.';
      status.focus();
    }catch(error){
      status.textContent=error.name==='TimeoutError'?'Sending took too long to confirm. Please check with the team before resending.':error.message==='Failed to fetch'?'Could not connect. Please try again or email the team directly.':error.message;
    }finally{button.disabled=false;button.textContent='Send message →';}
  });
})();
