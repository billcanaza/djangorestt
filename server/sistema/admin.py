from django.contrib import admin
from .models import Persona, Libro, Articulo

admin.site.register(Persona)
admin.site.register(Libro)
admin.site.register(Articulo)