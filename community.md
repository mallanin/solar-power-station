---
title: Community & contributions
nav_order: 8
permalink: /community/
form_kind: feedback
---
# Community & contributions

Share your experience, send the team a note, or propose an improvement to the project files.

<div class="participation-tabs" role="tablist" aria-label="Ways to participate" hidden>
<button type="button" id="team-tab" role="tab" aria-controls="team" aria-selected="true">Contact the team</button>
<button type="button" id="github-tab" role="tab" aria-controls="github" aria-selected="false" tabindex="-1">Improve on GitHub</button>
</div>

<section id="team" class="participation-panel" aria-labelledby="team-heading" markdown="1">

## Contact the team
{: #team-heading }

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

</section>

<section id="github" class="participation-panel" aria-labelledby="github-heading" markdown="1">

## Improve on GitHub
{: #github-heading }

You can follow the build guide without a GitHub account. If you want to improve the project files or documentation, GitHub provides a way to share your changes.

1. **Fork the repository.** This creates a copy of the project in your own GitHub account.
2. **Make your change.** Fix a page, document a build variation, or add supporting test results. Explain the conditions and limits of any measurements.
3. **Open a pull request.** This sends a proposal for the team to review and incorporate into the main project.

[View or fork the project on GitHub](https://github.com/mallanin/solar-power-station) · [GitHub’s guide to forks](https://docs.github.com/en/pull-requests/reference/forks)

For a question or missing information, [open an issue](https://github.com/mallanin/solar-power-station/issues).

### Before contributing

Keep explanations concise. Distinguish component ratings, calculations, design targets, and measured results. Share only material you have permission to contribute, and keep private information out of public files.

</section>

<script src="{{ '/assets/js/community-tabs.js' | relative_url }}" defer></script>
