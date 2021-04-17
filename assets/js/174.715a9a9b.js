(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{560:function(t,n,e){"use strict";e.r(n);var r=e(11),a=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("p",[this._v("Need to fetch some data from DB quickly with Java? Here is a quick example of plain JDBC JdbcSupport  Class to help you.")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('package zemian.jdbcexample\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nimport javax.sql.DataSource;\nimport java.sql.Connection;\nimport java.sql.PreparedStatement;\nimport java.sql.ResultSet;\nimport java.sql.ResultSetMetaData;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic abstract class JdbcSupport {\n    private static final Logger LOGGER = LoggerFactory.getLogger(JdbcSupport.class);\n\n    protected DataSource dataSource;\n\n    public JdbcSupport(DataSource dataSource) throws Exception {\n        this.dataSource = dataSource;\n    }\n\n    protected Row toRowMap(ResultSet rs) throws Exception {\n        Row row = new Row();\n        ResultSetMetaData meta = rs.getMetaData();\n        int count = meta.getColumnCount();\n        for (int i=1; i <= count; i++) {\n            row.map.put(meta.getColumnName(i), rs.getObject(i));\n        }\n        return row;\n    }\n\n    protected List<Row> queryRowList(Connection conn, String sql, Object... params) throws Exception {\n        LOGGER.debug("Query sql={}, params={}", sql, Arrays.asList(params));\n        List<Row> result = new ArrayList<>();\n        try(PreparedStatement st = conn.prepareStatement(sql)) {\n            for (int i = 1; i <= params.length; i++) {\n                st.setObject(i, params[i -1]);\n            }\n            try (ResultSet rs = st.executeQuery()) {\n                while(rs.next()) {\n                    result.add(toRowMap(rs));\n                }\n            }\n        }\n        return result;\n    }\n\n    protected Row queryRow(Connection conn, String sql, Object... params) throws Exception {\n        List<Row> rowList = queryRowList(conn, sql, params);\n        if (rowList.size() != 1) {\n            throw new RuntimeException("No unique result from query.");\n        }\n        return rowList.get(0);\n    }\n    \n    public static class Row {\n        public Map<String, Object> map = new HashMap<>();\n\n        public <T> T get(String name) {\n            T result = (T)map.get(name);\n            return result;\n        }\n\n        public <T> T get(String name, T defVal) {\n            T result = (T)map.get(name);\n            if (result == null)\n                return defVal;\n            return result;\n        }\n    }\n}\n')])])]),n("p",[this._v("To use it, one may do something like this:")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v('public class AccountStore extends JdbcSupport {\n    public AccountStore(DataSource dataSource) {\n        super(dataSource);\n    }\n    \n    public void printAccountProfiles() {\n        try(Connection conn = dataSource.getConnection()) {\n            String sql = "SELECT ACCOUNTID FROM USERS WHERE USERNAME=?";\n            Row row = queryRow(conn, sql, "zemian");\n            \n            String accountId = row.get("ACCOUNTID");\n            String department = "IT";\n            sql = "SELECT * FROM ACCOUNTPROFILES WHERE ID=? AND DEPARTMENT=?";\n            List<Row> rowList = queryRowList(conn, sql, accountId, department);\n            \n            for (Row row : rowList) {\n                System.out.println("Got profile: " + row.map);\n            }\n        }\n    }\n}\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);