---
title: Editing guide
nav_order: 9
permalink: /docs/contributing/
---
# Editing guide

Keep OpenPowerBox useful to builders with small, clear updates.

## Edit an existing page

1. Select **Edit this page on GitHub** at the bottom of the page and sign in.
2. Change the text. Use GitHub's **Preview** tab to check formatting.
3. Choose **Commit changes** and enter a short description, such as “Add battery selection rationale.”
4. For team review, create a new branch and open a pull request. A maintainer can also commit routine edits directly to `main`.
5. After changes reach `main`, the website rebuilds automatically. Check the repository's **Actions** tab if an update does not appear.

Public visitors can read without a GitHub account. Saving edits requires a GitHub account and either repository write access or a proposed contribution through a fork.

## Simple formatting

```markdown
## Section heading

Write a short paragraph here.

- First point
- Second point

**Important term:** explanation.

[Descriptive link](https://example.com)
```

## Upload a file or image

Upload images to `assets/images/` and documents to `assets/downloads/` using GitHub's **Add file → Upload files**. Use descriptive names, such as `enclosure-rev-a.pdf`.

Use the site's `relative_url` filter so links work under the project website address:

{% raw %}
```liquid
[Download drawing]({{ '/assets/downloads/enclosure-rev-a.pdf' | relative_url }})
![Enclosure assembly, revision A]({{ '/assets/images/enclosure-rev-a.png' | relative_url }})
```
{% endraw %}

Keep large native CAD archives and videos in an agreed long-term storage location and link to them. GitHub records revisions of uploaded files, but CAD and PDF differences are not generally readable like text differences.

## Post a project update

Create `updates/YYYY-MM-DD-short-title.md`. Replace the example date and title before saving:

```markdown
---
title: Your update title
parent: Project updates
nav_order: 2
permalink: /updates/YYYY-MM-DD-short-title/
---
# Your update title

Date: YYYY-MM-DD

## What changed
[Brief description.]

## Why it matters
[Decision or outcome and supporting evidence.]

## Next steps
[Action, owner, and target date.]
```

Add a link and summary to `updates/index.md`. Keep development notes separate from the builder-facing instructions; use the [version guide]({{ '/docs/versions/' | relative_url }}) for the planned release convention.

## View or restore an earlier version

Use **View page history** below a page to see its commits. Open a commit to inspect the changes. To restore old wording, copy it from the earlier file version into a new edit and explain the restoration in the commit message; this preserves the history.

## Before publishing an update

- When homepage wording changes, review the linked design, cost, testing, and operation sections for consistency. Keep section anchors stable or retain an alias for old links; check the actual destinations as well as the link labels.
- Replace prompts only with actual project information.
- Mark proposed, reviewed, built, and tested work accurately.
- Include units, drawing revisions, and evidence for results.
- Check that linked files are available to the intended readers.
- Have another team member review technical procedures and substantial design changes.

## Ownership & reuse

The repository is currently maintained in `mallanin`'s GitHub account. Add team collaborators through repository settings. A later transfer to a team or sponsor organization will require updating the repository links and site address in `_config.yml` and the footer.

A project content license has not yet been selected. Public availability alone does not establish permission to reuse design files. Record the team's and sponsor's agreed license before describing the project as openly licensed hardware or documentation.
