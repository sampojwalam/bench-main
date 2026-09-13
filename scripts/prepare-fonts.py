"""Fetch upstream font assets for self-hosting; run only when updating fonts."""
from pathlib import Path
import re, subprocess, urllib.parse
root = Path(__file__).resolve().parent.parent
out = root / 'src/assets/fonts'
out.mkdir(parents=True, exist_ok=True)
def get(url): return subprocess.check_output(['curl','-fsSL','-H','User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',url])
css = get('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap').decode()
urls = re.findall(r'src: url\(([^)]+)', css)
(out/'jakarta-latin.woff2').write_bytes(get(urls[-1]))
text = '\n'.join(p.read_text() for p in (root/'src').rglob('*') if p.suffix in ['.tsx','.ts'])
names = sorted(set(re.findall(r'(?:name=|icon: ?)["\']([a-z_]+)["\']',text)))
url='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names='+','.join(names)+'&display=block'
css=get(url).decode()
fonturl=re.search(r'src: url\(([^)]+)',css)[1]
(out/'material-symbols.woff2').write_bytes(get(fonturl))
(out/'material-symbols.css').write_text(css.replace(fonturl,'./material-symbols.woff2'))
print('Prepared Jakarta weights and',len(names),'icon glyphs')
