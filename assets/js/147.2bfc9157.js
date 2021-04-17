(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{533:function(e,t,n){"use strict";n.r(t);var i=n(11),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v('When deploying a large WAR file application, it would be more easier to manage if we can separate the dependency jars away from the rest of the Web content; or at least those third party jars that do not update often. In this case, we usually call the jars content a "Shared Library" and the Web content the "Skinny WAR".')]),e._v(" "),n("p",[e._v("With WebLogic Server, you can easily deploy such two artifacts. Just seperate and package your WAR application into two. The share library would be simply another WAR with only the WEB-INF/lib content in it, while the Skinny war will be the rest of your application without the jar depependencies. On the shared lib WAR file, ensure you have an META-INF/MANIFEST.MF that specify the name and version like the following:")]),e._v(" "),n("p",[e._v("Implementation-Title: my_shared_lib\nImplementation-Version: 1.0\nSpecification-Title: my_shared_lib\nSpecification-Version: 1.0\nExtension-Name: my_shared_lib-1.0")]),e._v(" "),n("p",[e._v("Now your Skinny WAR would need to add an WEB-INF/weblogic.xml extension file to reference the library like this:")]),e._v(" "),n("weblogic-web-app",[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("<library-ref>\n    <library-name>my_shared_lib</library-name>\n    <specification-version>1.0</specification-version>\n    <implementation-version>1.0</implementation-version>\n    <exact-match>true</exact-match>\n</library-ref>\n")])])])]),e._v(" "),n("p",[e._v('With these two packaged, now turn to your WLS admin console, you will find "Deployments" menu link on left, and on right, you click "Install" button. The next screen will prompt you to choose which type of deployment to install: "Library" (Shared Lib War) or "Application" (Skinny War). Re-run this twice, each with your two seperated WAR files you just built.')]),e._v(" "),n("p",[n("img",{attrs:{src:"/images/posts/2014/wls-shared-lib.png",alt:""}})]),e._v(" "),n("p",[e._v("The WLS will combine the two when running your WAR application. This comes handy if you are to deploy multiple instances of your Skinny war application, but now you only need one shared lib.")]),e._v(" "),n("p",[e._v("NOTE: Ensure you select at least one, and the same Target servers where you deploy the Library and Application. Else your application will not be deployed and run.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);