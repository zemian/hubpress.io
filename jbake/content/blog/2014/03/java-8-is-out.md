title=Java 8 is out!
date=2014-03-19
type=post
tags=java
status=published
~~~~~~
You can watch webcast on March 25 here: http://eventreg.oracle.com/profile/web/index.cfm?PKWebId=0x637279c68

but you may download it now!

http://www.oracle.com/technetwork/java/javase/downloads/index.html

How exicting!

A simple Java8 test 

---
import org.junit.Test;

public class LamdaTest {
    @Test
    public void lamdaExpression() {
//        Runnable r = new Runnable() {
//            public void run() {
//                System.out.println("test");                
//            }            
//        };
        //new Thread(r).start();

        //new Thread(() -> System.out.println("test")).start();

        //Runnable r = () -> System.out.println("test");
        Runnable r = () -> {
            System.out.println("test1"); 
            System.out.println("test2"); 
            System.out.println("test3"); 
        };
        System.out.println("result=" + r);
        new Thread(r).start();
    }
}

You can learn more from here: http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html 