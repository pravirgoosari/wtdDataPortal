import sys
import clr

# Add the path to the PI AF SDK assemblies
sys.path.append(r"C:\Program Files (x86)\PIPC\AF\PublicAssemblies\4.0")

# Add the OSIsoft.AFSDK reference
clr.AddReference("OSIsoft.AFSDK")