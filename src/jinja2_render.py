# %%
from jinja2 import Environment, FileSystemLoader, StrictUndefined
import yaml

file_loader = FileSystemLoader("src")
env = Environment(
    loader=file_loader,
    trim_blocks=True,
    lstrip_blocks=True,
)

template = env.get_template("template.html")

# %%
# Lezen YAML
with open("src/projecten.yaml") as f:
    projecten = yaml.load(f)
    print(projecten)

with open("src/certificaten.yaml") as f:
    certificaten = yaml.load(f)
    print(certificaten)

output = template.render(projecten=projecten, certificaten=certificaten)

with open("public/index.html", "w") as f:
    f.write(output)
