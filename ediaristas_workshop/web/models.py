from django.db import models
from datetime import datetime

# Create your models here.
class Diarista(models.Model):
    nome_completo = models.CharField(max_length=100, null=False, blank=False)
    cpf = models.CharField(max_length=11, null=False, blank=False, unique=True)
    email = models.EmailField(null=False, blank=False, unique=True)
    formaçao = models.CharField(max_length=30, null=False, blank=True)
    telefone = models.CharField(max_length=11, null=False, blank=False)
    logradouro = models.CharField(max_length=60, null=False, blank=False)
    numero = models.IntegerField(null=False, blank=False)
    bairro = models.CharField(max_length=30, null=False, blank=False)
    complemento = models.CharField(max_length=100, null=False, blank=False)
    cep = models.CharField(max_length=8, null=False, blank=False)
    estado = models.CharField(max_length=2, null=False, blank=False)
    cidade = models.CharField(max_length=30, null=False, blank=True)
    descriçao = models.CharField(max_length=200, null=False, blank=True)
    codigo_ibge = models.IntegerField(null=False, blank=False)
    foto_usuario = models.ImageField(null=False)

    
#Chat
class Room(models.Model):
    name = models.CharField(max_length=1000)
class Message(models.Model):
    value = models.CharField(max_length=1000000)
    date = models.DateTimeField(default=datetime.now, blank=True)
    user = models.CharField(max_length=1000000)
    room = models.CharField(max_length=1000000)

