(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{569:function(e,t,n){"use strict";n.r(t);var a=n(11),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("You can implement the Linux cat program with few lines of Python code.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import fileinput\nfor line in fileinput.input():\n    print(line, end='')\n")])])]),n("p",[e._v("Then I was tinkering with this, and wanted to add an option to display the filename if multiple files were given. Here is how I use argparse module for this. Not the most efficient code and prob overkill, but it works!")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import fileinput, argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('files', nargs='+', metavar='FILE', help='files to concatenate or print')\nparser.add_argument('-n', action='store_true', help='show filename')\nargs = parser.parse_args()\nwith fileinput.input(files=args.files) as finput:\n    for line in finput:\n        if (args.n and finput.isfirstline()):\n            print('\\n=== {0} ==='.format(finput.filename()))\n        print(line, end='')\n")])])]),n("p",[e._v("Note that argparse not only just parse for options, but actual argument list as well, and you have to explicitly define it, so you may reference it after the parse.")])])}),[],!1,null,null,null);t.default=i.exports}}]);