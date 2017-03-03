main: build

.PHONY: build yarn_install run

build: yarn_install
	node_modules/.bin/webpack ./entry.js bundle.js --module-bind 'css=style-loader!css-loader'

yarn_install:
	yarn

run:
	${BROWSER} index.html
