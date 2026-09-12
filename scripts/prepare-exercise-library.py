"""Export the mobile exercise catalog and prepare small marketing assets."""
from pathlib import Path
import json, re, gzip
from PIL import Image
from urllib.request import urlopen
from io import BytesIO
root = Path(__file__).resolve().parents[1]
source = Path('/Users/sriampojwalam/code/bench/lib/models/exercise_data.dart')
text = re.sub(r'^\s*//.*$', '', source.read_text(), flags=re.M)
entries = []
originals = []
for constant, default_type in [('EXERCISE_DATA', None), ('TIMED_EXERCISE_DATA','timed'), ('CARDIO_EXERCISE_DATA','cardio')]:
    match = re.search(r'\b' + constant + r'\s*=\s*(\[.*?\]);', text, re.S)
    data = json.loads(re.sub(r',\s*([}\]])', r'\1', match.group(1)))
    originals.extend(data)
    entries.extend({'id':x['id'], 'imageUrl':f"/images/exercise-thumbnails/{x['id']}.webp", 'name':x['name'], 'type':default_type or ('weighted' if x['isWeighted'] else 'bodyweight'), 'muscles':[m for m in x['category'] if m != 'cardio']} for x in data)
assert len({x['id'] for x in entries}) == len(entries)
entries.sort(key=lambda x:x['name'])
payload = json.dumps(entries,separators=(',',':')).encode()
(root/'public/data/exercises.json').write_bytes(payload)
print(f'{len(entries)} exercises; {len(payload)} bytes JSON; {len(gzip.compress(payload))} bytes gzip')
target = root/'public/screenshots/exercise-library'
for label, name in [('weighted','barbell bench press'),('bodyweight','push up'),('timed','plank'),('cardio','run')]:
    record = next(x for x in originals if x['name']==name)
    image = Image.open(BytesIO(urlopen(record['imageUrl'], timeout=30).read())).convert('RGBA')
    image.thumbnail((320,240),Image.Resampling.LANCZOS)
    image.save(target/f'{label}.webp',quality=85)
mockups=Path('/Users/sriampojwalam/Downloads/bench-app-mockups')
for name in ['exercise_catalog_search','create_custom_exercise']:
    image=Image.open(mockups/f'{name}_16_pro.png')
    image.putalpha(image.getchannel('A').point(lambda a:0 if a<=80 else a))
    image.crop((1408,48,2432,2112)).save(target/f'{name}.webp',quality=90)
