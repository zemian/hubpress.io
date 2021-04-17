(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{449:function(e,t,o){"use strict";o.r(t);var n=o(11),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Are you working on a large Hibernate project that takes long time to load up all the "),o("code",[e._v("hbm.xml")]),e._v(" files when creating the\n"),o("code",[e._v("Session")]),e._v(" object? This is fine during deployment and runtime because it only loads it once. However, often time we also\nneed to the same "),o("code",[e._v("Session")]),e._v(" object to do some ad-hoc "),o("code",[e._v("HQL")]),e._v(" queries to debug or validate data. Loading and re-loading\nlarge mapping files in a "),o("code",[e._v("Session")]),e._v(" to just execute single query is very painful.")]),e._v(" "),o("p",[e._v("Now, I like to poke around Java things with "),o("code",[e._v("Groovy")]),e._v(", and it's a great tool to peek at your data as ad-hoc queries as well.\nYou can easily do this with their "),o("code",[e._v("groovyConsole")]),e._v(" GUI tool and add "),o("code",[e._v("--classpath")]),e._v(" option to include your project classes. This\nwill bring up a tiny Editor, and you can script to load your hibernate "),o("code",[e._v("Session")]),e._v(" there. Once the first run is loaded (the\nhibenrate "),o("code",[e._v("Session")]),e._v(" created), then second run is almost in an instant.")]),e._v(" "),o("p",[e._v("Running the little "),o("code",[e._v("groovyConsole")]),e._v(" had wet my appetite, and I was hungry for a better text editor, but yet I don't really\nwant a full blow IDE for scripting. I like do my scripting in a plain editor. Now if you have an editor such as "),o("a",{attrs:{href:"http://sublimetext.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sublime Text 2"),o("OutboundLink")],1),e._v(' (ST2) that has a "build" feature to execute a external command, then you will enjoy scripting much more. With\nST2, I can have it call '),o("code",[e._v("groovy.bat")]),e._v(" from inside the editor on the script that I am editing. However, there is another problem: the external command will restart a new JVM process on each run! Now I am back to square one.")]),e._v(" "),o("p",[e._v("To solve this problem, and still have my cake (editor), I recalled an awesome tool called "),o("a",{attrs:{href:"http://www.martiansoftware.com/nailgun/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("NailGun"),o("OutboundLink")],1),e._v(". This works perfectly with Groovy and my problem. I can start a server like this")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('java -cp "groovy-all-2.0.1.jar:nailgun-0.7.1.jar" -server com.martiansoftware.nailgun.NGServer\n')])])]),o("p",[e._v("And then in my ST2 editor, I can run an external command like this as the NailGun client:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("/path/to/nailgun-0.7.1/ng groovy.ui.GroovyMain test.groovy\n")])])]),o("p",[e._v("Nail gun client sends the script file content to the server and prints the result. Again, after first run, the second run should\nbe instantaneously.")]),e._v(" "),o("p",[e._v("There, I scratched my itch.")]),e._v(" "),o("h1",{attrs:{id:"details-on-how-to-setup-sublime-text-2-to-run-nailgun-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#details-on-how-to-setup-sublime-text-2-to-run-nailgun-client"}},[e._v("#")]),e._v(" Details on how to setup Sublime Text 2 to run NailGun client")]),e._v(" "),o("ol",[o("li",[e._v('Go to menu: "Preference > Browse Packages"')]),e._v(" "),o("li",[e._v("Open the Groovy folder")]),e._v(" "),o("li",[e._v('Save a file named "GroovyNailGunClient.sublime-build" with the following:')])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n"cmd": ["/path/to/nailgun-0.7.1/ng", "groovy.ui.GroovyMain", "$file"],\n"file_regex": "^(...*?):([0-9]*):?([0-9]*)",\n"selector": "source.groovy"\n}\n')])])]),o("ol",{attrs:{start:"4"}},[o("li",[e._v('Select menu "Tool > Build System > GroovyNailGunClient"')]),e._v(" "),o("li",[e._v("Press "),o("code",[e._v("CTRL+B")]),e._v(" to run any groovy file in your editor.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);