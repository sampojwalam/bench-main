"""Prepare supplied goal screenshots as lightweight phones and clean UI crops."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageChops
root=Path(__file__).resolve().parents[1]
source=Path('/Users/sriampojwalam/Downloads/bench-app-mockups')
target=root/'public/screenshots/goals'
target.mkdir(parents=True,exist_ok=True)
for kind in ['general','exercise','legs']:
    raw=Image.open(source/'Raw Screenshots'/f'goal_history_{kind}_16_pro.png').convert('RGBA')
    icon=raw.crop((60,445,265,650))
    # Remove unequal screenshot whitespace, then align artwork in equal slots.
    contrast=ImageChops.difference(icon.convert('RGB'),Image.new('RGB',icon.size,'white')).convert('L')
    bounds=contrast.point(lambda value:255 if value>35 else 0).getbbox()
    icon=icon.crop(bounds)
    icon=icon.resize((round(icon.width*120/icon.height),120),Image.Resampling.LANCZOS)
    icon.thumbnail((152,120),Image.Resampling.LANCZOS)
    canvas=Image.new('RGBA',(160,160),'white')
    canvas.alpha_composite(icon,((160-icon.width)//2,(160-icon.height)//2))
    icon=canvas
    icon.save(target/f'{kind}-icon-aligned.webp',quality=88)
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
