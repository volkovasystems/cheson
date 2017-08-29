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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXNvbi5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImhhcmRlbiIsInJlcXVpcmUiLCJwYXJzZW9uIiwiZXZhbHVhdGUiLCJzdHJpbmciLCJlcnJvciIsIkVycm9yIiwic3RhY2siLCJjaGVzb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1FLFdBQVcsU0FBU0EsUUFBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDM0M7Ozs7Ozs7O0FBUUEsS0FBRztBQUNGRixVQUFTRSxNQUFUOztBQUVBLFNBQU8sSUFBUDs7QUFFQSxFQUxELENBS0MsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsU0FBTyxJQUFJQyxLQUFKLDZCQUFzQ0QsTUFBTUUsS0FBNUMsQ0FBUDtBQUNBO0FBQ0QsQ0FqQkQ7O0FBbUJBLElBQU1DLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkosTUFBakIsRUFBeUI7QUFDdkM7Ozs7Ozs7O0FBUUEsS0FBRztBQUNGRixVQUFTRSxNQUFUOztBQUVBLFNBQU8sSUFBUDs7QUFFQSxFQUxELENBS0MsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsU0FBTyxLQUFQO0FBQ0E7QUFDRCxDQWpCRDs7QUFtQkFMLE9BQVEsVUFBUixFQUFvQkcsUUFBcEIsRUFBOEJLLE1BQTlCOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCRixNQUFqQiIsImZpbGUiOiJjaGVzb24uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJjaGVzb25cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiY2hlc29uL2NoZXNvbi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJjaGVzb24uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJjaGVzb25cIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvY2hlc29uLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJjaGVzb24tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRDaGVjayBKU09OIHN0cmluZy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxyXG5cdFx0XHRcInBhcnNlb25cIjogXCJwYXJzZW9uXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcclxuY29uc3QgcGFyc2VvbiA9IHJlcXVpcmUoIFwicGFyc2VvblwiICk7XHJcblxyXG5jb25zdCBldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlKCBzdHJpbmcgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInN0cmluZzpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0dHJ5e1xyXG5cdFx0cGFyc2Vvbiggc3RyaW5nICk7XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHJldHVybiBuZXcgRXJyb3IoIGBtYWxmb3JtZWQganNvbiBzdHJpbmcsICR7IGVycm9yLnN0YWNrIH1gICk7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgY2hlc29uID0gZnVuY3Rpb24gY2hlc29uKCBzdHJpbmcgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInN0cmluZzpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0dHJ5e1xyXG5cdFx0cGFyc2Vvbiggc3RyaW5nICk7XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn07XHJcblxyXG5oYXJkZW4oIFwiZXZhbHVhdGVcIiwgZXZhbHVhdGUsIGNoZXNvbiApO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjaGVzb247XHJcbiJdfQ==
//# sourceMappingURL=cheson.support.js.map
