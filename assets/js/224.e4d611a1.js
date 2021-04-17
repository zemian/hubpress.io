(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{610:function(e,s,a){"use strict";a.r(s);var t=a(11),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("By default the "),a("code",[e._v("posgresql-server")]),e._v(" install will create a "),a("code",[e._v("postgres")]),e._v(" Linux\nuser account and the server will run under that user. And also\nPostgreSQL server will default have a DB user named "),a("code",[e._v("postgres")]),e._v(" as well,\nand this DB user does not have a password! There is a distinction\nbetween Linux user vs PostgreSQL database user, and mostly you need to\nwork with DB user only. After the install, you may change the password\nfor DB "),a("code",[e._v("postgres")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("bash> sudo -u postgres psql\n\npostgres=# \\password postgres\n\n# It should prompt you to enter password for `postgres` DB user.\n")])])]),a("p",[e._v("When developing application, I like to create a dedicated DB user to\nmatch my login account and create database there instead of using the\ndefault "),a("code",[e._v("postgres")]),e._v(" user. You may create a new DB user that match to your\ncurrent Linux account user (eg: "),a("code",[e._v("zemian")]),e._v(") like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("bash> sudo -u postgres createdb -s -P zemian\n# It should prompt you to enter password for `zemian` DB user. The `-s` option is to for superuser privileges.\n")])])]),a("p",[e._v("Now that you have a DB user "),a("code",[e._v("zemian")]),e._v(", you may create a default database\nfor it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("bash> createdb --username=zemian zemian\n")])])]),a("p",[e._v("Now you may invoke "),a("code",[e._v("psql")]),e._v(" under "),a("code",[e._v("zemian")]),e._v(" Linux user session without any\nparameters and it should log you in!")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("bash> psql\n\nzemian=# CREATE TABLE test(id serial, name VARCHAR(20), message VARCHAR(500));\nNOTICE:  CREATE TABLE will create implicit sequence \"test_id_seq\" for serial column \"test.id\"\nCREATE TABLE\n\nzemian=# \\d test\n                                 Table \"public.test\"\n Column  |          Type          |                     Modifiers\n---------+------------------------+---------------------------------------------------\n id      | integer                | not null default nextval('test_id_seq'::regclass)\n name    | character varying(20)  |\n message | character varying(500) |\n\nzemian=# INSERT INTO test(name, message) VALUES('Hello', 'World');\nINSERT 0 1\nzemian=# INSERT INTO test(name, message) VALUES('Hello2', 'World2');\nINSERT 0 1\nzemian=# SELECT * FROM test;\n id |  name  | message\n----+--------+---------\n  1 | Hello  | World\n  2 | Hello2 | World2\n(2 rows)\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);