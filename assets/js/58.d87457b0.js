(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{446:function(e,t,a){"use strict";a.r(t);var o=a(11),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("From their site, it says the "),a("a",{attrs:{href:"http://camel.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Camel"),a("OutboundLink")],1),e._v(' is a versatile open-source integration framework based on known Enterprise Integration Patterns. It might seem like a vague definition, but I want to tell you that this is a very productive Java library that can solve many of typical IT problems! You can think of it as a very light weight ESB framework with "batteries" included.')]),e._v(" "),a("p",[e._v("In every jobs I've been to so far, folks are writing their own solutions in one way or another to solve many common problems (or they would buy some very expensive enterprisy ESB servers that takes months and months to learn, config, and maintain). Things that we commonly solve are integration (glue) code of existing business services together, process data in a certain workflow manner, or move and transform data from one place to another etc. These are very typical need in many IT environments. The Apache Camel can be used in cases like these; not only that, but also in a very productive and effective way!")]),e._v(" "),a("p",[e._v("In this article, I will show you how to get started with Apache Camel along with just few lines of "),a("a",{attrs:{href:"http://groovy.codehaus.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Groovy"),a("OutboundLink")],1),e._v(" script. You can certainly also start off with a full Java project to try out Camel, but I find Groovy will give you the shortest working example and learning curve.")]),e._v(" "),a("h2",{attrs:{id:"getting-started-with-apache-camel-using-groovy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-apache-camel-using-groovy"}},[e._v("#")]),e._v(" Getting started with Apache Camel using Groovy")]),e._v(" "),a("p",[e._v("So let's begin. First let's see a hello world demo with Camel + Groovy.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    @Grab('org.apache.camel:camel-core:2.10.0')\n    @Grab('org.slf4j:slf4j-simple:1.6.6')\n    import org.apache.camel.*\n    import org.apache.camel.impl.*\n    import org.apache.camel.builder.*\n    \n    def camelContext = new DefaultCamelContext()\n    camelContext.addRoutes(new RouteBuilder() {\n        def void configure() {\n            from(\"timer://jdkTimer?period=3000\")\n                .to(\"log://camelLogger?level=INFO\")\n        }\n    })\n    camelContext.start()\n    \n    addShutdownHook{ camelContext.stop() }\n    synchronized(this){ this.wait() }\n")])])]),a("p",[e._v("Save above into a file named "),a("code",[e._v("helloCamel.groovy")]),e._v(" and then run it like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    $ groovy helloCamel.groovy\n    388 [main] INFO org.apache.camel.impl.DefaultCamelContext - Apache Camel 2.10.0 (CamelContext: camel-1) is starting\n    445 [main] INFO org.apache.camel.management.ManagementStrategyFactory - JMX enabled.\n    447 [main] INFO org.apache.camel.management.DefaultManagementLifecycleStrategy - StatisticsLevel at All so enabling load performance statistics\n    678 [main] INFO org.apache.camel.impl.converter.DefaultTypeConverter - Loaded 170 type converters\n    882 [main] INFO org.apache.camel.impl.DefaultCamelContext - Route: route1 started and consuming from: Endpoint[timer://jdkTimer?period=3000]\n    883 [main] INFO org.apache.camel.impl.DefaultCamelContext - Total 1 routes, of which 1 is started.\n    887 [main] INFO org.apache.camel.impl.DefaultCamelContext - Apache Camel 2.10.0 (CamelContext: camel-1) started in 0.496 seconds\n    898 [Camel (camel-1) thread #1 - timer://jdkTimer] INFO camelLogger - Exchange[ExchangePattern:InOnly, BodyType:null, Body:[Body is null]]\n    3884 [Camel (camel-1) thread #1 - timer://jdkTimer] INFO camelLogger - Exchange[ExchangePattern:InOnly, BodyType:null, Body:[Body is null]]\n    6884 [Camel (camel-1) thread #1 - timer://jdkTimer] INFO camelLogger - Exchange[ExchangePattern:InOnly, BodyType:null, Body:[Body is null]]\n    ...\n")])])]),a("p",[e._v("The little script above is simple but it presented few key features of Camel Groovyness. The first and last section of the "),a("code",[e._v("helloCamel.groovy")]),e._v(" script are just Groovy featuers. The "),a("code",[e._v("@Grab")]),e._v(" annotation will automatically download the dependency jars you specify. We import Java packages to use its classes later. At the end we ensure to shutdown Camel before exiting JVM through the Java Shutdown Hook mechanism. The program will sit and wait until user press "),a("code",[e._v("CTRL+C")]),e._v(", just as a typical server process behavior.")]),e._v(" "),a("p",[e._v('The middle section is where the Camel action is. You would always create a Camel context to begin (think of it as the server or manager for the process.) And then you would add a Camel route (think of it as a workflow or pipeflow) that you like to process data (Camel likes to call these data "messages"). The route consists of a "from" starting point (where data generated), and one or more "to" points (where data going to be processed). Camel calls these destination \'points\' as \'Endpoints\'. These endpoints can be expressed in simple URI string format such as '),a("code",[e._v('"timer://jdkTimer?period=3000"')]),e._v(". Here we are generating timer message in every 3 secs into the pipeflow, and then process by a logger URI, which will simply print to console output.")]),e._v(" "),a("p",[e._v("After Camel context started, it will start processing data through the workflow, as you can observe from the output example above. Now try pressing "),a("code",[e._v("CTRL+C")]),e._v(" to end its process. Notice how the Camel will shutdown everything very gracefully.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    7312 [Thread-2] INFO org.apache.camel.impl.DefaultCamelContext - Apache Camel 2.10.0 (CamelContext: camel-1) is shutting down\n    7312 [Thread-2] INFO org.apache.camel.impl.DefaultShutdownStrategy - Starting to graceful shutdown 1 routes (timeout 300 seconds)\n    7317 [Camel (camel-1) thread #2 - ShutdownTask] INFO org.apache.camel.impl.DefaultShutdownStrategy - Route: route1 shutdown complete, was consuming from: Endpoint[timer://jdkTimer?period=3000]\n    7317 [Thread-2] INFO org.apache.camel.impl.DefaultShutdownStrategy - Graceful shutdown of 1 routes completed in 0 seconds\n    7321 [Thread-2] INFO org.apache.camel.impl.converter.DefaultTypeConverter - TypeConverterRegistry utilization[attempts=2, hits=2, misses=0, failures=0] mappings[total=170, misses=0]\n    7322 [Thread-2] INFO org.apache.camel.impl.DefaultCamelContext - Apache Camel 2.10.0 (CamelContext: camel-1) is shutdown in 0.010 seconds. Uptime 7.053 seconds.\n")])])]),a("p",[e._v("So that's our first taste of Camel ride! However, we titled this section as \"Hello World!\" demo, and yet we haven't seen any. But you might have also noticed that above script are mostly boiler plate code that we setup. No user logic has been added yet. Not even the logging the message part! We simply configuring the route.")]),e._v(" "),a("p",[e._v("Now let's modify the script little bit so we will actually add our user logic to process the timer message.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    @Grab(\'org.apache.camel:camel-core:2.10.0\')\n    @Grab(\'org.slf4j:slf4j-simple:1.6.6\')\n    import org.apache.camel.*\n    import org.apache.camel.impl.*\n    import org.apache.camel.builder.*\n    \n    def camelContext = new DefaultCamelContext()\n    camelContext.addRoutes(new RouteBuilder() {\n        def void configure() {\n            from("timer://jdkTimer?period=3000")\n                .to("log://camelLogger?level=INFO")\n                .process(new Processor() {\n                    def void process(Exchange exchange) {\n                        println("Hello World!")\n                    }\n                })\n        }\n    })\n    camelContext.start()\n    \n    addShutdownHook{ camelContext.stop() }\n    synchronized(this){ this.wait() }\n')])])]),a("p",[e._v("Notice how I can simply append the process code part right after the "),a("code",[e._v('to("log...")')]),e._v(' line. I have added a "processor" code block to process the timer message. The logic is simple: we greet the world on each tick.')]),e._v(" "),a("h2",{attrs:{id:"making-camel-route-more-concise-and-practical"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-camel-route-more-concise-and-practical"}},[e._v("#")]),e._v(" Making Camel route more concise and practical")]),e._v(" "),a("p",[e._v('Now, do I have you at Hello yet? If not, then I hope you will be patient and continue to follow along for few more practical features of Camel. First, if you were to put Camel in real use, I would recommend you setup your business logic separately from the workflow route definition. This is so that you can clearly express and see your entire pipeflow of route at a glance. To do this, you want to move the "processor", into a service bean.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    @Grab(\'org.apache.camel:camel-core:2.10.0\')\n    @Grab(\'org.slf4j:slf4j-simple:1.6.6\')\n    import org.apache.camel.*\n    import org.apache.camel.impl.*\n    import org.apache.camel.builder.*\n    import org.apache.camel.util.jndi.*\n    \n    class SystemInfoService {\n        def void run() {\n            println("Hello World!")\n        }\n    }\n    def jndiContext = new JndiContext();\n    jndiContext.bind("systemInfoPoller", new SystemInfoService())\n    \n    def camelContext = new DefaultCamelContext(jndiContext)\n    camelContext.addRoutes(new RouteBuilder() {\n        def void configure() {\n            from("timer://jdkTimer?period=3000")\n                .to("log://camelLogger?level=INFO")\n                .to("bean://systemInfoPoller?method=run")\n        }\n    })\n    camelContext.start()\n    \n    addShutdownHook{ camelContext.stop() }\n    synchronized(this){ this.wait() }\n')])])]),a("p",[e._v("Now, see how compact this workflow route has become? The Camel's Java DSL such as "),a("code",[e._v('"from().to().to()"')]),e._v(" for defining route are so clean and simple to use. You can even show this code snip to your Business Analysts, and they would likely be able to verify your business flow easily! Wouldn't that alone worth a million dollars?")]),e._v(" "),a("h1",{attrs:{id:"how-about-another-demo-filepoller-processing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-about-another-demo-filepoller-processing"}},[e._v("#")]),e._v(" How about another demo: FilePoller Processing")]),e._v(" "),a("p",[e._v("File polling processing is a very common and effective way to solve many business problems. If you work for commercial companies long enough, you might have written one before. A typical file poller would process incoming files from a directory and then process the content, and then move the file into a output directory. Let's make a Camel route to do just that.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    @Grab(\'org.apache.camel:camel-core:2.10.0\')\n    @Grab(\'org.slf4j:slf4j-simple:1.6.6\')\n    import org.apache.camel.*\n    import org.apache.camel.impl.*\n    import org.apache.camel.builder.*\n    import org.apache.camel.util.jndi.*\n    \n    class UpperCaseTextService {\n        def String transform(String text) {\n            return text.toUpperCase()\n        }\n    }\n    def jndiContext = new JndiContext();\n    jndiContext.bind("upperCaseTextService", new UpperCaseTextService())\n    \n    def dataDir = "/${System.properties[\'user.home\']}/test/file-poller-demo"\n    def camelContext = new DefaultCamelContext(jndiContext)\n    camelContext.addRoutes(new RouteBuilder() {\n        def void configure() {\n            from("file://${dataDir}/in")\n                .to("log://camelLogger")\n                .to("bean://upperCaseTextService?method=transform")\n                .to("file://${dataDir}/out")\n        }\n    })\n    camelContext.start()\n    \n    addShutdownHook{ camelContext.stop() }\n    synchronized(this){ this.wait() }    \n')])])]),a("p",[e._v("Here you see I defined a route to poll a "),a("code",[e._v("$HOME/test/file-poller-demo/in")]),e._v(" directory for text files. Once it's found it will log it to console, and then process by a service that transform the content text into upper case. After this, it will send the file into "),a("code",[e._v("$HOME/test/file-poller-demo/out")]),e._v(" directory. My goodness, reading the Camel route above probably express what I wrote down just as effective. Do you see the benefits here?")]),e._v(" "),a("h2",{attrs:{id:"what-s-the-batteries-included-part"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-batteries-included-part"}},[e._v("#")]),e._v(' What\'s the "batteries" included part.')]),e._v(" "),a("p",[e._v('If you\'ve used Python programming before, you might have heard the pharase that they claim often: Python has "batteries" included. This means their interpreter comes with a rich of libaries for most of the common programming need. You can often write python program without have to download separated external libraries.')]),e._v(" "),a("p",[e._v("I am making similar analogies here with Apache Camel. The Camel project comes with so many ready to use "),a("a",{attrs:{href:"http://camel.apache.org/components.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("components"),a("OutboundLink")],1),e._v(" that you can find just about any transport protocals that can carry data. These Camel \"components\" are ones that support different 'Endpoint URI' that we have seen in our demos above. We have simply shown you "),a("code",[e._v("timer")]),e._v(", "),a("code",[e._v("log")]),e._v(", "),a("code",[e._v("bean")]),e._v(", and "),a("code",[e._v("file")]),e._v(" components, but there are over 120 more. You will find "),a("code",[e._v("jms")]),e._v(", "),a("code",[e._v("http")]),e._v(", "),a("code",[e._v("ftp")]),e._v(", "),a("code",[e._v("cfx")]),e._v(", or "),a("code",[e._v("tcp")]),e._v("  just to name a few.")]),e._v(" "),a("p",[e._v("The Camel project also has an option for you to define route in "),a("a",{attrs:{href:"http://camel.apache.org/spring.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("declarative xml format"),a("OutboundLink")],1),e._v(". The xml is just an extension of a Spring xml config with Camel's namespace handler added on top. Spring is optional in Camel, but you can use it together in a very powerful way.")])])}),[],!1,null,null,null);t.default=n.exports}}]);