(() => {
  'use strict';
  const tablist = document.querySelector('.participation-tabs');
  if (!tablist) return;
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
  if (panels.some(panel => !panel)) return;

  function activate(id, updateUrl = false, moveFocus = false) {
    const current = tabs.find(tab => tab.getAttribute('aria-controls') === id) || tabs[0];
    tabs.forEach((tab, index) => {
      const active = tab === current;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[index].hidden = !active;
      panels[index].setAttribute('role', 'tabpanel');
      panels[index].setAttribute('aria-labelledby', tab.id);
    });
    if (updateUrl && location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
    if (moveFocus) current.focus();
  }
  function fromLocation() {
    const target = document.getElementById(location.hash.slice(1));
    const containingPanel = target && target.closest('.participation-panel');
    activate(containingPanel ? containingPanel.id : 'team');
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.getAttribute('aria-controls'), true));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next].getAttribute('aria-controls'), true, true);
    });
  });
  tablist.hidden = false;
  fromLocation();
  window.addEventListener('hashchange', fromLocation);
  window.addEventListener('popstate', fromLocation);
})();
