import fitz
from svglib import svglib
from reportlab.graphics import renderPDF
from PIL import Image
import xml.etree.ElementTree as ET

def update_svg(svg_path, tag_id, new_value):
    # Parse the SVG file
    tree = ET.parse(svg_path + '.svg')  # Ensure the correct path to your SVG
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

# The PNG conversion function is not needed for SVG rendering on the frontend.
