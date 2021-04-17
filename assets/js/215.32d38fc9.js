(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{602:function(n,e,t){"use strict";t.r(e);var a=t(11),s=Object(a.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('// Filename: conn.kts\n// Usage: kotlinc -cp /home/zedeng/Downloads/ojdbc7.jar -script conn.kts\n\nimport java.sql.*\n\nClass.forName("oracle.jdbc.driver.OracleDriver")\nval conn = DriverManager.getConnection("jdbc:oracle:thin:@myremotehost:1521:MYDB", "system", "mypassword123")\n\nprintln("Database connection established $conn")\nprintln("Database Default Catalog: ${conn.getCatalog()}")\nprintln("Database Default Schema: ${conn.getSchema()}")\n\nval m = conn.getMetaData()\nprintln("${m.getDatabaseProductName()} ${m.getDatabaseMajorVersion()} ${m.getDatabaseMinorVersion()}")\n\nprintln("List of Schemas")\nvar rs: ResultSet\nrs = m.getSchemas()\nwhile(rs.next()) {\n    println("  ${rs.getObject(1)}")\n}\nrs.close()\n\nval listSchemaName = conn.getSchema()\nprintln("List of Tables for ${listSchemaName}")\nrs = m.getTables(conn.getCatalog(), listSchemaName, null, null)\nwhile(rs.next()) {\n    val name = rs.getObject("TABLE_NAME")\n    println("  $name")\n}\nrs.close()\n\nprintln("Execute query:")\nval stmt = conn.createStatement()\nrs = stmt.executeQuery("SELECT 1+1 FROM DUAL")\nwhile(rs.next()) {\n    val v = rs.getObject(1)\n    println("  1 + 1 from DB=$v")\n}\nrs.close()\nstmt.close()\n\nconn.close()\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);