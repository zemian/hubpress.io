(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{518:function(e,t,n){"use strict";n.r(t);var a=n(11),r=Object(a.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v('I have converted one of my old utility class using latest Java8. I use this often to print content of manifest file to check any mysterious jar file for version etc. Just run "java ztools.PrintJar /path/to/my.jar" to see output. In the new code, you will see how I use the Java 8 stream processing to filter what I need from an Enumeration list, and then get the optional result if there is any. And then the BufferedReader now comes with "lines()" method that also do streaming. It\'s pretty cool to see Java 8 in actions!')]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('package ztools;\n\nimport java.io.BufferedReader;\nimport java.io.InputStream;\nimport java.io.InputStreamReader;\nimport java.util.Optional;\nimport java.util.jar.JarEntry;\nimport java.util.jar.JarFile;\n\n/**\n * Print text based resource file inside a jar file. (eg: META-INF/MANIFEST.MF)\n * @author Zemian Deng\n */\npublic class PrintJar {\n    public static void main(String[] args) throws Exception {\n        // Search given name in a jar\n        JarFile jarFile = new JarFile(args[0]);\n        final String searchName = (args.length >= 2) ? args[1] : "META-INF/MANIFEST.MF";\n        Optional<JarEntry> searchResult = jarFile\n                .stream()\n                .filter(e -> e.getName().equals(searchName))\n                .findFirst();\n        if (!searchResult.isPresent())\n            throw new RuntimeException(searchName + " not found!");\n        \n        // Print the JarEntry\n        JarEntry entry = searchResult.get();\n        try (InputStream instream = jarFile.getInputStream(entry)) {\n            BufferedReader reader = new BufferedReader(new InputStreamReader(instream));\n            reader.lines().forEach(line -> System.out.println(line));\n        }\n    }\n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);