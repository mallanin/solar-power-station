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
| Community tabs, feedback, and GitHub contributions | `community.md`, `assets/js/community-tabs.js` |
| Build inquiries and shared contact form | `contact.md`, `_includes/contact_form.html` |
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

The community page combines two accessible tabs: contact the team and improve on GitHub. Both sections remain readable without JavaScript. `/community/#github` opens the contribution instructions; the former `/docs/contributing/` URL redirects there. The sidebar and homepage have one combined community entry.

Forms prepare a `mailto:` draft for `milogoehring@gmail.com`; they do not send, store, or publish a submission. The visitor reviews and sends the email in their own email application. A copy-message fallback is available. No form-service account or mail credential is embedded in this repository.

Private feedback and build inquiries remain private. Publish a public story only after verifying its explicit consent, reviewing its contents, and removing any email addresses or private information. Add the approved display name, title, date, and plain-text story to `_data/community_posts.yml`. Story text is escaped when displayed. Never commit raw submission emails. To change the contact address, update the form include and contact, community, and safety notices consistently.

Both homepage photographs are manually masked cutouts of the owner's original photos. No hardware was generated or reconstructed. The open-door overview labels the solar panel, aluminum panel frame, enclosure, charge controller, and battery. System design uses a precise connection illustration built from a Victron SmartSolar MPPT 75/15 product photograph and individually drawn SVG wires. Battery, panel, and USB-C module are representative symbols; terminal order follows the Victron installation manual. The system network illustration reuses the project demonstration diagram with the owner’s real unit cutout and retains its animated power/data paths. The property network shows a corner hub, two direct links, and one remote station reached through an intermediate relay. This example uses the mesh mode documented in Heltec’s current HD01 guide.

System-design illustration sources: [Victron product images](https://www.victronenergy.com/solar-charge-controllers/smartsolar-mppt-75-10-75-15-100-15-100-20), [Victron installation manual](https://www.victronenergy.com/media/pg/Manual_SmartSolar_MPPT_75-10_up_to_100-20/en/installation.html), and [Heltec radio specifications](https://heltec.org/project/ht-hd01/). The system network illustration is maintained in both `_includes/system-network.svg` (inline animation) and `assets/images/system-network.svg` (full-size view). Relay mode: [Heltec Mesh Mode User Guide](https://wiki.heltec.org/docs/devices/wifi-halow/ht-hd01/meshgate).
