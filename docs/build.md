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
- **Hardware:** two 8 ft lengths of **[1″ × 1″ × 1/16″ aluminum angle]({{ '/docs/cost/' | relative_url }}#part-aluminum-frame-stock)**; 18 medium **[3/16″ aluminum rivets]({{ '/docs/cost/' | relative_url }}#part-aluminum-rivets)**; four **[1/4″-20 × 1/2″ panel screws]({{ '/docs/cost/' | relative_url }}#part-hex-screws)**, four **[matching locknuts]({{ '/docs/cost/' | relative_url }}#part-locknuts)**, and eight **[nylon washers]({{ '/docs/cost/' | relative_url }}#part-nylon-washers)**; two **[pole-mount brackets]({{ '/docs/cost/' | relative_url }}#part-pole-mounting-kits)** with clamp bands. Bracket-to-frame bolts: **pending**.
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

[Download the panel-mount CAD (SolidWorks assembly and parts, ZIP)]({{ '/assets/downloads/solar-panel-solidworks.zip' | relative_url }})

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

Prepare the cable entries, solar leads, and battery leads with the **battery and solar panel disconnected**. The lengths below fit our enclosure layout; check your routing before cutting.

### Tools

Drill with a step bit or suitable hole saw, wire cutters, 10 AWG wire strippers, terminal crimper, heat gun, tape measure, deburring tool, small insulated screwdriver, torque screwdriver, wrench or socket for the bracket nuts, and safety glasses.

<aside class="enclosure-fit-note" aria-labelledby="enclosure-fit-title">
  <strong id="enclosure-fit-title">Choosing an enclosure</strong>
  <p>Many enclosures can work. Check usable internal depth first: the battery is the largest component. Our <strong><a href="{{ '/docs/cost/' | relative_url }}#part-battery">NERMAK 50 Ah battery</a></strong> is <a href="https://www.amazon.com/dp/B0FBK6J924">listed at 7.59″ × 5.11″ × 6.14″ (L × W × H)</a>. In the orientation shown, allow <strong>more than 5.11″ of internal depth</strong>, with clearance for wiring and mounts.</p>
  <p>Capacity does not determine size: 50 Ah batteries—and larger models—can have different dimensions. If changing the box or battery, size the enclosure around the battery and remaining components. Adjust mounts and cable lengths to your layout; the basic assembly approach stays the same.</p>
</aside>

### 1. Attach the pole-mount brackets

1. Center two **[pole-mount brackets]({{ '/docs/cost/' | relative_url }}#part-pole-mounting-kits)** horizontally on the back of the empty enclosure, one above the other. Space them evenly between the top and bottom. Exact positions are flexible; leave clearance for the internal components.
2. Mark the holes through the brackets’ end slots. Remove the brackets, drill to suit the bolts, and deburr. Bracket bolt size: **pending**.
3. Feed the bolts through the brackets and enclosure, add washers and nuts inside, and tighten securely without distorting the enclosure. Seal the new holes.
4. Feed a hose-clamp band through each bracket’s center guides, ready to wrap around the pole.

<div class="build-photo-pair">
  <figure class="build-figure">
    <img src="{{ '/assets/images/enclosure-brackets-off-pole.jpg' | relative_url }}" alt="Back of the enclosure off the pole, showing two horizontal mounting brackets with bolts in their end slots and hose clamps through the center guides." width="1200" height="1600" loading="lazy">
    <figcaption>Off the pole: two brackets bolted to the back of the enclosure.</figcaption>
  </figure>
  <figure class="build-figure">
    <img src="{{ '/assets/images/enclosure-brackets-on-pole.jpg' | relative_url }}" alt="The same two enclosure brackets installed on a pole, with a hose-clamp band wrapped around the pole at each bracket." width="1200" height="1600" loading="lazy">
    <figcaption>Installed: the clamp bands wrap around the pole and hold both brackets against it.</figcaption>
  </figure>
</div>

<span id="1-add-the-solar-cable-entries"></span>
### 2. Add the solar cable entries

Drill two holes in the top of the **[enclosure]({{ '/docs/cost/' | relative_url }}#part-enclosure)** for the solar input. Choose positions that clear the door seal, mounting plate, and components, with room to tighten the fittings inside.

Fit one **[cable gland]({{ '/docs/cost/' | relative_url }}#part-cable-glands)** per hole, using its seal and locknut. Match the hole to the gland's specified mounting diameter and the gland's clamping range to the cable jacket. Hole diameter: **21/32″**. Deburr the holes and remove all chips before installing electronics.

<figure class="build-figure electrical-entry-photo">
  <img src="{{ '/assets/images/enclosure-solar-entries.jpg' | relative_url }}" alt="Two cable-gland positions on the enclosure top, with one gland beside the open mounting hole." width="1200" height="1600" loading="lazy">
  <figcaption>Two sealed cable entries: one for the positive solar lead and one for the negative lead.</figcaption>
</figure>

<span id="2-cut-the-pv-leads-to-2-ft"></span>
### 3. Cut the PV leads to 2 ft

Cut one red and one black **[10 AWG solar cable]({{ '/docs/cost/' | relative_url }}#part-solar-cabling)** to **24″ (2 ft)**, keeping the original PV connector on one end of each. Save the excess wire for the battery leads.

Strip approximately ¼″ of insulation from the cut end of each lead. Feed these ends through the cable glands into the enclosure; the PV connectors stay outside. Tighten each gland around the insulated jacket for sealing and strain relief.

<figure class="build-figure">
  <img src="{{ '/assets/images/pv-leads-cut.jpg' | relative_url }}" alt="Red and black solar leads, each with a PV connector retained on one end and a cut bare end on the other." width="1600" height="1200" loading="lazy">
  <figcaption>The two solar-input leads, cut to length with their original connectors retained.</figcaption>
</figure>

<span id="3-cut-and-strip-the-battery-leads"></span>
### 4. Cut and strip the battery leads

From the leftover cable, cut **12″ of black wire** and **8″ of red wire**. These will run between the battery and charge controller. Strip both ends of each wire: one end for the controller's screw terminal, the other for a ring terminal. Match each strip length to the receiving terminal.

<figure class="build-figure">
  <img src="{{ '/assets/images/battery-leads-stripped.jpg' | relative_url }}" alt="Close view of stripped red and black wire ends with the conductor strands exposed." width="1600" height="1200" loading="lazy">
  <figcaption>Keep the strands intact. The terminal should clamp bare conductor, with no loose strands or exposed copper outside the connection.</figcaption>
</figure>

These lengths fit well in this system design. For a different layout, leave plenty of length in all cabling.

<span id="4-crimp-the-ring-terminals-and-add-heat-shrink"></span>
### 5. Crimp the ring terminals and add heat-shrink

The battery connectors are **[crimp ring terminals]({{ '/docs/cost/' | relative_url }}#part-battery-ring-terminals)**. Use terminals rated for 10 AWG wire, with a ring hole that matches the battery's terminal bolt.

1. Slide a piece of **[heat-shrink tubing]({{ '/docs/cost/' | relative_url }}#part-heat-shrink)** onto each wire before fitting the terminal.
2. Insert the stripped end fully into the terminal barrel, then crimp with the matching tool and die. Gently pull the terminal to check that it holds.
3. Slide the tubing over the crimp barrel and onto the wire insulation. Shrink it with a heat gun, leaving the flat ring contact exposed. Repeat for the other lead.

<div class="build-photo-pair">
  <figure class="build-figure">
    <img src="{{ '/assets/images/ring-terminal-preparation.jpg' | relative_url }}" alt="Stripped black wire beside a yellow-insulated ring terminal and a short piece of heat-shrink tubing before assembly." width="1600" height="1200" loading="lazy">
    <figcaption>Before: stripped wire, ring terminal, and heat-shrink tubing.</figcaption>
  </figure>
  <figure class="build-figure">
    <img src="{{ '/assets/images/ring-terminal-finished.jpg' | relative_url }}" alt="Finished ring terminal on the black wire, with heat-shrink covering the crimp and the ring contact left exposed." width="1600" height="1200" loading="lazy">
    <figcaption>After: the crimp is insulated and the ring is ready for the battery bolt.</figcaption>
  </figure>
</div>

<span id="5-identify-the-controller-and-battery-ends"></span>
### 6. Identify the controller and battery ends

<figure class="build-figure">
  <img src="{{ '/assets/images/battery-leads-complete.jpg' | relative_url }}" alt="Completed battery leads: a longer black wire and shorter red wire, with stripped controller ends on the left and ring terminals on the right." width="1600" height="1200" loading="lazy">
  <figcaption>Finished battery leads: 12″ black and 8″ red. Stripped ends go to the controller; ring terminals go to the battery connection.</figcaption>
</figure>

The stripped ends belong in the **[charge controller]({{ '/docs/cost/' | relative_url }}#part-charge-controller)** terminals marked **BATT**: red to **+**, black to **−**. The ring ends connect to the corresponding **[battery]({{ '/docs/cost/' | relative_url }}#part-battery)** terminals, with the required protection in the positive path. The solar leads belong in **PV + / −**, not BATT. Verify polarity with the terminal markings and a multimeter before connecting power.

<span id="6-add-the-optional-internal-mounts"></span>
### 7. Add the optional internal mounts

Internal mounts are optional, but make components easier to fit and remove.

#### Mounting board and MPPT holder

Print the **[universal mounting board (substrate)]({{ '/docs/cost/' | relative_url }}#cad-mounting-board)** and glue it near the center-left of the enclosure’s mounting plate. Use an adhesive compatible with the printed part and mounting surface.

Print the white **[MPPT mount]({{ '/docs/cost/' | relative_url }}#cad-mppt-mount)**. This holder supports the **[charge controller]({{ '/docs/cost/' | relative_url }}#part-charge-controller)** and lets it attach to the gray substrate, as shown below. All 3D-printed component mounts attach to the board with the same bolt-and-nut size: **pending**.

<div class="build-photo-pair">
  <figure class="build-figure">
    <img src="{{ '/assets/images/internal-board-placement.jpg' | relative_url }}" alt="Wider view of the gray mounting board installed near the center-left of the enclosure, with the MPPT holder attached." width="1200" height="1600" loading="lazy">
    <figcaption>Place the board near the center-left, leaving room for the battery on the right.</figcaption>
  </figure>
  <figure class="build-figure">
    <div class="build-annotated-photo mount-photo">
      <img src="{{ '/assets/images/internal-mppt-mount.jpg' | relative_url }}" alt="Close-up of the gray keyhole mounting board and white printed MPPT holder, with CAD links labeling each part." width="1200" height="1600" loading="lazy">
      <svg viewBox="0 0 1200 1600" xmlns="http://www.w3.org/2000/svg" aria-label="Links to mounting board and MPPT mount CAD files">
        <g fill="none" stroke="#fff" stroke-width="7" class="build-arrow" aria-hidden="true">
          <path d="M 590 138 L 700 138 L 700 300"/>
          <circle cx="700" cy="300" r="13" fill="#234d3c"/>
          <path d="M 625 1248 L 725 1248 L 725 1040"/>
          <circle cx="725" cy="1040" r="13" fill="#234d3c"/>
        </g>
        <a href="{{ '/docs/cost/' | relative_url }}#cad-mounting-board" aria-label="Mounting board CAD download in Parts and cost">
          <rect x="70" y="90" width="520" height="96" rx="16" fill="#234d3c"/>
          <text x="106" y="153" fill="#fff" font-family="system-ui, sans-serif" font-size="48" font-weight="600">Board CAD ↗</text>
        </a>
        <a href="{{ '/docs/cost/' | relative_url }}#cad-mppt-mount" aria-label="MPPT mount CAD download in Parts and cost">
          <rect x="105" y="1200" width="520" height="96" rx="16" fill="#234d3c"/>
          <text x="141" y="1263" fill="#fff" font-family="system-ui, sans-serif" font-size="48" font-weight="600">MPPT mount CAD ↗</text>
        </a>
      </svg>
    </div>
    <figcaption>The white holder connects the MPPT to the gray board. Select either label for its CAD file.</figcaption>
  </figure>
</div>

#### Battery restraint

Place the **[battery]({{ '/docs/cost/' | relative_url }}#part-battery)** in the bottom-right corner and mark its edges. Remove the battery, then cut leftover **[aluminum angle]({{ '/docs/cost/' | relative_url }}#part-aluminum-frame-stock)** into stops along the marked edges. Glue them in place as shown and let the adhesive cure before refitting the battery.

<div class="build-photo-pair">
  <figure class="build-figure">
    <img src="{{ '/assets/images/battery-restraint-installed.jpg' | relative_url }}" alt="Battery in the bottom-right corner of the enclosure with aluminum angle along its base to limit sliding." width="1200" height="1600" loading="lazy">
    <figcaption>Position the battery and mark where the stops should sit.</figcaption>
  </figure>
  <figure class="build-figure">
    <img src="{{ '/assets/images/battery-restraint-angle.jpg' | relative_url }}" alt="Battery removed to show two aluminum angle stops glued to the enclosure floor." width="1200" height="1600" loading="lazy">
    <figcaption>With the battery removed: aluminum stops glued along the marked edges.</figcaption>
  </figure>
</div>

#### Output-module mount

The **[output module]({{ '/docs/cost/' | relative_url }}#part-usb-c-output)** mounts to the **[universal mounting board]({{ '/docs/cost/' | relative_url }}#cad-mounting-board)** in the same way as the MPPT mount, using the shared bolts and nuts.

<span id="pole-mounted-reference-build"></span>
## Pole mounting

Pending. Coming soon: exact mount builds for aluminum and wood.
