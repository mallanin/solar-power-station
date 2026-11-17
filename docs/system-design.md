---
title: System design
nav_order: 2
permalink: /docs/system-design/
---
<span id="useful-power-sustained-by-solar"></span>
# System design

The system combines solar generation, battery storage, charge control, and an output matched to the equipment. Solar input supplies the load and recharges the battery; stored energy carries the load when sunlight falls short.

<figure class="design-diagram">
<a href="{{ '/assets/images/system-wiring.svg' | relative_url }}" aria-label="Open the system wiring schematic at full size"><img src="{{ '/assets/images/system-wiring.svg' | relative_url }}" alt="Six separate leads connect the controller: BATT positive through a fuse to battery positive, BATT negative to battery negative, PV negative and positive to the corresponding solar connectors, and LOAD negative and fused positive to the USB-C converter inputs." width="1400" height="850"></a>
<figcaption>Reference connections. <a href="{{ '/assets/images/system-wiring.svg' | relative_url }}">Open full-size schematic →</a></figcaption>
</figure>

## The reference configuration

| Subsystem | Current reference | Purpose |
|:---|:---|:---|
| Generation | One nominal 200 W solar panel | Collect energy while sunlight is available |
| Charge control | Victron SmartSolar MPPT 75/15 | Manage solar charging and provide a protected load path |
| Storage | 12.8 V, 50 Ah LiFePO4 battery | Store a nominal 640 Wh |
| Output | Regulated USB-C module | Supply a compatible device; 15 W+ continuous design target. Separate pump testing has demonstrated 100 W+ intermittent loads. |
| Physical installation | Aluminum panel support and equipment enclosure on an existing 4–6 inch pole | Support, protect, and provide access to the components |

<span id="the-daily-energy-balance"></span>
## Balancing cost and performance

A power system should deliver the required output reliably at the lowest practical cost. Here's why we chose a 200 W panel and 640 Wh of battery storage.

<div class="equation"><span class="equation-label">Required daily energy output</span>15 W × 24 h = <strong>360 Wh per day</strong></div>

For winter planning in climates like the **Central Coast of California**, we use **4.5 peak-sun hours per day** as a regional December reference. Historical NREL data for nearby Santa Maria gives 4.5 in December and 4.6 in January for a south-facing panel tilted about 35°. These are monthly averages that include cloudy days. [NREL solar-resource tables](https://pages.mtu.edu/~jstallen/courses/MEEM4200/lectures/solar/NREL_TP-463-5607_1994.pdf)

<div class="equation"><span class="equation-label">Expected daily winter energy supply · ideal reference</span>200 W × 4.5 h = <strong>900 Wh per day</strong><br><small>900 Wh generated − 360 Wh used = 540 Wh of daily energy margin, before losses</small></div>

We measured **97% electrical input-to-output efficiency through the Victron controller** in live testing. The calculation above is idealized and excludes wiring, battery storage, and output-conversion losses, so treat it as a reference point. The controller lost about 3% in that test; total system losses have not been measured.

| Sunlight available | Energy available under ideal conditions | Balance against a 15 W continuous load |
|:---|---:|---:|
| 1 peak-sun hour/day | 200 Wh/day | 160 Wh/day deficit |
| 2 peak-sun hours/day | 400 Wh/day | 40 Wh/day margin |
| 3 peak-sun hours/day | 600 Wh/day | 240 Wh/day margin |
| 4.5 peak-sun hours/day | 900 Wh/day | 540 Wh/day margin |
| 5 peak-sun hours/day | 1,000 Wh/day | 640 Wh/day margin |

## What the battery contributes

Nominal stored energy is **12.8 V × 50 Ah = 640 Wh**. Dividing by 15 W gives **42.7 hours before losses or discharge limits**. We found roughly **40 hours under a 16 W continuous test load with no solar input**. [Our runtime test →]({{ '/docs/testing/#storage-and-runtime' | relative_url }})

<aside class="design-note"><p><strong>Reserve and recharge work together.</strong> A larger battery buys more time during a deficit, but cannot make up for a panel that consistently harvests less than the load consumes. A larger panel can restore reserve faster, provided the controller and battery can accept the power.</p><p>The 50 Ah battery and 200 W panel are our balance of reserve, recharge, and component cost for the intended loads. <a href="#scaling-the-architecture">Compare the smaller and larger configurations →</a></p></aside>

<span id="san-luis-obispo-winter-and-storm-reserve"></span>
## What happens during a storm?

Clouds and rain reduce generation, but useful solar input can still extend runtime. Sustained dark weather can eventually exhaust the reserve.

As a regional rainy-day reference, our analysis of NASA POWER data near San Luis Obispo for 2016–2025 found about <strong class="solar-reference">1.5 peak-sun hours per day</strong> across 76 December–February days with at least 10 mm of rain. This is sunlight on a horizontal surface; individual storms and a tilted panel will differ.

Using a full **640 Wh nominal battery** and a **15 W continuous load**, before losses or battery cutoff:

| Sunlight each day | Ideal solar energy | Daily energy balance | Calculated reserve duration |
|:---|---:|---:|---:|
| No useful solar | 0 Wh/day | 360 Wh deficit | 1.8 days / 42.7 hours |
| 1 peak-sun hour | 200 Wh/day | 160 Wh deficit | 4.0 days |
| 1.5 peak-sun hours | 300 Wh/day | 60 Wh deficit | 10.7 days |
| 2 peak-sun hours | 400 Wh/day | 40 Wh surplus | No daily depletion in this ideal model |

At the 1.5-hour storm reference, the calculation gives **up to 10.7 days from a full battery before losses**. Actual runtime will be shorter with conversion losses and battery cutoff. Brighter breaks between storms can recharge the battery and restore reserve.

<aside class="design-note resilience-note"><p><strong>The aim is continuous operation through typical winter storms, without paying for an oversized system.</strong> Solar recharging and battery reserve work together to cover low-sun periods; local weather and the connected load determine the result.</p></aside>

Use local weather data and the length of low-sun periods to judge whether your chosen panel and battery provide the reliability your site needs.

## Continuous energy and short bursts

We have demonstrated **100 W+ intermittent loads in pump testing**. Repeated high-power bursts can fit the energy budget when usage between them is low. This is useful for pumps and other motors with high startup demand, provided the output hardware can supply that starting current. [Pump-test record →]({{ '/docs/testing/#output-power' | relative_url }})

For example, a **100 W task running for 10 minutes uses 16.7 Wh**. Add an 8 W background load running all day and the total is **208.7 Wh/day**. The output path must support **108 W simultaneously**, plus startup demand. This is a scheduling example, separate from the measured pump test.

<aside class="design-note"><p><strong>A 15 W continuous target supports much more than a 15 W device.</strong> Many useful devices draw higher power only while charging, moving, pumping, or processing, then spend the rest of their time at a much lower load. Their operating schedule can make them a good fit for this system.</p></aside>

The 100 W+ result is a demonstrated operating point, not a measured maximum output rating.

## Applications and output options

The MPPT controller provides DC output through screw terminals that can be wired to the output hardware your equipment needs. We wired the reference build to a **USB-C module for its versatility**. In testing, we also used an **inverter to supply 120 V AC**. Regulated DC and PoE are other ways to adapt the same solar-and-storage architecture.

<details class="application-details" markdown="1">
<summary>Use cases: cameras, sensors, pumps, lighting, and charging</summary>

- **Monitoring:** cameras, weather stations, soil sensors, and tank-level reporting. Include the radio and any night lighting in the energy budget.
- **Automation:** irrigation valves, sump pumps, and gate controls. Size the output for startup current as well as normal running power.
- **Lighting:** a 10 W light used for six hours needs 60 Wh, plus any controller or sensor use.
- **Drone charging:** plan around energy per charge and the number of charges each day.

</details>

<span id="satellite-internet-and-local-ai"></span>
<details class="application-details" markdown="1">
<summary>Satellite internet and local AI</summary>

**Satellite internet:** Starlink Mini lists **25–40 W average consumption**, **12–48 V DC / 60 W input**, and a **100 W USB-PD source at 20 V / 5 A** for its USB-C-to-barrel cable. [Starlink Mini specifications](https://starlink.com/public-files/specification_sheet_mini.pdf)

At a 30 W average, eight hours uses **240 Wh**; continuous use needs **720 Wh/day**. That fits below the 900 Wh ideal winter reference, but leaves only 180 Wh before losses and other loads. Operating hours and storm reserve still matter.

**Local AI:** a small computer can process camera images or run a local model, then send results over the network. Include the computer, camera, and radio in the energy budget. Short processing bursts can work well when idle demand is low.

</details>

## Featured use case: networking across a property

In our demonstration, we used **Wi-Fi HaLow networking units to remotely actuate a pump**, alongside a camera. This combines ongoing communication and monitoring with an intermittent high-power task.

The expo diagram shows the connections: commands travel to the Raspberry Pi and relay, while readings return to the input computer. Each station supplies its own electrical power.

<figure class="design-diagram expo-figure">
<div class="diagram-legend"><span class="power-legend">Electrical power</span><span class="signal-legend">Commands and readings</span></div>
{% include expo-network.svg %}
<figcaption>Our two-station expo layout. Arrows illustrate the paths; this is not a live control panel. <a href="{{ '/assets/images/expo-network.svg' | relative_url }}">Open full-size diagram →</a></figcaption>
</figure>

### Extending the network

Several boxes can power radios, cameras, and sensors across a farm or large property. Heltec advertises **up to about 1 km for the HT-HD01 link**, with longer links possible in clear line of sight. That is a manufacturer range claim, not a range we measured; trees, terrain, antenna height, and data rate affect it. [Heltec specifications](https://heltec.org/project/ht-hd01/)

The four-station example below uses a central HaLow access point and three remote stations. A true multi-hop mesh requires radios and firmware that support it. Internet access needs an uplink at the hub; ordinary phones use a local 2.4 GHz Wi-Fi access point, not HaLow directly.

<figure class="design-diagram property-network-figure">
<a href="{{ '/assets/images/property-network.svg' | relative_url }}" aria-label="Open the four-station property network diagram at full size"><img src="{{ '/assets/images/property-network.svg' | relative_url }}" alt="Bird's-eye example of four solar-powered radio stations at a farm hub, orchard, pump, and gate. Dashed links connect the three remote stations to the hub. Overlapping circles illustrate radio reach, not measured coverage." width="1300" height="900" loading="lazy"></a>
<figcaption>Four independently powered stations. Circles are illustrative reach zones, not surveyed coverage or a distance scale. <a href="{{ '/assets/images/property-network.svg' | relative_url }}">Open full-size diagram →</a></figcaption>
</figure>

For small sensor messages, networks such as **LoRaWAN** can reach multiple kilometres at much lower data rates. They serve a different job from a link carrying camera video or general internet traffic. [LoRaWAN capabilities and limits](https://www.thethingsnetwork.org/docs/lorawan/limitations/)

<span id="why-mppt"></span>
## Why Victron MPPT?

We chose Victron for its monitoring tools, documentation, efficiency, and established track record in off-grid power.

Built-in Bluetooth lets a nearby phone read solar input, battery voltage, charge state, load current, and history in **VictronConnect**. A nearby Raspberry Pi can also receive supported Instant Readout data for a local dashboard; HaLow carries that data across the property. [Monitoring features](https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/monitoring.html) · [Instant Readout](https://www.victronenergy.com/media/pg/VictronConnect_app/en/stored-trends---instant-readout.html)

<figure class="documentation-photo documentation-photo-compact" aria-label="Screenshot placeholder: VictronConnect monitoring"><div><span class="photo-placeholder-mark" aria-hidden="true">+</span><strong>VictronConnect</strong><span>Screenshot to add · solar input, battery, and load readings</span></div></figure>

## Solar panel frame

The panel can sit on a ground mount or a pole. Choose its direction and tilt for your location and winter needs; check a local solar-resource guide rather than using one angle everywhere. A pole keeps the panel out of working space and can lift it above nearby vegetation, splash, and accidental contact. [Panel orientation and tilt](https://www.energy.gov/cmei/systems/solar-photovoltaic-system-design-basics)

For pole mounting, the solar panel needs a support frame. We built both wood and aluminum versions.

<div class="frame-comparison">
<figure class="documentation-photo" aria-label="Photo placeholder: wood solar panel frame"><div><span class="photo-placeholder-mark" aria-hidden="true">+</span><strong>Wood frame</strong><span>Photo pending</span></div><figcaption>The wood design is affordable and simple to manufacture. It is heavier, less elegant, and likely to have a shorter service life outdoors.</figcaption></figure>
<figure class="documentation-photo" aria-label="Photo placeholder: aluminum solar panel frame"><div><span class="photo-placeholder-mark" aria-hidden="true">+</span><strong>Aluminum frame</strong><span>Photo pending</span></div><figcaption>The aluminum design is lighter, more elegant, and likely to last longer outdoors, but takes more assembly.</figcaption></figure>
</div>

## Scaling the architecture

The architecture is adaptable. These examples explain the direction of change and have **not been validated as complete builds**.

<table class="configuration-table"><thead><tr><th scope="col">Configuration</th><th scope="col">Nominal storage</th><th scope="col">What changes</th><th scope="col">Why choose it?</th></tr></thead><tbody>
<tr><th scope="row">Smaller: 100 W + 25 Ah</th><td>320 Wh</td><td>Smaller, potentially cheaper, and easier to handle and install.</td><td>Lighter loads or fewer operating hours, with less solar generation and reserve.</td></tr>
<tr class="reference-configuration"><th scope="row">Reference: 200 W + 50 Ah</th><td>640 Wh</td><td>Our current build</td><td>Our sweet spot for the listed uses: useful power, reserve, and a practical component cost.</td></tr>
<tr><th scope="row">More reserve: 200 W + 100 Ah</th><td>1,280 Wh</td><td>About twice the storage; the same solar input.</td><td>Better resilience, with greater cost and potentially a larger enclosure.</td></tr>
<tr><th scope="row">More power and reserve: 400 W + 100 Ah</th><td>1,280 Wh</td><td>About twice the solar capacity and storage.</td><td>Larger sustained loads and, with upgraded output components, larger peak loads.</td></tr>
</tbody></table>

All battery capacities above assume 12.8 V. Adding a larger battery to a 200 W panel increases resilience, but further increases are likely to bring diminishing reliability improvements at greater cost: the same panel still has to replenish the reserve.

A 400 W system can support substantially larger loads, but needs upgraded components and a more costly design beyond the scope of this reference build. Increasing panel or battery size alone does not raise the output hardware's power rating.

The general architecture stays the same as you scale. Make sure the panel, controller, battery, output, wiring, protection, and mount are rated for the system you build. Use local peak-sun hours, your equipment's energy needs, and the reliability you want to guide its size.

[Build your system →]({{ '/docs/build/' | relative_url }})
