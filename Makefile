main: build

.PHONY: build yarn_install run

build: yarn_install
	node_modules/.bin/webpack ./entry.js bundle.js

yarn_install:
	yarn

run:
	${BROWSER} index.html
