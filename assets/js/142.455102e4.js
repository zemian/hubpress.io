(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{527:function(e,t,n){"use strict";n.r(t);var s=n(11),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("When working with crontab service, one thing I often need is to capture the ouput of the job. Having the job script aware of this output and logging is tedious, and often make the script harder to read. So I wrote a shell wrapper that will redirect all job script's STDOUT into a log file. This way I can inspect it when a job has run and the job script can just focus on the task itself.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# file: runcmd.sh\n# Helper/wrapper script to run any command in the crontab env. This script will ensure\n# user profile script is loaded and to log any command output into log files. It also\n# ensure not to print anything to STDOUT to avoid crontab system mail alert.\n#\n# NOTE: be sure to pass in absolute path of the command to be run so it can be found.\n#\n# Usage:\n#   ./runcmd.sh find $HOME/crontab/test.sh            # Simple use case\n#   LOG_NAME=mytest ./runcmd.sh $HOME/crontab/test.sh # Change the log name to something specific\n#\n\n# Options\nDIR=`dirname $0`\nCMD="$@"\nCMD_NAME=`basename $1`\nLOG_NAME=${LOG_NAME:=$CMD_NAME}\nLOG="$DIR/logs/$LOG_NAME.log`date +%s`"\n\n# Ensure logs dir exists\nif [[ ! -e $DIR/logs ]]; then\n        mkdir -p $DIR/logs\nfi\n\n# Run cron command\nsource $HOME/.bash_profile\necho "`date` Started cron cmd=$CMD, logname=$LOG_NAME" >> $LOG 2>&1\n$CMD >> $LOG 2>&1\necho "`date` Cron cmd is done." >> $LOG 2>&1\n')])])]),n("p",[e._v("With this wrapper, you can run any shell script and their output will be recorded. For example this job script below will clean up the logs accumulated in our logs folder.")]),e._v(" "),n("p",[e._v('Note that the wrapper will also auto source the ".bash_profile". Often this this is needed if your job script expect all the env variables you already have setup in your login shell scripts.')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# file: remove-crontab-logs.sh\nDIR=`dirname $0`/logs\necho "Checking and removing logs in $DIR"\nfind $DIR -type f -mtime +31 -print -delete\necho "Done"\n')])])]),n("p",[e._v("Now in the crontab file, you may run the job script like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# Clean up crontab logs\n@montly $HOME/crontab/runcmd.sh $HOME/crontab/remove-crontab-logs.sh\n\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);