main: build

.PHONY: build yarn_install run

build: yarn_install
	node_modules/.bin/webpack --progress --colors

yarn_install:
	yarn

run:
	${BROWSER} index.html
