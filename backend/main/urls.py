from django.urls import path
from .views import ProductListView, ProductDetailView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='products'),
    path('products/<str:pk>/', ProductDetailView.as_view(), name='product')
]
