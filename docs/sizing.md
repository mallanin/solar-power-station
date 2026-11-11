---
title: Size your system
nav_order: 3
permalink: /docs/sizing/
---
<div class="eyebrow">02 / Explore</div>
# Match energy to the job

Start with the device, its operating schedule, and the longest low-sun period you want to bridge. Then consider the battery reserve and the array needed to refill it. The reference build targets a 15 W continuous load; larger combinations below are unvalidated design scenarios.

## Try the energy budget

Change the inputs to see the trade-offs. This is a simple daily planning model, not a weather forecast, an hourly battery simulation, or a component compatibility approval.

<div class="energy-calculator" id="energy-calculator">
<div class="calculator-inputs">
<label for="load-watts">Continuous device load <output id="load-value" for="load-watts">15 W</output></label><input id="load-watts" type="range" min="1" max="30" step="1" value="15">
<label for="panel-watts">Solar panel rating</label><select id="panel-watts"><option value="200">200 W · reference array</option><option value="400">400 W · larger controller required</option></select>
<label for="battery-ah">Battery at 12.8 V</label><select id="battery-ah"><option value="50">50 Ah · 640 Wh nominal</option><option value="100">100 Ah · 1,280 Wh nominal</option></select>
<label for="sun-hours">Equivalent peak-sun hours per day <output id="sun-value" for="sun-hours">3.0 h</output></label><input id="sun-hours" type="range" min="0" max="6" step="0.1" value="3">
<label for="solar-factor">Solar delivery assumption <output id="factor-value" for="solar-factor">75%</output></label><input id="solar-factor" type="range" min="50" max="90" step="5" value="75">
</div>
<div class="calculator-results" aria-live="polite" aria-atomic="true">
<div class="calc-primary"><span>Daily energy balance</span><strong id="balance-value">+90 Wh/day</strong><p id="balance-note">A daily margin is available for recovery.</p></div>
<dl><div><dt>Device demand</dt><dd id="demand-value">360 Wh/day</dd></div><div><dt>Estimated solar delivery</dt><dd id="solar-value">450 Wh/day</dd></div><div><dt>No-solar planning reserve</dt><dd id="reserve-value">34.1 hours</dd></div><div><dt>Daily break-even sunlight</dt><dd id="break-even-value">2.4 peak-sun h</dd></div></dl>
<p class="calc-warning" id="configuration-note">Reference component sizes; actual operating performance still depends on conditions.</p>
</div>
</div>
<noscript><p>The controls need JavaScript. At the default inputs, daily demand is 360 Wh, estimated harvest is 450 Wh, the daily margin is 90 Wh, and no-solar planning reserve is 34.1 hours.</p></noscript>
<script src="{{ '/assets/js/energy-model.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/energy-calculator.js' | relative_url }}" defer></script>

### What the model assumes

- Load runs for 24 hours per day at the selected wattage.
- Solar energy available to the load/storage budget is panel watts × peak-sun hours × the selected delivery factor. The default 75% is an assumption for aggregate losses, not measured efficiency.
- No-solar reserve uses **80% of nominal battery energy** as a separate, deliberately conservative load-deliverable allowance: 12.8 V × Ah × 0.80 ÷ load watts. This is not a prescribed battery setting or measured depth of discharge.
- The simplified model does not simulate hourly charging/discharging, reserve recovery, full-battery curtailment, charge taper, controller clipping, seasonal sequences, or standby consumption separately. Those belong in detailed design verification.

The 34.1-hour default planning result at 15 W uses a conservative 80% energy allowance. It is separate from our roughly 40-hour reported test at a 16 W continuous load; the planning assumptions and test conditions are different. [Our runtime test →]({{ '/docs/testing/#storage-and-runtime' | relative_url }})

## 1. Write down the loads

Use device specifications or measurements, including the supported input voltage and USB-C profile. A 15 W continuous load uses 360 Wh/day; a 5 W continuous load uses 120 Wh/day. If devices operate intermittently, add **watts × hours** for each device over the day. Check simultaneous demand separately from daily energy.

| Example, not a tested device combination | Running load | Daily operating time | Device energy |
|:---|---:|---:|---:|
| Small sensor project | 5 W | 24 h | 120 Wh/day |
| Reference design load | 15 W | 24 h | 360 Wh/day |
| Intermittent device | 15 W | 8 h | 120 Wh/day |

Networking gear or cameras using PoE, AC, or another voltage need a compatible interface; they cannot be assumed compatible with the reference USB-C output. Include the interface's consumption and startup demand in a revised design.

## 2. Choose a reserve

Decide which loads must remain on and how long they must run without useful solar. Use a load-deliverable battery-energy estimate, not nominal amp-hours alone. A 100 Ah battery at the same voltage doubles nominal energy, but adds weight and needs time and sufficient solar surplus to recharge.

## 3. Design for the difficult season

Consider the installation's winter solar resource, shading, tilt, temperature, and consecutive cloudy days. Use site-specific hourly weather for a detailed model, and compare it with field measurements. The example sun hours above are intentionally adjustable; they are not a California climate claim.

## 4. Check the complete configuration

Before choosing parts, check array voltage/current in the expected conditions, controller limits, battery charging acceptance, wiring, fuses, isolation, output conversion, heat, enclosure space, and mounting loads. A 400 W array and 100 Ah battery is an example of an enlarged design—not a validated substitution into the existing 75/15 station.

[Scaling limits and examples →]({{ '/docs/system-design/#scaling-the-architecture' | relative_url }}) · [Parts and budget →]({{ '/docs/cost/' | relative_url }})
