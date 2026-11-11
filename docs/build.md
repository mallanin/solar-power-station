---
title: Build your system
nav_order: 5
permalink: /docs/build/
---
<span id="build-the-reference-station"></span>
# Build your system

The reference station has two main assemblies: a solar panel on an aluminum frame, and an enclosure containing the battery, controller, and USB output hardware. Both attach to an existing suitable pole.

Read [system design]({{ '/docs/system-design/' | relative_url }}) first, then use the [parts budget]({{ '/docs/cost/' | relative_url }}) to understand the material categories. This page covers the assembly sequence and the reviewed mounting procedure. Exact fabrication dimensions and the final wiring/protection schedule still need to be reconciled into a complete build package.

## Parts and drawings

| Assembly | Main parts | Reference information |
|:---|:---|:---|
| Solar | 200 W panel, aluminum frame, panel attachment hardware, pole fixture | Current prototype uses aluminum; earlier CAD shows a wood support |
| Equipment enclosure | Box, internal mounts, battery retention, seals, glands, rear mounting fixtures | Keep the battery secure and the controller accessible |
| Electrical | 50 Ah LiFePO4 battery, SmartSolar 75/15, USB-C converter, wiring and protection | Use a single reviewed configuration; final wire gauges and protection ratings are not yet published here |
| Site | Suitable 4–6 inch pole and foundation | Supplied by the builder; outside the parts budget |

<div class="photo-pair"><figure><img src="{{ '/assets/images/aluminum-frame.jpg' | relative_url }}" alt="Team fabricating the aluminum frame behind the solar panel" loading="lazy"><figcaption>Aluminum frame fabrication on the reference prototype.</figcaption></figure><figure><img src="{{ '/assets/images/enclosure-mount.jpeg' | relative_url }}" alt="Rear enclosure mounting brackets and pole attachment" loading="lazy"><figcaption>The enclosure has its own mounting fixtures.</figcaption></figure></div>

## Prepare the two assemblies

### 1. Confirm the component layout

Check the actual panel mounting holes and dimensions, battery size and terminal locations, controller clearance, USB module mounting, and enclosure access. Arrange components so the battery cannot shift, wires avoid sharp edges, and the door closes without pinching cables.

### 2. Fabricate the panel support

Measure, cut, drill, and deburr the aluminum members using the final drawing for the selected panel. Fit the panel using its manufacturer's mounting provisions. Use compatible bolts, washers, and locking nuts; address corrosion where different metals meet.

The older assembly document carries dimensions over from a wood concept and does not fully define the aluminum section and joints. It is not a sufficient fabrication drawing for the current frame. The next documentation release needs a dimensioned frame drawing, joint details, and a complete hardware list.

### 3. Prepare the enclosure

Fit the internal component supports and battery retention, then install the rear pole-mount fixtures. Protect cable penetrations with the appropriate glands or grommets and seal exterior fastener holes. Leave controller ventilation and service access clear. A modified enclosure does not automatically retain the unmodified box's advertised ingress rating.

### 4. Complete the electrical assembly

Have a person competent in low-voltage DC assembly follow the reviewed schematic for the selected parts. Confirm polarity, wire sizing, termination, circuit protection, isolation, and strain relief before connecting energy sources. Keep PV isolated during wiring work. The functional diagram on the design page does not specify these construction details.

The following mounting and startup procedures assume the controller and output module are already wired, as in the [user manual]({{ '/assets/downloads/openpowerbox-user-manual.pdf' | relative_url }}).

<figure class="documentation-photo" aria-label="Photo placeholder: completed enclosure before mounting"><div><span class="photo-placeholder-mark" aria-hidden="true">+</span><strong>Completed electrical assembly</strong><span>Photo pending · component supports, battery retention, and finished wiring</span></div><figcaption>The assembled enclosure before it is mounted to the pole.</figcaption></figure>

## Pole-mounted reference build

Before lifting, have a helper or suitable lifting support, the supplied mounting bands, and a Phillips screwdriver or drill/driver. Work in calm, dry conditions with the battery leads and solar plugs disconnected. Read the [safety essentials]({{ '/docs/operation/#safety-essentials' | relative_url }}).

1. **Choose the position.** Use a stable 4–6 inch pole with clear sunlight, safe enclosure access, and clearance below the panel. In the Northern Hemisphere, face the panel toward true south year-round. Keep the supplied tilt and avoid shade, especially with the low winter sun. Check that the pole and foundation can support the assemblies and local wind loading.
2. **Attach the enclosure first.** Support the box at the chosen height. Seat both rear brackets against the pole, wrap and engage both bands, and keep cables clear. Snug the clamps with the Phillips tool and finish firmly by hand. With a drill/driver, use a low clutch setting and finish with a screwdriver; do not use impact mode or overtighten.
3. **Attach the panel assembly.** With a helper supporting the frame, position its bracket above the enclosure and secure its own mounting band. Tighten firmly by hand and keep supporting it until secure.
4. **Check before connecting.** Neither assembly should slip or rotate during a gentle hand check. Confirm that the door opens freely and cables have slack and remain clear of sharp edges and clamps. This check does not establish a wind-load rating.

<figure class="documentation-photo documentation-photo-compact" aria-label="Photo placeholder: completed pole-mounted station"><div><span class="photo-placeholder-mark" aria-hidden="true">+</span><strong>Finished pole installation</strong><span>Photo pending · panel support, enclosure mounts, and cable routing</span></div></figure>

## Start and check the station

Follow the complete [startup procedure]({{ '/docs/operation/#initial-startup' | relative_url }}): **battery first, wait at least 10 seconds, then solar**. Confirm a normal controller state, solar input when sunlight is available, and operation of a compatible device. Support cables and close the enclosure.

Record the installed models, battery/controller settings, drawing revision, protection details, and any changes from the reference configuration. Use the [operation guide]({{ '/docs/operation/' | relative_url }}) for normal use and shutdown.

## What remains to finish the build package

- Dimensioned aluminum-frame drawings and verified joint/fastener details.
- An as-built electrical schematic with wire gauges, fuse ratings, disconnects, and connector identification.
- Exact part numbers and quantities matched to the installed prototype.
- The test evidence and environmental limits for that configuration.

These gaps concern fabrication and repeatability. The reviewed owner manual already documents mounting the prepared assemblies, startup, day-to-day use, shutdown, and maintenance.
