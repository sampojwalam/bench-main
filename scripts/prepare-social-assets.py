"""Extract actual shared cards from the existing marketing chat mockup."""
from pathlib import Path
from PIL import Image,ImageDraw
root=Path(__file__).resolve().parents[1]
source=Image.open(root/'public/screenshots/social-mockup.png').convert('RGBA')
target=root/'public/screenshots/social';target.mkdir(parents=True,exist_ok=True)
for name,box,radius in [('exercise-card',(219,338,592,555),26),('workout-card',(129,868,567,1277),30)]:
    image=source.crop(box)
    mask=Image.new('L',(image.width*3,image.height*3),0)
    ImageDraw.Draw(mask).rounded_rectangle((0,0,mask.width,mask.height),radius=radius*3,fill=255)
    image.putalpha(mask.resize(image.size,Image.Resampling.LANCZOS))
    image.save(target/f'{name}.webp',quality=92)
