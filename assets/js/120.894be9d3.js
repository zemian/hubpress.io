(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{505:function(e,t,n){"use strict";n.r(t);var o=n(11),a=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v('If you want to explore the latest EE features, you would need WebLogic Server 12c. However if you still have the IDEA 12 Ultimate edition, you will quickly find that it only supports up to WebLogic\nServer 11g (10.x)! However you can still make your IDEA 12 U to work with WLS 12c, and all you need is an extra "registry.xml" file under WLS home directory (eg: C:/apps/wls12120/registry.xml). This file will allow the IDEA to pickup and recognize your latest WLS 12c installation.')]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<?xml version="1.0" encoding="UTF-8"?>\n<bea-product-information>\n  <host home="C:\\apps\\wls12120" name="${env.HOST}">\n    <product format="1.0" name="WebLogic Platform">\n      <release level="12.0"\n        ServicePackLevel="6" PatchLevel="0"\n        Status="installed" BeaProgramGroup="BEA WebLogic Platform 12.0" StartMenu=""\n        InstallTime="@INSTALL_TIME@"\n        InstallDir="C:\\apps\\wls12120\\wlserver"\n        JavaHome="C:\\apps\\jdk7" JavaVersion="1.7.0" JavaVendor="@JAVA_VENDOR@">\n        <component name="WebLogic Server" version="12.1.2.0">\n          <component name="Server"/>\n          <component name="Server Examples"/>\n        </component>\n     </release>\n    </product>\n </host>\n</bea-product-information>\n')])])]),t("p",[this._v("I have learned this from reading the IntelliJ forum. Also note that the latest IDEA 13 will support WebLogic Server 12c out of the box now.")])])}),[],!1,null,null,null);t.default=a.exports}}]);