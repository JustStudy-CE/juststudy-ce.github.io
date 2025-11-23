import http.server
import socketserver
import os
import requests
from urllib.parse import urlparse
PORT = 1003
FIX_URL = "https://6799174374246131444.playables.usercontent.goog/v/assets/"
ROOT_DIR = os.getcwd()

def requestandsavefile(path, url):
    try:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        with open(path, 'wb') as f:
            f.write(response.content)
        print(f"Replaced: {path}")
        return True
    except Exception as e:
        print(f"Failed to fetch {url} → {e}")
        return False

class CustomHandler(http.server.SimpleHTTPRequestHandler):

    def send_head(self):
        web_path = urlparse(self.path).path
        path = self.translate_path(web_path)
        print(web_path)
        if not os.path.exists(path):
            print(f"🧩 File not found locally: {path}")
            url = f"{FIX_URL}{web_path.lstrip('/')}"
            success = requestandsavefile(path, url)
            if success and os.path.exists(path):
                print(f"File saved, retrying serve: {path}")
            else:
                return self.send_error(404, "File not found")

        return super().send_head()

    def log_message(self, format, *args):
        print(f"📝 LOG: {self.client_address[0]} - {format % args}")

Handler = CustomHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"✅ Serving at http://localhost:{PORT}")
    httpd.serve_forever()
