
from django.conf.urls import include, url
from rest_framework import routers

from .api import NoteViewSet, RegistrationAPI, LoginAPI

router = routers.DefaultRouter()
router.register('notes', NoteViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
]