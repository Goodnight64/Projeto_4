from django.shortcuts import redirect, render
from .forms import diarista_form
from .models import Diarista, Room, Message
from django.http import HttpResponse, JsonResponse

# Create your views here.

def cadastrar_diarista(request): 
    if request.method == 'POST':
        form_diarista = diarista_form.DiaristaForm(request.POST, request.FILES)
        if form_diarista.is_valid():
            form_diarista.save()
            return redirect('listar_diaristas')
    else:
        form_diarista = diarista_form.DiaristaForm()
    return render(request, 'form_diarista.html', {'form_diarista': form_diarista})


def listar_diaristas(request):
    diaristas = Diarista.objects.all()
    return render(request, 'lista_diaristas.html', {'diaristas': diaristas})

def editar_diarista(request, diarista_id): 
    diarista = Diarista.objects.get(id=diarista_id)
    if request.method == "POST":
        form_diarista = diarista_form.DiaristaForm(request.POST or None, request.FILES, instance=diarista)
        if form_diarista.is_valid():
            form_diarista.save()
            return redirect('listar_diaristas')
    else:
        form_diarista = diarista_form.DiaristaForm(instance=diarista)
    return render(request, 'form_diarista.html', {'form_diarista': form_diarista})

def remover_diarista(request, diarista_id):
    diarista = Diarista.objects.get(id=diarista_id)
    diarista.delete()
    return redirect('listar_diaristas')

#Chat

def home(request):
    return render(request, 'home.html')

def room(request, room):
    username = request.GET.get('username')
    room_details = Room.objects.get(name=room)
    return render(request, 'room.html', {
        'username': username,
        'room': room,
        'room_details': room_details
    })

def checkview(request):
    room = request.POST['room_name']
    username = request.POST['username']

    if Room.objects.filter(name=room).exists():
        return redirect('/'+room+'/?username='+username)
    else:
        new_room = Room.objects.create(name=room)
        new_room.save()
        return redirect('/'+room+'/?username='+username)

def send(request):
    message = request.POST['message']
    username = request.POST['username']
    room_id = request.POST['room_id']

    new_message = Message.objects.create(value=message, user=username, room=room_id)
    new_message.save()
    return HttpResponse('Message sent successfully')

def getMessages(request, room):
    room_details = Room.objects.get(name=room)

    messages = Message.objects.filter(room=room_details.id)
    return JsonResponse({"messages":list(messages.values())})