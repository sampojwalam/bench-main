"""Prepare supplied goal screenshots as lightweight phones and clean UI crops."""
from pathlib import Path
from PIL import Image, ImageDraw
root=Path(__file__).resolve().parents[1]
source=Path('/Users/sriampojwalam/Downloads/bench-app-mockups')
target=root/'public/screenshots/goals'
target.mkdir(parents=True,exist_ok=True)
# The goal type tiles use the app's own images (barbell-back-squat.png and
# legs-muscles.png, copied from the bench repo's assets/images) and an icon.
phone=Image.open(source/'goal_history_general_16_pro.png')
phone.putalpha(phone.getchannel('A').point(lambda a:0 if a<=80 else a))
phone.crop((1408,48,2432,2112)).save(target/'history-phone.webp',quality=88)
raw=Image.open(source/'Raw Screenshots/goal_history_legs_16_pro.png').convert('RGBA')
for name,box,radius in [('legs-target',(48,402,1156,665),28),('legs-history',(48,1065,1156,1718),28)]:
    crop=raw.crop(box)
    mask=Image.new('L',(crop.width*3,crop.height*3),0)
    ImageDraw.Draw(mask).rounded_rectangle((0,0,mask.width,mask.height),radius=radius*3,fill=255)
    crop.putalpha(mask.resize(crop.size,Image.Resampling.LANCZOS))
    crop.save(target/f'{name}.webp',quality=90)
