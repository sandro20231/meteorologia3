from django.test import TestCase, Client

# Create your tests here.


class Testes(TestCase):

    def test_index(self):
        """a tela index está entrando?"""
        c = Client()
        response = c.get("/")
        self.assertEqual(response.status_code, 200)

    def test_login(self):
        """Testando se abre login"""
        c = Client()
        response = c.get("/login/")
        self.assertEqual(response.status_code, 200)
