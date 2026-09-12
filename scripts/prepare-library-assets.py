"""Trim supplied mobile mockups for the Workout Library page."""
from pathlib import Path
from PIL import Image
source = Path('/Users/sriampojwalam/Downloads/bench-app-mockups')
target = Path(__file__).resolve().parents[1] / 'public/screenshots/workout-library'
for name in ['create_workout', 'public_workout_preview', 'public_workout_list']:
    phone = Image.open(source / f'{name}_16_pro.png')
    phone.putalpha(phone.getchannel('A').point(lambda alpha: 0 if alpha <= 80 else alpha))
    phone.crop((1408, 48, 2432, 2112)).save(target / f'{name}.webp', quality=92)
