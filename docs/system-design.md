---
title: System design
nav_order: 2
permalink: /docs/system-design/
---
# System design

<span class="status-pill">Current design: Draft</span>

Understand what each subsystem does and how the electrical system fits together. Use [Size your system]({{ '/docs/sizing/' | relative_url }}) to establish your capacity needs, then [Build your system]({{ '/docs/build/' | relative_url }}) for mounting, enclosure, and physical assembly.

<div class="placeholder-note">The architecture below is illustrative. Component selections, interfaces, ratings, and protection details have not been specified or verified.</div>

## System architecture

![Illustrative energy path from sunlight through a solar array and power management to loads, with battery storage connected to power management. Concept only, not a wiring diagram.]({{ '/assets/images/system-overview.svg' | relative_url }})

The final architecture will identify the solar input, charge control, battery storage, output conversion, and protection components. The combined “power management” block above will be replaced by the actual design.

| Subsystem | What the design needs to explain | Reference component |
|:---|:---|:---|
| Solar input | Array configuration and input operating range | TBD |
| Charge control | Compatibility with the array and battery | TBD |
| Battery storage | Chemistry, usable capacity, management, and operating limits | TBD |
| Output conversion | Supported output types, continuous load, and surge capability | TBD |
| Protection & isolation | Reviewed protection, disconnects, grounding, and connection requirements | TBD |
| Monitoring | What the user can measure or observe | TBD |

## Reference electrical configuration

This will be the specific combination behind the [capabilities on the first page]({{ '/' | relative_url }}). Alternative configurations will need their own documented limits and validation.

| Design item | Value / document |
|:---|:---|
| System voltage | TBD |
| Array and charge controller | TBD |
| Battery and usable reserve | TBD |
| Output conversion and supported loads | TBD |
| Electrical schematic and revision | Not yet published |
| Compatible parts list | [Parts template]({{ '/docs/build/#parts-and-drawings' | relative_url }}) |
| Supporting evidence | [Testing & results]({{ '/docs/testing/' | relative_url }}) |

## Why these choices?

[Explain each major selection in plain language: the need it meets, alternatives considered, trade-offs, and supporting calculations or manufacturer documentation.]

| Decision | Rationale | Status |
|:---|:---|:---|
| [Component or architecture choice] | [Evidence and trade-off] | Proposed |

## Scaling the design

The [sizing guide]({{ '/docs/sizing/' | relative_url }}) will show how different loads and reserve requirements affect the battery, array, and output conversion. Changing one component can affect compatibility, protection, wiring, and thermal requirements. A larger component is not automatically a compatible substitution.

[Add the supported configuration range and the reviewed combinations before recommending substitutions.]

## Electrical design versus physical setup

The electrical architecture describes how power is collected, stored, controlled, and delivered. The physical build describes how those components are supported, enclosed, accessed, and routed at a site.

The first documented physical setup will be a [pole-mounted reference build]({{ '/docs/build/#pole-mounted-reference-build' | relative_url }}). Other arrangements will be described separately, with their own mounting and enclosure considerations. Changing the mounting arrangement still requires checking cable runs, weather exposure, heat, and component access.
