---
title: Size your system
nav_order: 3
permalink: /docs/sizing/
---
# Size your system

<span class="status-pill">Draft · Sizing method and examples pending</span>

Start with what you want to run and how long you want it to keep running. The goal of this guide is to turn those needs into a documented, compatible electrical configuration.

<div class="placeholder-note">This worksheet collects the inputs for sizing. Component recommendations and worked calculations have not yet been supplied or validated.</div>

## 1. Describe your loads

**Power (W)** describes how quickly a device uses energy. **Energy (Wh)** describes how much it uses over time. Both matter: the system must support simultaneous loads and have enough energy for their operating schedule.

| Device | Quantity | Running power per device (W) | Hours per day | Startup demand / duration | Must run during low sun? |
|:---|:---|:---|:---|:---|:---|
| [Your device] | TBD | TBD | TBD | TBD | Yes / No |

Use device specifications or measurements. Record which devices run at the same time and which can be turned off when reserve is low.

**Daily energy demand:** TBD Wh/day  
**Maximum simultaneous running load:** TBD W  
**Startup demand and duration:** TBD

## 2. Choose your reserve

How long should the essential loads operate without useful solar charging? Specify the load schedule along with the reserve duration; “two days of reserve” is incomplete without knowing what runs during those days.

**Essential loads:** TBD  
**Reserve duration:** TBD hours or days  
**Expected conditions:** [Temperature, seasonal use, and other relevant constraints.]

The battery selection will account for usable capacity, operating limits, conversion losses, and the intended reserve. Nameplate capacity and usable delivered energy will be reported separately.

## 3. Describe the solar resource

**Location and season of use:** TBD  
**Shading and available array area:** TBD  
**Candidate panel orientation:** TBD  
**Desired recovery time after using reserve:** TBD

The array must be evaluated for expected site conditions and the energy needed to run loads and recharge storage. The reference design will state its weather assumptions and limits; annual averages alone do not demonstrate performance through a low-sun period.

## 4. Translate needs into components

| Your requirement | Component decision | What the finished guide will provide |
|:---|:---|:---|
| Simultaneous load and startup demand | Output conversion / inverter, if applicable | Supported continuous and surge ratings |
| Daily use and desired reserve | Battery capacity and management | Nominal capacity, usable energy, and expected runtime |
| Site, season, loads, and recharge time | Solar array | Array size and expected energy under stated conditions |
| Array and battery operating ranges | Charge controller | Reviewed compatible operating limits |
| Full electrical configuration | Wiring, protection, isolation, and connections | Matching reviewed schematic and parts |

[Add the reviewed calculation method, assumptions, sources, margins, and worked example here.]

## 5. Choose a documented configuration

| Configuration | Intended use | Power / reserve | Validation status |
|:---|:---|:---|:---|
| Reference configuration | TBD | TBD | Not yet specified |
| Alternative configurations | To be documented | TBD | Not validated |

The finished guide should let a builder say: **“For these loads and this reserve, use this documented combination.”** There are no recommended component combinations yet.

Once your electrical configuration is established, choose the [physical installation]({{ '/docs/build/' | relative_url }}). Mounting style alone does not determine power or reserve.
