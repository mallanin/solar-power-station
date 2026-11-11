(function () {
  'use strict';
  const form = document.getElementById('energy-calculator');
  if (!form || !window.calculateOpenPowerEnergy) return;
  const el = (id) => document.getElementById(id);
  function update() {
    const load = Number(el('load-watts').value);
    const panel = Number(el('panel-watts').value);
    const batteryAh = Number(el('battery-ah').value);
    const sunHours = Number(el('sun-hours').value);
    const delivery = Number(el('solar-factor').value) / 100;
    const result = window.calculateOpenPowerEnergy({ load, panel, batteryAh, sunHours, delivery });
    const balance = Math.round(result.balance);
    el('load-value').textContent = load + ' W';
    el('sun-value').textContent = sunHours.toFixed(1) + ' h';
    el('factor-value').textContent = Math.round(delivery * 100) + '%';
    el('balance-value').textContent = (balance > 0 ? '+' : '') + balance + ' Wh/day';
    el('balance-note').textContent = balance > 0 ? 'A daily margin is available for recovery; timing and charging limits still matter.' : balance < 0 ? 'Stored energy is being used faster than this solar scenario replaces it.' : 'Daily break-even leaves no extra energy to recover a depleted reserve.';
    form.dataset.balance = balance < 0 ? 'deficit' : balance === 0 ? 'break-even' : 'surplus';
    el('demand-value').textContent = Math.round(result.demand) + ' Wh/day';
    el('solar-value').textContent = Math.round(result.solar) + ' Wh/day';
    el('reserve-value').textContent = result.reserveHours.toFixed(1) + ' hours';
    el('break-even-value').textContent = result.breakEvenHours.toFixed(1) + ' peak-sun h';
    const notes = [];
    if (load > 15) notes.push('Above the reference 15 W design target: output hardware needs separate validation.');
    if (panel > 200) notes.push('400 W scenario: a larger suitable controller and revised array/mount design are required to capture the added power.');
    if (batteryAh > 50) notes.push('100 Ah scenario: battery compatibility, enclosure, retention, and protection need review.');
    el('configuration-note').textContent = notes.join(' ') || 'Reference component sizes; actual operating performance still depends on conditions.';
  }
  form.addEventListener('input', update);
  form.addEventListener('change', update);
  update();
})();
