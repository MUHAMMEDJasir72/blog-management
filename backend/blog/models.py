from django.db import models
from django.contrib.auth.models import AbstractUser



class UserDetails(AbstractUser):
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
