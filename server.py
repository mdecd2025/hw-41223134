from waitress import serve
from cmsimde import flaskapp

serve(flaskapp.app, listen='2001:288:6004:17:fff1:cd25:0000:a038', threads=8)
