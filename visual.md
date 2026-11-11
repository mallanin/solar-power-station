---
title: A visual introduction
permalink: /visual/
nav_exclude: true
search_exclude: true
description: Another introduction to the same OpenPowerBox documentation.
---
<nav class="edition-switch" aria-label="Homepage versions"><span>Earlier design concept</span><a href="{{ '/' | relative_url }}">Current homepage →</a></nav>
<div class="visual-hero">
<div class="eyebrow">OpenPowerBox / A guide for builders</div>
<h1 id="power-beyond-the-outlet">Power beyond<br>the outlet.</h1>
<p>Keep useful things running in places the grid doesn't reach. An affordable solar + battery system, explained from the first watt to the finished build.</p>
<a class="btn" href="{{ '/docs/system-design/' | relative_url }}">See how it works →</a>
<div class="hero-flow" aria-label="Sunlight collected by the panel, managed by the controller, stored in the battery, and supplied to a device"><span>Collect<span>200 W solar</span></span><b aria-hidden="true">→</b><span>Store<span>640 Wh nominal</span></span><b aria-hidden="true">→</b><span>Power<span>15 W design load</span></span></div>
</div>

<div class="visual-intro">
<div><div class="eyebrow">The reference station</div><h2 id="ordinary-components">Ordinary components.<br>A useful system.</h2><p>A solar panel, a battery, a charge controller, and a protected output. The value is in how they work together—and in having the information to build, understand, and maintain the result.</p><p>The current build mounts to an existing pole and supplies compatible USB-C devices. Cameras, sensors, and small networking projects are the intended applications, subject to their input requirements.</p><a href="{{ '/docs/build/' | relative_url }}">Meet the build →</a></div>
<figure><img src="{{ '/assets/images/reference-cad.jpg' | relative_url }}" alt="Project CAD overview with a panel above an enclosure on a pole" width="770" height="996"><figcaption>Project CAD overview from the user manual. The earlier wood support shown here has since been replaced with an aluminum frame.</figcaption></figure>
</div>

## A little power, around the clock

<div class="energy-story"><div><span class="eyebrow">The demand</span><strong>360 Wh</strong><p>A 15 W device running for 24 hours.</p></div><div><span class="eyebrow">The supply</span><strong>200 W</strong><p>Rated panel power, collected over useful sunlight hours.</p></div><div><span class="eyebrow">The reserve</span><strong>~40 h</strong><p>Battery runtime reported by the team under its test load. Detailed conditions pending.</p></div></div>

Sunlight powers the load and replenishes the reserve. The battery carries it through darkness and low-sun periods. Sustained operation depends on enough harvest and enough recovery time between deficits; an extended storm can still exhaust the battery.

[Walk through the energy balance]({{ '/docs/system-design/#the-daily-energy-balance' | relative_url }}) · [Review the test status]({{ '/docs/testing/' | relative_url }})

<div class="cost-feature"><span class="eyebrow">Make the cost visible</span><h2 id="build-with-a-parts-budget">Build with a parts budget.</h2><p>The original target was roughly $400. Our first current retail budget is <strong>about $525–625</strong> for components, the mount, and small parts, excluding the pole, tax, shipping, tools, and labor.</p><p>Commercial packages for similar remote-power applications can exceed $1,000, with different capacities, outputs, and support. See exactly what goes into the comparison.</p><a href="{{ '/docs/cost/' | relative_url }}">Parts, prices & comparisons →</a></div>

## Make it fit your project

Understand the reference design first, then explore how changing the panel or battery changes the energy budget. Larger configurations are concepts to evaluate, not validated drop-in upgrades.

<div class="doc-grid">
<a class="doc-card" href="{{ '/docs/system-design/' | relative_url }}"><span class="number">01 / UNDERSTAND</span><strong>System design →</strong><span class="summary">The architecture, daily energy balance, and scaling limits.</span></a>
<a class="doc-card" href="{{ '/docs/sizing/' | relative_url }}"><span class="number">02 / EXPLORE</span><strong>Size your system →</strong><span class="summary">Try different loads, storage capacities, and sunshine scenarios.</span></a>
<a class="doc-card" href="{{ '/docs/build/' | relative_url }}"><span class="number">03 / MAKE</span><strong>Build your system →</strong><span class="summary">Components, mount, enclosure, and reference installation.</span></a>
<a class="doc-card" href="{{ '/docs/operation/' | relative_url }}"><span class="number">04 / USE</span><strong>Keep it running →</strong><span class="summary">The team's manual, adapted into a practical web guide.</span></a>
</div>

<div class="reading-note">A Cal Poly Mechanical Engineering senior design project. This is the same working documentation as the practical introduction. <a href="{{ '/docs/versions/' | relative_url }}">Documentation status</a> · <a href="{{ '/assets/downloads/openpowerbox-user-manual.pdf' | relative_url }}">User manual PDF</a></div>
