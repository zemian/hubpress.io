(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{492:function(e,t,r){"use strict";r.r(t);var n=r(11),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Camel Timer is a simple and yet useful component.\nIt brings the JDK’s timer functionality into your camel Route with very simple config.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('   from("timer://mytimer?period=1000")\n    .process(new Processor() {\n        public void process(Exchange msg) {\n            LOG.info("Processing {}", msg);\n        }\n    });\n')])])]),r("p",[e._v("That will generate a timer event message every second. You may short hand "),r("code",[e._v("1000")]),e._v(" with\n"),r("code",[e._v("1s")]),e._v(" instead. It supports "),r("code",[e._v("m")]),e._v(" for minutes, or "),r("code",[e._v("h")]),e._v(" for hours as well. Pretty handy.")]),e._v(" "),r("p",[e._v("Another useful timer feature is that it can limit (stop) the number of timer messages after a certain\ncount. You simply need to add "),r("code",[e._v("repeatCount")]),e._v(" option toward the url.")]),e._v(" "),r("p",[e._v("Couple of properties from the event message would be useful when handling the timer\nmessage. Here is an example how to read them.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('   from("timer://mytimer?period=1s&repeatCount=5")\n    .process(new Processor() {\n        public void process(Exchange msg) {\n            java.util.Date fireTime = msg.getProperty(Exchange.TIMER_FIRED_TIME, java.util.Date.class);\n            int eventCount = msg.getProperty(Exchange.TIMER_COUNTER, Integer.class);\n            LOG.info("We received {}th timer event that was fired on {}", eventCount, fireTime);\n        }\n    });\n')])])]),r("p",[e._v("There are more options availabe from "),r("a",{attrs:{href:"http://camel.apache.org/timer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Timer"),r("OutboundLink")],1),e._v(" component\nthat you may explore.\n"),r("a",{attrs:{href:"http://saltnlight5.blogspot.com/2013/08/getting-started-with-apache-camel-using.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Try it out with a Route"),r("OutboundLink")],1),e._v("\nand see it for yourself.")])])}),[],!1,null,null,null);t.default=o.exports}}]);