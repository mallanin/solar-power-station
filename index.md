---
title: Start here
nav_order: 1
description: Build reliable off-grid power for networks, monitoring, automation, and field technology.
---
<div class="hero practical-hero home-hero">
<div class="home-hero-copy">
  <div class="eyebrow" style="text-transform: none;">OpenPowerBox</div>
  <span id="build-beyond-the-outlet"></span>
  <h1 id="reliable-power-for-any-need">Reliable power<br>for any need.</h1>
  <p class="intro">Create a solar power station for any use case, anywhere. This open documentation covers the system design and build of an affordable, battery-backed station for networks, monitoring, and automation.</p>
  <div class="home-actions"><a class="home-action-primary" href="{{ '/docs/system-design/' | relative_url }}">Explore the system <span aria-hidden="true">↗</span></a><a class="home-action-secondary" href="{{ '/docs/build/' | relative_url }}">Go to the build guide <span aria-hidden="true">→</span></a></div>
</div>
<figure class="unit-photo-placeholder" aria-label="Space reserved for a photograph of the completed OpenPowerBox unit"><span class="eyebrow">The completed build</span><span class="photo-placeholder-mark" aria-hidden="true">+</span><span>System image pending</span></figure>
</div>

<div class="spec-strip" aria-label="Reference build specifications"><div><strong>15 W+</strong><span>continuous power design target</span></div><div><strong>200 W</strong><span>solar generation capacity</span></div><div><strong>640 Wh</strong><span>nominal battery storage</span></div></div>

## Why build it?

OpenPowerBox brings reliable, moderate-scale power to networks, monitoring, automation, and field technology. Solar generation and battery storage support equipment that stays on around the clock alongside higher-power tasks that run when needed—all using standard components you can build into a system of your own.

<div class="application-grid">
<div><span class="eyebrow">Connect</span><h3 id="connect-a-property">A network across your property</h3><p>Power wireless mesh nodes at multiple locations to connect cameras and sensors across large properties, farms, and remote worksites.</p></div>
<div><span class="eyebrow">Monitor</span><h3 id="monitor-what-matters">Video monitoring</h3><p>Watch crops, wildlife, equipment, or an entrance. Add weather, soil-moisture, or tank-level sensing to understand what's happening on site.</p></div>
<div><span class="eyebrow">Control</span><h3 id="automate-a-remote-task">Automation out in the field</h3><p>Operate motorized valves, trigger a gate controller, or run a sump pump.</p></div>
<div id="light-a-remote-spot"><span class="eyebrow">Technology</span><h3 id="technology-in-the-field">Off-grid technology</h3><p>Set up a drone charging station, bring satellite internet to a remote site, or run a local AI model for on-site processing.</p></div>
</div>

Built for a wide range of devices, the system has a **15 W+ continuous power design target** and **100 W+ intermittent output demonstrated in our pump tests**. USB-C is our reference output; regulated DC or PoE can be designed in for other devices. <a href="{{ '/docs/system-design/#applications-and-output-options' | relative_url }}">Applications and output options →</a>

<div class="budget-callout"><div><span class="eyebrow">Budget for the whole build</span><strong>A DIY route to affordable field power.</strong></div><p>Our estimate is that the unit can feasibly be made for <strong>under $500 in retail components, including tax and shipping</strong>, depending on your market, with the pole supplied separately. For context, a Tycon package with a 100 W panel and 600 Wh lithium battery is listed at about <strong>$1,183</strong>. At a sub-$500 build cost, that's <strong>less than half the price</strong> of this commercial package.</p><a href="{{ '/docs/cost/' | relative_url }}">See the current budget and comparison <span aria-hidden="true">→</span></a></div>

## Built to keep going

The reference system is designed for **15 W+ of continuous power**, with solar generation to cover daily use and battery reserve to keep equipment running through the night and changing weather.

<div class="runtime-highlight"><strong>≈40 hours</strong><div>We found roughly 40 hours of runtime with <strong>no solar input</strong>, under a <strong>16 W continuous test load</strong>.<a href="{{ '/docs/testing/#storage-and-runtime' | relative_url }}">Our runtime test →</a></div></div>

Even under cloudy winter skies, the 200 W solar panel can provide meaningful power. Combining that year-round input with roughly 40 hours of battery-only reserve allows the system to sustain a **15 W continuous draw in San Luis Obispo**.

Sustained storms can exhaust the reserve and interrupt output. With automatic load reconnection configured, the controller restores power once solar charging brings the battery back above its reconnect threshold.

Higher-power tasks can run for shorter periods while staying within the daily energy budget. Our pump testing has demonstrated **100 W+ intermittent loads**; the output path and operating schedule determine how that capacity is used. <a href="{{ '/docs/system-design/#continuous-energy-and-short-bursts' | relative_url }}">How short bursts fit the budget →</a>

<span id="understand-it-size-it-build-it"></span>
## Understand it. Build it. Use it.

<div class="guide-list">
<a href="{{ '/docs/system-design/' | relative_url }}"><span><strong>System design</strong><span>How solar input, storage, and output work together—and what can scale.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/build/' | relative_url }}"><span><strong>Build your system</strong><span>Meet the components, prepare the mount, and install the reference station.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/operation/' | relative_url }}"><span><strong>Operation & maintenance</strong><span>Start, monitor, shut down, troubleshoot, and care for the station.</span></span><span aria-hidden="true">→</span></a>
</div>

<div class="reading-note reference-note"><p><strong>Start with our build. Adapt it to yours.</strong> The reference design pairs a 200 W panel with a 12.8 V, 50 Ah LiFePO4 battery and a Victron SmartSolar MPPT 75/15 controller. A larger battery can add reserve; a larger array can improve recharge.</p><p>Our <a href="{{ '/docs/system-design/#scaling-the-architecture' | relative_url }}">scaling examples</a> explain what changes with the controller, wiring, enclosure, and mount as you change the system.</p></div>

## About the project

OpenPowerBox began as a Cal Poly Mechanical Engineering senior design project by **Milo Goehring, George Konoval, Christopher Teo, and Joseph Phrachanhsay**, with sponsor **Eric Brigham**. The goal is practical, open documentation for people who want to build and maintain their own small off-grid power system.

[Download the user manual (PDF)]({{ '/assets/downloads/openpowerbox-user-manual.pdf' | relative_url }}) · [Testing & results]({{ '/docs/testing/' | relative_url }}) · [Source and page history](https://github.com/mallanin/solar-power-station)
