---
title: Start here
nav_order: 1
description: Practical, open documentation for building affordable off-grid solar power.
---
<nav class="edition-switch" aria-label="Homepage versions"><span>Explore two introductions</span><a aria-current="page" href="{{ '/' | relative_url }}">Practical</a><a href="{{ '/visual/' | relative_url }}">Visual</a></nav>
<div class="hero practical-hero">
  <div class="eyebrow">OpenPowerBox / A guide for builders</div>
  <h1 id="small-loads-independent-power">Small loads.<br>Independent power.</h1>
  <p class="intro">Build an affordable solar + battery station for the devices you want to run beyond the reach of an outlet. Understand the energy budget, choose your capacity, and follow a documented pole-mounted build.</p>
  <div class="hero-actions"><a class="btn btn-primary" href="{{ '/docs/system-design/' | relative_url }}">Explore the system →</a><a class="btn" href="{{ '/docs/build/' | relative_url }}">Read the build guide</a></div>
</div>

<div class="spec-strip" aria-label="Reference build specifications"><div><strong>15 W</strong><span>continuous design target</span></div><div><strong>200 W</strong><span>rated solar panel</span></div><div><strong>640 Wh</strong><span>nominal battery storage</span></div></div>

## Why build it yourself?

A camera at a remote gate. A weather station in a field. A small network where running a power cable is impractical. These devices need modest power, but they need it reliably, through the night and between sunny periods. Check the device's input requirements: the current reference output is USB-C, so a PoE device needs a separately designed interface.

OpenPowerBox brings standard components together with an accessible explanation of how they work. The aim is to make this class of outdoor power easier to reproduce, repair, and adapt—and to keep the parts cost visible.

**Budget for the whole build.** Our original target was roughly $400, excluding the pole. A current retail check plus allowances for the mount and small parts comes to **about $525–625**, before tax, shipping, tools, and labor. See the [itemized budget and commercial comparisons]({{ '/docs/cost/' | relative_url }}).

## Built around an energy balance

At the 15 W design load, a full day uses **360 Wh**. The 200 W panel is sized to cover that demand and put energy back into the battery during useful sun. The battery carries the load overnight and through periods of low solar production.

The team reports **roughly 40 hours of battery runtime under its test load**. The detailed test conditions still need to accompany that result; it is not a guarantee of 40 hours for every device or season. [Read the evidence and limits]({{ '/docs/testing/' | relative_url }}).

Continuous operation is the goal: collect enough energy over time, keep a reserve for low-sun periods, and recover before the reserve runs out. The [design explanation]({{ '/docs/system-design/#the-daily-energy-balance' | relative_url }}) walks through that logic, including cloudy weather.

## Understand it. Size it. Build it.

<div class="guide-list">
<a href="{{ '/docs/system-design/' | relative_url }}"><span class="guide-index">01</span><span><strong>System design & methodology</strong><span>How solar input, storage, and output work together—and what can scale.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/sizing/' | relative_url }}"><span class="guide-index">02</span><span><strong>Size your system</strong><span>Explore load, sunshine, and reserve with a simple energy calculator.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/build/' | relative_url }}"><span class="guide-index">03</span><span><strong>Build your system</strong><span>Meet the components, prepare the mount, and install the reference station.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/operation/' | relative_url }}"><span class="guide-index">04</span><span><strong>Operation & maintenance</strong><span>Start, monitor, shut down, troubleshoot, and care for the station.</span></span><span aria-hidden="true">→</span></a>
</div>

## A reference build, with room to grow

The current design pairs one 200 W panel with a 12.8 V, 50 Ah LiFePO4 battery and a Victron SmartSolar MPPT 75/15 controller. A larger battery can increase reserve; a larger array can improve recharge. Each change has consequences for the controller, protection, enclosure, and mount. Our [scaling examples]({{ '/docs/system-design/#scaling-the-architecture' | relative_url }}) explain the principle without presenting untested combinations as finished designs.

<div class="reading-note"><strong>Current documentation:</strong> a working guide for the reference prototype. Installation and operating content comes from the team's reviewed user manual. The final fabrication drawings, protection schedule, and complete test records are still being assembled. <a href="{{ '/docs/versions/' | relative_url }}">See what is documented →</a></div>

## About the project

OpenPowerBox began as a Cal Poly Mechanical Engineering senior design project by **Milo Goehring, George Konoval, Christopher Teo, and Joseph Phrachanhsay**, with sponsor **Eric Brigham**. The goal is practical, open documentation for people who want to build and maintain their own small off-grid power system.

[Download the user manual (PDF)]({{ '/assets/downloads/openpowerbox-user-manual.pdf' | relative_url }}) · [Testing & results]({{ '/docs/testing/' | relative_url }}) · [Source and page history](https://github.com/mallanin/solar-power-station)
