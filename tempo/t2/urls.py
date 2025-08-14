from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login/", views.login_v, name="login"),
    path("logout/", views.logout_v, name="logout"),
    path("registrar/", views.registrar, name="registrar"),
]
