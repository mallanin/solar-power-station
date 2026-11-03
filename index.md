---
title: Start here
nav_order: 1
description: Understand, size, and build your own OpenPowerBox solar power system.
---
<div class="hero">
  <div class="eyebrow">OpenPowerBox / A guide for builders</div>
  <h1>Your power needs.<br>Your solar build.</h1>
  <p class="intro">A guide to building a solar power system around what you want to run and how much reserve you need. Understand the design, choose your capacity, and find a physical setup that fits your site.</p>
  <a class="btn btn-primary" href="{{ '/docs/sizing/' | relative_url }}">Start with your power needs →</a>
  <a class="btn" href="{{ '/docs/system-design/' | relative_url }}">Explore the system</a>
</div>

<div class="placeholder-note"><strong>Current design: Draft.</strong> This is the documentation framework for a future buildable design. Component selections, output ratings, sizing recommendations, and assembly instructions are still being developed.</div>

## Why OpenPowerBox?

The aim is a solar power system you can understand, reproduce, and maintain. The guide will explain how the parts work together, how to choose capacity for your loads, and how to adapt the physical installation to your location.

- **Start with what you need to power.** Plan around your devices, their daily use, and the reserve you want when sunlight is limited.
- **Choose a suitable physical build.** Keep the electrical design and the mounting arrangement distinct. A pole-mounted installation will be the first reference build.
- **Know what supports a claim.** Find the design target, the tested configuration, and the measurements behind each published capability.

## What can it power?

The reference configuration will make these capabilities explicit. Targets describe the design intent; measured results describe what a particular build demonstrated under stated conditions. **All values are currently TBD.**

| Capability | Reference design target | Measured result |
|:---|:---|:---|
| Continuous output — how much can run at once | TBD W | [Not tested]({{ '/docs/testing/#output-power' | relative_url }}) |
| Startup / surge output — brief peak demand | TBD W for TBD duration | [Not tested]({{ '/docs/testing/#output-power' | relative_url }}) |
| Usable stored energy — available battery reserve | TBD Wh | [Not tested]({{ '/docs/testing/#storage-and-runtime' | relative_url }}) |
| Runtime — time powering a specified load | TBD hours at TBD W | [Not tested]({{ '/docs/testing/#storage-and-runtime' | relative_url }}) |
| Solar energy collected per day | TBD Wh/day at a stated site and season | [Not tested]({{ '/docs/testing/#solar-generation' | relative_url }}) |
| Supported outputs and voltage | TBD | [Verification pending]({{ '/docs/testing/#output-power' | relative_url }}) |

**Example loads:** [Add devices, quantities, operating hours, and startup requirements after the reference design is specified.]

A battery capacity alone does not establish runtime, and a panel's rated power is not a promise of daily energy. The [sizing guide]({{ '/docs/sizing/' | relative_url }}) will connect your load profile and location to the required components.

## From your needs to your build

<div class="doc-grid">
  <a class="doc-card" href="{{ '/docs/sizing/' | relative_url }}"><span class="number">01 / SIZE</span><strong>Size your system →</strong><span class="summary">Define your loads and reserve. Work toward an appropriate battery, solar array, and power conversion setup.</span></a>
  <a class="doc-card" href="{{ '/docs/system-design/' | relative_url }}"><span class="number">02 / UNDERSTAND</span><strong>System design →</strong><span class="summary">See the architecture, component interfaces, and the reasons behind the electrical design.</span></a>
  <a class="doc-card" href="{{ '/docs/build/' | relative_url }}"><span class="number">03 / BUILD</span><strong>Build your system →</strong><span class="summary">Choose a mounting arrangement, gather the matching parts, and follow the reference build.</span></a>
  <a class="doc-card" href="{{ '/docs/testing/' | relative_url }}"><span class="number">04 / VERIFY</span><strong>Testing & results →</strong><span class="summary">Compare intended capabilities with measured results, test conditions, and limitations.</span></a>
</div>

After assembly, use [operation & maintenance]({{ '/docs/operation/' | relative_url }}) for the instructions associated with your design version.

## Choose a consistent design version

The current documentation is a **working draft**, not a released hardware design. Future releases will keep the sizing assumptions, parts, drawings, build instructions, and test evidence together. [How versions and history work →]({{ '/docs/versions/' | relative_url }})

## About the project

OpenPowerBox began as a solar power station senior design project. [Team, sponsor, and project background to be added.] The documentation is being shaped for people who want to build their own system.
