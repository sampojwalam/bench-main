"""Prepare real mobile visuals for the Progress Analytics marketing page."""
from pathlib import Path
from PIL import Image, ImageDraw
source = Path('/Users/sriampojwalam/Downloads/bench-app-mockups')
target = Path(__file__).resolve().parents[1] / 'public/screenshots/analytics'
target.mkdir(parents=True, exist_ok=True)
phone = Image.open(source / 'summary_month_16_pro.png')
phone.putalpha(phone.getchannel('A').point(lambda alpha: 0 if alpha <= 80 else alpha))
phone.crop((1408, 48, 2432, 2112)).save(target / 'summary-phone.webp', quality=92)
for name, box, radius in [
    ('muscle-map', (65, 565, 1140, 1400), 60),
    ('chest-breakdown', (65, 1800, 1140, 2370), 60),
]:
    crop = Image.open(source / 'Raw Screenshots/muscle_groups_16_pro.png').crop(box).convert('RGBA')
    mask = Image.new('L', (crop.width * 4, crop.height * 4), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, mask.width - 1, mask.height - 1), radius=radius * 4, fill=255)
    crop.putalpha(mask.resize(crop.size, Image.Resampling.LANCZOS))
    crop.save(target / f'{name}.webp', quality=95)
