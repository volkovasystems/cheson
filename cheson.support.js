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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
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
			"parseon": "parseon"
		}
	@end-include
*/

var harden = require("harden");
var parseon = require("parseon");

var evaluate = function evaluate(string) {
	/*;
 	@meta-configuration:
 		{
 			"string:required": "string"
 		}
 	@end-meta-configuration
 */

	try {
		parseon(string);

		return true;
	} catch (error) {
		return new Error("malformed json string, " + error.stack);
	}
};

var cheson = function cheson(string) {
	/*;
 	@meta-configuration:
 		{
 			"string:required": "string"
 		}
 	@end-meta-configuration
 */

	try {
		parseon(string);

		return true;
	} catch (error) {
		return false;
	}
};

harden("evaluate", evaluate, cheson);

module.exports = cheson;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXNvbi5qcyJdLCJuYW1lcyI6WyJoYXJkZW4iLCJyZXF1aXJlIiwicGFyc2VvbiIsImV2YWx1YXRlIiwic3RyaW5nIiwiZXJyb3IiLCJFcnJvciIsInN0YWNrIiwiY2hlc29uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUUsV0FBVyxTQUFTQSxRQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUMzQzs7Ozs7Ozs7QUFRQSxLQUFHO0FBQ0ZGLFVBQVNFLE1BQVQ7O0FBRUEsU0FBTyxJQUFQO0FBRUEsRUFMRCxDQUtDLE9BQU9DLEtBQVAsRUFBYztBQUNkLFNBQU8sSUFBSUMsS0FBSiw2QkFBc0NELE1BQU1FLEtBQTVDLENBQVA7QUFDQTtBQUNELENBakJEOztBQW1CQSxJQUFNQyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJKLE1BQWpCLEVBQXlCO0FBQ3ZDOzs7Ozs7OztBQVFBLEtBQUc7QUFDRkYsVUFBU0UsTUFBVDs7QUFFQSxTQUFPLElBQVA7QUFFQSxFQUxELENBS0MsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsU0FBTyxLQUFQO0FBQ0E7QUFDRCxDQWpCRDs7QUFtQkFMLE9BQVEsVUFBUixFQUFvQkcsUUFBcEIsRUFBOEJLLE1BQTlCOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCRixNQUFqQiIsImZpbGUiOiJjaGVzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImNoZXNvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiY2hlc29uL2NoZXNvbi5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY2hlc29uLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImNoZXNvblwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2NoZXNvbi5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImNoZXNvbi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENoZWNrIEpTT04gc3RyaW5nLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJwYXJzZW9uXCI6IFwicGFyc2VvblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHBhcnNlb24gPSByZXF1aXJlKCBcInBhcnNlb25cIiApO1xuXG5jb25zdCBldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlKCBzdHJpbmcgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzdHJpbmc6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0dHJ5e1xuXHRcdHBhcnNlb24oIHN0cmluZyApO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fWNhdGNoKCBlcnJvciApe1xuXHRcdHJldHVybiBuZXcgRXJyb3IoIGBtYWxmb3JtZWQganNvbiBzdHJpbmcsICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdH1cbn07XG5cbmNvbnN0IGNoZXNvbiA9IGZ1bmN0aW9uIGNoZXNvbiggc3RyaW5nICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwic3RyaW5nOnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHRyeXtcblx0XHRwYXJzZW9uKCBzdHJpbmcgKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH1jYXRjaCggZXJyb3IgKXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbmhhcmRlbiggXCJldmFsdWF0ZVwiLCBldmFsdWF0ZSwgY2hlc29uICk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlc29uO1xuIl19
