"""
Generate PWA icons for Roman Empire app
Run: python generate_icons.py
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Icon sizes needed for PWA
SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

# Colors
ROMAN_RED = (139, 0, 0)
ROMAN_GOLD = (255, 215, 0)

def create_icon(size):
    """Create a single icon of the specified size"""
    # Create image with Roman red background
    img = Image.new('RGB', (size, size), ROMAN_RED)
    draw = ImageDraw.Draw(img)
    
    # Draw gold border
    border_width = max(2, size // 20)
    draw.rectangle(
        [border_width, border_width, size - border_width, size - border_width],
        outline=ROMAN_GOLD,
        width=border_width
    )
    
    # Draw SPQR text
    try:
        # Try to use a serif font
        font_size = size // 4
        try:
            font = ImageFont.truetype("times.ttf", font_size)
        except:
            try:
                font = ImageFont.truetype("Georgia.ttf", font_size)
            except:
                try:
                    font = ImageFont.truetype("C:/Windows/Fonts/times.ttf", font_size)
                except:
                    # Fallback to default
                    font = ImageFont.load_default()
        
        text = "SPQR"
        # Get text bounding box
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        # Center the text
        x = (size - text_width) // 2
        y = (size - text_height) // 2
        
        draw.text((x, y), text, fill=ROMAN_GOLD, font=font)
    except Exception as e:
        print(f"Font rendering issue for size {size}: {e}")
        # Simple fallback - draw a circle
        circle_size = size // 3
        draw.ellipse(
            [(size - circle_size) // 2, (size - circle_size) // 2,
             (size + circle_size) // 2, (size + circle_size) // 2],
            fill=ROMAN_GOLD
        )
    
    # Draw corner decorations (laurel wreaths suggestion)
    corner_size = size // 10
    corners = [
        (size // 4, size // 4),
        (3 * size // 4, size // 4),
        (size // 4, 3 * size // 4),
        (3 * size // 4, 3 * size // 4)
    ]
    
    for cx, cy in corners:
        draw.ellipse(
            [cx - corner_size, cy - corner_size, cx + corner_size, cy + corner_size],
            outline=ROMAN_GOLD,
            width=max(1, size // 50)
        )
    
    return img

def generate_all_icons():
    """Generate all icon sizes"""
    # Create icons directory if it doesn't exist
    icons_dir = os.path.dirname(os.path.abspath(__file__))
    
    print("Generating PWA icons...")
    
    for size in SIZES:
        img = create_icon(size)
        filename = f"icon-{size}x{size}.png"
        filepath = os.path.join(icons_dir, filename)
        img.save(filepath, 'PNG')
        print(f"✅ Created {filename}")
    
    print(f"\n✅ All {len(SIZES)} icons generated successfully!")
    print("Icons saved to:", icons_dir)

if __name__ == "__main__":
    try:
        generate_all_icons()
    except ImportError:
        print("❌ PIL (Pillow) not installed!")
        print("Install it with: pip install Pillow")
        print("\nAlternatively, open icons/generate-icons.html in your browser")
