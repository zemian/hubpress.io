(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{641:function(e,t,r){"use strict";r.r(t);var o=r(11),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"option-1-jmx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#option-1-jmx"}},[e._v("#")]),e._v(" Option 1: JMX")]),e._v(" "),r("p",[e._v("Many people asked can they manage Quartz via JMX, and that the documentation on this is not clear enough to help them get started. So, let me highlight couple ways you can do this.")]),e._v(" "),r("p",[e._v("Yes you can enable JMX in quartz with the following in\n"),r("code",[e._v("quartz.properties")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("org.quartz.scheduler.jmx.export = true\n")])])]),r("p",[e._v("After this, you use standard JMX client such as "),r("code",[e._v("$JAVA_HOME/bin/jconsole")]),e._v(" to connect and manage remotely.")]),e._v(" "),r("h2",{attrs:{id:"option-2-rmi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#option-2-rmi"}},[e._v("#")]),e._v(" Option 2: RMI")]),e._v(" "),r("p",[e._v("Another way to manage quartz remotely is to enable RMI in Quartz. If you use this, you basically run one instance of Quartz as RMI server, and then\nyou can create second Quartz instance as RMI client. These two can talk remotely via a TCP port.")]),e._v(" "),r("p",[e._v("For server scheduler instance, you want to add these in "),r("code",[e._v("quartz.properties")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    org.quartz.scheduler.rmi.export = true\n    org.quartz.scheduler.rmi.createRegistry = true\n    org.quartz.scheduler.rmi.registryHost = localhost\n    org.quartz.scheduler.rmi.registryPort = 1099\n    org.quartz.scheduler.rmi.serverPort = 1100\n")])])]),r("p",[e._v("And for client scheduler instance, you want to add these in "),r("code",[e._v("quartz.properties")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    org.quartz.scheduler.rmi.proxy = true\n    org.quartz.scheduler.rmi.registryHost = localhost\n    org.quartz.scheduler.rmi.registryPort = 1099\n")])])]),r("p",[e._v("The RMI feature is mentioned in Quartz doc "),r("a",{attrs:{href:"http://quartz-scheduler.org/documentation/quartz-2.x/configuration/ConfigRMI",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(". Quartz doesn't have\na "),r("em",[e._v("client")]),e._v(" API, but use the same "),r("code",[e._v("org.quartz.Scheduler")]),e._v(" for both server and client. It's just the configuration are different.\nBy different configuration, you get very different behavior. For server, your scheduler is running all the jobs, while for client, it's simply a\nproxy. Your client scheduler instance will not run any jobs! You must be really careful when shutting down client because it does allow you to bring\ndown the server!")]),e._v(" "),r("p",[e._v("These configurations have been highlighted in the "),r("a",{attrs:{href:"http://code.google.com/p/myschedule",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySchedule"),r("OutboundLink")],1),e._v(" project. If you run the webapp, you should see\na screen like "),r("a",{attrs:{href:"http://stormy-flower-6956.herokuapp.com/main/dashboard/create",target:"_blank",rel:"noopener noreferrer"}},[e._v("this demo"),r("OutboundLink")],1),e._v(", and you will see it provided many sample of quartz configurations\nwith these remote managment config properties.")]),e._v(" "),r("p",[e._v("If configure with RMI option, you can actually still use MySchedule web UI to manage the Quartz as proxy. You can view and drill down jobs, and you can\neven stop or shutdown remote server!")]),e._v(" "),r("p",[e._v("Based on my experience, there is a down side of using Quartz RMI feature though. That is it creates a single point of failure. There is no fail over\nif your RMI server port is down!")])])}),[],!1,null,null,null);t.default=a.exports}}]);