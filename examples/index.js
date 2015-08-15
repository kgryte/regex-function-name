'use strict';

var re = require( './../lib' );

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
