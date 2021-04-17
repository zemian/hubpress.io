(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{538:function(e,t,s){"use strict";s.r(t);var o=s(11),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v('In Servlet, you may get the Session object by "httpServletRequest.getSession(true)". The "true" flag will create the session if it doesn\'t already exist, else it gets the existing session.')]),e._v(" "),s("p",[e._v('Now if you want to check whether you have the session exists or not (without have to create one if doesn\'t exist), you need to pass in "false" and then check for "null".')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Session session = httpServletRequest.getSession(false);\nif (session == null) {\n  // do something without creating session object.\n}\n")])])]),s("p",[e._v("Now comes the trick party. If you run above code and then dispatch the request to render a JSP page, you might quickly come to find out that the container will create a new Session object still! It turns out that by default JSP will create new Session object if you do not have one! To disable this, you need to set this explicitly on top of the JSP page:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(' <% page session="false" %>\n')])])]),s("p",[e._v("Only with this you will able to actually prevent creation of unnecessary Session object if you were to use JSP for output! Something to watch out for when debugging session based application.")])])}),[],!1,null,null,null);t.default=n.exports}}]);