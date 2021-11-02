from django.apps import AppConfig


class WebConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'web'


class ChatConfig(AppConfig):
    name = 'chat'
