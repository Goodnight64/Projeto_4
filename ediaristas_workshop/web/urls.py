from django.urls import path
from .views import cadastrar_diarista, editar_diarista, listar_diaristas, remover_diarista
from . import views


urlpatterns = [
    path('cadastrar_diarista', cadastrar_diarista, name='cadastrar_diarista'),
    path('listar_diaristas', listar_diaristas, name='listar_diaristas'),
    path('editar_diarista/<int:diarista_id>', editar_diarista, name='editar_diarista'),
    path('remover_diarista/<int:diarista_id>', remover_diarista, name='remover_diarista'),
    path('', views.home, name='home'),
    path('<str:room>/', views.room, name='room'),
    path('checkview', views.checkview, name='checkview'),
    path('send', views.send, name='send'),
    path('getMessages/<str:room>/', views.getMessages, name='getMessages'),

]