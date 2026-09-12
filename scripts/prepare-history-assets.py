"""Prepare real mobile Workout History visuals; requires Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw
root=Path(__file__).resolve().parents[1]
source=Path('/Users/sriampojwalam/Downloads/bench-app-mockups')
target=root/'public/screenshots/history'
target.mkdir(parents=True,exist_ok=True)
for name,original in [('calendar','workout_history_calendar_2'),('list','workout_history_list'),('edit','update_workout_log')]:
    image=Image.open(source/f'{original}_16_pro.png')
    image.putalpha(image.getchannel('A').point(lambda a:0 if a<=80 else a))
    image=image.crop((1408,48,2432,2112))
    image.thumbnail((800,1613),Image.Resampling.LANCZOS)
    image.save(target/f'{name}-phone.webp',quality=88)
raw=Image.open(source/'Raw Screenshots/workout_history_calendar_1_16_pro.png').convert('RGBA')
image=raw.crop((48,965,1158,2272))
mask=Image.new('L',(image.width*3,image.height*3),0)
ImageDraw.Draw(mask).rounded_rectangle((0,0,mask.width,mask.height),radius=84,fill=255)
image.putalpha(mask.resize(image.size,Image.Resampling.LANCZOS))
image.save(target/'session-detail.webp',quality=90)
