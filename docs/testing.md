---
title: Testing & results
nav_order: 6
permalink: /docs/testing/
---
<div class="eyebrow">Evidence from the reference build</div>
# Testing & results

The goal is to connect each performance statement to the configuration, method, and conditions behind it. This first pass separates the team's reported result, manufacturer specifications, and planning calculations.

## At a glance

| Item | Current statement | Evidence status |
|:---|:---|:---|
| Battery runtime under load | Approximately 40 hours, reported by the project team | Test conditions and original measurement record pending publication |
| Continuous device power | 15 W design target | Full output/thermal verification record pending publication |
| Battery energy | 640 Wh nominal: 12.8 V × 50 Ah | Nameplate calculation, not delivered energy |
| Solar generation | 200 W panel rating | Actual daily harvest varies by site, season and weather |
| Charge controller efficiency | 98% peak in manufacturer specifications | Component specification, not measured end-to-end efficiency |
| Outdoor autonomy | Sustained operation is the design goal | No reviewed multi-day California field record published here yet |

## Storage and runtime

The team reports about 40 hours of battery-only operation under its test load. A no-solar endurance test is useful because it isolates the stored-energy reserve from the changing solar resource.

The project test procedure calls for a fully charged battery, a defined load on the controller's load output, no solar input, logging voltage/current and temperature, and ending at low-voltage disconnect. The intended test load is 15 W. The actual run still needs its exact load profile and measurement point documented before the reported duration can be treated as a 15 W USB-output rating.

**To complete the result:** publish the original instrument readings, test date, starting charge state, battery/controller settings, actual average power, ambient and battery temperature, end condition, and whether power was measured before or after the USB converter. A resistive load's power can change as voltage falls, so duration alone does not establish constant-power performance.

For context, the ideal nameplate calculation is **640 Wh ÷ 15 W = 42.7 hours** before conversion losses, self-consumption, temperature effects, or cutoff. It is a calculation, not a substitute for the test.

## Output power

The current owner guide uses a **15 W continuous design target**. A USB module's advertised maximum rating does not establish the assembled station's supported continuous power.

The completed record should identify the output voltage/profile, connected load, measured voltage and current at the device, duration, temperature rise, and protection behavior. Device compatibility also matters: USB-C connector shape alone does not guarantee a matching power profile.

## Solar generation and California conditions

Battery endurance answers “How long can storage carry the load?” Outdoor testing answers “Does solar restore the energy fast enough over time?” Both are needed.

For a California field result, record the location, dates, panel orientation and tilt, shading, actual load, solar energy collected each day, controller history, and any interruptions. Include low-sun periods and the recovery afterward. The current [energy-balance examples]({{ '/docs/system-design/#the-daily-energy-balance' | relative_url }}) show the method without claiming those scenarios are measured weather.

## Physical build

The mount, enclosure, cable entries, and internal assembly need their own evidence. Electrical endurance does not establish a wind rating or prove that the modified enclosure remains waterproof. The project has thermal, ingress-protection, and electrical bench-test procedures in Teams; completed results have not yet been incorporated into this public guide.

## Read each number in context

- **Design target:** what the system aims to deliver.
- **Team-reported result:** a result communicated by the project team, with the supporting record still to be published.
- **Manufacturer specification:** a limit or rating for an individual component.
- **Planning estimate:** a calculation with stated assumptions, useful for comparing scenarios.

Source for the controller's peak efficiency: [Victron SmartSolar specifications](https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/technical-specifications.html). Project inputs: the reviewed user manual, battery endurance procedure, and team update of November 10, 2026.
