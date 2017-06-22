"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "cheson",
			"path": "cheson/cheson.js",
			"file": "cheson.js",
			"module": "cheson",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/cheson.git",
			"test": "cheson-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check JSON string.
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"parseon": "parseon"
		}
	@end-include
*/

const harden = require( "harden" );
const parseon = require( "parseon" );

const evaluate = function evaluate( string ){
	/*;
		@meta-configuration:
			{
				"string:required": "string"
			}
		@end-meta-configuration
	*/

	try{
		parseon( string );

		return true;

	}catch( error ){
		return new Error( `malformed json string, ${ error.stack }` );
	}
};

const cheson = function cheson( string ){
	/*;
		@meta-configuration:
			{
				"string:required": "string"
			}
		@end-meta-configuration
	*/

	try{
		parseon( string );

		return true;

	}catch( error ){
		return false;
	}
};

harden( "evaluate", evaluate, cheson );

module.exports = cheson;
