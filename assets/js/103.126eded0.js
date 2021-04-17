(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{488:function(e,n,t){"use strict";t.r(n);var o=t(11),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Apache Camel is a very useful library that helps you process events or messages\nfrom many different sources. You may move these messages through many different\nprotocols such as between VM, HTTP, FTP, JMS, or even DIRECTORY/FILE, and yet\nstill keep your processing code free of transport logic. This allows you to\nconcentrate on digesting the content of the messages instead.")]),e._v(" "),t("p",[e._v("Here I will provide a tutorial on how you can get started with Apache Camel using\nJava.")]),e._v(" "),t("p",[e._v("Let’s start by creating a Maven project "),t("code",[e._v("pom.xml")]),e._v(" file first.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="\n        http://maven.apache.org/POM/4.0.0\n        http://maven.apache.org/maven-v4_0_0.xsd">\n\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>camel-spring-demo</groupId>\n    <artifactId>camel-spring-demo</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <camel.version>2.11.1</camel.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.apache.camel</groupId>\n            <artifactId>camel-core</artifactId>\n            <version>${camel.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-simple</artifactId>\n            <version>1.7.5</version>\n        </dependency>\n    </dependencies>\n\n</project>\n')])])]),t("p",[e._v("We are only going to explore the "),t("code",[e._v("camel-core")]),e._v(", which actually contains quite of few useful\ncomponents that you may use. Also for logging purpose, I have added a "),t("code",[e._v("slf4j-simple")]),e._v(" as\n"),t("a",{attrs:{href:"http://saltnlight5.blogspot.com/2013/08/how-to-configure-slf4j-with-different.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("a logger implementation"),t("OutboundLink")],1),e._v("\nso we may see output on console.")]),e._v(" "),t("p",[e._v("Next you just need a class to construct an "),t("code",[e._v("Route")]),e._v(". A "),t("code",[e._v("Route")]),e._v(" is like a instruction\ndefinition to Camel on how to move your messages from one point to another. We are\ngoing to create "),t("code",[e._v("src/main/java/camelcoredemo/TimerRouteBuilder.java")]),e._v(" file that\nwill generate a timer message on every second, and then pass to a processor\nthat simply logs it.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('package camelcoredemo;\n\nimport org.slf4j.*;\nimport org.apache.camel.*;\nimport org.apache.camel.builder.*;\n\npublic class TimerRouteBuilder extends RouteBuilder {\n    static Logger LOG = LoggerFactory.getLogger(TimerRouteBuilder.class);\n    public void configure() {\n        from("timer://timer1?period=1000")\n        .process(new Processor() {\n            public void process(Exchange msg) {\n                LOG.info("Processing {}", msg);\n            }\n        });\n    }\n}\n')])])]),t("p",[e._v("That’s all you needed to get started. Now you may build and run this simple\ndemo.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("bash> mvn compile\nbash> mvn exec:java -Dexec.mainClass=org.apache.camel.main.Main -Dexec.args='-r camelcoredemo.TimerRouteBuilder'\n")])])]),t("p",[e._v("Notice that we didn’t even write a Java "),t("strong",[e._v("main")]),e._v(" class, but simply use the\n"),t("code",[e._v("org.apache.camel.main.Main")]),e._v(" option to accepts a "),t("code",[e._v("RouteBuilder")]),e._v(" class\nname as parameter. Then it will load and create the route automatically.")]),e._v(" "),t("h2",{attrs:{id:"controlling-the-camelcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controlling-the-camelcontext"}},[e._v("#")]),e._v(" Controlling the "),t("code",[e._v("CamelContext")])]),e._v(" "),t("p",[e._v("When you start Camel, it creates a "),t("code",[e._v("CamelContext")]),e._v(" object that holds\nmany information on how to run it, including the definition of the\n"),t("code",[e._v("Route")]),e._v(" we created. Now if you want to have more control over this\n"),t("code",[e._v("CamelContext")]),e._v(", then you would need to write your own "),t("code",[e._v("Main")]),e._v(" class.\nI will show you a simple one here.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("package camelcoredemo;\n\nimport org.slf4j.*;\nimport org.apache.camel.*;\nimport org.apache.camel.impl.*;\nimport org.apache.camel.builder.*;\n\npublic class TimerMain {\n    static Logger LOG = LoggerFactory.getLogger(TimerMain.class);\n    public static void main(String[] args) throws Exception {\n        new TimerMain().run();\n    }\n    void run() throws Exception {\n        final CamelContext camelContext = new DefaultCamelContext();\n        camelContext.addRoutes(createRouteBuilder());\n        camelContext.setTracing(true);\n        camelContext.start();\n\n        Runtime.getRuntime().addShutdownHook(new Thread() {\n            public void run() {\n                try {\n                    camelContext.stop();\n                } catch (Exception e) {\n                    throw new RuntimeException(e);\n                }\n            }\n        });\n\n        waitForStop();\n    }\n    RouteBuilder createRouteBuilder() {\n        return new TimerRouteBuilder();\n    }\n    void waitForStop() {\n        while (true) {\n            try {\n                Thread.sleep(Long.MAX_VALUE);\n            } catch (InterruptedException e) {\n                break;\n            }\n        }\n    }\n}\n")])])]),t("p",[e._v("As you can see, we re-used the existing "),t("code",[e._v("TimerRouteBuilder")]),e._v(" class inside\n"),t("code",[e._v("createRouteBuilder()")]),e._v(" method. Our "),t("code",[e._v("Main")]),e._v(" class now have full control\nwhen to create, start and stop the\n"),t("a",{attrs:{href:"http://camel.apache.org/maven/current/camel-core/apidocs/org/apache/camel/CamelContext.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("CamelContext")]),t("OutboundLink")],1),e._v(".\nThis context allow you to have control on how to configure Camel\nglobally rather than on "),t("code",[e._v("Route")]),e._v(" level. The javadoc link gives all the setter\nmethods that you can explore on what it can do.")]),e._v(" "),t("p",[e._v("Noticed that we also need to provide few setup codes in our "),t("code",[e._v("Main")]),e._v(" class.\nFirst we need to handle graceful shutdown, so we added a Java shutdown hook\nto invoke the context "),t("code",[e._v("stop()")]),e._v(". Secondly we need to add a thread block after\ncontext has started. The reason for this is that the "),t("code",[e._v("CamelContext#start()")]),e._v("\nmethod is non-blocking! If you don’t block your "),t("code",[e._v("Main")]),e._v(" thread after\nstart, then it will simply exit right after it, which will have not\nmuch use. You want to run Camel as a service (like a server) until\nyou explicitly press "),t("code",[e._v("CTRL+C")]),e._v(" to terminate the process.")]),e._v(" "),t("h2",{attrs:{id:"improving-the-main-class-to-start-camelcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improving-the-main-class-to-start-camelcontext"}},[e._v("#")]),e._v(" Improving the "),t("code",[e._v("Main")]),e._v(" class to start "),t("code",[e._v("CamelContext")])]),e._v(" "),t("p",[e._v("If you don’t want to deal with much of the "),t("code",[e._v("Main")]),e._v(" class setup\ncode such as above, then you may simply extends the "),t("code",[e._v("org.apache.camel.main.Main")]),e._v("\nclass provided by "),t("code",[e._v("camel-core")]),e._v(" intead. By piggy-back on this class, you will\nonly not have your Context auto setup, but you will get all the additional\ncommand line features such as controlling how long to run the\nprocess for, enabling tracing, loading custom route class etc.")]),e._v(" "),t("p",[e._v("Refactoring previous example, here is how it look like.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("package camelcoredemo;\n\nimport org.slf4j.*;\nimport org.apache.camel.builder.*;\nimport org.apache.camel.main.Main;\n\npublic class TimerMain2 extends Main {\n    static Logger LOG = LoggerFactory.getLogger(TimerMain2.class);\n    public static void main(String[] args) throws Exception {\n        TimerMain2 main = new TimerMain2();\n        main.enableHangupSupport();\n        main.addRouteBuilder(createRouteBuilder());\n        main.run(args);\n    }\n    static RouteBuilder createRouteBuilder() {\n        return new TimerRouteBuilder();\n    }\n}\n")])])]),t("p",[e._v("Now our "),t("code",[e._v("TimerMain2")]),e._v(" is much shorter, and you may try it out and it should\nfunction the same as before.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("bash> mvn compile\nbash> mvn exec:java -Dexec.mainClass=camelcoredemo.TimerMain2 -Dexec.args='-t'\n")])])]),t("p",[e._v("Notice that we have given "),t("code",[e._v("-t")]),e._v(" option and it will dump "),t("code",[e._v("Route")]),e._v(" tracing. Use "),t("code",[e._v("-h")]),e._v("\nand you will see all the available options.")]),e._v(" "),t("h2",{attrs:{id:"adding-bean-to-the-camel-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-bean-to-the-camel-registry"}},[e._v("#")]),e._v(" Adding bean to the Camel "),t("code",[e._v("Registry")])]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("TimerRouteBuilder")]),e._v(" example above, we have created a "),t("code",[e._v("Processor")]),e._v(" on\nthe fly. Now if you were to combine few different "),t("code",[e._v("Processor")]),e._v(" together, it\nwould be nicer to minimize the noise. Camel allow you to do this by registering\nprocessing beans in their registry space, and then you simply reference them in\nyour route as "),t("code",[e._v("bean")]),e._v(" component. Here is how I can convert above example into\nbeans processing.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('package camelcoredemo;\n\nimport org.slf4j.*;\nimport org.apache.camel.*;\nimport org.apache.camel.builder.*;\nimport org.apache.camel.main.Main;\n\npublic class TimerBeansMain extends Main {\n    static Logger LOG = LoggerFactory.getLogger(TimerBeansMain.class);\n    public static void main(String[] args) throws Exception {\n        TimerBeansMain main = new TimerBeansMain();\n        main.enableHangupSupport();\n        main.bind("processByBean1", new Bean1());\n        main.bind("processAgainByBean2", new Bean2());\n        main.addRouteBuilder(createRouteBuilder());\n        main.run(args);\n    }\n    static RouteBuilder createRouteBuilder() {\n        return new RouteBuilder() {\n                public void configure() {\n                    from("timer://timer1?period=1000")\n                    .to("bean:processByBean1")\n                    .to("bean:processAgainByBean2");\n                }\n            };\n    }\n\n    // Processor beans\n    static class Bean1 implements Processor {\n        public void process(Exchange msg) {\n            LOG.info("First process {}", msg);\n        }\n    }\n    static class Bean2 implements Processor {\n        public void process(Exchange msg) {\n            LOG.info("Second process {}", msg);\n        }\n    }\n}\n')])])]),t("p",[e._v("Now you see my "),t("code",[e._v("Route")]),e._v(" is very slim and without noise clutter; and I have\nrefactored my processing code into individual classes. This promotes better\ncode management and testing as you write more complex "),t("code",[e._v("Route")]),e._v(" to address\nbusiness logic. It let you build LEGO like block of re-usable POJO beans.\nBesides just processing beans, Camel use this registry space for many other\nservices as well. For example you may customize many other component endpoints\nwith additional features and or configurations. Or thing such as thread\npool strategy implementation replacement etc.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Route")]),e._v(" in example above is constructed using what’s called Java DSL.\nThe route is very readable, and yet you’ll get full IDE support to browse all the methods available to use for your route.")]),e._v(" "),t("p",[e._v("I hope this article has helped you jump start your Camel ride. Besides the\n"),t("code",[e._v("timer")]),e._v(" component mentioned, the "),t("code",[e._v("camel-core")]),e._v(" also comes with the following\ncomponents out of it’s core jar.")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/bean.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("bean component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/browse.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("browse component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/dataset.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("dataset component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/direct.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("direct component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/file.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("file component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/log.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("log component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/mock.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("mock component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/properties.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("properties component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/seda.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("seda component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/test.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("test component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/timer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("timer component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/stub.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("stub component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/validation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("validator component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/vm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("vm component"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"http://camel.apache.org/xslt.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("xslt component"),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v("Have fun!")])])}),[],!1,null,null,null);n.default=a.exports}}]);