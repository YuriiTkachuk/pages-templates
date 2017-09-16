all: build
	node server.js

build: node_modules
	node index.js

node_modules: package.json
	npm install

docker-build:
	docker build -t app .

docker-run:
	docker run -p 4000:3000 app

.PHONY: build
