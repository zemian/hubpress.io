(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{601:function(e,t,s){"use strict";s.r(t);var o=s(11),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Most of remote systems are secured by SSH, and to gain remote control with terminal, you would need to "),s("code",[e._v("ssh")]),e._v(" into the server. You will be prompted to login with your password on every session. To avoid typing password everytime, you need to setup as authorized client. Here is how you can do that with ssh key.")]),e._v(" "),s("p",[e._v("First on your own client machine, generate the "),s("code",[e._v("$HOME/.ssh/id_rsa.pub")]),e._v(" file:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('bash> ssh-keygen\n# When prompted to enter password, simply hit ENTER key to skip it!\nbash> cat  ~/.ssh/id_rsa.pub\nxxxyyyzzz zemian@myhost\n# You will see a very long string instead of "xxxyyyzzz".\n')])])]),s("p",[e._v("Now you need to copy this public key string into your remote host. You need to "),s("code",[e._v("ssh")]),e._v(" into the remote host with your valid password first to setup. If successful, the subsequent "),s("code",[e._v("ssh")]),e._v(" into the remote host will not prompt you for password!")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("bash> ssh myremotehost\n# Enter password to gain access\n")])])]),s("p",[e._v("After you are in the remote host:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('myremotehost> vim ~/.ssh/authorized_keys\n#Paste and append the "xxxyyyzzz" into above file.\n')])])]),s("p",[e._v("If you don’t already have the "),s("code",[e._v("~/.ssh/authorized_keys")]),e._v(" file on remote host, then create it, but ensure you don’t let other users or groups to access it. Use command like this to change the permission:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("bash> chmod 600 ~/.ssh/authorized_keys\n")])])]),s("p",[e._v("The cool thing about this is that it affects all "),s("code",[e._v("ssh")]),e._v(" related commands, such as "),s("code",[e._v("scp")]),e._v(" will now work without prompting you for password!")]),e._v(" "),s("p",[e._v("Have a productive day!")])])}),[],!1,null,null,null);t.default=a.exports}}]);