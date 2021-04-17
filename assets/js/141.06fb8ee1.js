(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{528:function(e,t,a){"use strict";a.r(t);var s=a(11),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Using the MySQL export script I've showed from "),a("a",{attrs:{href:"http://saltnlight5.blogspot.com/2014/05/how-to-export-and-import-mysql-database.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("last post"),a("OutboundLink")],1),e._v(' (assume you saved it in a file named "$HOME/database-export.sh"), you may now perform a daily backup with your crontab service like this.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#file: mysql-backups.sh\nDIR=`dirname $0`\necho "Backup DB with export script."\n$DIR/database-export.sh\n\necho "Moving exported files into backup dir."\nDB_BAK_DIR=$HOME/mysql-backups/`date +%a`\necho "Removing old file (if exists) and saving new backup into $DB_BAK_DIR"\nif [[ -e $DB_BAK_DIR ]]; then\n  rm -fv $DB_BAK_DIR/*\nelse\n  mkdir -p $DB_BAK_DIR\nfi\ncp -v $DIR/*.sql $DB_BAK_DIR\n')])])]),a("p",[e._v('This script should create a daily folder under your home directory, for example like "$HOME/mysql-backups/Mon", "Tue", "Wed" etc. It should save up to 7 days in a week if you run this with a daily cron job.')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# crontab -e\n@daily $HOME/mysql-backups.sh > /dev/null 2>&1\n")])])]),a("p",[e._v("This is not the most robust way of backing up your DB, but it's a simple solution if you just want something quick up and running without worry too much.")])])}),[],!1,null,null,null);t.default=n.exports}}]);