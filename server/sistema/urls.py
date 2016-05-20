from django.conf.urls import patterns, url, include
from rest_framework import routers
from sistema import views 

router = routers.DefaultRouter()
router.register(r'persona', views.Persona, 'persona')
router.register(r'libro', views.Libro, 'libro')
router.register(r'articulo', views.Articulo, 'articulo')


urlpatterns = [
	url(r'^servicios/', include(router.urls)),
]