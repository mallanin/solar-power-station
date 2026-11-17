(() => {
  'use strict';
  const panel = document.querySelector('[data-contact-kind]');
  if (!panel) return;
  const form = panel.querySelector('form');
  const preview = panel.querySelector('.email-preview');
  const consentArea = form.querySelector('.public-consent');
  const consent = form.querySelector('[name="consent"]');
  const status = panel.querySelector('.copy-status');
  const messageBox = panel.querySelector('#prepared-message');
  form.hidden = false;

  function syncAudience() {
    const isPublic = new FormData(form).get('audience') === 'public';
    if (consentArea) {
      consentArea.hidden = !isPublic;
      consent.required = isPublic;
      if (!isPublic) consent.checked = false;
      form.querySelector('.audience-description').textContent = isPublic
        ? 'The team will review your story before publication. Your email address will not appear in the post.'
        : 'Only the team will receive your message.';
    }
    preview.hidden = true;
    status.textContent = '';
    panel.querySelector('.email-draft-link').setAttribute('href', `mailto:${panel.dataset.contactEmail}`);
  }
  form.addEventListener('input', syncAudience);
  form.addEventListener('change', syncAudience);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const isPublic = data.get('audience') === 'public';
    const kind = panel.dataset.contactKind === 'inquiry' ? 'Build inquiry' : isPublic ? 'Public story for review' : 'Private feedback';
    const name = String(data.get('name')).trim();
    const title = String(data.get('subject')).replace(/[\r\n]+/g, ' ').trim();
    const message = String(data.get('message')).trim();
    if (!name || !title || !message) {
      const missing = !name ? 'name' : !title ? 'subject' : 'message';
      const field = form.elements.namedItem(missing);
      field.setCustomValidity('Please enter a value, not only spaces.');
      field.reportValidity();
      field.addEventListener('input', () => field.setCustomValidity(''), { once: true });
      return;
    }
    const subject = `[OpenPowerBox — ${kind}] ${title}`;
    const body = [
      `${isPublic ? 'Display name' : 'Name'}: ${name}`,
      `Type: ${kind}`,
      `Title: ${title}`,
      '', message, '',
      isPublic
        ? 'Publication permission: I give permission to publish the display name, title, and story above after team review. I have permission to share this material. Please do not publish my email address.'
        : 'Privacy: This message is for the team only. Please do not publish it.'
    ].join('\n');
    panel.querySelector('.email-draft-link').href = `mailto:${panel.dataset.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    messageBox.value = `To: ${panel.dataset.contactEmail}\nSubject: ${subject}\n\n${body}`;
    preview.hidden = false;
    status.textContent = '';
    panel.querySelector('#preview-heading').focus();
  });
  panel.querySelector('.copy-message').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(messageBox.value);
      status.textContent = 'Message copied. Paste it into an email and send when ready.';
    } catch (_) {
      messageBox.focus();
      messageBox.select();
      status.textContent = 'Select and copy the message above, then paste it into your email.';
    }
  });
})();
