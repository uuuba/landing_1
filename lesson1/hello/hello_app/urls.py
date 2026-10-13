from django.urls import path

from . import views

urlpatterns = [
    path('hello/<str:name>/<int:age>/', views.hello),
    # path('index/' ,views.index )
    path('hello2/' , views.hello2),
    path('hello3/', views.hello3),
    path('danger/' , views.danger),
    path('index/' , views.hello_form),
    path('game/', views.GameView.as_view()),

]