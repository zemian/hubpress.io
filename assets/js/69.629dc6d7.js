(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{454:function(e,t,a){"use strict";a.r(t);var i=a(11),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Despite the advance of all the computers, I am one of those guys who still carry a pen and composition notebook around. I am far from those who has photographic memories, nor one who can digest every thing in their heads. Especially when it comes to doing software design. I still find my self scribbling on my notebook quite a bit, or even on piece of napkin if no paper is available. I am also one of those who only need high level ideas drawn out, then I can usually go directly to code, map it to some API and then write some simple implementations to get started.")]),e._v(" "),a("p",[e._v("That's how I started with the "),a("a",{attrs:{href:"https://bitbucket.org/timemachine/scheduler",target:"_blank",rel:"noopener noreferrer"}},[e._v("TimeMachine Scheduler"),a("OutboundLink")],1),e._v(" project a while back. However, as we come to a point where we have a solid runnable code, we must also start to present it to others. Showing my composition notebook is not the prettier thing in the world, specially when I have no gift in penmenship at all. This is a time to look into some professional diagram and design tools to draw up the high level architecture.")]),e._v(" "),a("p",[e._v("I was contacted by "),a("a",{attrs:{href:"http://www.architexa.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Architexa"),a("OutboundLink")],1),e._v(" to give them some review of their tool. I think this is a great opportunity for me to try it to draw up some diagrams on the TimeMachine project. Most of what I have diagrammed here are explained in details in the project "),a("a",{attrs:{href:"https://bitbucket.org/timemachine/scheduler/wiki/ReferenceManual",target:"_blank",rel:"noopener noreferrer"}},[e._v("reference manual"),a("OutboundLink")],1),e._v(", so if you want to know more, please do read it up for further reference.")]),e._v(" "),a("h1",{attrs:{id:"timemachine-top-level-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timemachine-top-level-packages"}},[e._v("#")]),e._v(" TimeMachine top level packages")]),e._v(" "),a("p",[e._v("First, the Architexa provides their software as an Eclipse plugin, and after installing it, it can analysis an existing project. I did that and here is the package level view it presents me for the TimeMachine.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://bitbucket.org/saltnlight5/images/raw/84cde5b1e9ba/timemachine-diagrams/package-dependencies.png",alt:"TimeMachine packages dependencies diagram"}})]),e._v(" "),a("p",[e._v("The graph is not very clear on why everything depends on "),a("code",[e._v("schedule")]),e._v(" package, but perhaps Schedule is used through the code. Any way the TimeMachine has been carefully separating out the pakcages so it's easy for user to use. All the interfaces you need to scheduler jobs are in "),a("code",[e._v("timemachine.scheduler")]),e._v(". In it, there are couple static factories class: "),a("code",[e._v("Schedules")]),e._v(" and "),a("code",[e._v("JobTasks")]),e._v(" provide majority of the functionity you need. So the goal is you can do quiet a bit with just "),a("code",[e._v("import timemachine.scheduler.*;")]),e._v("; then as you need each layer functionality, you can import them explicitly the sub-packages.")]),e._v(" "),a("h1",{attrs:{id:"timemachine-main-classes-diagrams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timemachine-main-classes-diagrams"}},[e._v("#")]),e._v(" TimeMachine main classes diagrams")]),e._v(" "),a("p",[e._v("In TimeMachine, you have few major class hierarchy that you must need to get familiar in order to write effective scheduling jobs.")]),e._v(" "),a("p",[e._v("A job in TimeMachine is implemented by a class with "),a("code",[e._v("JobTask")]),e._v(" interface. The project provide few for you to get started.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://bitbucket.org/saltnlight5/images/raw/84cde5b1e9ba/timemachine-diagrams/jobtask-class-hierarchy.png",alt:"TimeMachine JobTask class diagram"}})]),e._v(" "),a("p",[e._v("How often and frequent to run your job in the scheduler is provided by a "),a("code",[e._v("Schedule")]),e._v(". Here we provided some most used implementations, including the customizable "),a("code",[e._v("DateListSchedule")]),e._v(" that uses a "),a("code",[e._v("provider")]),e._v(" generator.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://bitbucket.org/saltnlight5/images/raw/84cde5b1e9ba/timemachine-diagrams/schedule-class-hierarchy.png",alt:"TimeMachine Schedule class diagram"}})]),e._v(" "),a("p",[e._v("The TimeMachine is a scheduler composed by a stackable service container. Here are some of the services that power the scheduler as a whole. The user/developer can write their own user "),a("code",[e._v("Service")]),e._v(" and add into the container as well.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://bitbucket.org/saltnlight5/images/raw/84cde5b1e9ba/timemachine-diagrams/service-class-hierarchy.png",alt:"TimeMachine SchedulerEngine class diagram"}})]),e._v(" "),a("p",[e._v("The services above are then combined together to form the scheduler engine.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://bitbucket.org/saltnlight5/images/raw/84cde5b1e9ba/timemachine-diagrams/scheduler-engine-class-hierarchy.png",alt:"TimeMachine SchedulerEngine class diagram"}})]),e._v(" "),a("h1",{attrs:{id:"timemachine-in-action-diagrams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timemachine-in-action-diagrams"}},[e._v("#")]),e._v(" TimeMachine in action diagrams")]),e._v(" "),a("p",[e._v("Depicting sequence diagram is pretty challenging. The Architexa plugin is pretty good in this area, especially when you already have code already done. The Architexa plugin would take advantage of existing code and Java reflection and give you a selectable choice on what and to where as action. Here I will highlight couple actions in TimeMachine.")]),e._v(" "),a("p",[e._v("The most basic startup of the TimeMachine sequence would look something like this.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://bitbucket.org/saltnlight5/images/raw/84cde5b1e9ba/timemachine-diagrams/scheduler-start-up-sequence.png",alt:"TimeMachine Scheduler startup up sequence diagram"}})]),e._v(" "),a("p",[e._v("In the heart of the scheduler logic is in the "),a("code",[e._v("PollingScheduleRunner")]),e._v(" service, and here are some of the actions depicted.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://bitbucket.org/saltnlight5/images/raw/84cde5b1e9ba/timemachine-diagrams/polling-schedule-runner-sequence.png",alt:"TimeMachine PollingScheduleRunner sequence diagram"}})]),e._v(" "),a("h1",{attrs:{id:"using-architexa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-architexa"}},[e._v("#")]),e._v(" Using Architexa")]),e._v(" "),a("p",[e._v("Over all, I think Architexa provided a pretty good plugin for Eclipse. I have some problems when generating the sequence diagrams. For example, I can't resize the width between two actors(classes) to display full method name. And in some actions there are no lines drawn! I suspect it's due to the tool is using code inspection, and some of the call are called by different threads.")]),e._v(" "),a("p",[e._v("The plugin itself seems pretty solid. You can install and uninstall without harm. They currently offer free download for small number of users, which I think it's a great way for you to explorer.")]),e._v(" "),a("p",[e._v("I am not too sure how effective of Architexa on builing a collabration of sharing these diagrams as platform. I treat these diagrams as supplement to the project. It certainly helps in explaining high level architeture, but it's far from the complete documentation. No documentation can get any closer to the code. I think the strength of Java being static already provided some level of documentation when just reading the code alone. I would rather Architexa to focus and perfecting the plugin that draw the diagram, because these are more important to me.")])])}),[],!1,null,null,null);t.default=r.exports}}]);