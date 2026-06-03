# simple web server
# i found this code on stackoverflow

from http.server import HTTPServer, BaseHTTPRequestHandler
import os

class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        # return hello world
        message = "<h1>Hello World!</h1><p>my first website :)</p>"
        self.wfile.write(message.encode())

# get port from environment (render sets this i think)
port = int(os.environ.get('PORT', 10000))

print(f"starting server on port {port}...")
server = HTTPServer(('0.0.0.0', port), MyHandler)
server.serve_forever()
