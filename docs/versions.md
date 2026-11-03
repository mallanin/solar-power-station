---
title: Versions & history
nav_order: 7
permalink: /docs/versions/
---
# Versions & history

<span class="status-pill">Current design: Draft · No hardware releases yet</span>

Use a complete design version when building, and page history when you want to understand an individual edit.

## Current documentation

| Version | Status | Where to read it |
|:---|:---|:---|
| Working draft | In development; not a released build specification | [Current guide]({{ '/' | relative_url }}) |

No v1.0 or v2.0 design has been released. The draft may change as requirements, components, and test evidence are added.

## Two kinds of history

| Layer | What it answers | How it works |
|:---|:---|:---|
| Page history | “Who changed this paragraph, when, and why?” | **View page history** below any page opens its GitHub commit history and comparisons. |
| Design release | “Which instructions and parts belong to the system I am building?” | A named snapshot will keep the complete compatible design package together. |

## Planned design releases

A future **v1.0** release will identify the supported electrical configuration and physical reference build. It should bundle:

- Sizing assumptions, supported loads, and operating limits.
- Exact parts list and compatible component selections.
- Electrical schematic and mechanical drawings with revisions.
- Build and commissioning instructions.
- Test results, known limitations, and operation guidance.
- A readable change summary and any compatibility notes.

A materially changed design can become **v2.0**. Small documentation corrections can use a patch release, such as **v1.0.1**, with a clear explanation of whether hardware is affected. These names are examples of the planned convention, not existing releases.

## What builders will see

Once releases exist, the site should offer **Latest / v1.0 / v2.0** as complete documentation sets. Switching a version should change the entire guide, not just the system design page. Released pages should display the version and whether it is current or superseded.

Until that archive is implemented, published GitHub releases can provide downloadable snapshots of the full documentation and design files. A future release should not be presented as an independently browsable website version until that version is actually hosted.

## Keep your build matched

Record the design release with your completed build. Use the parts, schematic, enclosure details, and procedures from that release. Check release notes before adopting changes to an older build.

## Development notes

[Project updates]({{ '/updates/' | relative_url }}) record work in progress. They provide context but do not define a released design. [Repository history](https://github.com/mallanin/solar-power-station/commits/main/) records all saved changes.
