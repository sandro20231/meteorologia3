from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class NovoLocal(models.Model):
    apelido = models.CharField(max_length=64)
    latitude = models.FloatField()
    longitude = models.FloatField()
    usuario = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="usuario_novolocal")

    def __str__(self):
        return f"{self.apelido} - {self.latitude}-{self.longitude}"


class Comentario(models.Model):
    titulo = models.CharField(max_length=64)
    comentario = models.CharField(max_length=1000)
    usuario = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="usuarioComentario")

    def __str__(self):
        return f"{self.titulo}- {self.usuario}"
