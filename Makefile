.ONESHELL:
SHELL = bash

-include ./Makefile.properties

hello:
	echo "Hello, world!"

devrun:
	docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d --build


