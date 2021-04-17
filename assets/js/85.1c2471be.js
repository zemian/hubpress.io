(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{470:function(t,e,a){"use strict";a.r(e);var s=a(11),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Groovy has made fetching data from URL a snap:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('println(new URL("http://www.google.com").text)\n')])])]),a("p",[t._v("But have you ever try to get data from an "),a("code",[t._v("https")]),t._v(" of an site that's using a self signed certificate? A browser will prompt you a risk warning, but it let you trust it and still continue. But it's much more hassle if we want to fetch the data programmatically. For example, try fetching "),a("a",{attrs:{href:"https://www.pcwebshop.co.uk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.pcwebshop.co.uk"),a("OutboundLink")],1),t._v(" and you will see that it failed miserably:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    Caught: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\n    javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\n        at com.sun.net.ssl.internal.ssl.Alerts.getSSLException(Alerts.java:174)\n        at com.sun.net.ssl.internal.ssl.SSLSocketImpl.fatal(SSLSocketImpl.java:1762)\n        at com.sun.net.ssl.internal.ssl.Handshaker.fatalSE(Handshaker.java:241)\n        at com.sun.net.ssl.internal.ssl.Handshaker.fatalSE(Handshaker.java:235)\n        at com.sun.net.ssl.internal.ssl.ClientHandshaker.serverCertificate(ClientHandshaker.java:1206)\n        at com.sun.net.ssl.internal.ssl.ClientHandshaker.processMessage(ClientHandshaker.java:136)\n        at com.sun.net.ssl.internal.ssl.Handshaker.processLoop(Handshaker.java:593)\n        at com.sun.net.ssl.internal.ssl.Handshaker.process_record(Handshaker.java:529)\n        at com.sun.net.ssl.internal.ssl.SSLSocketImpl.readRecord(SSLSocketImpl.java:958)\n        at com.sun.net.ssl.internal.ssl.SSLSocketImpl.performInitialHandshake(SSLSocketImpl.java:1203)\n        at com.sun.net.ssl.internal.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:1230)\n        at com.sun.net.ssl.internal.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:1214)\n        at test.run(test.groovy:2)\n    Caused by: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\n        at com.sun.net.ssl.internal.ssl.X509TrustManagerImpl.validate(X509TrustManagerImpl.java:126)\n        at com.sun.net.ssl.internal.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:209)\n        at com.sun.net.ssl.internal.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:249)\n        at com.sun.net.ssl.internal.ssl.ClientHandshaker.serverCertificate(ClientHandshaker.java:1185)\n        ... 8 more\n    Caused by: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\n        ... 12 more\n")])])]),a("p",[t._v('This is due to Java API won\'t let you get data if your certs is not in the keystore or "trusted". Now if you have your own testing site and did a self-signed like above, then sure you just want to trust it temporary and simply want to fetch the data. However configuring the Java API to do such simple task is a nightmare.')]),t._v(" "),a("p",[t._v("Today, I found a library that allow you to perform exactly this: "),a("a",{attrs:{href:"https://github.com/kevinsawicki/http-request",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kevinsawicki/http-request"),a("OutboundLink")],1),t._v(" Trying this out using Groovy is pretty sweet:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    @Grab('com.github.kevinsawicki:http-request:3.1')\n    import com.github.kevinsawicki.http.*\n    def req = HttpRequest.get(\"https://www.pcwebshop.co.uk\")\n    req.trustAllCerts()\n    req.trustAllHosts()\n    println(req.body())\n")])])]),a("p",[t._v("And Voila! We read the URL context without the pesky exception. This "),a("code",[t._v("http-request")]),t._v(" is awesome! Now I wish JDK let you do simple thing like this. This is extremely useful for testing.")])])}),[],!1,null,null,null);e.default=n.exports}}]);