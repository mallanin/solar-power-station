In our demonstration, we used **Wi-Fi HaLow networking units to remotely actuate a pump**. This combines ongoing communication and monitoring with an intermittent high-power task.

The system diagram shows the connections: commands travel to the Raspberry Pi and relay, while readings from the [Victron MPPT]({{ '/docs/system-design/#why-victron-mppt' | relative_url }}) return to the input computer. Each station supplies its own electrical power.

<figure class="design-diagram network-figure">
<div class="diagram-legend"><span class="power-legend">Electrical power</span><span class="signal-legend">Commands and readings</span></div>
{% include system-network.svg %}
<figcaption>Power and data paths in the two-station system. <a href="{{ '/assets/images/system-network.svg' | relative_url }}">Open full-size diagram →</a></figcaption>
</figure>
