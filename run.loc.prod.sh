#!/usr/bin/env bash


echo "Collecting static files."
python manage.py collectstatic

echo "Starting server with production settings."
python manage.py runserver --settings=ApprenticeRoot.productionSettings