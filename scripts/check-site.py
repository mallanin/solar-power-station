"""Validate generated pages, internal links, and search before publishing."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'
CONFIG = (ROOT / '_config.yml').read_text()
BASE = re.search(r'^baseurl:\s*(.*)$', CONFIG, re.M).group(1).strip().strip('"\'')
ORIGIN = re.search(r'^url:\s*(.*)$', CONFIG, re.M).group(1).strip()

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.links = []
        self.ids = set()
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if attrs.get(key):
                self.links.append(attrs[key])

pages = {path: Page(path) for path in SITE.rglob('*.html')}
errors = []
if not pages:
    sys.exit('No generated HTML found. Run the Jekyll build first.')

for path, page in pages.items():
    for link in page.links:
        url = urlsplit(link)
        if url.scheme and url.scheme not in ('https', 'http'):
            continue
        if url.netloc and url.netloc != urlsplit(ORIGIN).netloc:
            continue
        target_path = unquote(url.path)
        if not target_path:
            target = path
        elif target_path.startswith('/'):
            if BASE and target_path != BASE and not target_path.startswith(BASE + '/'):
                errors.append(f'{path.relative_to(SITE)}: path missing site prefix: {link}')
                continue
            target = SITE / target_path[len(BASE):].lstrip('/')
        else:
            target = path.parent / target_path
        target = target.resolve()
        if target.is_dir():
            target = target / 'index.html'
        if not target.exists():
            errors.append(f'{path.relative_to(SITE)}: missing target {link}')
        elif url.fragment and target.suffix == '.html':
            dest = pages.get(target) or Page(target)
            if unquote(url.fragment) not in dest.ids:
                errors.append(f'{path.relative_to(SITE)}: missing anchor {link}')

for source in [ROOT / 'index.md', ROOT / 'visual.md', *ROOT.glob('docs/*.md'), *ROOT.glob('updates/*.md')]:
    text = source.read_text()
    permalink = re.search(r'^permalink:\s*(.+)$', text, re.M)
    target = SITE / permalink.group(1).strip('/').strip() / 'index.html' if permalink else SITE / 'index.html'
    if not target.exists():
        errors.append(f'Missing page for {source.relative_to(ROOT)}')
        continue

if not re.search(r'^search_enabled:\s*false\s*$', CONFIG, re.M):
    search_file = SITE / 'assets/js/search-data.json'
    if not search_file.exists():
        errors.append('Missing search index')
    else:
        data = json.loads(search_file.read_text())
        if len(data) < 7:
            errors.append('Search index does not cover all starter pages')

if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'Validated {len(pages)} pages: internal links, assets, anchors, and search when enabled.')
