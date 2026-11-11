---
title: System design
nav_order: 2
permalink: /docs/system-design/
---
<div class="eyebrow">01 / Understand</div>
# Useful power, sustained by solar

The design starts with a simple aim: keep useful equipment running where a permanent power connection is impractical. Networks, monitoring, lighting, and automation need an energy supply that fits the job. Solar harvest covers daily use and restores the battery; stored energy carries the load when sunlight cannot.

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

For an **illustrative 3 peak-sun-hour day** with **75% overall delivery**:

<div class="equation">200 W × 3 h × 0.75 = <strong>450 Wh per day</strong><br><small>450 Wh harvested − 360 Wh used = 90 Wh of daily energy margin</small></div>

The 75% factor is a planning assumption, not a measured station efficiency. It represents combined effects such as panel temperature, wiring, conversion, storage, and other losses. At this assumption, daily break-even is **2.4 peak-sun hours**. Additional margin is needed to recover after cloudy days.

| Illustrative solar resource | Energy available at 75% delivery | Balance against a 15 W continuous load |
|:---|---:|---:|
| 1 peak-sun hour/day | 150 Wh/day | 210 Wh/day deficit |
| 2 peak-sun hours/day | 300 Wh/day | 60 Wh/day deficit |
| 3 peak-sun hours/day | 450 Wh/day | 90 Wh/day margin |
| 4.5 peak-sun hours/day | 675 Wh/day | 315 Wh/day margin |
| 5 peak-sun hours/day | 750 Wh/day | 390 Wh/day margin |

These are scenarios, not measured California weather. A positive daily balance indicates replenishment potential; a full battery, charge taper, hourly timing, and other limits can reduce how much surplus is stored.

## What the battery contributes

Nominal stored energy is **12.8 V × 50 Ah = 640 Wh**. Dividing by 15 W gives **42.7 hours before losses or discharge limits**. We found roughly **40 hours under a 16 W continuous test load**. The original readings and measurement conditions will accompany the published test record. [Our runtime test →]({{ '/docs/testing/#storage-and-runtime' | relative_url }})

Reserve and recharge work together. A larger battery buys more time during a deficit, but cannot make up for a panel that consistently harvests less than the load consumes. A larger panel can restore reserve faster, provided the controller and battery can accept the power.

## San Luis Obispo winter and storm reserve

The reference system has a **15 W+ continuous design target**. The calculations below evaluate a **15 W draw in San Luis Obispo**, including reserve for nighttime and low-sun periods. A well-positioned panel has useful winter generation; the question is how much energy arrives during a particular sequence of days.

As a first regional estimate, historical **NREL 1961–1990 data for nearby Santa Maria** gives about **4.5 peak-sun hours/day in December** and **4.6 in January** for a south-facing surface tilted at the local latitude, about 35°. At a steeper 50° tilt, both months average about 4.9 hours/day. These are monthly averages, including cloudy days, from a nearby station—not a new simulation of our installation. [NREL solar-resource tables, Santa Maria](https://pages.mtu.edu/~jstallen/courses/MEEM4200/lectures/solar/NREL_TP-463-5607_1994.pdf)

Using December's 4.5-hour value and our **assumed 75% overall delivery** gives:

<div class="equation">200 W × 4.5 h × 0.75 = <strong>675 Wh/day</strong><br><small>675 Wh available − 360 Wh used = 315 Wh/day of average recovery potential</small></div>

This is the energy basis for the homepage's continuous-power explanation. Actual harvest changes with shading, orientation, panel temperature, conversion losses, battery acceptance, and weather. Our 3-hour calculator default is an adjustable scenario, not the local winter average.

### What happens during a storm?

Reserve bridges a shortfall; sunlight during a storm can reduce that shortfall. For a transparent planning example, use **512 Wh of load-deliverable reserve**, or 80% of nominal battery energy, starting from a fully charged battery:

| Illustrative conditions, not measured storm data | Harvest at 75% delivery | Daily shortfall at 15 W | Approximate time to use 512 Wh reserve |
|:---|---:|---:|---:|
| No useful solar | 0 Wh/day | 360 Wh/day | 1.4 days / 34 hours |
| 1 peak-sun hour each day | 150 Wh/day | 210 Wh/day | 2.4 days |
| 2 peak-sun hours each day | 300 Wh/day | 60 Wh/day | 8.5 days |

The last column is simple energy arithmetic, not an hourly autonomy simulation. It assumes those conditions repeat, the reserve starts full, and the load remains at 15 W. A deeper starting discharge or lower harvest shortens endurance. The separate roughly 40-hour test at 16 W is an observed result under its own conditions, rather than this conservative allowance.

After using the full 512 Wh planning reserve, the 315 Wh/day winter-average surplus would take about **1.6 days to replace it in an idealized energy balance**, while the 15 W load keeps running. Actual recovery also depends on charge timing and limits. This explains how the design can bridge low-sun weather, and why no finite battery can promise operation through storms of any duration.

For a specific site, use recent hourly weather and record the actual panel orientation, shade, load, and charging history. Check both the lowest state of charge through consecutive dark days and recovery afterward. [Outdoor verification method →]({{ '/docs/testing/#solar-generation-and-california-conditions' | relative_url }})

[PVWatts](https://pvwatts.nlr.gov/) can help investigate the local solar resource. It models grid-connected PV; its output is not an off-grid battery-autonomy prediction. Battery storage, cutoff, and hourly load still need separate treatment.

## Continuous energy and short bursts

The system has a **15 W+ continuous power design target**, and we have demonstrated **100 W+ intermittent loads in pump testing**. These describe different operating patterns: a load that runs around the clock sets the daily energy requirement, while a brief task can use much higher power. [Pump-test record →]({{ '/docs/testing/#output-power' | relative_url }})

For example, a **100 W task running for 10 minutes uses 16.7 Wh**. Add an 8 W background load running all day and the total is **208.7 Wh/day**. The output path must support **108 W simultaneously**, plus startup demand. This is a scheduling example, separate from the measured pump test.

Match the converter, load path, wiring, protection, and battery to the combined running and starting current. A pump or motor can draw much more current at startup or stall. The pump test's interface, duration, and current trace are needed to transfer that result to another build; 100 W+ is the reported intermittent result, not a measured upper limit.

## Applications and output options

USB-C is the reference interface. The same solar-and-storage architecture can be developed with regulated DC or a suitable PoE supply for other equipment. Match the voltage, polarity, power profile, protection, and weather sealing to the chosen device. These are application concepts to evaluate; they have not all been tested on our station.

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

The component landscape supports these uses. For example, Ubiquiti specifies **4 W maximum** for the [G5 Turret Ultra camera](https://techspecs.ui.com/unifi/wifi/uvc-g5-turret-ultra); a compatible PoE supply and recording/network infrastructure are still needed. Hunter documents how a [DC latching irrigation solenoid uses a short pulse](https://www.hunterirrigation.com/support/node-using-dc-latching-solenoids-battery-controllers), making intermittent valve control an attractive energy pattern. Neither example is a tested plug-in accessory for our USB-C output.

### Satellite internet and local AI

**Satellite internet:** Starlink Mini is a plausible higher-load application with a suitable supply. Its product sheet lists **25–40 W average**, **12–48 V DC / 60 W input**, and a **100 W USB-PD source supporting 20 V / 5 A** for the Starlink USB-C-to-barrel cable. The supply rating is different from typical consumption. [Starlink Mini specifications](https://starlink.com/public-files/specification_sheet_mini.pdf)

At an assumed 30 W average, an eight-hour session uses **240 Wh**, while continuous operation uses **720 Wh/day**. The latter exceeds the 675 Wh winter-average example above, so planned operating hours or a larger array become important. Startup, the actual DC conversion path, and any other connected loads still need validation.

**Local AI:** Compact hardware can run image recognition and small language models without sending every observation to the cloud. Raspberry Pi documents local vision inference on its AI HATs and LLM/VLM support on **AI HAT+ 2**, with 8 GB of dedicated memory and models up to approximately six billion parameters. That supports applications such as detecting objects near a gate or processing camera observations on site. [Raspberry Pi AI hardware documentation](https://www.raspberrypi.com/documentation/accessories/ai-hat-plus.html)

This establishes that the computing use case exists; it does not establish a 15 W rating for the complete computer. Measure the board, accelerator, camera, storage, cooling, and radio together under the intended model and duty cycle. Provide the board's required voltage/current profile—Raspberry Pi 5 specifies a **5 V / 5 A USB-C supply**—and size reserve from actual average consumption. The supply's maximum rating and an accelerator chip's power figure are not whole-system energy measurements. [Raspberry Pi 5 product brief](https://pip-assets.raspberrypi.com/categories/892-raspberry-pi-5/documents/RP-008348-DS-10-raspberry-pi-5-product-brief.pdf)

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
