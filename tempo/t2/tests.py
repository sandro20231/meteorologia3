from django.test import TestCase, Client
from .models import NovoLocal, Comentario
from django.contrib.auth.models import User

# Create your tests here.


class Testes(TestCase):

    def setUp(self):
        # cria usuário
        self.user = User.objects.create_user(
            username="sandro", password="sandro")

        # cria comentário
        Comentario.objects.create(
            titulo="a", comentario="b", usuario=self.user)

        # cria local
        NovoLocal.objects.create(
            apelido="casa", latitude=-23, longitude=-45, usuario=self.user)

    def test_index(self):
        """a tela index está entrando?"""
        c = Client()
        response = c.get("")
        self.assertEqual(response.status_code, 200)

    def test_login(self):
        """Testando se abre login"""
        c = Client()
        response = c.get("/login/")
        self.assertEqual(response.status_code, 200)

    def test_novolocal_criado(self):
        """Testa se o local foi criado corretamente"""
        self.assertEqual(NovoLocal.objects.count(), 1)

    def test_comentario_criado(self):
        """Testa se o comentário foi criado corretamente"""
        self.assertEqual(Comentario.objects.count(), 1)
