ifneq (,$(wildcard ./.env))
    include .env
    export
endif

docker-build:
	docker build -t svmpsp-dev --target svmpsp-dev .

db:
	docker run --name svmpsp-postgres --rm \
		-e NUXT_POSTGRES_USER=$(NUXT_POSTGRES_USER) \
		-e NUXT_POSTGRES_DB=$(NUXT_POSTGRES_DB) \
		-e POSTGRES_HOST_AUTH_METHOD=trust \
		-e NUXT_POSTGRES_PASSWORD=$(NUXT_POSTGRES_PASSWORD) \
		-e NUXT_POSTGRES_HOST=$(NUXT_POSTGRES_HOST) \
		-e PGDATA=/var/lib/postgresql/data/pgdata \
		-d \
		-p 8888:5432 \
		-v ~/docker-mounts/postgres-db-data:/var/lib/postgresql/data \
		postgres

db-clean:
	docker stop svmpsp-postgres
