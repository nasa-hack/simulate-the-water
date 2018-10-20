from django.http import HttpResponse, JsonResponse
#from matplotlib import pylab
from pylab import *
import PIL, PIL.Image
import io
from plot.longilati import smallvalues
import pandas as pd

def test(request):
    longt = request.GET.get('lon', 27.999912)
    lat = request.GET.get('lat', 72.567)   
    x=smallvalues(lat, longt)
    #print(x, lat, longt)
    return HttpResponse(x)

def dispdist(request):
    data = pd.read_csv('')
