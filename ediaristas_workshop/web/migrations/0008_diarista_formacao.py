# Generated by Django 3.2.9 on 2021-11-02 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0007_diarista_descricao'),
    ]

    operations = [
        migrations.AddField(
            model_name='diarista',
            name='formacao',
            field=models.CharField(blank=True, max_length=30),
        ),
    ]
