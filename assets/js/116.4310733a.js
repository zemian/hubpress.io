(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{501:function(e,t,n){"use strict";n.r(t);var o=n(11),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Let’s improve "),n("a",{attrs:{href:"http://saltnlight5.blogspot.com/2013/10/getting-started-with-spring-jdbc-in-web.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("our previous Spring JDBC application"),n("OutboundLink")],1),e._v(" with some more exploration on Spring MVC’s Controller development. I will show another exercise of writing a new Controller that processes a HTML form and use JSTL tags in JSP view pages.")]),e._v(" "),n("p",[e._v("To enable JSTL in Spring MVC application, you would need to add the following to the "),n("code",[e._v("WebAppConfig")]),e._v(" config class. Let’s move it outside of "),n("code",[e._v("WebApp.java")]),e._v(" and into it’s own top level class file in "),n("code",[e._v("src/main/java/springweb/WebAppConfig.java")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('package springweb;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.ComponentScan;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.EnableWebMvc;\nimport org.springframework.web.servlet.view.InternalResourceViewResolver;\n\n@Configuration\n@EnableWebMvc\n@ComponentScan("springweb.controller")\npublic class WebAppConfig {\n    @Bean\n    public InternalResourceViewResolver viewResolver() {\n        InternalResourceViewResolver result = new InternalResourceViewResolver();\n        result.setPrefix("/");\n        result.setSuffix(".jsp");\n        return result;\n    }\n}\n')])])]),n("p",[e._v("Inside the "),n("code",[e._v("InternalResourceViewResolver")]),e._v(" bean, you define where to find your JSP pages that may have JSTL tags in them. The "),n("code",[e._v("prefix")]),e._v(" setter is a path in relative to your "),n("code",[e._v("src/webapp")]),e._v(" location. This allow you to hide your JSP files completely if you want to. For example, by setting it to "),n("code",[e._v('"/WEB-INF/jsp"')]),e._v(" then you may move and store all JSP files into "),n("code",[e._v("src/webapp/WEB-INF/jsp")]),e._v(" which is private in the web application. The "),n("code",[e._v("suffix")]),e._v(' is just the file extension. These two values allow you to return a view name inside the controller with just the basename of your JSP file, which can be short as "/myform" or "/index" etc.')]),e._v(" "),n("p",[e._v("If you are to use Tomcat as your web container, you would need to add JSTL jar dependency as well, since the Tomcat server doesn’t come with standard tag library! So add this into the "),n("code",[e._v("pom.xml")]),e._v(" file now.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("        <dependency>\n            <groupId>javax.servlet</groupId>\n            <artifactId>jstl</artifactId>\n            <version>1.2</version>\n        </dependency>\n")])])]),n("p",[e._v("While you’re at the "),n("code",[e._v("pom.xml")]),e._v(" file, you might want to add the Tomcat maven plugin so you can type less in command line when running your web application.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("<project>\n...\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.tomcat.maven</groupId>\n                <artifactId>tomcat7-maven-plugin</artifactId>\n                <version>2.1</version>\n            </plugin>\n        </plugins>\n    </build>\n...\n</project>\n")])])]),n("p",[e._v("With that, you should able to run "),n("code",[e._v("mvn tomcat7:run")]),e._v(" in root of your project without plugin prefix.")]),e._v(" "),n("p",[e._v("So what does JSTL bring to your application? Well, quite a bit actually. It lets you use some standard JSP tags that’s frequently used when writing JSP views. I will demonstrate this with a set of Controller and views to capture user comments from the application. Note that I will try to show you how to work with Spring Controller in the most basic way only. The Spring actually comes with a custom "),n("code",[e._v("form")]),e._v(" JSP tag that is much more powerful to use. I will reserve that as another article in another time. Today let us focus on learning more about basic Spring Controller and JSTL, and a bit more on Spring JDBC data service as well.")]),e._v(" "),n("p",[e._v("We want to capture user comment, so let’s add a database table to store that information. Add the following DDL into your "),n("code",[e._v("src/main/resources/schema.sql")]),e._v(" file. Again, this is for H2 database per last article project setup.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("CREATE TABLE COMMENT (\n  ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,\n  TEXT VARCHAR(10240) NOT NULL,\n  FROM_USER VARCHAR(15) NULL,\n  FROM_USER_IP VARCHAR(15) NULL,\n  FROM_URL VARCHAR(1024) NULL,\n  TAG VARCHAR(1024) NULL,\n  TS DATETIME NOT NULL\n);\n")])])]),n("p",[e._v("This time, we will write a data model class to match this table. Let’s add "),n("code",[e._v("src/main/java/springweb/data/Comment.java")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('package springweb.data;\n\nimport java.util.Date;\n\npublic class Comment {\n    Long id;\n    String text;\n    String fromUrl;\n    String fromUser;\n    String fromUserIp;\n    String tag;\n    Date ts;\n\n    public Long getId() {\n        return id;\n    }\n\n    public void setId(Long id) {\n        this.id = id;\n    }\n\n    public String getText() {\n        return text;\n    }\n\n    public void setText(String text) {\n        this.text = text;\n    }\n\n    public String getFromUrl() {\n        return fromUrl;\n    }\n\n    public void setFromUrl(String fromUrl) {\n        this.fromUrl = fromUrl;\n    }\n\n    public String getFromUser() {\n        return fromUser;\n    }\n\n    public void setFromUser(String fromUser) {\n        this.fromUser = fromUser;\n    }\n\n    public String getFromUserIp() {\n        return fromUserIp;\n    }\n\n    public void setFromUserIp(String fromUserIp) {\n        this.fromUserIp = fromUserIp;\n    }\n\n    public String getTag() {\n        return tag;\n    }\n\n    public void setTag(String tag) {\n        this.tag = tag;\n    }\n\n    public Date getTs() {\n        return ts;\n    }\n\n    public void setTs(Date ts) {\n        this.ts = ts;\n    }\n\n    private String getTrimedComment(int maxLen) {\n        if (text == null)\n            return null;\n        if (text.length() <= maxLen)\n            return text;\n        return text.substring(0, maxLen);\n    }\n\n    @Override\n    public String toString() {\n        return "Comment{" +\n                "id=" + id +\n                ", ts=" + ts +\n                ", text=\'" + getTrimedComment(12) + \'\\\'\' +\n                \'}\';\n    }\n\n    public static Comment create(String commentText) {\n        Comment result = new Comment();\n        result.setText(commentText);\n        result.setTs(new Date());\n        return result;\n    }\n}\n')])])]),n("p",[e._v("Just as previous artcicle, we will write a data service to handle insert and retrieve of the data model. We add a new "),n("code",[e._v("src/main/java/springweb/data/CommentService.java")]),e._v(" file")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('package springweb.data;\n\nimport org.apache.commons.logging.Log;\nimport org.apache.commons.logging.LogFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.jdbc.core.BeanPropertyRowMapper;\nimport org.springframework.jdbc.core.JdbcTemplate;\nimport org.springframework.jdbc.core.RowMapper;\nimport org.springframework.jdbc.core.simple.SimpleJdbcInsert;\nimport org.springframework.stereotype.Repository;\n\nimport javax.sql.DataSource;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\n\n@Repository\npublic class CommentService {\n    public static Log LOG = LogFactory.getLog(CommentService.class);\n\n    private JdbcTemplate jdbcTemplate;\n    private SimpleJdbcInsert insertActor;\n    private RowMapper<Comment> commentBeanRowMapper = new BeanPropertyRowMapper<Comment>(Comment.class);\n\n    @Autowired\n    public void setDataSource(DataSource dataSource) {\n        this.jdbcTemplate = new JdbcTemplate(dataSource);\n        this.insertActor = new SimpleJdbcInsert(dataSource)\n            .withTableName("COMMENT")\n            .usingGeneratedKeyColumns("ID");\n    }\n\n    public void insert(Comment comment) {\n        LOG.info("Inserting Comment + " + comment);\n\n        Map<String, Object> parameters = new HashMap<String, Object>(2);\n        parameters.put("TEXT", comment.getText());\n        parameters.put("FROM_USER", comment.getFromUser());\n        parameters.put("FROM_USER_IP", comment.getFromUserIp());\n        parameters.put("FROM_URL", comment.getFromUrl());\n        parameters.put("TAG", comment.getTag());\n        parameters.put("TS", comment.getTs());\n        Number newId = insertActor.executeAndReturnKey(parameters);\n        comment.setId(newId.longValue());\n\n        LOG.info("New Comment inserted. Id=" + comment.getId());\n    }\n\n    public List<Comment> findComments() {\n        String sql = "SELECT " +\n                "ID as id, " +\n                "TEXT as text, " +\n                "TAG as tag, " +\n                "TS as ts, " +\n                "FROM_USER as fromUser, " +\n                "FROM_USER_IP as fromUserIp, " +\n                "FROM_URL as fromUrl " +\n                "FROM COMMENT ORDER BY TS";\n        List<Comment> result = jdbcTemplate.query(sql, commentBeanRowMapper);\n        LOG.info("Found " + result.size() + " Comment records.");\n        return result;\n    }\n}\n')])])]),n("p",[e._v("Since we did not use any fancy ORM but just plain JDBC, we will have to write SQL in the data service. But thanks to Spring goodies, it makes life much easier with helpers such as "),n("code",[e._v("SimpleJdbcInsert")]),e._v(", which handles DB insert and retrieval of auto generated key etc. And also notice that in query, we use the Spring’s "),n("code",[e._v("BeanPropertyRowMapper")]),e._v(" to automatically convert JDBC resultset into a java bean "),n("code",[e._v("Comment")]),e._v(" object! Simple, direct and quick.")]),e._v(" "),n("p",[e._v("Now we add the Spring controller in "),n("code",[e._v("src/main/java/springweb/controller/CommentController.java")]),e._v(" to handle web requests.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('package springweb.controller;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RequestMethod;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.servlet.ModelAndView;\nimport springweb.data.Comment;\nimport springweb.data.CommentService;\n\nimport javax.servlet.http.HttpServletRequest;\nimport java.util.List;\n\n@Controller\npublic class CommentController {\n\n    @Autowired\n    private CommentService commentService;\n\n    @RequestMapping(value="/comments")\n    public ModelAndView comments() {\n        List<Comment> comments = commentService.findComments();\n        ModelAndView result = new ModelAndView("/comments");\n        result.addObject("comments", comments);\n        return result;\n    }\n\n    @RequestMapping(value="/comment")\n    public String comment() {\n        return "comment";\n    }\n\n    @RequestMapping(value="/comment", method = RequestMethod.POST)\n    public ModelAndView postComment(HttpServletRequest req, @RequestParam String commentText) {\n        String fromUrl = req.getRequestURI();\n        String user = req.getRemoteUser();\n        String userIp = req.getRemoteAddr();\n        Comment comment = Comment.create(commentText);\n        comment.setFromUserIp(userIp);\n        comment.setFromUser(user);\n        comment.setFromUrl(fromUrl);\n        commentService.insert(comment);\n        ModelAndView result = new ModelAndView("comment-posted");\n        result.addObject("comment", comment);\n        return result;\n    }\n}\n')])])]),n("p",[e._v("In this controller we map "),n("code",[e._v("/comment")]),e._v(" URL to handle display of the HTML form, which returns the "),n("code",[e._v("comment.jsp")]),e._v(" view. The method default to handle a HTTP "),n("code",[e._v("GET")]),e._v(". Note that we remapped same "),n("code",[e._v("/comment")]),e._v(" URL to handle HTTP "),n("code",[e._v("POST")]),e._v(" on a separated "),n("code",[e._v("postComment()")]),e._v(" method! See how clean the Spring Controller can be in this demo to handle HTTP request. Pay very close attention to the parameters declared in the "),n("code",[e._v("postComment()")]),e._v(" method. Spring automatically handles the HTTP request object and map to your method just based upon the types you declared! On some cases you need to be explicit with the help of annotation such as "),n("code",[e._v("@RequestParam")]),e._v(", but Spring does the parsing of HTTP request and extraction for you! This saves you tons of repeated boiler plate code if we were to write a direct Servlet code.")]),e._v(" "),n("p",[e._v("Now let’s see the view and how to use JSTL. The "),n("code",[e._v("/comments")]),e._v(" URL is mapped to "),n("code",[e._v("src/main/webapp/comments.jsp")]),e._v(" view file, which will list all "),n("code",[e._v("Comment")]),e._v(" model objects.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>\n<c:choose>\n<c:when test="${empty comments}">\n    <p>There are no comments in system yet.</p>\n</c:when>\n<c:otherwise>\n    <table border="1">\n    <tr>\n        <td>INDEX</td>\n        <td>TIME</td>\n        <td>FROM</td>\n        <td>COMMENT</td>\n    </tr>\n    <c:forEach items="${comments}" var="comment" varStatus="status">\n    <tr valign="top">\n        <td>${status.index}</td>\n        <td>${comment.ts}</td>\n        <td>${comment.fromUserIp}</td>\n        <%-- The c:out will escape html/xml characters. --%>\n        <td><pre><c:out value="${comment.text}"/></pre></td>\n    </tr>\n    </c:forEach>\n    </table>\n</c:otherwise>\n</c:choose>\n')])])]),n("p",[e._v("Pretty standard stuff on JSTL. Next is the HTML form to post comment in "),n("code",[e._v("src/main/webapp/comment.jsp")]),e._v(" file.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<form action="comment" method="POST">\n<textarea name="commentText" rows="20" cols="80"></textarea>\n<br/>\n<input type="submit" value="Post"/>\n</form>\n')])])]),n("p",[e._v("When form is posted and processed successful, we simply return to a new page in "),n("code",[e._v("src/main/webapp/comment-posted.jsp")]),e._v(" file as output.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("<p>Your comment has been posted. Comment ID=${comment.id}</p>\n")])])]),n("p",[e._v("If you've done these right, you should able to run "),n("code",[e._v("mvn tomcat7:run")]),e._v(" and browse "),n("code",[e._v("http://localhost:8080/spring-web-annotation/comment")]),e._v(" to see the form. Go to "),n("code",[e._v("/comments")]),e._v(" URL to verify all the comments posted.")]),e._v(" "),n("p",[e._v("Note that despite I used Spring Controller as backend, all the views are in basic JSTL, and even the form are just basic HTML elements! I did this so you can see how flexible Spring Controller can be.")]),e._v(" "),n("p",[e._v("I know these are lot of code to post as a blog article today, but I wanted to be complete and try to show a  working demo with tutorial notes. I choose to make it into a single post with file content instead of having you download a project somewhere else. It makes my notes and explanation easier to match onto the code.")]),e._v(" "),n("p",[e._v("And that will conclude our tutorial for today. Please leave a note if you find this helpful.")])])}),[],!1,null,null,null);t.default=r.exports}}]);