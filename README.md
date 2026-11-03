# OpenPowerBox

A builder-facing guide to understanding, sizing, assembling, verifying, and maintaining a solar power system. Originated as a senior design project.

**Read the docs:** https://mallanin.github.io/solar-power-station/

## Current status

This is a working documentation starter. Engineering content is deliberately marked as placeholder material; no specifications or test results are asserted.

## Update the site

Edit a Markdown file in GitHub, preview it, and commit the change or open a pull request. Changes merged to `main` automatically build and publish through GitHub Actions. Pull requests build and validate without publishing.

See [the editing guide](docs/contributing.md) for page formatting, file uploads, dated updates, and history.

| Content | Source |
| --- | --- |
| Homepage | `index.md` |
| Architecture, sizing, build, testing, operation, versions | `docs/` |
| Project updates | `updates/` |
| Images and files | `assets/` |
| Site title, repo links, address | `_config.yml` |
| Theme colors and small layout changes | `_sass/` |
| Page history and suggestion links | `_includes/footer_custom.html` |

## Local preview

With Ruby 3.3 and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000/solar-power-station/`.

## Validation

```sh
bundle exec jekyll build
python3 scripts/check-site.py
```

The checker validates generated internal links, linked assets, page fragments, and the expected edit/history links. The publishing workflow runs it before deployment.

## Hosting and handoff

GitHub repository Settings → Pages should use **GitHub Actions** as the publishing source. Add team members in Settings → Collaborators. Keep repository ownership accessible after graduation.

If transferring or renaming, update `url`, `baseurl`, `repository`, `aux_links`, and `gh_edit_repository` in `_config.yml`, the hardcoded homepage URL in this README, and the account reference in the editing guide. GitHub Actions builds using that configuration.

## Credits and licensing

Built with Jekyll and [Just the Docs](https://just-the-docs.com/). Those dependencies retain their own licenses. Project content licensing remains a team/sponsor decision; see [LICENSE-NOTE.md](LICENSE-NOTE.md).
