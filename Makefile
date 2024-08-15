ifneq (,$(wildcard ./.env))
    include .env
    export
endif

docker-build:
	docker build -t svmpsp-dev --target svmpsp-dev .

db:
	docker run --name svmpsp-postgres --rm \
		-e POSTGRES_USER=$(POSTGRES_USER) \
		-e POSTGRES_DB=$(POSTGRES_DB) \
		-e POSTGRES_HOST_AUTH_METHOD=trust \
		-e POSTGRES_PASSWORD=$(POSTGRES_PWD) \
		-e PGDATA=/var/lib/postgresql/data/pgdata \
		-d \
		-p 8888:5432 \
		-v ~/docker-mounts/postgres-db-data:/var/lib/postgresql/data \
		postgres

db-clean:
	docker stop svmpsp-postgres
