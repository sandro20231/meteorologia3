from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login/", views.login_v, name="login"),
    path("logout/", views.logout_v, name="logout"),
    path("registrar/", views.registrar, name="registrar"),
    path("novolocal/", views.novolocal, name="novolocal"),
    path("comentar/", views.comentar, name="comentar"),
    path("get_local/<int:id>/", views.get_local, name="get_local"),
    path("buscarll/", views.index, name="buscarll")


]
