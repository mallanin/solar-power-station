---
title: Start here
nav_order: 1
description: Build affordable off-grid power for property networks, monitoring, lighting, and remote automation.
---
<div class="hero practical-hero home-hero">
<div class="home-hero-copy">
  <div class="eyebrow">OpenPowerBox / A guide for builders</div>
  <h1 id="build-beyond-the-outlet">Build beyond<br>the outlet.</h1>
  <p class="intro">Put solar power to work wherever your project takes you. Build an affordable battery-backed station for networks, monitoring, and automation—with open guides to understand it, size it, and make it your own.</p>
  <div class="home-actions"><a class="home-action-primary" href="{{ '/docs/system-design/' | relative_url }}">Explore the system <span aria-hidden="true">↗</span></a><a class="home-action-secondary" href="{{ '/docs/build/' | relative_url }}">Go to the build guide <span aria-hidden="true">→</span></a></div>
</div>
<figure class="unit-photo-placeholder" aria-label="Space reserved for a photograph of the completed OpenPowerBox unit"><span class="eyebrow">The completed build</span><span class="photo-placeholder-mark" aria-hidden="true">+</span><span>System image pending</span></figure>
</div>

<div class="spec-strip" aria-label="Reference build specifications"><div><strong>15 W</strong><span>continuous power design target</span></div><div><strong>200 W</strong><span>solar generation capacity</span></div><div><strong>640 Wh</strong><span>nominal battery storage</span></div></div>

## Why build it?

Useful projects don't stop where the power cable ends. As networks, sensors, and automation move into fields, gardens, and remote corners of a property, they need a dependable source of moderate power. OpenPowerBox makes that power something you can build, understand, and adapt using standard components.

<div class="application-grid">
<div><span class="eyebrow">Connect</span><h3 id="connect-a-property">A network across your property</h3><p>Power compatible wireless mesh nodes at multiple locations to connect cameras and sensors across a farm, large garden, or worksite.</p></div>
<div><span class="eyebrow">Monitor</span><h3 id="monitor-what-matters">An eye on what matters</h3><p>Watch crops, wildlife, equipment, or an entrance. Add weather, soil-moisture, or tank-level sensing to understand what's happening on site.</p></div>
<div><span class="eyebrow">Control</span><h3 id="automate-a-remote-task">Automation out in the field</h3><p>Operate an irrigation valve, trigger a gate controller, or explore a small DC pump that runs only when needed, with the right output hardware.</p></div>
<div><span class="eyebrow">Illuminate</span><h3 id="light-a-remote-spot">Light where it's useful</h3><p>Run modest LED lighting at a remote shed, garden, or campsite. Timers and motion sensors help put the energy where—and when—you need it.</p></div>
</div>

These are starting points for a build matched to the job. USB-C is our reference output; regulated DC or PoE can be designed in for other devices. <a href="{{ '/docs/system-design/#applications-and-output-options' | relative_url }}">Explore applications and output options →</a>

<aside class="possibility-note"><strong>What else could it do?</strong> Satellite internet and local AI are worth exploring too: a scheduled Starlink Mini connection, on-site image recognition, or small language models on a compact computer. <a href="{{ '/docs/system-design/#satellite-internet-and-local-ai' | relative_url }}">See the power requirements →</a></aside>

<div class="budget-callout"><div><span class="eyebrow">Budget for the whole build</span><strong>A DIY route to affordable field power.</strong></div><p>We're targeting <strong>under $500 in retail components, including tax and shipping</strong>, with the pole supplied separately. That's a cost goal while we refine the sourcing list. For context, a Tycon package with a 100 W panel and 600 Wh lithium battery is listed at about <strong>$1,183</strong>, with different outputs, assembly, and support included.</p><a href="{{ '/docs/cost/' | relative_url }}">See the current budget and comparison <span aria-hidden="true">→</span></a></div>

## Built to keep going

The reference system is designed for **15 W of continuous power in San Luis Obispo**, with solar generation to cover daily use and battery reserve to bridge the night and low-sun weather. The aim is a station that keeps doing its job without a daily charging routine.

<div class="runtime-highlight"><strong>≈40 hours</strong><div>We found roughly 40 hours of battery runtime under a <strong>16 W continuous test load</strong>.<a href="{{ '/docs/testing/#storage-and-runtime' | relative_url }}">Our runtime test →</a></div></div>

At 15 W, a full day needs **360 Wh**. A first winter estimate for a well-positioned 200 W panel near San Luis Obispo is about **675 Wh per day on average**—leaving energy to replenish the reserve. Storm endurance depends on how much sunlight arrives and how long the deficit lasts. <a href="{{ '/docs/system-design/#san-luis-obispo-winter-and-storm-reserve' | relative_url }}">Follow the winter and storm calculations →</a>

The 15 W figure is an around-the-clock energy target. Higher-power tasks can run for shorter periods when the output hardware is sized for them; the daily energy budget and instantaneous power rating are separate design choices. <a href="{{ '/docs/system-design/#continuous-energy-and-short-bursts' | relative_url }}">How short bursts fit the budget →</a>

## Understand it. Size it. Build it.

<div class="guide-list">
<a href="{{ '/docs/system-design/' | relative_url }}"><span class="guide-index">01</span><span><strong>System design & methodology</strong><span>How solar input, storage, and output work together—and what can scale.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/sizing/' | relative_url }}"><span class="guide-index">02</span><span><strong>Size your system</strong><span>Explore load, sunshine, and reserve with a simple energy calculator.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/build/' | relative_url }}"><span class="guide-index">03</span><span><strong>Build your system</strong><span>Meet the components, prepare the mount, and install the reference station.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/operation/' | relative_url }}"><span class="guide-index">04</span><span><strong>Operation & maintenance</strong><span>Start, monitor, shut down, troubleshoot, and care for the station.</span></span><span aria-hidden="true">→</span></a>
</div>

<div class="reading-note reference-note"><p><strong>Start with our build. Adapt it to yours.</strong> The reference design pairs a 200 W panel with a 12.8 V, 50 Ah LiFePO4 battery and a Victron SmartSolar MPPT 75/15 controller. A larger battery can add reserve; a larger array can improve recharge.</p><p>Our <a href="{{ '/docs/system-design/#scaling-the-architecture' | relative_url }}">scaling examples</a> explain what changes with the controller, wiring, enclosure, and mount as you change the system.</p></div>

## About the project

OpenPowerBox began as a Cal Poly Mechanical Engineering senior design project by **Milo Goehring, George Konoval, Christopher Teo, and Joseph Phrachanhsay**, with sponsor **Eric Brigham**. The goal is practical, open documentation for people who want to build and maintain their own small off-grid power system.

[Download the user manual (PDF)]({{ '/assets/downloads/openpowerbox-user-manual.pdf' | relative_url }}) · [Testing & results]({{ '/docs/testing/' | relative_url }}) · [Source and page history](https://github.com/mallanin/solar-power-station)
