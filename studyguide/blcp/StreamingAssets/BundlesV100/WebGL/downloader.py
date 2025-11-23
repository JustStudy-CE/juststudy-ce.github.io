import os
import json
import requests

catalog_path = "catalog_2025.04.18.02.53.57.json"

# Load catalog JSON
with open(catalog_path, "r", encoding="utf-8") as f:
    catalog = json.load(f)

urls = catalog.get("m_InternalIds", [])

# If the URLs contain the placeholder, set a base URL here:
base_url = "https://blocops.io/StreamingAssets/BundlesV100"  # Set e.g. "https://cdn.juststudy.uk" if needed

for url in urls:
    # Replace the placeholder with the base_url (or nothing)
    full_url = url.replace("{ADDRESSABLES.LOAD_URL}", base_url)
    filename = os.path.basename(full_url)
    print(f"Downloading {filename} ...")
    try:
        r = requests.get(full_url, stream=True)
        r.raise_for_status()
        with open(filename, "wb") as out:
            for chunk in r.iter_content(chunk_size=8192):
                if chunk:
                    out.write(chunk)
        print(f"Saved {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

print("All done, monkey! 🍌 *purr*")
