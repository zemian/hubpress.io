(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{431:function(e,a,t){"use strict";t.r(a);var o=t(11),n=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Below are the shortest steps I know that would get you the smallest Java web application ready in Maven.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ mkdir -p webapp/src/main/webapp/WEB-INF/classes\n$ echo '<web-app></web-app>' > webapp/src/main/webapp/WEB-INF/web.xml\n$ echo '<html>Hello World.</html>' > webapp/src/main/webapp/index.jsp\n$ echo '<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>atest</groupId>\n    <artifactId>webapp</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>war</packaging>\n</project>' > webapp/pom.xml\n$ cd webapp\n$ mvn org.apache.tomcat.maven:tomcat7-maven-plugin:2.0-beta-1:run\n")])])]),t("p",[e._v("You should able to visit "),t("a",{attrs:{href:"http://localhost:8080/webapp",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080/webapp"),t("OutboundLink")],1),e._v(" after that. Editing any JSP files should auto refresh by the server, and you don't need to restart it. This is a fast way to prototype and test out your ideas.")]),e._v(" "),t("p",[e._v("(Yes, I am aware that maven has the archetype for webapp, but it above do give you the bare minimal and you see each lines what go into your project.)")])])}),[],!1,null,null,null);a.default=n.exports}}]);