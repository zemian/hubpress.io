(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{531:function(t,e,n){"use strict";n.r(e);var o=n(11),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("A friend asked me how to setup an Django enviroment on Windows without the Cygwin fuzz. Here is the shortest steps I can think of:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v('Install Python3.4 as default path. (It should be "C:\\Python34").')])]),t._v(" "),n("li",[n("p",[t._v("Open cmd.exe program on Windows and run the following commands:")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    set PATH=%PATH%;C:\\Python34;C:\\Python34\\Scripts\n    pip install django\n    python C:\\Python34\\Lib\\site-packages\\django\\bin\\django-admin.py startproject mysite\n    cd mysite\n    python manage.py syncdb\n    (Follow prompts to setup an initial db. remember the user you used here.)\n    python manage.py runserver\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[t._v("You are ready to django! Open your browser "),n("a",{attrs:{href:"http://127.0.0.1:8000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8000"),n("OutboundLink")],1),t._v(" to verify.")]),t._v(" "),n("p",[t._v("Or login into "),n("a",{attrs:{href:"http://127.0.0.1:8000/admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8000/admin"),n("OutboundLink")],1),t._v(" with the user you setup above.")])])]),t._v(" "),n("p",[t._v("What's next?")]),t._v(" "),n("p",[t._v("Explore django with a guided tutorial here:")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.djangoproject.com/en/1.6/intro/tutorial01",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.djangoproject.com/en/1.6/intro/tutorial01"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);