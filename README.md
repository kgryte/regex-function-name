Function Name
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture a function name.


## Installation

``` bash
$ npm install regex-function-name
```


## Usage

``` javascript
var re = require( 'regex-function-name' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture a `function` name.

``` javascript
function beep() {
	return 'boop';
}

var name = re.exec( beep.toString() )[ 1 ];
// returns 'beep'
```


## Examples

``` javascript
var re = require( 'regex-function-name' );

function fname( fcn ) {
	return re.exec( fcn.toString() )[ 1 ];
}

console.log( fname( Math.sqrt ) );
// returns 'sqrt'

console.log( fname( Int8Array ) );
// returns 'Int8Array'

console.log( fname( Object.prototype.toString ) );
// returns 'toString'

console.log( fname( function(){} ) );
// returns ''
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-function-name.svg
[npm-url]: https://npmjs.org/package/regex-function-name

[travis-image]: http://img.shields.io/travis/kgryte/regex-function-name/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-function-name

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-function-name/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-function-name?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-function-name.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-function-name

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-function-name.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-function-name

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-function-name.svg
[github-issues-url]: https://github.com/kgryte/regex-function-name/issues
