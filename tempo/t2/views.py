from django.shortcuts import render
from datetime import date
from datetime import timedelta
from django.utils import timezone
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import NovoLocal, Comentario
from django.http import JsonResponse

# Create your views here.


def index(request):
    usuario = request.user  # use request.user, não request
    valor = request.GET.get('seleção')  # usa .get() para não gerar erro

    dados = None
    if valor:
        dados = NovoLocal.objects.filter(usuario=usuario, id=valor).first()

    comentarios = Comentario.objects.all()
    meusLocais = NovoLocal.objects.filter(usuario=request.user)

    dias = [date.today() + timedelta(days=i) for i in range(8)]

    context = {
        "dia0": dias[0],
        "dia1": dias[1],
        "dia2": dias[2],
        "dia3": dias[3],
        "dia4": dias[4],
        "dia5": dias[5],
        "dia6": dias[6],
        "dia7": dias[7],
        "locais": meusLocais,
        "comentarios": comentarios,
        "dados": dados
    }

    return render(request, "t2/index.html", context)


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


def novolocal(request):
    if request.method == "POST":
        apelido = request.POST['nomeLocal']
        latitude = request.POST['latitude']
        longitude = request.POST['longitude']
        usuario = request.user
        registro = NovoLocal(
            apelido=apelido, latitude=latitude, longitude=longitude, usuario=usuario)
        registro.save()
        return HttpResponseRedirect(reverse('index'))


def comentar(request):
    if request.method == "POST":
        titulo = request.POST['tituloComentario']
        comentario = request.POST['comentario']
        usuario = request.user
        registro = Comentario(titulo=titulo,
                              comentario=comentario, usuario=usuario)
        registro.save()
        return HttpResponseRedirect(reverse('index'))


def get_local(request, id):
    try:
        local = NovoLocal.objects.get(id=id)
        data = {
            "id": local.id,
            "apelido": local.apelido,
            "latitude": local.latitude,
            "longitude": local.longitude
        }
    except NovoLocal.DoesNotExist:
        data = {"error": "Local não encontrado"}
    return JsonResponse(data)
