"""
Remove background from hero image and blend person into dark background.
Output: public/hero_person.png (transparent PNG with feathered edges + bottom fade)
"""

from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter
from rembg import remove

INPUT  = Path("public/Hero Header.png")
OUTPUT = Path("public/hero_person.png")

print("Loading image...")
with open(INPUT, "rb") as f:
    raw = f.read()

print("Removing background (downloading model on first run — may take a minute)...")
result_bytes = remove(raw)
img = Image.open(__import__("io").BytesIO(result_bytes)).convert("RGBA")

print("Applying edge feathering...")
r, g, b, alpha = img.split()

# Blur alpha channel slightly for soft edges
alpha_blurred = alpha.filter(ImageFilter.GaussianBlur(radius=2))

# Erode then dilate to clean up fringe pixels
# A subtle approach: blend original alpha with blurred alpha
alpha_arr = np.array(alpha, dtype=np.float32)
alpha_blur_arr = np.array(alpha_blurred, dtype=np.float32)
# Use minimum of original and blurred to avoid expanding the mask
alpha_soft = np.minimum(alpha_arr, alpha_blur_arr * 1.05)
alpha_soft = np.clip(alpha_soft, 0, 255).astype(np.uint8)

print("Applying bottom fade...")
h, w = alpha_soft.shape
# Fade starts at 60% from top, fully transparent at bottom
fade_start = int(h * 0.60)
fade_end   = h

for y in range(fade_start, fade_end):
    t = (y - fade_start) / (fade_end - fade_start)
    # Smooth cubic ease-in
    factor = 1.0 - (t * t * (3 - 2 * t))
    alpha_soft[y, :] = (alpha_soft[y, :] * factor).astype(np.uint8)

final_alpha = Image.fromarray(alpha_soft, mode="L")
img.putalpha(final_alpha)

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUTPUT, "PNG")
print(f"Saved -> {OUTPUT}  ({img.size[0]}x{img.size[1]} px)")
