"""Prepare local 2x directory thumbnails from the mobile catalog (requires Pillow).

Run when updating the catalog; no Firebase requests are made by the website.
"""
from concurrent.futures import ThreadPoolExecutor
from io import BytesIO
from pathlib import Path
from urllib.request import urlopen
import gzip
import json
import re
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
source = Path('/Users/sriampojwalam/code/bench/lib/models/exercise_data.dart')
text = re.sub(r'^\s*//.*$', '', source.read_text(), flags=re.M)
records = {}
for constant in ['EXERCISE_DATA', 'TIMED_EXERCISE_DATA', 'CARDIO_EXERCISE_DATA']:
    match = re.search(r'\b' + constant + r'\s*=\s*(\[.*?\]);', text, re.S)
    records.update({x['id']: x for x in json.loads(re.sub(r',\s*([}\]])', r'\1', match.group(1)))})
target = root / 'public/images/exercise-thumbnails'
target.mkdir(parents=True, exist_ok=True)
catalog = json.loads((root / 'public/data/exercises.json').read_text())

def prepare(entry):
    exercise_id = entry['id']
    assert re.fullmatch(r'[a-zA-Z0-9_-]+', exercise_id)
    path = target / f'{exercise_id}.webp'
    if not path.exists():
        with urlopen(records[exercise_id]['imageUrl'], timeout=45) as response:
            image = ImageOps.exif_transpose(Image.open(BytesIO(response.read()))).convert('RGBA')
        image.thumbnail((160, 120), Image.Resampling.LANCZOS)
        image.save(path, quality=75, method=6)
    entry['imageUrl'] = f'/images/exercise-thumbnails/{exercise_id}.webp'
    return path.stat().st_size

with ThreadPoolExecutor(max_workers=8) as pool:
    sizes = list(pool.map(prepare, catalog))
payload = json.dumps(catalog, separators=(',', ':')).encode()
(root / 'public/data/exercises.json').write_bytes(payload)
print(f'{len(sizes)} thumbnails: {sum(sizes):,} bytes total; {sum(sizes)//len(sizes):,} bytes average; {max(sizes):,} bytes largest')
print(f'Catalog: {len(gzip.compress(payload)):,} bytes gzip')
