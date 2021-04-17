(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{590:function(e,n,t){"use strict";t.r(n);var a=t(11),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("For basic java and Gradle, it's really simple. All you need is one line in build.gradle file and you can start compiling Java source under src/main/java folder.")]),e._v(" "),t("p",[e._v("apply plugin: 'java'")]),e._v(" "),t("p",[e._v("But to setup a useful web application,  you would need little more. Here I have another example of Gradle 2.7 script file for building a Java web application. I also have noted few things I have discovered in the comments.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# A Java web app project\n\n# There should be a src/main/webapp as web content directory\napply plugin: 'war'\napply plugin: 'jetty'\n\n# Change jetty default port from 8080\nhttpPort = 9000\n\n# A repository must be given to fetch dependencies below.\nrepositories {\n    mavenCentral()\n}\n\n# Library dependencies\ndependencies {\n    // JDK lang support\n    // Ouch! Gradle does not support 'provided' scope! Let's use compile for now.\n    //provided 'org.projectlombok:lombok:1.16.6'\n    compile 'org.projectlombok:lombok:1.16.6'\n\n    // Testing\n    testCompile 'junit:junit:4.12',\n        'org.hamcrest:hamcrest-library:1.3'\n\n    // Database\n    runtime 'mysql:mysql-connector-java:5.1.37'   \n\n    // Scripting\n    //runtime 'org.codehaus.groovy:groovy-all:2.4.5'\n    /*\n    NOTE: Error if you include groovy with gradle+jetty!!!\n            java.lang.ExceptionInInitializerError:\n        groovy.lang.GroovyRuntimeException: Conflicting module versions. Module [groovy-all is loaded in version 2.3.10 and you are trying to load version 2.4.5\n             // Verify your groovy version using the following:\n        import javax.script.*\n        out.println(new ScriptEngineManager().getEngineFactories())\n        out.println(org.codehaus.groovy.jsr223.GroovyScriptEngineFactory.class.getProtectionDomain().getCodeSource().getLocation())\n    */ \n}\n")])])]),t("p",[e._v("I also have this JSP in "),t("code",[e._v("src/main/webapp/script.jsp")]),e._v(" folder")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<%@ page import="javax.script.*, java.io.*" %>\n\n<%\n// Initialize parameters\nString engineName = request.getParameter("engine");\nif (engineName == null) engineName = "Groovy";\nString code = request.getParameter("code");\nif (code == null) code = "";\n%>\n\n\x3c!-- form: Script input code --\x3e\n<h1>Scripting</h1>\n<form method="POST">\n<textarea name="code" cols="120" rows="25"><%= code %></textarea>\n<p/><input type="submit" value="Submit"/>\n</form>\n\n<pre>\n<%\nif (request.getMethod().equals("POST")) {\n    // Process form and evaluate script code\n    ScriptEngine se = new ScriptEngineManager().getEngineByName(engineName);\n    if (se == null) {\n        out.println("ERROR: " + engineName + " engine not found! Use \'engine\' parameter to change it.");\n    } else {\n        try {\n            Bindings b = se.createBindings();\n            b.put("request", request);\n            b.put("out", out);\n            Object result = se.eval(code, b);\n            \n            out.println(engineName + " script result:");\n            out.println("" + result);\n        } catch (Exception e) {\n            out.println("ERROR: " + engineName + " script failed to evaluate!");\n            e.printStackTrace(new PrintWriter(out));\n        }\n    }\n}\n%>\n\n</pre>\n')])])]),t("p",[e._v("With this script.jsp, you can write something like this to test out your db connection.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Groovy script:\nimport java.sql*\nconn = DriverManager.getConnection(\'jdbc:mysql://localhost/test\', \'dev\', \'dev123\')\nout.println("conn=" + conn)\nconn.close()\n\nAnd just for fun, I have created a data class using ProjectLombok generator in src/main/java/myjava/MyData.java\n\npackage myjava;\nimport java.util.*;\n\n@lombok.Data\npublic class MyData {\nprivate Integer id;\nprivate String name;\nprivate Date createdDate;\nprivate List<MyData> dataList;\nprivate Map<String, MyData> dataMap;\n\n}\n\nI also have a unit test in src/test/java/myjava/MyDataTest.java\n\npackage myjava;\n\nimport org.junit.Test;\nimport static org.junit.Assert.assertThat;\nimport static org.hamcrest.Matchers.*;\n\npublic class MyDataTest {\n@Test\npublic void tesGeneratedGetterSettersAndToString() {\nMyData d = new MyData();\nd.setId(12345);\nd.setName("foo");\nassertThat(d.getId(), is(12345));\nassertThat(d.getName(), is("foo"));\nassertThat(d.toString(), is("MyData(id=12345, name=foo, createdDate=null, dataList=null, dataMap=null)"));\n}\n\n}\n')])])]),t("p",[e._v("To compile code, type command: "),t("code",[e._v("gradle compileJava")])]),e._v(" "),t("p",[e._v("To run test, type command: gradle test(A nice feature of Gradle is that it auto generate test reports! Look for them in your build/reports folder.)")]),e._v(" "),t("p",[e._v("To run web app, type command: gradle jettyRun")])])}),[],!1,null,null,null);n.default=o.exports}}]);