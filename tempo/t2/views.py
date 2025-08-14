from django.shortcuts import render
from datetime import date
from datetime import timedelta
from django.utils import timezone

# Create your views here.


def index(request):

    dia0 = date.today()
    dia1 = dia0+timedelta(days=1)
    dia2 = dia0+timedelta(days=2)
    dia3 = dia0+timedelta(days=3)
    dia4 = dia0+timedelta(days=4)
    dia5 = dia0+timedelta(days=5)
    dia6 = dia0+timedelta(days=6)
    dia7 = dia0+timedelta(days=7)
    return render(request, "t2/index.html", {
        "dia0": dia0,
        "dia1": dia1,
        "dia2": dia2,
        "dia3": dia3,
        "dia4": dia4,
        "dia5": dia5,
        "dia6": dia6,
        "dia7": dia7,

    })
