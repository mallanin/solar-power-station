---
title: Parts & cost
nav_order: 4
permalink: /docs/cost/
---
<div class="eyebrow">The parts budget</div>
# What does it cost to build?

The project's starting estimate was roughly **$400**, excluding the pole. A current retail check puts the four major components at **$388.58**. Adding allowances for the rack, electrical accessories, and small hardware gives a working budget of **$523.58–623.58**, rounded to **$525–625**.

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

The original rough budget assumed about $60 for the controller, $100 for the battery, $100 for the panel, $50 for the enclosure, and $100 for the remaining materials—about $410. Today's examples increase the first four items by roughly $79, and the detailed allowance makes more room for the rack, protection, and weather sealing. Discounts, existing materials, or different approved parts may reduce the cost. We do not yet have a verified $400 shopping list for the current build.

## How commercial systems compare

These are **similar applications, not identical systems**. Preassembled products may include different outputs, larger reserves, warranties, support, and mounting packages.

| Option | Listed price checked Nov. 10, 2026 | What the listing describes |
|:---|---:|:---|
| OpenPowerBox DIY reference budget | About $525–625 | 200 W panel, 640 Wh nominal storage, 15 W continuous design target; builder assembly, pole excluded |
| [Tycon RPS12-100-100](https://www.tyconsystems.com/categories/rp-pole-mount-aluminum/6026428000002821256) | $1,369.95 | 100 W solar, 1,200 Wh battery, 21.5 W continuous rating, controller, aluminum enclosure and mounts |
| [Tycon RPS12/24-100-200](https://www.tyconsystems.com/categories/rp-pole-mount-aluminum/6026428000002821256) | $1,809.95 | 200 W solar, 1,200 Wh battery, 25 W continuous rating, enclosure and mounts |
| [RevoPower solar PoE injector](https://revopower.us/solar-poe-injector-with-battery) | Page displays $388 sale price; options change total | 192 Wh base battery; PoE version, panel and battery upgrades are configurable |

The comparison supports the project's motivation: a documented DIY build can offer a lower parts cost than some packaged remote-power systems. It does not establish identical autonomy or reliability, and not every commercial option costs over $1,000.

[Return to the build guide →]({{ '/docs/build/' | relative_url }})
