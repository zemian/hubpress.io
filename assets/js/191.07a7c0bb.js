(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{577:function(e,n,t){"use strict";t.r(n);var s=t(11),a=Object(s.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("p",[this._v("You can easily "),n("a",{attrs:{href:"http://saltnlight5.blogspot.com/2014/01/getting-started-with-weblogic-server.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("start up a WebLogic Server"),n("OutboundLink")],1),this._v(" on an empty directory and it will create a domain. Here is another way to create WLS domain structure folder without actually starting up a WLS server.")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("# Usage: wlst.cmd createDomain.py <domain_home> <port> <password>\n\n# NOTE: the <domain_home> must be a absolute path.\n\n# Example: C:\\wls12130\\wlserver\\common\\bin\\wlst.cmd scripts\\createDomain.py C:\\data\\wls12c_domains\\dev 7001 weblogic1\n\nimport os, sys\n\ndomain_home = sys.argv[1]\ndomain_name = 'mydomain'\n\nport = int(sys.argv[2])\n\npassword = sys.argv[3]\n\nreadTemplate(os.environ['MW_HOME'] + \"/wlserver/common/templates/wls/wls.jar\")\n\ncd('/Server/AdminServer')\n\nset('Name', domain_name + '-admin')\n\nset('ListenAddress','')\n\nset('ListenPort', port)\n\ncd('/Security/base_domain/User/weblogic')\n\ncmo.setPassword(password)\n\ncd('/')\n\nset('Name', domain_name)\n\nwriteDomain(domain_home)\n\ncloseTemplate()\n\nexit()\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);