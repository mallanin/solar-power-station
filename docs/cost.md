---
title: Parts & cost
nav_order: 4
permalink: /docs/cost/
---
<div class="eyebrow">The parts budget</div>
# What does it cost to build?

Our cost goal is a complete retail component bill **under $500 including tax and shipping**, with the pole supplied separately. The goal includes the panel, battery, controller, enclosure, mounting materials, output, wiring, and protection. Tools, labor, and the powered equipment are separate.

**That target is not yet a verified delivered shopping list.** The current four major-component examples total **$388.58**. Adding explicit allowances for the rack, electrical accessories, and small hardware gives **$523.58–623.58 before tax and shipping**, rounded to **$525–625**. The homepage describes the lower figure as a cost goal for this reason.

This is a sourcing estimate checked **November 10, 2026**, not a checkout quote or a fully reconciled as-built bill of materials. The pricing examples match the main component categories; alternate parts still need compatibility checks before purchase.

## Major components: listed prices

| Item | Quantity | Example / source | Price |
|:---|---:|:---|---:|
| 200 W rigid solar panel | 1 | [HQST 200 W N-Type, single-panel sale price](https://hqsolarpower.com/products/hqst-200w-16bb-n-type-high-efficiency-monocrystalline-solar-panel) | $119.99 |
| 12 V-class, 50 Ah LiFePO4 battery | 1 | [VEVOR 50 Ah listing](https://www.vevor.com/s/lithium-deep-cycle-batteries) | $125.90 |
| SmartSolar MPPT 75/15 | 1 | [Common Ground Marine](https://commongroundmarine.com/products/victron-energy-scc075015060r-victron-smartsolar-mppt-75-15-solar-charge-controller) | $68.79 |
| Steel enclosure, 16 × 16 × 8 in | 1 | [VEVOR enclosure](https://www.vevor.com/electrical-enclosure-c_10749/vevor-16x16x8-carbon-steel-electrical-enclosure-wall-mount-junction-box-ip65-p_010557357451?adp=gmc) | $73.90 |
| **Major-component subtotal** | | | **$388.58** |

Prices can change with sales, stock, and location. The enclosure listing showed conflicting stock indicators; check availability. The battery is a cost example, not confirmation of the installed battery's brand or a validated replacement. Similarly, confirm the panel dimensions and electrical limits against the actual mount and design.

## Small parts and fabrication: allowances

These ranges are planning allowances, **not supplier quotes**. They make the missing cost visible while the final part numbers, quantities, and electrical protection schedule are completed.

| Group | What the allowance covers | Allowance |
|:---|:---|---:|
| Panel support | Aluminum stock and frame fabrication materials | $50–80 |
| Pole attachment and fasteners | Three mounting fixtures/bands, bolts, nuts, washers | $20–35 |
| Regulated USB output | USB-C module and compatible device cable | $15–25 |
| Power wiring and terminations | Cable, ring terminals, matching solar connectors, heat shrink | $20–35 |
| Circuit protection and isolation | Correctly rated fuses/holders and any required disconnect hardware | $15–25 |
| Weather sealing and strain relief | Glands, grommets, sealant, cable support | $10–20 |
| Internal supports | Printed mounts, spacers, retention and related materials | $5–15 |
| **Allowances subtotal** | | **$135–235** |
| **Working total** | Major components + allowances | **$523.58–623.58** |

**Excluded:** pole and foundation, tax, delivery charges, tools, labor, the powered device, test equipment, and contingency. Buying stock in full lengths or packages can cost more than the material actually used. Site conditions or extra protection may also change the total.

[Download the budget worksheet (CSV)]({{ '/assets/downloads/build-budget.csv' | relative_url }})

## Why the original estimate was lower

The original rough budget assumed about $60 for the controller, $100 for the battery, $100 for the panel, $50 for the enclosure, and $100 for the remaining materials—about $410. The current examples increase the first four items by roughly $79, and the allowance makes more room for the rack, protection, and weather sealing.

The allowance is not a purchase record: exact dimensions, quantities, included hardware, and shared packages could lower it, while buying full stock lengths or shipping separate orders could raise it. Lowering this budget requires actual sourcing savings, not simply removing protection or mounting hardware from the total.

For scale, with an **illustrative 8% sales tax and free shipping**, a $500 delivered ceiling permits **$462.96 before tax**. After the current $388.58 major-component subtotal, that leaves only **$74.38** for everything else, versus the present $135–235 allowance. This tax rate is an example, not a destination-specific quote. The existing estimate would be about **$565–673** at that same tax assumption, before any delivery charge.

A fresh alternative-source check did not establish a lower complete bill: [LiTime's 50 Ah battery](https://www.litime.com/products/litime-12v-50ah-lifepo4-lithium-ion-battery) displayed $188.99 with free delivery, while [WEIZE's 50 Ah listing](https://www.weizeus.com/products/weize-12v-50ah-640wh-lifepo4-lithium-battery-2000-deep-cycles-smart-bms) showed $149.99 and was sold out. Both are above the VEVOR example already used. Discounts or another compatible source may help, but the sub-$500 delivered target remains to be demonstrated with available quantities and checkout totals.

## How commercial systems compare

These are **similar applications, not identical systems**. Preassembled products may include different outputs, larger reserves, warranties, support, and mounting packages.

| Option | Listed price checked Nov. 10, 2026 | What the listing describes |
|:---|---:|:---|
| OpenPowerBox DIY reference budget | About $525–625 | 200 W panel, 640 Wh nominal storage, 15 W continuous design target; builder assembly, pole excluded |
| [Tycon RPS12-50L-100](https://www.icomtechinc.com/tycon-systems/power-supplies-n-accessories/solar-power-systems/off-grid-power-systems/rps12-50l-100-by-tycon-systems.php) | $1,182.95 at iComTech; call for availability | Retailer lists 100 W solar, 12 V / 50 Ah / 600 Wh LiFePO4 battery, 18.5 W continuous rating, PWM controller, ventilated aluminum enclosure and pole/wall mounting |
| [Tycon RPS12-100-100](https://www.tyconsystems.com/categories/rp-pole-mount-aluminum/6026428000002821256) | $1,369.95 | 100 W solar, 1,200 Wh battery, 21.5 W continuous rating, controller, aluminum enclosure and mounts |
| [Tycon RPS12/24-100-200](https://www.tyconsystems.com/categories/rp-pole-mount-aluminum/6026428000002821256) | $1,809.95 | 200 W solar, 1,200 Wh battery, 25 W continuous rating, enclosure and mounts |
| [RevoPower solar PoE injector](https://revopower.us/solar-poe-injector-with-battery) | Page displays $388 sale price; options change total | 192 Wh base battery; PoE version, panel and battery upgrades are configurable |

The retailer's **RPS12-50L-100** listing is the closer storage comparison: 50 Ah lithium rather than the larger AGM reserve in the RPS12-100-100. There is a source discrepancy to resolve before ordering: the [manufacturer's August 2025 datasheet](https://tsi.tyconsystems.com/doc/SpecSheets/RemotePro%20100W%20Lithium%20Solar%20Spec%20Sheet.pdf) shows 100 Ah in that model's ordering-table row, while the retailer lists 50 Ah / 600 Wh. The comparison above follows the retailer's stated package, not a confirmed purchase configuration. The separate RPS12-100-100 listing has a **100 Ah** AGM battery, not 200 Ah. Compare watt-hours, chemistry, temperature range, and outputs as well as price.

These prices are listed before any unquoted taxes or delivery. The comparison supports the project's motivation: standard components and builder assembly can cost less than some packaged field-power systems. Packaged products also include engineering, assembly, different temperature/output ratings, warranty, and support. A lower DIY component cost does not establish identical autonomy or reliability, and not every commercial option costs over $1,000.

[Return to the build guide →]({{ '/docs/build/' | relative_url }})
