Several boxes can power radios, cameras, and sensors across a farm or large property. Heltec advertises **up to about 1 km for the HT-HD01 link**, with longer links possible in clear line of sight. [Heltec specifications](https://heltec.org/project/ht-hd01/)

The four-station example below uses a HaLow hub and three remote stations in mesh mode. The orchard and gate stations link directly to the hub; the pump station reaches it through the orchard relay. [Mesh setup guide](https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/meshgate)

Each box powers its own equipment, while linked radios carry readings and commands across the property. Relaying through multiple stations can extend the network over miles. An internet or satellite uplink at the hub lets you monitor and actuate that equipment from across the country.

<figure class="design-diagram property-network-figure">
<a href="{{ '/assets/images/property-network.svg?v=2' | relative_url }}" aria-label="Open the four-station property network diagram at full size"><img src="{{ '/assets/images/property-network.svg?v=2' | relative_url }}" alt="Square property with the hub in one corner. Orchard and gate stations connect directly to the hub. A pump station connects through the orchard relay. Circles illustrate radio reach." width="1000" height="1100" loading="lazy"></a>
<figcaption>The pump station reaches the hub through the orchard relay. Each station supplies its own power. <a href="{{ '/assets/images/property-network.svg?v=2' | relative_url }}">Open full-size diagram →</a></figcaption>
</figure>
