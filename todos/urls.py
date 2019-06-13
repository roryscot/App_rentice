from .api import GroupListViewSet, CardGroupViewSet, CardViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'grouplists', GroupListViewSet)
router.register(r'cardgroups', CardGroupViewSet)
router.register(r'cards', CardViewSet)
# router.register(r':grouplist/:cardgroups/:cardID', CardViewSet)

urlpatterns = router.urls