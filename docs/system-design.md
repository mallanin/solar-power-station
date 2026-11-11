---
title: System design
nav_order: 2
permalink: /docs/system-design/
---
<div class="eyebrow">01 / Understand</div>
# Small loads, sustained by solar

The design starts with a simple aim: keep a modest electrical load running where a permanent power connection is impractical. Solar harvest covers daily use and restores the battery; stored energy carries the load when sunlight cannot.

## The reference configuration

| Subsystem | Current reference | Purpose |
|:---|:---|:---|
| Generation | One nominal 200 W solar panel | Collect energy while sunlight is available |
| Charge control | Victron SmartSolar MPPT 75/15 | Manage solar charging and provide a protected load path |
| Storage | 12.8 V, 50 Ah LiFePO4 battery | Store a nominal 640 Wh |
| Output | Regulated USB-C module | Supply a compatible device; 15 W continuous design target |
| Physical installation | Aluminum panel support and equipment enclosure on an existing 4–6 inch pole | Support, protect, and provide access to the components |

<div class="power-path"><span>Solar panel</span><b aria-hidden="true">→</b><span>MPPT controller<br><small>↕ Battery storage</small></span><b aria-hidden="true">→</b><span>USB-C module</span><b aria-hidden="true">→</b><span>Your device</span></div>

The controller manages the solar input. Its load output feeds the USB module, which provides the device's required voltage profile. The battery shares the DC system: it charges when energy is available and supplies energy when solar input falls short. This is a functional diagram, not a wiring schematic.

## The daily energy balance

**Power is a rate. Energy is what accumulates over time.** A 15 W continuous load consumes:

<div class="equation">15 W × 24 h = <strong>360 Wh per day</strong></div>

The panel does not supply 200 W all day. A useful first estimate multiplies panel rating by *equivalent peak-sun hours* and a delivery factor for real-world losses. Peak-sun hours describe the day's total sunlight as equivalent hours at full reference intensity; they are not simply daylight hours.

For an **illustrative 3 peak-sun-hour day** with **75% overall delivery**:

<div class="equation">200 W × 3 h × 0.75 = <strong>450 Wh per day</strong><br><small>450 Wh harvested − 360 Wh used = 90 Wh of daily energy margin</small></div>

The 75% factor is a planning assumption, not a measured station efficiency. It represents combined effects such as panel temperature, wiring, conversion, storage, and other losses. At this assumption, daily break-even is **2.4 peak-sun hours**. Additional margin is needed to recover after cloudy days.

| Illustrative solar resource | Energy available at 75% delivery | Balance against a 15 W continuous load |
|:---|---:|---:|
| 1 peak-sun hour/day | 150 Wh/day | 210 Wh/day deficit |
| 2 peak-sun hours/day | 300 Wh/day | 60 Wh/day deficit |
| 3 peak-sun hours/day | 450 Wh/day | 90 Wh/day margin |
| 5 peak-sun hours/day | 750 Wh/day | 390 Wh/day margin |

These are scenarios, not measured California weather. A positive daily balance indicates replenishment potential; a full battery, charge taper, hourly timing, and other limits can reduce how much surplus is stored.

## What the battery contributes

Nominal stored energy is **12.8 V × 50 Ah = 640 Wh**. Dividing by 15 W gives **42.7 hours before losses or discharge limits**. The team reports approximately 40 hours in its battery-runtime test; the precise load, cutoff, temperatures, and measurement point still need to be published alongside it. [Test status →]({{ '/docs/testing/' | relative_url }})

Reserve and recharge work together. A larger battery buys more time during a deficit, but cannot make up for a panel that consistently harvests less than the load consumes. A larger panel can restore reserve faster, provided the controller and battery can accept the power.

## California weather and long-term operation

The goal is sustained off-grid operation under suitable site and weather conditions. Winter sun, coastal fog, shade, and consecutive storm days matter more than a statewide average. Some energy may be collected under cloud, but a storm does not guarantee enough energy to keep the battery charged.

For a real installation, evaluate the location, panel orientation, shading, winter resource, and several low-sun days in sequence. Then check both the deepest reserve drawdown and the time needed to recover while the load stays on. A positive annual total alone does not establish uninterrupted operation.

[PVWatts](https://pvwatts.nlr.gov/) can help investigate the local solar resource. It models grid-connected PV; its output is not an off-grid battery-autonomy prediction. Battery storage, cutoff, and hourly load still need separate treatment.

## Why MPPT?

Maximum power point tracking adjusts the panel's operating point to harvest available power as conditions change. Victron lists **98% peak controller efficiency**. This is a manufacturer peak specification—not a measured 98% efficiency for the complete station, and not the fraction of sunlight converted into electricity. [Controller specifications](https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/technical-specifications.html)

## Scaling the architecture

The architecture is adaptable; the current parts are not unlimited. These examples explain the direction of change and have **not been validated as complete builds**.

| Concept | Nominal storage | What changes | What needs checking |
|:---|---:|:---|:---|
| Reference: 200 W panel + 50 Ah battery | 640 Wh | Current prototype configuration | Published reference limits and test evidence |
| More reserve: 200 W + 100 Ah at 12.8 V | 1,280 Wh | About twice the nominal storage; same solar harvest | Battery compatibility, charging limits, enclosure fit, weight, wiring and protection; recovery from empty takes longer |
| More harvest and reserve: 400 W + 100 Ah at 12.8 V | 1,280 Wh | About twice the rated array and storage | Larger suitable controller, array connection design, battery acceptance, wiring, protection, heat, and a mount for the added area and weight |

The **75/15** supports 15 A maximum battery charge current and 220 W nominal PV power on a 12 V system, with a 75 V maximum PV open-circuit voltage and 15 A PV short-circuit-current limit. More connected panel wattage can be clipped; it does not remove those electrical limits. Use a suitably sized controller when designing to capture a 400 W array's output. [Victron limits and oversizing notes](https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/technical-specifications.html)

For example, the current [HQST panel listing](https://hqsolarpower.com/products/hqst-200w-16bb-n-type-high-efficiency-monocrystalline-solar-panel) specifies 11.04 A short-circuit current. Two in parallel would be about 22.08 A before tolerance, above the 75/15's 15 A limit. A series arrangement has different voltage constraints, including cold-weather voltage. Neither arrangement is an approved upgrade here.

A 100 Ah battery at 12.8 V stores **1.28 kWh**, a measure of energy. It does not by itself turn this into a 1,000 W output system. The USB module, connections, wiring, protection, and thermal design still determine supported load power.

[Explore the sizing calculator →]({{ '/docs/sizing/' | relative_url }}) · [Build the reference station →]({{ '/docs/build/' | relative_url }})
