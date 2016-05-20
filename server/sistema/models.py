from __future__ import unicode_literals

from django.db import models


class Persona(models.Model):

	nombre = models.CharField(max_length=100, blank=True)
	apellido = models.CharField(max_length=100, blank=True)
	nacionalidad = models.CharField(max_length=100, blank=True)

	def __unicode__(self):
		return self.nombre

class Libro(models.Model):

    nombre = models.CharField(max_length=100, blank=True)
    resumen = models.TextField(help_text='Resumen', blank=True)
    autor = models.ManyToManyField(Persona)

    def __unicode__(self):
    	return self.nombre

class Articulo(models.Model):

	titulo = models.CharField(max_length=100, blank=True)
	descripcion = models.TextField(help_text='Descripcion', blank=True)
	autor = models.ManyToManyField(Persona)

	def __unicode__(self):
		return self.titulo
	