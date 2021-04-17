(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{545:function(e,t,a){"use strict";a.r(t);var n=a(11),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"getting-started-with-servlet-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-servlet-3"}},[e._v("#")]),e._v(" Getting started with Servlet 3")]),e._v(" "),a("p",[e._v("Web application module in Java EE is probably the most common type of application module that a developer would encounter and work on. That's because not only it can provide users the UI, but it also supoprt many common web application patterns: Model View Controller, Filter, Session, Context Listener, Http Request, Paramters, Query, and Form handling, Http Response writer, redirect, error etc. You can do all these with Servlet spec alone, so getting to know it well is an important part of learning in writing good web application.")]),e._v(" "),a("p",[e._v("Servlet has been around for a long time, and many developers are already familiar with it. There are many other web frameworks such as Tapestry or Spring MVC that are built on top of Servlet. These frameworks provide separate programming models that suppose to easy development process, but nontheless the core concept is still based on the Servlet technologies (or at least tightly integrated if it were to run by any web container server). In this post, I will try to highlight how to get a web module application started, and configure a typical need: a default landing page.")]),e._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[e._v("#")]),e._v(" Hello World")]),e._v(" "),a("p",[e._v("Like many things in EE environment, you would write small components as Java class and then deploy them onto a server and let the server manage it's lifecycle and execution. So as with Servlet, you would write a simple Java class that implements Servlet interface, package it and deploy, and server will do it's magic.")]),e._v(" "),a("p",[e._v("Before Servlet 3.0, your servlet component is configured and mapped in web.xml file, but now you can just add an annotation directly on your servlet class and the app server should be able to automatically deploy and run it. Here is an example of a classic hello world.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package zemian.servlet3example.web;\n\nimport java.io.IOException;\nimport java.io.PrintWriter;\nimport javax.servlet.ServletException;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n\n@WebServlet("/hello")\npublic class HelloServlet extends HttpServlet {\n\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n        PrintWriter writer = resp.getWriter();\n        writer.println("<!DOCTYPE html>");\n        writer.println("<html>");\n        writer.println("<body>");\n        writer.println("<p>Hello World!</p>");\n        writer.println("</body>");\n        writer.println("</html>");\n    }\n}\n')])])]),a("p",[e._v("In this Servlet, I simply extends an existing base\nHttpServlet class that should be available in all Serlvet spec. and in\nresponse to a http GET request, I write a Hello World message out\nas html response.")]),e._v(" "),a("p",[e._v("You may find above code in  "),a("a",{attrs:{href:"https://github.com/saltnlight5/java-ee6-examples/tree/master/servlet3-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("servlet3-example"),a("OutboundLink")],1),e._v(". Build and deploy it and then you can access it with "),a("a",{attrs:{href:"http://localhost/servlet3-exmaple/hello",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost/servlet3-exmaple/hello"),a("OutboundLink")],1),e._v(". (I have many other servlet examples in the project, but you may just concentrate in this class for now.)")]),e._v(" "),a("h2",{attrs:{id:"how-to-configure-a-default-landing-page-in-servlet-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-a-default-landing-page-in-servlet-3"}},[e._v("#")]),e._v(" How to configure a default landing page in Servlet 3")]),e._v(" "),a("p",[e._v('A typical application server will likely default a landing page to "index.html" or "index.jsp" if it exists. For example, if I have written a IndexSerlvet class and mapped to "/index" instead, then you need to tell the server default to there. This will happen if users only type '),a("a",{attrs:{href:"http://localhost/servlet3-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost/servlet3-example"),a("OutboundLink")],1),e._v(" with context path in URL only.")]),e._v(" "),a("p",[e._v("Despite you can can do just about most things in Java annotations with Servlet 3.0 as equivalent to the content found web.xml file, but not the welcome file though. So to do this, you would still need to create this good old web.xml. Here is an example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" \n         version="3.0">\n    <welcome-file-list>\n        <welcome-file>index</welcome-file>\n    </welcome-file-list>\n</web-app>\n')])])]),a("p",[e._v('Above example will default the landing page to a Servlet url mapping with "/index" path.')]),e._v(" "),a("p",[e._v('TIPS: Do NOT to use "/" prefix when definining welcome-file element, else you will get a page not found error and likely your server won\'t even print any error message in the log!')]),e._v(" "),a("p",[e._v('Another alternate solution instead of overrite welcome-file is simply add a "index.jsp" file in root of webapp folder and do a redirect like this:')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<% response.sendRedirect(request.getContextPath() + "/index"); %>\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);