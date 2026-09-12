"""Crop real mobile screenshots; run with a Python environment containing Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw
source = Path('/Users/sriampojwalam/Downloads/bench-app-mockups/Raw Screenshots')
target = Path(__file__).resolve().parents[1] / 'public/screenshots/workout-tracking'
target.mkdir(parents=True, exist_ok=True)
for name, source_name, box in [
    ('sets', 'log_barbell_squat', (24, 380, 1182, 1580)),
    ('timer', 'rest_timer', (96, 686, 1110, 2020)),
    ('routine', 'workout_preview', (38, 390, 1168, 1540)),
]:
    image = Image.open(source / f'{source_name}_16_pro.png').crop(box).convert('RGB')
    image.save(target / f'{name}.webp', quality=90)
# Trim the transparent landscape canvas around the supplied iPhone mockup.
phone = Image.open(source.parent / 'log_barbell_squat_16_pro.png')
# Remove the faint baked-in shadow so its original canvas edge cannot show.
phone.putalpha(phone.getchannel('A').point(lambda alpha: 0 if alpha <= 80 else alpha))
phone.crop((1408, 48, 2432, 2112)).save(target / 'phone.webp', quality=92)
# Workout preview phone and multi-rep max modal for the revised page.
routine = Image.open(source.parent / 'workout_preview_16_pro.png')
routine.putalpha(routine.getchannel('A').point(lambda alpha: 0 if alpha <= 80 else alpha))
routine.crop((1408, 48, 2432, 2112)).save(target / 'routine-phone.webp', quality=92)
# Inset beyond the modal's dark outline, then mask its rounded corners.
# Supersampling keeps the transparent boundary smooth at every display size.
rep_max = Image.open(source / 'multi_rep_max_16_pro.png').crop((72, 730, 1134, 1976)).convert('RGBA')
mask = Image.new('L', (rep_max.width * 4, rep_max.height * 4), 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, mask.width - 1, mask.height - 1), radius=70 * 4, fill=255)
rep_max.putalpha(mask.resize(rep_max.size, Image.Resampling.LANCZOS))
rep_max.save(target / 'rep-max-clean.webp', quality=95)
