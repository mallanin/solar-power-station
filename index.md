---
title: Home
nav_order: 1
description: Open documentation for a customizable 200 W solar power system with 640 Wh battery storage.
---
<div class="hero practical-hero home-hero">
<div class="home-hero-copy">
  <div class="eyebrow" style="text-transform: none;">OpenPowerBox</div>
  <span id="build-beyond-the-outlet"></span>
  <h1 id="reliable-power-for-any-need">Reliable power<br>for any need.</h1>
  <p class="intro">Why purchase a comparable solar power system for over $1,000 when you can build OpenPowerBox for <strong><a href="{{ '/docs/cost/' | relative_url }}">under $500</a></strong>?</p>
  <div class="home-actions"><a class="home-action-primary" href="{{ '/docs/system-design/' | relative_url }}">Explore the system <span aria-hidden="true">↗</span></a><a class="home-action-secondary" href="{{ '/docs/build/' | relative_url }}">Go to the build guide <span aria-hidden="true">→</span></a></div>
</div>
<figure class="unit-photo"><img src="{{ '/assets/images/unit-closed-cutout.png' | relative_url }}" alt="The actual OpenPowerBox reference unit: solar panel and closed enclosure on a metal pole" width="1068" height="1400" fetchpriority="high"><figcaption>The completed build</figcaption></figure>
</div>

<div class="spec-strip" aria-label="Reference build specifications"><div><strong>Under $500</strong><span>components · before tax</span></div><div><strong>15 W+</strong><span>continuous power design target</span></div><div><strong>200 W</strong><span>solar panel rating</span></div><div><strong>640 Wh</strong><span>nominal battery storage · 50 Ah</span></div></div>

## Why build it?

OpenPowerBox is a customizable system with a **200 W solar panel** and a **12.8 V, 50 Ah battery (640 Wh)**, designed around a **15 W continuous load**. Testing has demonstrated **100 W+ intermittent loads**.

**Build it with readily available components and use open documentation to adapt it to your application. The nominal component cost is under $500—less than half the listed price of the commercial package compared below.**

<section class="home-featured-use-case" aria-labelledby="featured-use-case-networking-across-a-property" markdown="1">
<p class="section-kicker">Featured use case</p>
## Networking across a property
{: #featured-use-case-networking-across-a-property }

{% include featured-demonstration.md %}

<details class="application-details featured-details" id="extending-the-network" markdown="1">
<summary>Extending the network across a property</summary>

{% include featured-network-extension.md %}

</details>
</section>

<div class="application-grid">
<div><span class="eyebrow">Connect</span><h3 id="connect-a-property">A network across your property</h3><p>Power wireless mesh nodes at multiple locations to connect cameras and sensors across large properties, farms, and remote worksites.</p></div>
<div><span class="eyebrow">Monitor</span><h3 id="monitor-what-matters">Video monitoring</h3><p>Watch crops, wildlife, equipment, or an entrance. Add weather, soil-moisture, or tank-level sensing to understand what's happening on site.</p></div>
<div><span class="eyebrow">Control</span><h3 id="automate-a-remote-task">Automation out in the field</h3><p>Operate motorized valves, trigger a gate controller, or run a sump pump.</p></div>
<div id="light-a-remote-spot"><span class="eyebrow">Technology</span><h3 id="technology-in-the-field">Off-grid technology</h3><p>Set up a drone charging station, bring satellite internet to a remote site, or run a local AI model for on-site processing.</p></div>
</div>

Built for a wide range of devices, the system uses USB-C as its reference output. A suitable regulated DC-DC converter can supply other devices. <a href="{{ '/docs/system-design/#applications-and-output-options' | relative_url }}">Applications and output options →</a>

<div class="budget-callout"><div><span class="eyebrow">Budget for the whole build</span></div><p>The unit can feasibly be made for <strong>under $500 in retail components, including shipping and before tax</strong>, depending on your market, with the pole supplied separately. For context, a Tycon package with a 100 W panel and 600 Wh lithium battery is listed at about <strong>$1,183</strong>. At a sub-$500 build cost, that's <strong>less than half the price</strong> of this commercial package.</p><a href="{{ '/docs/cost/' | relative_url }}">See parts budget and comparison <span aria-hidden="true">→</span></a></div>

<span id="built-to-keep-going"></span>
## Inside the system

<figure class="assembly-figure full-system-figure">
<div class="assembly-photo full-system-photo"><img src="{{ '/assets/images/unit-open-cutout.png' | relative_url }}" alt="The complete OpenPowerBox unit on its pole with the enclosure door open: 1 solar panel, 2 aluminum panel frame, 3 enclosure, 4 charge controller, and 5 battery" width="952" height="1400" loading="lazy"><span class="component-marker panel-marker" aria-hidden="true">1</span><span class="component-marker frame-marker" aria-hidden="true">2</span><span class="component-marker enclosure-marker" aria-hidden="true">3</span><span class="component-marker controller-marker" aria-hidden="true">4</span><span class="component-marker battery-marker" aria-hidden="true">5</span></div>
<figcaption><strong>1 · Solar panel</strong><br><strong>2 · Aluminum panel frame</strong><br><strong>3 · Enclosure</strong><br><strong>4 · Charge controller</strong><br><strong>5 · Battery</strong></figcaption>
</figure>

The system combines a solar panel, charge controller, battery, and regulated output. Readily available components make it straightforward to service or adapt. A larger battery adds reserve; a larger array can improve recharge when the controller, wiring, protection, and mount are sized to match.

<span id="understand-it-size-it-build-it"></span>
<p class="section-kicker">Want to build one yourself?</p>
## Understand it. Build it. Use it.

<div class="guide-list">
<a href="{{ '/docs/system-design/' | relative_url }}"><span><strong>Explore the design</strong><span>System architecture, sizing, and design methodology.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/cost/' | relative_url }}"><span><strong>Buy the parts</strong><span>Review the component requirements and build budget.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/docs/build/' | relative_url }}"><span><strong>Build your system</strong><span>Meet the components, prepare the mount, and install the reference station.</span></span><span aria-hidden="true">→</span></a>
<a href="{{ '/community/' | relative_url }}"><span><strong>Share feedback or contribute</strong><span>Tell us about your build, send a note, or propose an improvement on GitHub.</span></span><span aria-hidden="true">→</span></a>
<a class="purchase-guide-link" href="{{ '/contact/' | relative_url }}"><span><strong>Interested in purchasing a complete system?</strong><span>Ask about a build or request a quote.</span></span><span aria-hidden="true">→</span></a>
</div>

<div class="reading-note reference-note"><p><strong>Adapt the design.</strong> The reference design pairs a 200 W panel with a 12.8 V, 50 Ah LiFePO4 battery and a Victron SmartSolar MPPT 75/15 controller. A larger battery can add reserve; a larger array can improve recharge.</p><p>Our <a href="{{ '/docs/system-design/#scaling-the-architecture' | relative_url }}">scaling examples</a> explain what changes with the controller, wiring, enclosure, and mount as you change the system.</p></div>

## About the project

OpenPowerBox began as a Cal Poly Mechanical Engineering senior design project by **Milo Goehring, George Konoval, Christopher Teo, and Joseph Phrachanhsay**, with sponsor **Eric Brigham**. The goal is practical, open documentation for people who want to build and maintain their own small off-grid power system.

[Download the user manual (PDF)]({{ '/assets/downloads/openpowerbox-user-manual.pdf?v=20261118' | relative_url }}) · [Testing & results]({{ '/docs/testing/' | relative_url }}) · [Source and page history](https://github.com/mallanin/solar-power-station)
