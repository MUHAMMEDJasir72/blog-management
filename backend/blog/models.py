from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings



class UserDetails(AbstractUser):
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='posts/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
