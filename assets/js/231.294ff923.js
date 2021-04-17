(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{617:function(e,t,s){"use strict";s.r(t);var n=s(11),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("To run postgres database server on Cygwin, you need first run the\n"),s("code",[e._v("cygserver")]),e._v(". If not, you will get error similar to this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('export PGDATA=/cygdrive/c/Users/zemian/my-pgdata\npg_ctl init\n...\nrunning bootstrap script ... FATAL:  could not create shared memory segment: Function not implemented\nDETAIL:  Failed system call was shmget(key=1, size=56, 03600).\nchild process exited with exit code 1\ninitdb: removing contents of data directory "/cygdrive/c/Users/zemian/my-pgdata"\npg_ctl: database system initialization failed\n')])])]),s("p",[e._v("To resolve this, you first start "),s("code",[e._v("cygserver")]),e._v(". Even if you do not have\nadmin rights to install as Windows service, you can still run it per\nshell session. This is needed for "),s("strong",[e._v("shared memory")]),e._v(" need.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("# For the first time, you need config\n/usr/bin/cygserver-config\n\n# Now run it\ncygserver &\n")])])]),s("p",[e._v("After above then you can start postgres")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("pg_ctrl init\npg_ctrl start\n")])])]),s("h1",{attrs:{id:"postgres-windows-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgres-windows-installation"}},[e._v("#")]),e._v(" Postgres Windows Installation")]),e._v(" "),s("p",[e._v("The official download is provided by EnterpriseDB (EDB) You can get a\nzip package from:")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.enterprisedb.com/download-postgresql-binaries",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.enterprisedb.com/download-postgresql-binaries"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("To install, just unzip it.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("mkdir $HOME/apps/postgresql-10.3-2\ncd $HOME/apps/postgresql-10.3-2\nunzip postgresql-10.3-2-windows-x64-binaries.zip\n")])])]),s("p",[e._v("Server can be started manually like this in cmd.exe prompt:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('bin\\pg_ctl -D data -o "--encoding=UTF8 --auth=trust" initdb\nmkdir logs\nbin\\pg_ctl -D data -l logs\\postgres.log start\n\nbin\\createdb %USERNAME%\nchcp 1252\nbin\\psql\n\nzemian=# select version();\n                          version\n------------------------------------------------------------\n PostgreSQL 10.3, compiled by Visual C++ build 1800, 64-bit\n(1 row)\n')])])]),s("p",[e._v('By default inidb will create a "postgres" database, but user is your\nWindows login name, and it will not match. It’s more convient to create\na database that match your username, and use that as default.')]),e._v(" "),s("p",[e._v('You should be careful with "--auth=trust", which can get you started\nquickly but not very secure.')])])}),[],!1,null,null,null);t.default=a.exports}}]);