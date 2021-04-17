(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{482:function(e,t,o){"use strict";o.r(t);var n=o(11),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Taming the JMX on WebLogic Server")]),e._v(" "),o("h1",{attrs:{id:"taming-the-jmx-on-weblogic-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#taming-the-jmx-on-weblogic-server"}},[e._v("#")]),e._v(" Taming the JMX on WebLogic Server")]),e._v(" "),o("p",[e._v("Let assume couple things first:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("I assume you have heard of Java’s JMX features and familiar what it does (expose and manage your service remotely). You ought to know that default JVM will have a Platform MBeanServer instance that you can register MBean. And you may view them using the "),o("code",[e._v("jconsole")]),e._v(" command from the JDK.")])]),e._v(" "),o("li",[o("p",[e._v("As of today, I think by far the easiest way you can expose any services in your application to a JMX MBeanServer is using Spring’s exporter. You will do something like this:")])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('        <bean class="org.springframework.jmx.export.MBeanExporter">\n            <property name="assembler">\n                  <bean class="org.springframework.jmx.export.assembler.InterfaceBasedMBeanInfoAssembler">\n                    <property name="managedInterfaces">\n                        <list>\n                            \x3c!-- Expose any java interface you like to see under JMX as MBean --\x3e\n                            <value>myproject.services.Service</value>\n                        </list>\n                    </property>\n                  </bean>\n            </property>\n            <property name="beans">\n              <map>\n                <entry key="myproject.services:name=MyCoolService" value-ref="myCoolService"/>\n              </map>\n            </property>\n        </bean>\n        \x3c!-- This service must implements the interface used above --\x3e\n        <bean id="myCoolService" class="myproject.services.MyCoolService">\n        </bean>\n')])])]),o("p",[e._v("Above should get you standalone application with JMX enabled.")]),e._v(" "),o("p",[e._v("Now if you want to do similar on WebLogic Server, then I have few goodies and notes that might help you. Read on…")]),e._v(" "),o("h2",{attrs:{id:"weblogic-server-s-wls-mbeanserver"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#weblogic-server-s-wls-mbeanserver"}},[e._v("#")]),e._v(" WebLogic Server’s (WLS) MBeanServer")]),e._v(" "),o("h3",{attrs:{id:"the-jconsole-trick"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-jconsole-trick"}},[e._v("#")]),e._v(" The JConsole trick")]),e._v(" "),o("p",[e._v("The WLS, like many other EE server will have it’s own MBeanServer. However, to see the MBean’s you would need to do little extra with "),o("code",[e._v("jconsole")]),e._v(". Assume you have a default config WLS started on localhost, then you can connect to it like this.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('jconsole -J-Djava.class.path="$JAVA_HOME/lib/jconsole.jar:$MW_HOME/wlserver/server/lib/wljmxclient.jar" -J-Djmx.remote.protocol.provider.pkgs=weblogic.management.remote\n')])])]),o("p",[e._v("Then when prompted to login, enter the following:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("Remote Process: service:jmx:iiop://localhost:7001/jndi/weblogic.management.mbeanservers.runtime\nUser: <same userid you used setup WLS to their console app.>\nPassword: <same password you used setup WLS to their console app.>\n")])])]),o("p",[e._v("Now you should see all the MBeans that WLS already exposed to you as a EE server. You may add your own service there.")]),e._v(" "),o("h3",{attrs:{id:"programming-with-jmx-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#programming-with-jmx-connection"}},[e._v("#")]),e._v(" Programming with JMX connection")]),e._v(" "),o("p",[e._v("You may connect to the WLS MBeanServer remotely inside your standalone application. Here is a typical connection code you would need")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('            String serviceName = "com.bea:Name=DomainRuntimeService,Type=weblogic.management.mbeanservers.domainruntime.DomainRuntimeServiceMBean";\n            try {\n                ObjectName service = new ObjectName(serviceName);\n            } catch (MalformedObjectNameException e) {\n                throw new RuntimeException("Not able to create JMX ObjectName: " + serviceName);\n            }\n    \n            String protocol = "t3";\n            String jndiroot = "/jndi/";\n            String mserver = "weblogic.management.mbeanservers.runtime";\n            try {\n                JMXServiceURL serviceURL = new JMXServiceURL(protocol, "localhost", 7001, jndiroot + mserver);\n    \n                Hashtable h = new Hashtable();\n                h.put(Context.SECURITY_PRINCIPAL, username);\n                h.put(Context.SECURITY_CREDENTIALS, password);\n                h.put(JMXConnectorFactory.PROTOCOL_PROVIDER_PACKAGES,\n                        "weblogic.management.remote");\n                h.put("jmx.remote.x.request.waiting.timeout", new Long(10000));\n                JMXConnector connector = JMXConnectorFactory.connect(serviceURL, h);\n                MBeanServerConnection remoteMBeanServer = connector.getMBeanServerConnection();\n    \n                // TODO: Do what you need with remoteMBeanServer here.\n            } catch (Exception e) {\n                throw new RuntimeException("Not able to initiate MBeanServer protocol= " + protocol +\n                        ", jndiroot= " + jndiroot + ", mserver= " + mserver);\n            }\n')])])]),o("p",[e._v("That's a mouthful of boiler code just to get a remote MBeanServer connection! Fortunately there is another easier way though. Read on…")]),e._v(" "),o("h3",{attrs:{id:"the-jndi-trick"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-jndi-trick"}},[e._v("#")]),e._v(" The JNDI trick")]),e._v(" "),o("p",[e._v("The WLS MBeanServer service is also available through JNDI lookup. Again Spring can help you with their JNDI lookup and you simply need to inject it to other services that need it. For example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('        <bean id="jmxServerRuntime" class="org.springframework.jndi.JndiObjectFactoryBean">\n            <property name="jndiName" value="java:comp/env/jmx/runtime"/>\n        </bean>\n        <bean id="exporter" class="org.springframework.jmx.export.MBeanExporter">\n            <property name="beans">\n                <map>\n                    <entry key="myproject.services:name=MyCoolService" value-ref="myCoolService"/>\n                </map>\n            </property>\n            <property name="server" ref="jmxServerRuntime"/>\n        </bean>\n')])])]),o("p",[e._v('Notice that we have injetcted the "server" property with one we looked up from WLS JNDI service. If you use that in your WAR application and deploy it onto a WLS instance, and whola, you got yourself exposed service onto WLS JMX!')]),e._v(" "),o("p",[e._v("Note")]),e._v(" "),o("p",[e._v('above will only works if your Spring xml config is part of the WAR/JAR/EAR that’s deployed in same server where JNDI lives! If you are not, you need to use this JNDI name without the "env" part instead, like "java:comp/env/jmx/runtime".')]),e._v(" "),o("p",[e._v("For more details on how to work with JMX and WLS, see their docs here:\n"),o("a",{attrs:{href:"http://docs.oracle.com/cd/E12839_01/web.1111/e13728/accesswls.htm#i1119556",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://docs.oracle.com/cd/E12839_01/web.1111/e13728/accesswls.htm#i1119556"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Last updated 2013-06-12 23:52:42 EDT")])])}),[],!1,null,null,null);t.default=r.exports}}]);