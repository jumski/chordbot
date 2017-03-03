main: build

.PHONY: build yarn_install run

build: yarn_install
	node_modules/.bin/webpack

yarn_install:
	yarn

run:
	${BROWSER} index.html
