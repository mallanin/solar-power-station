---
title: Operation & maintenance
nav_order: 7
permalink: /docs/operation/
---
<span id="keep-the-station-running"></span>
# Operation & maintenance

Use this guide with the reference station: a prewired SmartSolar 75/15, 12.8 V / 50 Ah LiFePO4 battery, solar panel, and regulated USB-C output. It adapts the team's reviewed manual for the web. Keep the [complete user manual (PDF)]({{ '/assets/downloads/openpowerbox-user-manual.pdf' | relative_url }}) with the station.

<div class="quick-order"><div><span>Start</span><strong>Battery → wait 10 seconds → solar</strong></div><div><span>Full shutdown</span><strong>Load off → solar off → battery off</strong></div></div>

## On this page

- [Safety essentials](#safety-essentials)
- [Initial startup](#initial-startup)
- [Day-to-day operation](#day-to-day-operation)
- [VictronConnect and indicators](#read-the-controller-status)
- [Shutdown and storage](#shutdown-and-storage)
- [Troubleshooting](#troubleshooting)
- [Care and repair](#care-and-repair)
- [Replacement parts and support](#replacement-parts-and-support)

## Safety essentials

This is a low-voltage DC system, not a household mains supply. A battery short circuit can still cause burns, arcing, or fire. The battery stores energy at night, and the solar panel generates electricity in light.

| Hazard | What to do |
|:---|:---|
| Short circuit, arcing, or burns | Remove metal jewelry and use insulated tools. Never bridge terminals, reverse polarity, bypass protection, or connect a load directly to the battery. Do not separate solar connectors while current is flowing. |
| Falling panel or enclosure | Use two people or suitable lifting support. Support each assembly until its own mounting hardware is secure. Keep people clear below it. Do not lift by cables, the lid, or panel glass. |
| Sharp edges and pinch points | Wear work gloves for brackets. Keep fingers clear of bands, frame joints, and the enclosure hinge. Control the door in wind. |
| Heat, moisture, and corrosion | Keep the enclosure closed and entries sealed. Do not install in standing water or service in rain. Keep vents clear and follow the battery maker's charging-temperature limits. |
| Smoke, hissing, swelling, strong odor, or rapid heating | Move away, keep others clear, and contact emergency services. Do not approach to disconnect or move a distressed battery. |

Wear safety glasses and closed-toe footwear. Use work gloves for metalwork, suitable access equipment, and site-required head protection for elevated work. Ordinary work gloves do not provide electrical protection.

## Initial startup

Complete the [mounting checks]({{ '/docs/build/#pole-mounted-reference-build' | relative_url }}) before electrical setup. The controller and USB output module should already be wired. Work on one battery terminal at a time using insulated tools.

### Connect the battery first

1. **Prepare.** Leave solar plugs disconnected and protect their ends from contact, dirt, and moisture. Unplug USB devices. Check that the battery is secure and leads, ring terminals, and terminal hardware are undamaged.
2. **Identify polarity.** Match the positive lead to the battery's **+** post and the negative lead to **−**. The reference leads are red and black, but confirm the markings rather than relying on color alone.
3. **Attach positive.** Remove the positive terminal bolt, place the ring terminal flat against its contact surface, and refit the supplied hardware in the battery manufacturer's specified order. Tighten firmly by hand with an insulated hand tool; do not use a drill. Cover the positive connection.
4. **Attach negative.** Repeat for the negative lead and post. Keep the tool clear of the opposite terminal and metal enclosure. Confirm both lugs are secure and cannot rotate, then restore terminal covers.
5. **Wait at least 10 seconds.** In [VictronConnect](#read-the-controller-status), confirm the controller recognizes a 12 V system and reports no error. Leave the supplied battery settings unchanged.

### Connect solar and start

1. **Cover the panel fully** with an opaque cover while joining the plugs. Keep the USB load disconnected and do not touch connector contacts.
2. **Match the labeled leads.** Connect panel positive to the controller's PV-positive lead, and panel negative to PV-negative. Never connect the panel's two leads to each other. Check plugs are clean and dry, push each matching pair together until it locks, and gently check engagement by the connector bodies. Do not pull the wires.
3. **Remove the cover.** In sunlight, check for solar input and a normal charging state in VictronConnect. A full battery may draw little charging current. Stop if an error, unusual heat, or odor appears.
4. **Finish setup.** Support the cables, keep them clear of the door and sharp edges, and close and latch the enclosure. Connect a compatible device using the steps below.

The owner setup uses the supplied leads; it does not require opening the controller's screw terminals. **BATT** identifies battery connections, **PV** identifies panel connections, and **LOAD** feeds the output module.

## Day-to-day operation

1. **Inspect.** Look for loose mounts, cracked glass, damaged cables, an open door, water, or unusual odor. If anything is abnormal, keep the load disconnected and use [troubleshooting](#troubleshooting).
2. **Connect a compatible device.** Check its voltage and power requirements against the output label. The station's continuous design target is 15 W+; use the installed output's rating to determine device compatibility. Fully seat a compatible, approved USB-C cable; do not force connectors or attach an inverter, bare-wire adapter, or unapproved splitter.
3. **Confirm operation.** Check the device's power/charging indicator. Keep the cable supported and away from pinch points, the ground, and standing water. Close the enclosure and unused port covers.
4. **Monitor.** Use VictronConnect to check charging state, solar input, battery voltage, load current, and errors.
5. **Let charging run automatically.** Leave solar connected during normal use. Sunlight supports the load and battery charging; stored energy supplies the load when sunlight is insufficient. Reduce unnecessary loads during extended cloudy weather.
6. **Finish with the device.** Shut it down normally and unplug its USB cable by the connector body. The station may remain charging; this is not a full electrical shutdown.

### Automatic recovery after low battery

During a prolonged solar shortfall, the controller can disconnect its load output to protect the battery. With automatic load reconnection configured, output resumes when solar charging restores the battery above the configured reconnect threshold. The threshold depends on the selected load-control mode. [Victron load-output settings](https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/configuration-and-settings.html)

Restoring output power does not guarantee that every connected device restarts itself. Check the device's power-return behavior when commissioning an unattended installation, along with the installed battery's BMS recovery behavior. This recovery description concerns low-battery shutdown; damage or a persistent fault requires inspection.

## Read the controller status

Enable Bluetooth, open [VictronConnect](https://www.victronenergy.com/victronconnectapp) near the station, and select the SmartSolar 75/15. Follow the pairing instructions supplied with the controller. Use the **Status** and **History** views to monitor charging and errors; do not change charging or load-protection settings during normal use.

| Indication | Meaning and action |
|:---|:---|
| Bulk / blue | Main charging stage. A brief blue blink can indicate insufficient solar power to start charging. |
| Absorption / yellow | Later charging stage; allow the configured cycle to continue. |
| Float / green | Maintenance stage after the charging cycle. It is not a precise remaining-capacity gauge. |
| Unexpected flashing or error | Read the app's error code and consult the SmartSolar manual. Do not repeatedly reset the station. |

Controller load current is measured at the controller output, not necessarily at the USB device. Battery voltage alone is not a precise fuel gauge for a LiFePO4 battery.

## Shutdown and storage

**Load off is not power off.** The controller has no built-in master switch. Solar and battery circuits may remain energized after a USB device is unplugged.

### A normal pause

Shut down and unplug the device, then close the port cover and enclosure. Leave the station charging if the installation remains safe. There is no need to disconnect solar every evening.

### Full shutdown for servicing or removal

1. **Stop the load.** Shut down the device and unplug it from USB.
2. **Disconnect solar first.** Fully cover the panel with an opaque cover and confirm solar charging current has stopped before unplugging. If you cannot confirm this, leave the plugs connected and have a competent installer check. Disconnect both panel plug pairs by their bodies. Treat panel contacts as live whenever light reaches the panel.
3. **Disconnect the battery second.** Use an insulated hand tool to remove **negative first, then positive**. Insulate loose lugs and keep them away from the other post and enclosure. Cover both battery posts; they still contain stored energy.
4. **Verify before internal work.** A person competent in low-voltage DC service should check the intended work points with a suitable meter. Dark indicators do not establish that wiring is safe to touch.
5. **Support assemblies for removal.** After disconnection and cable removal, support and remove the panel first, then the enclosure. Keep hands clear of band ends and pinch points.

### Storage and restart

Store disconnected assemblies dry and protected from impact, with battery terminals covered. Follow the battery maker's storage-charge, temperature, and inspection instructions. Do not leave a depleted battery unattended in long-term storage.

Before restarting, inspect the mounts, cables, seals, and battery. Reconnect **battery before PV** using the initial-startup procedure. Correct water ingress, battery abnormalities, and recurring faults before restarting.

## Troubleshooting

Start with external observations and the controller's error message. If safe checks do not solve the problem, stop and contact a qualified service person. Never open the battery or bypass protection.

| Symptom | Safe check / action | Stop and seek help when… |
|:---|:---|:---|
| USB device will not power on | Check requirements, port, and cable seating. Try one known-good compatible cable/device. Look for a load-off or low-battery indication. | There is still no output, visible damage, or repeated shutdown. |
| No solar charging | At night or in shade, low input is expected. In daylight, check shade, dirt, and controller status. A full battery may need little current. | Zero input persists in clear sun, or an error appears. |
| Device switches off overnight | Remove unnecessary loads and allow normal solar recharge; the battery may be depleted or a protection limit reached. | Do not bypass low-voltage protection or repeatedly force output on. |
| Hot USB connection | Stop the device and disconnect only if safe. Inspect externally for damage or poor seating. | There is melting, odor, discoloration, arcing, or recurring heat. |
| Moisture inside | Stop use, keep clear of exposed electrical parts, and arrange safe shutdown and inspection. | Do not restart simply because visible water has dried. |
| Mount slips, rattles, or bends | Keep people clear below it and arrange support before adjustment. | Do not climb the pole or tighten an unsupported assembly. |
| Controller error / unusual LEDs | Read the error code and consult the manufacturer manual. | A fault persists or recurs. |
| Smoke, hissing, swelling, rapid heat | Move away, keep others clear, and call emergency services. | Do not approach to disconnect or move the battery. |

## Care and repair

Inspect more often after severe weather and in dusty or corrosive conditions. Internal work requires full shutdown and verification.

| When | Task |
|:---|:---|
| Before use / after a storm | Check movement, bands, glass, fallen objects, cables, and water entry. Keep clear of unstable mounts. |
| Monthly | Check accessible mounts, corrosion, door gasket, cable glands, covers, and cable supports. Confirm the door closes evenly and vents are clear. |
| When the panel is dirty | From safe ground-level access, use a soft cloth and the panel maker's cleaning method. Avoid abrasive tools and pressure washing. Never climb or lean on the panel. |
| At service / before redeployment | Have an installer check fasteners, terminals, protection, battery condition, and controller settings against component instructions. |

**USB cable replacement:** shut down the device and unplug both ends by their bodies. Fit an undamaged cable with matching connectors and required power rating. Check operation, then restore support and port protection.

**Mounting repairs:** support the panel or enclosure fully before replacing a band, bolt, or brace. Use the same approved part and tightening specification; inspect the pole and bracket before returning to use.

**Internal components:** a service person should shut down and verify, use matching components, preserve polarity and circuit protection, restore strain relief and seals, and repeat startup checks. Never repair inside the battery or bypass protection to stop repeated shutdowns.

## Replacement parts and support

Match the installed label, dimensions, connections, and electrical rating before ordering. Similar-looking parts can have different limits.

| Part | Reference identification |
|:---|:---|
| Charge controller | Victron SmartSolar MPPT 75/15; preserve installed battery and load settings |
| Battery | 12.8 V, 50 Ah LiFePO4; match orientation, dimensions, protection, and charging requirements |
| Panel | Nominal 200 W; match electrical limits, dimensions, holes, and connectors |
| USB module / cable | Match voltage profile, connector, cable rating, and mounting; advertised module wattage is not the system rating |
| Pole fixtures | Two enclosure mounts and a separate panel-frame mount, for the supplied 4–6 inch pole application |
| Frame hardware | Where fitted: 1/4-20 × 1 in stainless hex bolts, 1/4-20 nylon lock nuts, and 1/4 × 1-1/4 in fender washers; confirm each joint |
| Seals / glands | Match the enclosure profile and cable diameter |

Keep the battery, panel, and connector instructions with the station. For controller installation and faults, use the [official SmartSolar manual](https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/index-en.html). Obtain the battery instructions for the exact installed model. [Parts and sourcing budget →]({{ '/docs/cost/' | relative_url }})
