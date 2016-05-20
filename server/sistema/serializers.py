# coding: utf-8

from rest_framework import serializers
from .models import Persona, Libro, Articulo

class PersonaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Persona
	

class LibroSerializer(serializers.ModelSerializer):
	autor = PersonaSerializer(many=True, read_only=False )
	class Meta:
		model = Libro
		fields = ('id','nombre', 'resumen', 'autor')
	#many [1,2,3,4]
	#autor:[{"id":id,"nombre":"autor","apellido":"apelludioo","nacionalidad":"nacio"}]
"""
	def create(self, validated_data):
		autors_data = validated_data.pop('autor')
		libro = Libro.objects.create(**validated_data)
	
		for data in autors_data:
			Persona.objects.create(libro=libro, **data)
			
		return libro
"""
class ArticuloSerializer(serializers.ModelSerializer):
	autor = PersonaSerializer(many=True)
	class Meta:
		model = Articulo
		fields = ('id','titulo', 'descripcion', 'autor')
