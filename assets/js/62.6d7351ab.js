(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{447:function(e,t,n){"use strict";n.r(t);var i=n(11),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("In Java, you can easily implement some business logic in Plain Old Java Object (POJO) classes, and then able to run them in a fancy\nserver or framework without much hassle. There many server/frameworks, such as JBossAS, Spring or Camel etc, that\nwould allow you to deploy POJO without even hardcoding to their API. Obviously you would get advance features if you willing to couple to\ntheir API specifics, but even if you do, you can keep these to minimal by encapsulating your own POJO and their API in a wrapper.\nBy writing and designing your own application as simple POJO as possible, you will have the most flexible ways in choose a framework or server to\ndeploy and run your application. One effective way to write your business logic in these environments is to use "),n("em",[e._v("Service")]),e._v(" component.\nIn this article I will share few things I learned in writing "),n("em",[e._v("Services")]),e._v(".")]),e._v(" "),n("h1",{attrs:{id:"what-is-a-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-service"}},[e._v("#")]),e._v(" What is a Service?")]),e._v(" "),n("p",[e._v("The word "),n("em",[e._v("Service")]),e._v(" is overly used today, and it could mean many things to different people. When I say "),n("em",[e._v("Service")]),e._v(", my definition is a software\ncomponent that has minimal of life-cycles such as "),n("code",[e._v("init")]),e._v(", "),n("code",[e._v("start")]),e._v(", "),n("code",[e._v("stop")]),e._v(", and "),n("code",[e._v("destroy")]),e._v(". You may not need all these\nstages of life-cycles in every service you write, but you can simply ignore ones that don't apply. When writing large application that\nintended for long running such as a server component, definining these life-cycles and ensure they are excuted in proper order is crucial!")]),e._v(" "),n("p",[e._v("I will be walking you through a Java demo project that I have prepared. It's very basic and it should run as stand-alone. The only dependency it has is\nthe "),n("a",{attrs:{href:"http://www.slf4j.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("SLF4J"),n("OutboundLink")],1),e._v(" logger. If you don't know how to use logger, then simply replace them with "),n("code",[e._v("System.out.println")]),e._v(". However I would strongly\nencourage you to learn how to use logger effectively during application development though. Also if you want to try out the\n"),n("a",{attrs:{href:"http://www.springsource.org/spring-framework",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring"),n("OutboundLink")],1),e._v(" related demos, then obviously you would need their jars as well.")]),e._v(" "),n("h1",{attrs:{id:"writing-basic-pojo-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#writing-basic-pojo-service"}},[e._v("#")]),e._v(" Writing basic POJO service")]),e._v(" "),n("p",[e._v("You can quickly define a contract of a Service with life-cycles as below in an interface.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    package servicedemo;\n    \n    public interface Service {\n        void init();\n        void start();\n        void stop();\n        void destroy();\n        boolean isInited();\n        boolean isStarted();\n    }\n")])])]),n("p",[e._v("Developers are free to do what they want in their Service implementation, but you might want to give them an adapter class so that\nthey don't have to re-write same basic logic on each Service. I would provide an abstract service like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    package servicedemo;\n    \n    import java.util.concurrent.atomic.*;\n    import org.slf4j.*;\n    public abstract class AbstractService implements Service {\n        protected Logger logger = LoggerFactory.getLogger(getClass());\n        protected AtomicBoolean started = new AtomicBoolean(false);\n        protected AtomicBoolean inited = new AtomicBoolean(false);\n    \n        public void init() {\n            if (!inited.get()) {\n                initService();\n                inited.set(true);\n                logger.debug("{} initialized.", this);\n            }\n        }\n    \n        public void start() {\n            // Init service if it has not done so.\n            if (!inited.get()) {\n                init();\n            }\n            // Start service now.\n            if (!started.get()) {\n                startService();\n                started.set(true);\n                logger.debug("{} started.", this);\n            }\n        }\n    \n        public void stop() {\n            if (started.get()) {\n                stopService();\n                started.set(false);\n                logger.debug("{} stopped.", this);\n            }\n        }\n    \n        public void destroy() {\n            // Stop service if it is still running.\n            if (started.get()) {\n                stop();\n            }\n            // Destroy service now.\n            if (inited.get()) {\n                destroyService();\n                inited.set(false);\n                logger.debug("{} destroyed.", this);\n            }\n        }\n    \n        public boolean isStarted() {\n            return started.get();\n        }\n    \n        public boolean isInited() {\n            return inited.get();\n        }\n    \n        @Override\n        public String toString() {\n                return getClass().getSimpleName() + "[id=" + System.identityHashCode(this) + "]";\n        }\n    \n        protected void initService() {\n        }\n    \n        protected void startService() {\n        }\n    \n        protected void stopService() {\n        }\n    \n        protected void destroyService() {\n        }\n    }\n\n')])])]),n("p",[e._v("This abstract class provide the basic of most services needs. It has a logger and states to keep track of the life-cycles. It then delegate new\nsets of life-cycle methods so subclass can choose to override. Notice that the "),n("code",[e._v("start()")]),e._v(" method is checking auto calling "),n("code",[e._v("init()")]),e._v(" if it hasn't\nalready done so. Same is done in "),n("code",[e._v("destroy()")]),e._v(" method to the "),n("code",[e._v("stop()")]),e._v(" method. This is important if we're to use it in a container that only have\ntwo stages life-cycles invocation. In this case, we can simply invoke "),n("code",[e._v("start()")]),e._v(" and "),n("code",[e._v("destroy()")]),e._v(" to match to our service's life-cycles.")]),e._v(" "),n("p",[e._v("Some frameworks might go even further and create separate interfaces for each stage of the life-cycles, such as "),n("code",[e._v("InitableService")]),e._v(" or\n"),n("code",[e._v("StartableService")]),e._v(" etc. But I think that would be too much in a typical app. In most of the cases, you want something simple, so I like it just\none interface. User may choose to ignore methods they don't want, or simply use an adaptor class.")]),e._v(" "),n("p",[e._v("Before we end this section, I would throw in a silly Hello world service that can be used in our demo later.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    package servicedemo;\n    \n    public class HelloService extends AbstractService {\n        public void initService() {\n            logger.info(this + " inited.");\n        }\n        public void startService() {\n            logger.info(this + " started.");\n        }\n        public void stopService() {\n            logger.info(this + " stopped.");\n        }\n        public void destroyService() {\n            logger.info(this + " destroyed.");\n        }\n    }\n')])])]),n("h1",{attrs:{id:"managing-multiple-pojo-services-with-a-container"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#managing-multiple-pojo-services-with-a-container"}},[e._v("#")]),e._v(" Managing multiple POJO Services with a container")]),e._v(" "),n("p",[e._v("Now we have the basic of "),n("em",[e._v("Service")]),e._v(" definition defined, your development team may start writing business logic code! Before long, you will have\na library of your own services to re-use. To be able group and control these services into an effetive way, we want also provide a container\nto manage them. The idea is that we typically want to control and manage multiple services with a container as a group in a higher level. Here\nis a simple implementation for you to get started:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    package servicedemo;\n    \n    import java.util.*;\n    public class ServiceContainer extends AbstractService {\n        private List<Service> services = new ArrayList<Service>();\n    \n        public void setServices(List<Service> services) {\n            this.services = services;\n        }\n        public void addService(Service service) {\n            this.services.add(service);\n        }\n    \n        public void initService() {\n            logger.debug("Initializing " + this + " with " + services.size() + " services.");\n            for (Service service : services) {\n                logger.debug("Initializing " + service);\n                service.init();\n            }\n            logger.info(this + " inited.");\n        }\n        public void startService() {\n                logger.debug("Starting " + this + " with " + services.size() + " services.");\n                for (Service service : services) {\n                    logger.debug("Starting " + service);\n                    service.start();\n                }\n                logger.info(this + " started.");\n        }\n        public void stopService() {\n                int size = services.size();\n                logger.debug("Stopping " + this + " with " + size + " services in reverse order.");\n                for (int i = size - 1; i >= 0; i--) {\n                    Service service = services.get(i);\n                    logger.debug("Stopping " + service);\n                    service.stop();\n                }\n                logger.info(this + " stopped.");\n        }\n        public void destroyService() {\n                int size = services.size();\n                logger.debug("Destroying " + this + " with " + size + " services in reverse order.");\n                for (int i = size - 1; i >= 0; i--) {\n                    Service service = services.get(i);\n                    logger.debug("Destroying " + service);\n                    service.destroy();\n                }\n                logger.info(this + " destroyed.");\n        }\n    }\n')])])]),n("p",[e._v("From above code, you will notice few important things:")]),e._v(" "),n("ol",[n("li",[e._v("We extends the AbstractService, so a container is a service itself.")]),e._v(" "),n("li",[e._v("We would invoke all service's life-cycles before moving to next. No services will start unless all others are inited.")]),e._v(" "),n("li",[e._v("We should stop and destroy services in reverse order for most general use cases.")])]),e._v(" "),n("p",[e._v("The above container implementation is simple and run in synchronized fashion. This mean, you start container, then all services\nwill start in order you added them. Stop should be same but in reverse order.")]),e._v(" "),n("p",[e._v("I also hope you would able to see that there is plenty of room for you to improve this container as well. For example, you may\nadd thread pool to control the execution of the services in asynchronized fashion.")]),e._v(" "),n("h1",{attrs:{id:"running-pojo-services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-pojo-services"}},[e._v("#")]),e._v(" Running POJO Services")]),e._v(" "),n("h2",{attrs:{id:"running-services-with-a-simple-runner-program"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-services-with-a-simple-runner-program"}},[e._v("#")]),e._v(" Running services with a simple runner program.")]),e._v(" "),n("p",[e._v("In the simplest form, we can run our POJO services on our own without any fancy server or frameworks. Java programs start its life from a\nstatic "),n("code",[e._v("main")]),e._v(" method, so we surely can invoke "),n("code",[e._v("init")]),e._v(" and "),n("code",[e._v("start")]),e._v(" of our services in there. But we also need to address the "),n("code",[e._v("stop")]),e._v(" and "),n("code",[e._v("destroy")]),e._v("\nlife-cycles when user shuts down the program (usually by hitting "),n("code",[e._v("CTRL+C")]),e._v(".) For this, the Java has the "),n("code",[e._v("java.lang.Runtime#addShutdownHook()")]),e._v("\nfacility. You can create a simple stand-alone server to bootstrap "),n("em",[e._v("Service")]),e._v(" like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    package servicedemo;\n    \n    import org.slf4j.*;\n    public class ServiceRunner {\n        private static Logger logger = LoggerFactory.getLogger(ServiceRunner.class);\n    \n        public static void main(String[] args) {\n            ServiceRunner main = new ServiceRunner();\n            main.run(args);\n        }\n    \n        public void run(String[] args) {\n            if (args.length < 1)\n                throw new RuntimeException("Missing service class name as argument.");\n    \n            String serviceClassName = args[0];\n            try {\n                logger.debug("Creating " + serviceClassName);\n                Class<?> serviceClass = Class.forName(serviceClassName);\n                if (!Service.class.isAssignableFrom(serviceClass)) {\n                    throw new RuntimeException("Service class " + serviceClassName + " did not implements " + Service.class.getName());\n                }\n                Object serviceObject = serviceClass.newInstance();\n                Service service = (Service)serviceObject;\n    \n                registerShutdownHook(service);\n    \n                logger.debug("Starting service " + service);\n                service.init();\n                service.start();\n                logger.info(service + " started.");\n    \n                synchronized(this) {\n                    this.wait();\n                }\n            } catch (Exception e) {\n                throw new RuntimeException("Failed to create and run " + serviceClassName, e);\n            }\n        }\n    \n        private void registerShutdownHook(final Service service) {\n            Runtime.getRuntime().addShutdownHook(new Thread() {\n                public void run() {\n                    logger.debug("Stopping service " + service);\n                    service.stop();\n                    service.destroy();\n                    logger.info(service + " stopped.");\n                }\n            });\n        }\n    }\n')])])]),n("p",[e._v("With abover runner, you should able to run it with this command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ java demo.ServiceRunner servicedemo.HelloService\n")])])]),n("p",[e._v("Look carefully, and you'll see that you have many options to run multiple services with above runner. Let me highlight couple:")]),e._v(" "),n("ol",[n("li",[e._v("Improve above runner directly and make all "),n("code",[e._v("args")]),e._v(" for each new service class name, instead of just first element.")]),e._v(" "),n("li",[e._v("Or write a "),n("code",[e._v("MultiLoaderService")]),e._v(" that will load multiple services you want. You may control argument passing using System Properties.")])]),e._v(" "),n("p",[e._v("Can you think of other ways to improve this runner?")]),e._v(" "),n("h2",{attrs:{id:"running-services-with-spring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-services-with-spring"}},[e._v("#")]),e._v(" Running services with Spring")]),e._v(" "),n("p",[e._v("The Spring framework is an IoC container, and it's well known to be easy to work POJO, and Spring lets you wire your application\ntogether. This would be a perfect fit to use in our POJO services. However, with all the features Spring brings, it missed a easy\nto use, out of box "),n("em",[e._v("main")]),e._v(" program to bootstrap spring config xml context files. But with what we built so far, this is actually an\neasy thing to do. Let's write one of our POJO "),n("em",[e._v("Service")]),e._v(" to bootstrap a spring context file.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    package servicedemo;\n    \n    import org.springframework.context.ConfigurableApplicationContext;\n    import org.springframework.context.support.FileSystemXmlApplicationContext;\n    \n    public class SpringService extends AbstractService {\n        private ConfigurableApplicationContext springContext;\n    \n        public void startService() {\n            String springConfig = System.getProperty("springContext", "spring.xml);\n            springContext = new FileSystemXmlApplicationContext(springConfig);\n            logger.info(this + " started.");\n        }\n        public void stopService() {\n            springContext.close();\n            logger.info(this + " stopped.");\n        }\n    }\n')])])]),n("p",[e._v("With that simple "),n("code",[e._v("SpringService")]),e._v(" you can run and load any spring xml file. For example try this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ java -DspringContext=config/service-demo-spring.xml demo.ServiceRunner servicedemo.SpringService\n")])])]),n("p",[e._v("Inside the "),n("code",[e._v("config/service-demo-spring.xml")]),e._v(" file, you can easily create our container that hosts one or more service in Spring beans.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    <beans xmlns="http://www.springframework.org/schema/beans"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n    \n        <bean id="helloService" class="servicedemo.HelloService">\n        </bean>\n    \n        <bean id="serviceContainer" class="servicedemo.ServiceContainer" init-method="start" destroy-method="destroy">\n            <property name="services">\n                <list>\n                    <ref bean="helloService"/>\n                </list>\n            </property>\n        </bean>\n    \n    </beans>\n')])])]),n("p",[e._v("Notice that I only need to setup "),n("code",[e._v("init-method")]),e._v(" and "),n("code",[e._v("destroy-method")]),e._v(" once on the "),n("code",[e._v("serviceContainer")]),e._v(" bean. You can then add one or more\nother service such as the "),n("code",[e._v("helloService")]),e._v(" as much as you want. They will all be started, managed, and then shutdown when you close the\nSpring context.")]),e._v(" "),n("p",[e._v("Note that Spring context container did not explicitly have the same life-cycles as our services. The Spring context will automatically\ninstanciate all your dependency beans, and then invoke all beans who's "),n("code",[e._v("init-method")]),e._v(" is set. All that is done inside the constructor\nof "),n("code",[e._v("FileSystemXmlApplicationContext")]),e._v(". No explicit init method is called from user. However at the end, during stop of the service, Spring provide\nthe "),n("code",[e._v("springContext#close()")]),e._v(" to clean things up. Again, they do not differentiate "),n("code",[e._v("stop")]),e._v(" from "),n("code",[e._v("destroy")]),e._v(". Because of this, we must merge our\n"),n("code",[e._v("init")]),e._v(" and "),n("code",[e._v("start")]),e._v(" into Spring's "),n("code",[e._v("init")]),e._v(" state, and then merge "),n("code",[e._v("stop")]),e._v(" and "),n("code",[e._v("destroy")]),e._v(" into Spring's "),n("code",[e._v("close")]),e._v(" state. Recall our\n"),n("code",[e._v("AbstractService#destory")]),e._v(" will auto invoke "),n("code",[e._v("stop")]),e._v(" if it hasn't already done so. So this is trick that we need to understand\nin order to use Spring effectively.")]),e._v(" "),n("h2",{attrs:{id:"running-services-with-jee-app-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-services-with-jee-app-server"}},[e._v("#")]),e._v(" Running services with JEE app server")]),e._v(" "),n("p",[e._v("In a corporate env, we usually do not have the freedom to run what we want as a stand-alone program. Instead they usually have some\ninfrustructure and stricter standard technology stack in place already, such as using a JEE application server. In these situation, the most\nportable way to run POJO services is in a "),n("code",[e._v("war")]),e._v(" web application. In a Servlet web application, you can write a class that implements\n"),n("code",[e._v("javax.servlet.ServletContextListener")]),e._v(" and this will provide you the life-cycles hook via "),n("code",[e._v("contextInitialized")]),e._v(" and "),n("code",[e._v("contextDestroyed")]),e._v(".\nIn there, you can instanciate your "),n("code",[e._v("ServiceContainer")]),e._v(" object and call "),n("code",[e._v("start")]),e._v(" and "),n("code",[e._v("destroy")]),e._v(" methods accordingly.")]),e._v(" "),n("p",[e._v("Here is an example that you can explore:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    package servicedemo;\n    import java.util.*;\n    import javax.servlet.*;\n    public class ServiceContainerListener implements ServletContextListener {\n        private static Logger logger = LoggerFactory.getLogger(ServiceContainerListener.class);\n        private ServiceContainer serviceContainer;\n    \n        public void contextInitialized(ServletContextEvent sce) {\n            serviceContainer = new ServiceContainer();\n            List<Service> services = createServices();\n            serviceContainer.setServices(services);\n            serviceContainer.start();\n            logger.info(serviceContainer + " started in web application.");\n        }\n    \n        public void contextDestroyed(ServletContextEvent sce) {\n            serviceContainer.destroy();\n            logger.info(serviceContainer + " destroyed in web application.");\n        }\n    \n        private List<Service> createServices() {\n            List<Service> result = new ArrayList<Service>();\n            // populate services here.\n            return result;\n        }\n    }\n')])])]),n("p",[e._v("You may configure above in the "),n("code",[e._v("WEB-INF/web.xml")]),e._v(" like this:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("        <listener>\n            <listener-class>servicedemo.ServiceContainerListener</listener-class>\n        </listener>\n    \n    </web-app>\n")])])]),n("p",[e._v("The demo provided a placeholder that you must add your services in code. But you can easily make that configurable using the "),n("code",[e._v("web.xml")]),e._v(" for\ncontext parameters.")]),e._v(" "),n("p",[e._v("If you were to use Spring inside a Servlet container, you may directly use their "),n("code",[e._v("org.springframework.web.context.ContextLoaderListener")]),e._v("\nclass that does pretty much same as above, except they allow you to specify their xml configuration file using the\n"),n("code",[e._v("contextConfigLocation")]),e._v(" context parameter. That's how a typical Spring MVC based application is configure. Once you have this setup, you\ncan experiment our POJO service just as the Spring xml sample given above to test things out. You should see our service in action by\nyour logger output.")]),e._v(" "),n("p",[e._v("PS: Actually what we described here are simply related to Servlet web application, and not JEE specific. So you can use Tomcat server just\nfine as well.")]),e._v(" "),n("h1",{attrs:{id:"the-importance-of-service-s-life-cycles-and-it-s-real-world-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-importance-of-service-s-life-cycles-and-it-s-real-world-usage"}},[e._v("#")]),e._v(" The importance of Service's life-cycles and it's real world usage")]),e._v(" "),n("p",[e._v("All the information I presented here are not novelty, nor a killer design pattern. In fact they have been used in many popular open source projects.\nHowever, in my past experience at work, folks always manage to make these extremely complicated, and worse case is that they completely disregard the\nimportance of life-cycles when writing services. It's true that not everything you going to write needs to be fitted into a service, but if you find\nthe need, please do pay attention to them, and take good care that they do invoked properly. The last thing you want is to exit JVM without clean up\nin services that you allocated precious resources for. These would become more disastrous if you allow your application to be dynamically reloaded during\ndeployment without exiting JVM, in which will lead to system resources leakage.")]),e._v(" "),n("p",[e._v("The above "),n("em",[e._v("Service")]),e._v(" practice has been put into use in the "),n("a",{attrs:{href:"https://bitbucket.org/timemachine/scheduler",target:"_blank",rel:"noopener noreferrer"}},[e._v("TimeMachine"),n("OutboundLink")],1),e._v(" project. In fact, if you\nlook at the "),n("code",[e._v("timemachine.scheduler.service.SchedulerEngine")]),e._v(", it would just be a container of many "),n("a",{attrs:{href:"https://bitbucket.org/timemachine/scheduler/src/15f066cc6dad/timemachine-scheduler/src/main/java/timemachine/scheduler/service",target:"_blank",rel:"noopener noreferrer"}},[e._v("services"),n("OutboundLink")],1),e._v("\nrunning together. And that's how user can extend the scheduler functionalities as well, by writing a "),n("em",[e._v("Service")]),e._v(". You can load these services dynamically by a simple properties file.")])])}),[],!1,null,null,null);t.default=r.exports}}]);