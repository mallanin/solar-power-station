---
title: Testing & results
nav_order: 6
permalink: /docs/testing/
---
# Testing & results

Our testing covers battery-only endurance, controller efficiency, and equipment running from the system. The weather calculations below provide regional context for those results.

## At a glance

| Item | Result or design value | Basis |
|:---|:---|:---|
| Battery runtime under load | Roughly 40 hours at a 16 W continuous load, with no solar input | Battery endurance test |
| Continuous device power | 15 W+ design target | Reference design |
| Intermittent output | 100 W+ in pump testing | Live pump test |
| Combined equipment | Wi-Fi HaLow units, camera, and pump running together | Live system demonstration |
| AC output | Inverter used to supply 120 V AC | Tested output configuration |
| Victron controller efficiency | 97% electrical input-to-output efficiency | Live controller test |
| Battery energy | 640 Wh nominal: 12.8 V × 50 Ah | Nameplate calculation |
| Solar generation | 200 W panel rating | Component rating; daily energy depends on available sunlight |

## Storage and runtime

We achieved roughly **40 hours of battery-only operation under a 16 W continuous test load, with no solar input**. This test isolates the battery reserve from solar generation.

The electrical bench procedure uses a fully charged battery, a defined load, and no solar input, with the run ending at low-voltage disconnect. The procedure's initial target was 15 W; our reported test load was 16 W.

For context, **640 Wh ÷ 15 W = 42.7 hours** is the ideal nameplate calculation before losses or discharge limits. The approximately 40-hour test is the practical result. Multiplying its rounded duration and load should not be interpreted as an exact capacity or efficiency measurement.

<span id="output-power"></span>
## Pump and multi-device demonstration

We demonstrated **100 W+ intermittent pump loads**, and ran **Wi-Fi HaLow networking units, a camera, and a pump at the same time**. We also used an inverter to provide **120 V AC** during testing.

| Demonstration | Observed result | What it illustrates |
|:---|:---|:---|
| Pump operation | Intermittent demand above 100 W | Short tasks can draw substantially more than the continuous energy target |
| Networking, camera, and pump | Equipment operating together | Ongoing monitoring and communications can share the supply with an intermittent task |
| Inverter output | 120 V AC supplied during testing | The DC architecture can support another output type through suitable conversion hardware |

These results describe the tested arrangements. For another device or combination, match the output path to the voltage, simultaneous demand, and motor starting current, then account for operating time in the daily energy budget. They do not define a universal maximum output rating.

## Controller efficiency

We measured **97% electrical input-to-output efficiency through the Victron MPPT controller** in a live test. This describes the controller's conversion of incoming electrical power.

The design guide's **75% conservative planning allowance** accounts for a wider set of effects: actual panel output, wiring, controller conversion, battery storage, and the output stage. It is a planning choice, not a measured station loss, and already includes the controller stage.

## Solar generation and California conditions

Battery endurance answers how long storage carries a load. Solar input determines how quickly that reserve is restored. The [design guide]({{ '/docs/system-design/#the-daily-energy-balance' | relative_url }}) combines our battery result with local sunlight estimates to explain sustained operation. Weather estimates are not a field test of this station through every storm.

### Winter weather reference

We calculated a rainy-day reference from **NASA POWER daily data for 2016–2025**, requested at **35.28° N, 120.66° W**, near San Luis Obispo. This is regional gridded data, not a sensor at the prototype.

- Select December, January, and February: **903 days**.
- Define the rainy-day sample as precipitation of at least **10 mm/day**: **76 days**.
- Average the all-sky surface solar irradiation on those days: **1.502 kWh/m²/day**, equivalent to about **1.5 peak-sun hours on a horizontal surface**.
- The median is **1.421 peak-sun hours**, with individual days from **0.343 to 3.953**.

The rainfall threshold defines this analysis sample; it is not a universal definition of a storm. These are daily averages across a regional grid, and the result is not a minimum or an estimate of sunlight on our tilted panel. Consecutive low-sun days matter more for battery reserve than the average alone. The horizontal surface also differs from the tilted-panel December average used in the design calculation.

[Download the winter daily data (CSV)]({{ '/assets/downloads/slo-winter-solar-2016-2025.csv' | relative_url }}) · [NASA POWER daily data documentation](https://power.larc.nasa.gov/docs/services/api/temporal/daily/) · [Source data request](https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN,PRECTOTCORR&community=RE&longitude=-120.66&latitude=35.28&start=20160101&end=20251231&format=JSON)

## Physical build

The mount, enclosure, cable entries, and internal assembly have their own verification requirements. Electrical endurance does not establish a wind rating or prove that a modified enclosure retains its original ingress rating. The project includes thermal, ingress-protection, and electrical bench-test procedures in Teams.

## Read each number in context

- **Live test result:** what we observed in the tested arrangement.
- **Design target:** the intended operating capability.
- **Nameplate value:** the component's nominal rating.
- **Planning calculation:** an estimate using stated assumptions and weather data.
