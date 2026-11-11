---
title: System design
nav_order: 2
permalink: /docs/system-design/
---
<span id="useful-power-sustained-by-solar"></span>
# System design

The system combines solar generation, battery storage, charge control, and an output matched to the equipment. Solar input supplies the load and recharges the battery; stored energy carries the load when sunlight falls short.

<figure class="documentation-photo" aria-label="Photo placeholder: inside the completed enclosure"><div><span class="photo-placeholder-mark" aria-hidden="true">+</span><strong>Inside the enclosure</strong><span>Photo pending · battery, controller, output module, and wiring</span></div><figcaption>An open-door view of the completed unit will show how the main components fit together.</figcaption></figure>

## The reference configuration

| Subsystem | Current reference | Purpose |
|:---|:---|:---|
| Generation | One nominal 200 W solar panel | Collect energy while sunlight is available |
| Charge control | Victron SmartSolar MPPT 75/15 | Manage solar charging and provide a protected load path |
| Storage | 12.8 V, 50 Ah LiFePO4 battery | Store a nominal 640 Wh |
| Output | Regulated USB-C module | Supply a compatible device; 15 W+ continuous design target. Separate pump testing has demonstrated 100 W+ intermittent loads. |
| Physical installation | Aluminum panel support and equipment enclosure on an existing 4–6 inch pole | Support, protect, and provide access to the components |

<div class="power-path"><span>Solar panel</span><b aria-hidden="true">→</b><span>MPPT controller<br><small>↕ Battery storage</small></span><b aria-hidden="true">→</b><span>USB-C module</span><b aria-hidden="true">→</b><span>Your device</span></div>

The controller manages the solar input. Its load output feeds the USB module, which provides the device's required voltage profile. The battery shares the DC system: it charges when energy is available and supplies energy when solar input falls short. This is a functional diagram, not a wiring schematic.

## The daily energy balance

**Power is a rate. Energy is what accumulates over time.** A 15 W continuous load consumes:

<div class="equation">15 W × 24 h = <strong>360 Wh per day</strong></div>

The panel does not supply 200 W all day. A useful first estimate multiplies panel rating by *equivalent peak-sun hours* and a delivery factor for real-world losses. Peak-sun hours describe the day's total sunlight as equivalent hours at full reference intensity; they are not simply daylight hours.

For winter planning near **San Luis Obispo**, use **4.5 peak-sun hours per day** as a regional December average. Historical NREL data for nearby Santa Maria gives 4.5 in December and 4.6 in January for a south-facing panel tilted about 35°. These are monthly averages that include cloudy days. [NREL solar-resource tables, Santa Maria](https://pages.mtu.edu/~jstallen/courses/MEEM4200/lectures/solar/NREL_TP-463-5607_1994.pdf)

With a **75% conservative planning allowance** for overall delivery:

<div class="equation">200 W × 4.5 h × 0.75 = <strong>675 Wh per day</strong><br><small>675 Wh harvested − 360 Wh used = 315 Wh of daily energy margin</small></div>

We measured **97% electrical input-to-output efficiency through the Victron controller** in live testing. The 75% allowance covers a wider path: panel output below its nameplate rating, wiring, controller conversion, battery storage, and output conversion. It is deliberately conservative and is not a measured 25% loss in our station. The 97% is already within that overall allowance; do not multiply the two factors together. At 75% delivery, a 15 W continuous load breaks even at **2.4 peak-sun hours per day**.

| Illustrative solar resource | Energy available at 75% delivery | Balance against a 15 W continuous load |
|:---|---:|---:|
| 1 peak-sun hour/day | 150 Wh/day | 210 Wh/day deficit |
| 2 peak-sun hours/day | 300 Wh/day | 60 Wh/day deficit |
| 3 peak-sun hours/day | 450 Wh/day | 90 Wh/day margin |
| 4.5 peak-sun hours/day | 675 Wh/day | 315 Wh/day margin |
| 5 peak-sun hours/day | 750 Wh/day | 390 Wh/day margin |

These are energy scenarios. Understanding your local conditions and expected peak-sun hours gives you an idea of the sustained performance you can get, and how much surplus is available to recharge after low-sun periods.

## What the battery contributes

Nominal stored energy is **12.8 V × 50 Ah = 640 Wh**. Dividing by 15 W gives **42.7 hours before losses or discharge limits**. We found roughly **40 hours under a 16 W continuous test load with no solar input**. [Our runtime test →]({{ '/docs/testing/#storage-and-runtime' | relative_url }})

<aside class="design-note"><p><strong>Reserve and recharge work together.</strong> A larger battery buys more time during a deficit, but cannot make up for a panel that consistently harvests less than the load consumes. A larger panel can restore reserve faster, provided the controller and battery can accept the power.</p><p>The 50 Ah battery and 200 W panel are our balance of reserve, recharge, and component cost for the intended loads. <a href="#scaling-the-architecture">Compare the smaller and larger configurations →</a></p></aside>

<span id="san-luis-obispo-winter-and-storm-reserve"></span>
## What happens during a storm?

**Solar input and battery reserve make the system resilient through changing weather.** Clouds and rain reduce generation, but useful solar input can still extend runtime. Sustained dark weather can eventually exhaust the reserve.

As a regional rainy-day reference, our analysis of **NASA POWER data near San Luis Obispo for 2016–2025** found about **1.5 peak-sun hours per day** across 76 December–February days with at least 10 mm of rain. That is sunlight on a horizontal surface, not a prediction for our tilted panel or every storm. [Data and calculation method →]({{ '/docs/testing/#winter-weather-reference' | relative_url }})

Using the full **640 Wh nominal battery reserve** and a **15 W continuous load**:

| Sunlight scenario | Harvest at 75% delivery | Daily shortfall at 15 W | Time to use 640 Wh nominal reserve |
|:---|---:|---:|---:|
| No useful solar | 0 Wh/day | 360 Wh/day | 1.8 days / 42.7 hours |
| 1 peak-sun hour each day | 150 Wh/day | 210 Wh/day | 3.0 days |
| 1.5 peak-sun hours each day | 225 Wh/day | 135 Wh/day | 4.7 days |
| 2 peak-sun hours each day | 300 Wh/day | 60 Wh/day | 10.7 days |

These are idealized full-capacity calculations with a full battery at the start and the same sunlight each day. Battery cutoff, conversion losses, and changing weather can shorten runtime. The table shows why even reduced solar input makes a large difference to reserve.

Use local weather data and the length of low-sun periods to judge whether your chosen panel and battery provide the reliability your site needs.

## Continuous energy and short bursts

The system has a **15 W+ continuous power design target**, and we have demonstrated **100 W+ intermittent loads in pump testing**. These describe different operating patterns: a load that runs around the clock sets the daily energy requirement, while a brief task can use much higher power. [Pump-test record →]({{ '/docs/testing/#output-power' | relative_url }})

For example, a **100 W task running for 10 minutes uses 16.7 Wh**. Add an 8 W background load running all day and the total is **208.7 Wh/day**. The output path must support **108 W simultaneously**, plus startup demand. This is a scheduling example, separate from the measured pump test.

<aside class="design-note"><p><strong>A 15 W continuous target supports much more than a 15 W device.</strong> Many useful devices draw higher power only while charging, moving, pumping, or processing, then spend the rest of their time at a much lower load. Their operating schedule can make them a good fit for this system.</p></aside>

Match the converter, load path, wiring, protection, and battery to the combined running and starting current. A pump or motor can draw much more current at startup or stall. The 100 W+ result describes the intermittent pump operation demonstrated in testing, not a measured upper limit for every possible output configuration.

## Applications and output options

The MPPT controller provides DC output through screw terminals that can be wired to the output hardware your equipment needs. We wired the reference build to a **USB-C module for its versatility**. In testing, we also used an **inverter to supply 120 V AC**. Regulated DC and PoE are other ways to adapt the same solar-and-storage architecture.

Match the output voltage, power profile, wiring, and protection to the connected equipment. An inverter needs a properly rated and protected supply path, including its starting current and idle consumption; do not assume every inverter can connect directly to the controller's load terminals.

<figure class="documentation-photo" aria-label="Photo placeholder: Victron MPPT controller and connections"><div><span class="photo-placeholder-mark" aria-hidden="true">+</span><strong>MPPT connections close-up</strong><span>Photo pending · solar, battery, load terminals, and USB-C module</span></div><figcaption>A close-up will show the controller connections and the reference output path.</figcaption></figure>

| Application | A useful project | What to include in the design |
|:---|:---|:---|
| Property-wide networking | Several independently powered mesh nodes or wireless bridges linking a large property, farm, or remote worksite | Each node's radio and attached loads; antenna placement, terrain, coverage, and the correct DC or PoE interface. A mesh still needs an internet uplink if internet access is required. |
| Camera and wildlife monitoring | Crop observation, a remote entrance, equipment security, or a wildlife/timelapse camera | Night illumination, recording and network equipment, and their combined consumption. The camera's rating alone is not the whole installation's load. |
| Weather, soil, and water sensing | A weather station, soil-moisture gateway, tank-level reporting, or an early leak/flood alert | Sensor and radio demand, transmission frequency, enclosures, and the response needed if connectivity or power is lost. |
| Irrigation and access control | Motorized valves, irrigation control, or a gate-controller trigger | Valve voltage and driver, relay isolation, startup current, and an appropriate default state after a fault. Powering a control signal is different from powering the motor. |
| Sump pumping | Intermittent sump-pump operation or water transfer | Pump voltage, measured running and startup/stall current, duty cycle, and converter/switch ratings. Our reported pump tests reached 100 W+; select the output path for the actual pump. |
| Drone charging | A field charging station for a drone's flight batteries | Charger input profile, energy per charge, number of charges per day, and other simultaneous loads. A charging station does not imply an autonomous landing or battery-handling system. |
| Field computing and communications | Satellite internet, on-site image recognition, or a local AI model | The complete equipment load, its operating schedule, and the appropriate DC or USB power profile; see the examples below. |
| Remote lighting | LED lighting at a shed, campsite, or work area | Night length and duty cycle. An illustrative 10 W light used for six hours consumes 60 Wh; include sensor/controller use too. |

In our demonstration, we ran **Wi-Fi HaLow networking units, a camera, and a pump at the same time**. This combines ongoing communication and monitoring with an intermittent higher-power task. [Pump and multi-device demonstration →]({{ '/docs/testing/#output-power' | relative_url }})

<figure class="documentation-photo documentation-photo-compact" aria-label="Photo placeholder: networking, camera, and pump demonstration"><div><span class="photo-placeholder-mark" aria-hidden="true">+</span><strong>Networking, camera, and pump in use</strong><span>Photo pending · the connected demonstration setup</span></div></figure>

### Satellite internet and local AI

**Satellite internet:** Starlink Mini is a plausible higher-load application with a suitable supply. Its product sheet lists **25–40 W average**, **12–48 V DC / 60 W input**, and a **100 W USB-PD source supporting 20 V / 5 A** for the Starlink USB-C-to-barrel cable. The supply rating is different from typical consumption. [Starlink Mini specifications](https://starlink.com/public-files/specification_sheet_mini.pdf)

At an assumed **30 W average**, an eight-hour session uses **240 Wh**, while continuous operation uses **720 Wh/day**. The latter exceeds the 675 Wh winter example above, so planned operating hours or a larger array become important. Longer sunny days and sunnier climates improve the energy balance. As terminal power demand falls, satellite internet also becomes a more attractive fit for a system of this size.

**Local AI:** A small computer can run an AI model intermittently to process camera images, identify events, and send useful results back over the network. Pairing local processing with a camera and radio can reduce how much data needs to leave the site. Choose the computer, model, and operating schedule so the average demand fits the energy budget; a higher-power processing burst can still work when the idle load is low. Include the camera and networking equipment in that total.

<span id="why-mppt"></span>
## Why Victron MPPT?

We measured **97% efficiency from electrical input to output through the Victron controller** in live testing. Maximum power point tracking adjusts the panel's operating point to collect available power as sunlight changes.

We chose Victron for its monitoring tools, documentation, and our confidence in the brand. Built-in Bluetooth connects the SmartSolar controller to **VictronConnect**, where we can inspect solar input, battery voltage and charging, load current, and operating history. That visibility makes setup and troubleshooting easier. [Victron monitoring features](https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/monitoring.html)

## Scaling the architecture

The architecture is adaptable. These examples explain the direction of change and have **not been validated as complete builds**.

<table class="configuration-table"><thead><tr><th scope="col">Configuration</th><th scope="col">Nominal storage</th><th scope="col">What changes</th><th scope="col">Why choose it?</th></tr></thead><tbody>
<tr class="reference-configuration"><th scope="row">Reference: 200 W + 50 Ah</th><td>640 Wh</td><td>Our current build</td><td>Our sweet spot for the listed uses: useful power, reserve, and a practical component cost.</td></tr>
<tr><th scope="row">Smaller: 100 W + 25 Ah</th><td>320 Wh</td><td>Smaller, potentially cheaper, and easier to handle and install.</td><td>Lighter loads or fewer operating hours, with less solar generation and reserve.</td></tr>
<tr><th scope="row">More reserve: 200 W + 100 Ah</th><td>1,280 Wh</td><td>About twice the storage; the same solar input.</td><td>Better resilience, with greater cost and potentially a larger enclosure.</td></tr>
<tr><th scope="row">More power and reserve: 400 W + 100 Ah</th><td>1,280 Wh</td><td>About twice the solar capacity and storage.</td><td>Larger sustained loads and, with upgraded output components, larger peak loads.</td></tr>
</tbody></table>

All battery capacities above assume 12.8 V. Adding a larger battery to a 200 W panel increases resilience, but further increases are likely to bring diminishing reliability improvements at greater cost: the same panel still has to replenish the reserve.

A 400 W system can support substantially larger loads, but needs upgraded components and a more costly design beyond the scope of this reference build. Increasing panel or battery size alone does not raise the output hardware's power rating.

The general architecture stays the same as you scale. Make sure the panel, controller, battery, output, wiring, protection, and mount are rated for the system you build. Use local peak-sun hours, your equipment's energy needs, and the reliability you want to guide its size.

[Build your system →]({{ '/docs/build/' | relative_url }})
