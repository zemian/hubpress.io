(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{529:function(t,s,e){"use strict";e.r(s);var o=e(11),a=Object(o.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("p",[this._v('Did you know that crontab service has the "@reboot" schedule that would start a script during your system startup time? This is handy if you want something to run right after your system has stared. Try this:')]),this._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# crontab -e\n@reboot $HOME/crontab/runcmd.sh /apps/start-myapp.sh\n")])])]),s("p",[this._v('The disadvantage of this vs the rc.d scripts are you do not have control on when the system shutdown("stop") state. So if your app doens\'t need to clean up during shutdown, but only care to start when during reboot, this would be an easy option.')])])}),[],!1,null,null,null);s.default=a.exports}}]);