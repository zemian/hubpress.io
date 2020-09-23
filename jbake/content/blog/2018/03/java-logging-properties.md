title=Java Logging Properties
date=2018-03-16
type=post
tags=java-logging
status=published
~~~~~~

Example:

`java -Djava.util.logging.config.file=java-logging.properties myapp.Hello`

**java-logging.properties.**

    handlers= java.util.logging.ConsoleHandler
    java.util.logging.ConsoleHandler.level = FINEST
    sun.net.www.protocol.http.HttpURLConnection.level = ALL
    myapp.Hello.level = ALL
