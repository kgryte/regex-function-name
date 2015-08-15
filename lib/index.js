'use strict';

// REGEX //

/**
* REGEX: /^\s*function\s*([^\(]*)/i
*	Capture everything that is not a space immediately after the `function` keyword and before the first left parenthesis.
*
*	/^\s*
*		-	Match 0 or more spaces at beginning
*	function
*		-	Match the word `function`
*	\s*
*		-	Match 0 or more spaces after the word `function`
*	()
*		-	Capture
*	[^\(]*
*		-	Match anything except a left parenthesis `(` 0 or more times
*	/i
*		-	ignore case
*/
var re = /^\s*function\s*([^\(]*)/i;


// EXPORTS //

module.exports = re;
