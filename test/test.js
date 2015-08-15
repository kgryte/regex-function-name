/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'regex-function-name', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should match a function name', function test() {
		assert.strictEqual( re.exec( beep.toString() )[ 1 ], 'beep' );

		function beep() {
			return 'boop';
		}
	});

});
