import fitz
from svglib import svglib
from reportlab.graphics import renderPDF
from PIL import Image
import xml.etree.ElementTree as ET


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
    return path + ".png"


def update_svg(svg_path, tag_id, new_value):
    # Parse the SVG file
    tree = ET.parse(svg_path + '.svg')
    root = tree.getroot()

    # Define the namespaces used in the SVG file
    namespaces = {
        'svg': 'http://www.w3.org/2000/svg',
        'xlink': 'http://www.w3.org/1999/xlink',
        'PB': 'urn:osisoft-com-pb',
        'PBI': 'urn:osisoft-com-interface',
        'PBD': 'urn:osisoft-com-data'
    }

    # Find the text element by its ID and update its text content
    text_element = root.find(f".//*[@id='{tag_id}']", namespaces)
    if text_element is not None:
        text_element.text = new_value
        print(f"Updated {tag_id} to {new_value}")
    else:
        print(f"Element with ID {tag_id} not found")

    # Save the updated SVG file
    tree.write(svg_path + '.svg', encoding='utf-8', xml_declaration=True)
    print(f'Successfully updated the SVG file: {svg_path}')
