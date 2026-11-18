"""Generate on-brand placeholder plates for bmkrs.com from the brand palette and fonts only.

usage: python3 scripts/generate-brand-plates.py public/images/plates

needs Pillow and TTF copies of the brand fonts at /tmp/fonts/cabinet.ttf and
/tmp/fonts/fragment.ttf (convert public/fonts/CabinetGrotesk-Variable.woff2 and
@fontsource/fragment-mono with fontTools). swap the output for real studio and
work photography as it is shot.
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(sys.argv[1])
OUT.mkdir(parents=True, exist_ok=True)

INK = (0x18, 0x16, 0x13)
INK_RAISED = (0x21, 0x1F, 0x1B)
PAPER = (0xF1, 0xEF, 0xE8)
PAPER_BRIGHT = (0xFB, 0xF9, 0xF5)
ORANGE = (0xFF, 0x4D, 0x00)
BODY = (0xD3, 0xD1, 0xC7)
META = (0xB4, 0xB2, 0xA9)
PAPER_FAINT = (0x5F, 0x5E, 0x5A)

W, H = 1600, 1200
SCALE = 2  # supersample for clean edges


def sans(size, weight=500):
    f = ImageFont.truetype("/tmp/fonts/cabinet.ttf", size * SCALE)
    f.set_variation_by_axes([weight])
    return f


def mono(size):
    return ImageFont.truetype("/tmp/fonts/fragment.ttf", size * SCALE)


def canvas(bg, w=1600, h=1200):
    global W, H
    W, H = w, h
    img = Image.new("RGB", (W * SCALE, H * SCALE), bg)
    return img, ImageDraw.Draw(img)


def grid(d, colour, step=80, alpha_line=1):
    s = step * SCALE
    for x in range(0, W * SCALE, s):
        d.line([(x, 0), (x, H * SCALE)], fill=colour, width=alpha_line * SCALE // 2 or 1)
    for y in range(0, H * SCALE, s):
        d.line([(0, y), (W * SCALE, y)], fill=colour, width=alpha_line * SCALE // 2 or 1)


def corners(d, colour, inset=48, size=40, width=4):
    i, z, w = inset * SCALE, size * SCALE, width * SCALE
    X, Y = W * SCALE, H * SCALE
    d.line([(i, i), (i + z, i)], fill=colour, width=w)
    d.line([(i, i), (i, i + z)], fill=colour, width=w)
    d.line([(X - i, Y - i), (X - i - z, Y - i)], fill=colour, width=w)
    d.line([(X - i, Y - i), (X - i, Y - i - z)], fill=colour, width=w)


def label(d, xy, text, colour, size=26):
    d.text((xy[0] * SCALE, xy[1] * SCALE), text, font=mono(size), fill=colour)


def save(img, name):
    img = img.resize((W, H), Image.LANCZOS)
    img.save(OUT / f"{name}.jpg", quality=86, optimize=True, progressive=True)


def mix(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


# 1. wordmark study: paper, giant lowercase b with the orange full stop
img, d = canvas(PAPER, 1500, 1600)
grid(d, mix(PAPER, INK, 0.07))
f = sans(900, 500)
d.text((330 * SCALE, 140 * SCALE), "b", font=f, fill=INK)
d.ellipse([(870 * SCALE, 760 * SCALE), (1030 * SCALE, 920 * SCALE)], fill=ORANGE)
label(d, (96, 1500), "sheet 02 / 07", PAPER_FAINT)
save(img, "full-stop")

# 2. method board: ink blueprint, the five steps set as a specimen
img, d = canvas(INK)
grid(d, mix(INK, PAPER, 0.07))
steps = ["listen", "decide", "make", "ship", "stay"]
y = 170
for i, word in enumerate(steps):
    colour = PAPER if word != "ship" else ORANGE
    label(d, (120, y + 58), f"0{i + 1}", META, 28)
    d.text((240 * SCALE, y * SCALE), word, font=sans(150, 500), fill=colour)
    y += 180
d.line([(120 * SCALE, 1080 * SCALE), (1480 * SCALE, 1080 * SCALE)], fill=mix(INK, PAPER, 0.25), width=2 * SCALE)
label(d, (1180, 1100), "sheet 03 / 07", META)
corners(d, ORANGE)
save(img, "method-board")

# 3. brand board: swatches and type, the system itself
img, d = canvas(PAPER_BRIGHT, 2000, 900)
pad = 96
d.rectangle([(pad * SCALE, pad * SCALE), (760 * SCALE, 804 * SCALE)], fill=INK)
d.text((150 * SCALE, 130 * SCALE), "Aa", font=sans(330, 500), fill=PAPER)
label(d, (150, 740), "cabinet grotesk  400 / 500", META)
d.rectangle([(800 * SCALE, pad * SCALE), (1100 * SCALE, 440 * SCALE)], fill=ORANGE)
label(d, (830, 390), "#ff4d00", INK)
d.rectangle([(800 * SCALE, 464 * SCALE), (1100 * SCALE, 804 * SCALE)], fill=PAPER, outline=mix(PAPER, INK, 0.15), width=2 * SCALE)
label(d, (830, 754), "#f1efe8", PAPER_FAINT)
d.text((1180 * SCALE, 300 * SCALE), "we ship the", font=sans(110, 500), fill=INK)
d.text((1180 * SCALE, 420 * SCALE), "whole thing.", font=sans(110, 500), fill=INK)
d.rectangle([(1180 * SCALE, 570 * SCALE), (1800 * SCALE, 578 * SCALE)], fill=ORANGE)
label(d, (1180, 754), "sheet 04 / 07", PAPER_FAINT)
save(img, "brand-board")

# 4. voice sheet: raised ink, a single line set large, cropped off the edge
img, d = canvas(INK_RAISED)
grid(d, mix(INK_RAISED, PAPER, 0.05), step=120)
d.text((96 * SCALE, 260 * SCALE), "say it in", font=sans(210, 500), fill=PAPER)
d.text((96 * SCALE, 480 * SCALE), "one sentence.", font=sans(210, 500), fill=PAPER)
d.rectangle([(96 * SCALE, 740 * SCALE), (700 * SCALE, 748 * SCALE)], fill=ORANGE)
label(d, (96, 780), "voice + messaging", BODY, 30)
label(d, (1180, 1100), "sheet 05 / 07", META)
corners(d, ORANGE)
save(img, "voice-sheet")

print("written:", sorted(p.name for p in OUT.iterdir()))
