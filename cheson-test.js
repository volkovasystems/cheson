
const assert = require( "assert" );
const cheson = require( "./cheson.js" );

assert.equal( cheson( "{ hello }" ), false, "should return false" );
assert.equal( cheson( '{ "name": "simple" }' ), true, "should return true" );

console.log( "ok" );
