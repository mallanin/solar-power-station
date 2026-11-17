---
title: Build your system
nav_order: 5
permalink: /docs/build/
---
<span id="build-the-reference-station"></span>
# Build your system

The reference station has two main assemblies: a solar panel on an aluminum frame, and an enclosure containing the battery, controller, and USB output hardware. Both attach to an existing suitable pole.

Use [system design]({{ '/docs/system-design/' | relative_url }}) for the specifications and the [parts budget]({{ '/docs/cost/' | relative_url }}) for quantities and suppliers.

## Solar panel assembly

Build the frame on a workbench before attaching it to the pole. The cut lengths below come from our aluminum prototype's bill of materials; the photos show its assembly.

### Tools and hardware

- **Tools:** saw and blade suitable for aluminum, drill and metal bits, rivet gun for 3/16″ rivets, clamps, tape measure, square, marker, center punch, file or deburring tool, and wrenches or sockets for the selected bolts.
- **Hardware:** two 8 ft lengths of 1″ × 1″ × 1/16″ aluminum angle; 18 medium 3/16″ aluminum rivets; four 1/4″-20 × 1/2″ panel screws, four matching locknuts, and eight nylon washers; two pole-mount brackets with clamp bands. Bracket-to-frame bolts: **pending**.
- **Work setup:** eye and hearing protection, a stable bench, and padding for the panel. Clamp stock before cutting or drilling. Keep the panel disconnected throughout mechanical assembly.

### 1. Match the frame to your panel

Measure between the centers of the panel's factory mounting holes. The two panel rails must line up with those holes, with clearance for the junction box and leads. Check both ends before drilling.

<figure class="build-figure">
  <div class="build-annotated-photo">
    <img src="{{ '/assets/images/panel-rail-spacing.jpg' | relative_url }}" alt="Rear of the prototype panel, with two aluminum rails bolted to its frame. A white double arrow marks the spacing between the rails." width="1600" height="901" loading="lazy">
    <svg viewBox="0 0 1600 901" aria-hidden="true" focusable="false">
      <defs><marker id="rail-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 10 5 L 0 0 L 0 10 Z" fill="white"/></marker></defs>
      <g class="build-arrow"><path d="M 410 386 L 1040 525" fill="none" stroke="white" stroke-width="4" marker-start="url(#rail-arrow)" marker-end="url(#rail-arrow)"/><path d="M 399 410 L 421 362 M 1034 551 L 1046 499" fill="none" stroke="white" stroke-width="3"/></g>
      <g transform="translate(725 418) rotate(12.4)"><rect x="-176" y="-32" width="352" height="47" rx="7" fill="#203a31" fill-opacity=".94"/><text x="0" y="0" text-anchor="middle" fill="white" font-size="24" font-family="Arial, sans-serif">Match panel-hole spacing</text></g>
    </svg>
  </div>
  <figcaption>Set the spacing from your panel's mounting-hole centers, rather than its outside edges. Reference spacing: <strong>pending</strong>.</figcaption>
</figure>

**Different panel?** Adjust the rail spacing and crossmember lengths to suit its mounting pattern. A larger panel also changes the wind load on the frame and pole.

### 2. Cut and deburr the aluminum

Mark these pieces on the angle stock, allowing for the material removed by each saw cut. File the cut ends and remove burrs from every drilled hole.

| Piece | Quantity | Cut length |
|:--|:--:|--:|
| Panel rail | 2 | 33″ |
| Support | 2 | 18.8″ |
| Back crossmember | 2 | 30″ |
| Rivet tab (the short “nub”) | 4 | 0.5″ |

Each 8 ft length can supply one rail, one support, one back crossmember, and two tabs. Cut the small tabs from securely held stock; keep hands clear of the blade.

### 3. Assemble and rivet the frame

Lay out the two rails, two back crossmembers, and two supports as shown. Use the four short tabs to join the members where their flanges meet. Clamp the parts together and check the rail spacing before setting rivets.

Tab positions from the ends: **pending**. Rivet-hole positions: **pending**. Panel tilt angle: **pending**.

Drill the clamped joints to the rivet manufacturer's specified hole size, deburr, and set the rivets. Match the rivet grip range to the combined material thickness. The reference bill of materials records 18 rivets across the frame.

<div class="build-joint-layout">
  <figure class="build-figure">
    <img src="{{ '/assets/images/panel-rivet-tab.jpg' | relative_url }}" alt="Close view of a short aluminum angle tab joining two frame members, with a rivet in one flange." width="1600" height="901" loading="lazy">
    <figcaption>A short angle tab joins the adjoining flanges. Finish all drilling and deburring before riveting the joint.</figcaption>
  </figure>
  <figure class="build-figure">
    <img src="{{ '/assets/images/panel-frame-assembly.jpg' | relative_url }}" alt="Aluminum panel frame standing on the workshop floor during assembly, showing the two rails, back crossmembers, and supports." width="901" height="1600" loading="lazy">
    <figcaption>The assembled frame before the panel is fitted. Blue tape temporarily held the layout; it is not a structural part.</figcaption>
  </figure>
</div>

### 4. Attach the pole-mount brackets

Center one bracket on each back crossmember, with the band guides facing the pole. Use the bracket slots to mark the holes, then remove the bracket, drill, and deburr. Bolt each bracket to the frame using **pending** bolts, washers, and nuts. Bracket-hole positions: **pending**.

Thread the hose-clamp bands through the bracket guides. Leave them open for the later pole-mounting step; do not drill through the bands.

<figure class="build-figure">
  <img src="{{ '/assets/images/panel-pole-bracket.jpg' | relative_url }}" alt="A slotted stainless pole-mount bracket held against an aluminum crossmember, showing the two central guides for the clamp band." width="1600" height="1200" loading="lazy">
  <figcaption>Bracket alignment before fastening. The slotted ends attach to the frame; the raised guides carry the clamp band.</figcaption>
</figure>

**Different pole?** Select bands that fit its diameter and brackets suitable for the assembly's load. Keep the clamp screws accessible after the panel is fitted.

### 5. Bolt the frame to the panel

Support the panel face-down on a clean, padded surface. Align the rails with the factory mounting holes, then fit the four panel screws, locknuts, and eight washers. Check that each screw fully engages its locknut and cannot touch the panel backsheet. If your panel frame is thicker, select a suitable screw length.

<figure class="build-figure">
    <img src="{{ '/assets/images/panel-bolt-attachment.jpg' | relative_url }}" alt="Close view of an aluminum rail bolted through the solar panel's perimeter frame, with the adjacent support and riveted joint visible." width="1200" height="1600" loading="lazy">
  <figcaption>The rail attaches to the panel's metal perimeter frame. Use the panel's approved mounting holes; keep drilling and fasteners clear of the cells and backsheet.</figcaption>
</figure>

Check that the frame sits without twisting, all joints are secure, and the leads cannot rub against sharp edges or become trapped under a rail. The panel assembly is then ready for pole mounting.

## Electrical housing assembly

Pending. Coming soon: a step-by-step box build.

<span id="pole-mounted-reference-build"></span>
## Pole mounting

Pending. Coming soon: exact mount builds for aluminum and wood.
