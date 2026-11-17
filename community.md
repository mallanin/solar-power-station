---
title: Community & feedback
nav_order: 8
permalink: /community/
form_kind: feedback
---
# Community & feedback

Built a system, changed the design, or found something we should improve? Tell us about it.

Send a private message to the team, or submit a build story for this page. **Public stories appear only after team review.** Your email address is not published.

{% include contact_form.html %}

## Build stories

{% if site.data.community_posts and site.data.community_posts.size > 0 %}
<div class="community-stories">
{% for post in site.data.community_posts reversed %}
<article class="community-story"><h3>{{ post.title | escape }}</h3><p class="story-byline">{{ post.author | escape }} · {{ post.date | date: "%B %-d, %Y" }}</p><p>{{ post.body | escape | newline_to_br }}</p></article>
{% endfor %}
</div>
{% else %}
<p class="community-empty">No build stories have been published yet. Share what you built, what you changed, and what you learned.</p>
{% endif %}

[Interested in purchasing a complete system? →]({{ '/contact/' | relative_url }})
