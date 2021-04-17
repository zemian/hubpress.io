(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{503:function(e,o,t){"use strict";t.r(o);var a=t(11),i=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Here are some quick tips on how to get started with WebLogic Server on Windows OS:")]),e._v(" "),t("ol",[t("li",[e._v("Download wls1212.zip from "),t("a",{attrs:{href:"http://www.oracle.com/technetwork/middleware/weblogic/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.oracle.com/technetwork/middleware/weblogic/downloads/index.html"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Unzip it under "),t("code",[e._v("C:\\apps\\wls12120")])]),e._v(" "),t("li",[t("code",[e._v("set MW_HOME=C:\\apps\\wls12120")])]),e._v(" "),t("li",[t("code",[e._v("set JAVA_HOME=C:\\apps\\jdk1.7.0_51")])]),e._v(" "),t("li",[t("code",[e._v("cd C:\\apps\\wls12120")])]),e._v(" "),t("li",[t("code",[e._v("configure.cmd")])]),e._v(" "),t("li",[t("code",[e._v("mkdir user_projects\\domains\\mydomain")])]),e._v(" "),t("li",[t("code",[e._v("cd user_projects\\domains\\mydomain")])]),e._v(" "),t("li",[t("code",[e._v("%JAVA_HOME%\\bin\\java -Xmx1024m -XX:MaxPermSize=256m weblogic.Server")])])]),e._v(" "),t("p",[e._v("By default, the last step should create a domain with all the nessary files in your current working directory. It will also prompt you to create a config.xml (enter 'y' to continue) and then prompting for a username and password to manage the server. Optionally you may also setup username/password part by using additional sys props like this:\n"),t("code",[e._v("-Dweblogic.management.username=weblogic -Dweblogic.management.password=Welcome1")])]),e._v(" "),t("p",[e._v('Use CTRL+C to stop the server. The next time you start, you can just invoke "mydomain\\bin\\startWebLogic.cmd"')]),e._v(" "),t("p",[e._v("TIPS1: If you omit "),t("code",[e._v("-Xmx1024m -XX:MaxPermSize=256m")]),e._v(" you will likely can start the server but as soon as you activate the /console webapp, you will run into out of memory issue.")]),e._v(" "),t("p",[e._v("TIPS2: If you have access, try to add Windows Environment variables for "),t("code",[e._v("MW_HOME")]),e._v(" and "),t("code",[e._v("JAVA_HOME")]),e._v(' into your system. If not, then you can easily add it into "'),t("code",[e._v("mydomain\\bin\\setDomainEnv.cmd")]),e._v("\" as well (it's generated so you can edit all you like.) Without these two variables, you will likely get a class not found error.")]),e._v(" "),t("p",[e._v("TIPS3: The default server name created by this initial setup is called myserver. If you like to name it something else, then add sys props such as this: "),t("code",[e._v("-Dweblogic.Name=admin-server")])]),e._v(" "),t("p",[e._v("TIPS4: To change the domain name from "),t("code",[e._v("mydomain")]),e._v(" to something else, use: "),t("code",[e._v("-Dweblogic.Domain=dev-domain")])]),e._v(" "),t("p",[e._v("TIPS5: The default admin server listening port is 7001. To change this, use: -Dweblogic.ListenPort=7002")])])}),[],!1,null,null,null);o.default=i.exports}}]);