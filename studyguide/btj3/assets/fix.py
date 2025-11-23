import os
import requests

from concurrent.futures import ThreadPoolExecutor
from concurrent.futures import as_completed
from threading import Event

BASE_URL = "https://6799174374246131444.playables.usercontent.goog/v/assets/assets/"


ROOT_DIR = os.getcwd()

def download_file(local_path, url):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        with open(local_path, 'wb') as f:
            f.write(response.content)
        print(f"Replaced: {local_path}")
    except Exception as e:
        print(f"Failed to fetch {url} → {e}")

def enterdir(path):
    futures = []
    with ThreadPoolExecutor(max_workers=20) as executor:
        for root, dirs, files in os.walk(path):
            for file in files:
                full_local_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_local_path, ROOT_DIR).replace("\\", "/")
                url = f"{BASE_URL}{relative_path}"
                futures.append(executor.submit(download_file, full_local_path, url))
        for future in as_completed(futures):
            try:
                future.result()
            except Exception as e:
                print(f"Thread Error: {e}")


def run():
    futures = []
    with ThreadPoolExecutor(max_workers=20) as executor:
        futures.append(executor.submit(enterdir, ROOT_DIR))
        for future in as_completed(futures):
            try:
                future.result()
            except Exception as e:
                print(f"Thread Error: {e}")
run()