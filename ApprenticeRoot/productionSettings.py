from .settings import *
import environ

#Read environment variables
environ.Env.read_env(os.path.join(BASE_DIR, '.env.dev'))

#defining which variables django-environ should look for
env = environ.Env(
    SECRET_KEY=str,
    DEBUG=(bool, False),
    DB_HOST=(str, '127.0.0.1'),
    DB_NAME=str,
    DB_USER=str,
    DB_PASSWORD=str,
    DB_PORT=int
)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')

# # Database
# # https://docs.djangoproject.com/en/2.0/ref/settings/#databases
#
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': env('DB_NAME'),
#         'USER': env('DB_USER'),
#         'PASSWORD': env('DB_PASSWORD'),
#         'HOST': env('DB_HOST'),
#         'PORT': env('DB_PORT'),
#     }
# }
#
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "assets"),
]

ALLOWED_HOSTS = ['localhost']

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.prod.json'),
        }
}