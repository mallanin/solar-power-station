(function (root) {
  'use strict';
  function calculateEnergy(input) {
    const { load, panel, batteryAh, sunHours, delivery } = input;
    if (![load, panel, batteryAh, sunHours, delivery].every(Number.isFinite) || load <= 0 || panel <= 0 || batteryAh <= 0 || sunHours < 0 || delivery <= 0 || delivery > 1) {
      throw new RangeError('Energy inputs must be finite and within their physical range.');
    }
    const demand = load * 24;
    const solar = panel * sunHours * delivery;
    return { demand, solar, balance: solar - demand, reserveHours: 12.8 * batteryAh * 0.8 / load, breakEvenHours: demand / (panel * delivery) };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = calculateEnergy;
  else root.calculateOpenPowerEnergy = calculateEnergy;
})(typeof window !== 'undefined' ? window : globalThis);
