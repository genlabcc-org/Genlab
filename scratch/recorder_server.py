import http.server
import socketserver
import os
import base64
import sys

PORT = 9988
FRAMES_DIR = "/Users/ajinth/Desktop/untitled folder 3/scratch/frames"
os.makedirs(FRAMES_DIR, exist_ok=True)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="/Users/ajinth/Desktop/untitled folder 3", **kwargs)

    def do_POST(self):
        if self.path == "/save_frame":
            frame_num = self.headers.get('X-Frame', '0000')
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            if "," in post_data:
                post_data = post_data.split(",", 1)[1]
            img_bytes = base64.b64decode(post_data)
            out_file = os.path.join(FRAMES_DIR, f"frame_{frame_num}.jpg")
            with open(out_file, "wb") as f:
                f.write(img_bytes)
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"OK")
        elif self.path == "/done_rendering":
            print("Rendering finished! Shutting down server...")
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"DONE")
            sys.exit(0)
        else:
            self.send_error(404)

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
