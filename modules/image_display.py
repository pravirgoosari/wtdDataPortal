import fitz
from svglib import svglib
from reportlab.graphics import renderPDF
from PIL import Image


def convert_svg_to_png(path, dpi=300):
    """
    Converts an SVG file to a PNG file.
    """
    # Load the SVG file and convert to a ReportLab drawing
    drawing = svglib.svg2rlg(path + ".svg")
    pdf = renderPDF.drawToString(drawing)

    # Open the PDF with fitz (pyMuPDF) and convert to PNG
    doc = fitz.Document(stream=pdf)
    pix = doc.load_page(0).get_pixmap(alpha=True, dpi=dpi)
    pix.save(path + ".png")
    return path+".png"


def open_image_with_pillow(image_path):

    # Open an image file
    with Image.open(image_path) as img:
        # Display image
        img.show()
