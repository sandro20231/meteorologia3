from django.shortcuts import render
from datetime import date
from datetime import timedelta
from django.utils import timezone
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.urls import reverse

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


def login_v(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('index'))
    return render(request, "t2/login.html")


def logout_v(request):
    logout(request)
    return HttpResponseRedirect(reverse('login'))


def registrar(request):
    if request.method == "POST":
        username = request.POST['usernameRegistro']
        email = request.POST['emailRegistro']
        password1 = request.POST['passwordRegistro']
        password2 = request.POST['passwordRegistro2']
        if password1 != password2:
            return render(request, "t2/registro.html", {"mensagem": "As senhas não conferem"})

        registro = User.objects.create_user(
            username=username, email=email, password=password2)
        registro.save()
        return HttpResponseRedirect(reverse('login'))
    return render(request, "t2/registro.html")
