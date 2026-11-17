# OpenPowerBox

A builder-facing guide to understanding, sizing, assembling, verifying, and maintaining a solar power system. Originated as a senior design project.

**Read the docs:** https://openpowerbox.com/

## Current status

The site documents the reference prototype. Component ratings and design targets are identified separately from the team's reported tests; supporting test data and some build details are still pending.

## Update the site

Edit a Markdown file in GitHub, preview it, and commit the change or open a pull request. Changes merged to `main` automatically build and publish through GitHub Actions. Pull requests build and validate without publishing.

| Content | Source |
| --- | --- |
| Homepage | `index.md` |
| Architecture, sizing, build, testing, operation, versions | `docs/` |
| Project updates | `updates/` |
| Images and files | `assets/` |
| Feedback and build inquiries | `community.md`, `contact.md`, `_includes/contact_form.html` |
| Reviewed public build stories | `_data/community_posts.yml` |
| Safety, warranty, licensing, and privacy notices | `safety-and-terms.md` |
| Site title, repo links, address | `_config.yml` |
| Theme colors and small layout changes | `_sass/` |

## Local preview

With Ruby 3.3 and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000/`.

## Validation

```sh
bundle exec jekyll build
python3 scripts/check-site.py
```

The checker validates generated internal links, linked assets, page fragments, and the search index. The publishing workflow runs it before deployment.

## Hosting and handoff

GitHub repository Settings → Pages should use **GitHub Actions** as the publishing source. Add team members in Settings → Collaborators. Keep repository ownership accessible after graduation.

If transferring or renaming, update `url`, `baseurl`, `repository`, and `aux_links` in `_config.yml`, and the hardcoded homepage URL in this README. GitHub Actions builds using that configuration.

## Credits and licensing

Built with Jekyll and [Just the Docs](https://just-the-docs.com/). Those dependencies retain their own licenses. Project content licensing remains a team/sponsor decision; see [LICENSE-NOTE.md](LICENSE-NOTE.md).

## Feedback and moderation

Forms prepare a `mailto:` draft for `milogoehring@gmail.com`; they do not send, store, or publish a submission. The visitor reviews and sends the email in their own email application. A copy-message fallback is available. No form-service account or mail credential is embedded in this repository.

Private feedback and build inquiries remain private. Publish a public story only after verifying its explicit consent, reviewing its contents, and removing any email addresses or private information. Add the approved display name, title, date, and plain-text story to `_data/community_posts.yml`. Story text is escaped when displayed. Never commit raw submission emails. To change the contact address, update the form include and contact, community, and safety notices consistently.

The closed-unit homepage image is a manually masked cutout of the owner's original photograph. No hardware was generated or reconstructed. The interior photograph shows the installed charge controller and battery; the USB-C output is not shown. A linked wider photograph shows the panel, frame, and enclosure.
