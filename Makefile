main: build

.PHONY: build yarn_install

build: yarn_install
	node_modules/.bin/webpack ./entry.js bundle.js

yarn_install:
	yarn
