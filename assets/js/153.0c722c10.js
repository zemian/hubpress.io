(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{539:function(t,n,e){"use strict";e.r(n);var a=e(11),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v('We can see from javadoc that javax.net.ssl.HttpsURLConnection provided a static method to override with setDefaultSSLSocketFory() method. This allow you to supply a custom javax.net.ssl.TrustManager that may verify your own  CA certs handshake and validation etc. But this will override the default for all "https" URLs per your JVM!')]),t._v(" "),e("p",[t._v("So how can we override just a single https URL? Looking at javax.net.ssl.HttpsURLConnection again we see instance method for setSSLSocketFactory(), but we can't instantiate HttpsURLConnection object directly! It took me some digging to realized that the java.net.URL is actually an factory class for its implementation! One can get an instance like this using new URL(\""),e("a",{attrs:{href:"https://localhost",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://localhost"),e("OutboundLink")],1),t._v('").openConnection()')]),t._v(" "),e("p",[t._v("To complete this article, I will provide a simple working example that demonstrate this.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package zemian;\n\nimport java.io.BufferedReader;\n\nimport java.io.InputStream;\n\nimport java.io.InputStreamReader;\n\nimport java.net.URL;\n\nimport java.net.URLConnection;\n\nimport java.security.SecureRandom;\n\nimport java.security.cert.X509Certificate;\n\nimport javax.net.ssl.HttpsURLConnection;\n\nimport javax.net.ssl.SSLContext;\n\nimport javax.net.ssl.SSLSocketFactory;\n\nimport javax.net.ssl.TrustManager;\n\nimport javax.net.ssl.X509TrustManager;\n\npublic class WGetText {\n\n    public static void main(String[] args) throws Exception {\n\n        String urlString = System.getProperty("url", "https://google.com");\n\n        URL url = new URL(urlString);\n\n        URLConnection urlConnection = url.openConnection();\n\n        HttpsURLConnection httpsUrlConnection = (HttpsURLConnection) urlConnection;\n\n        SSLSocketFactory sslSocketFactory = createTrustAllSslSocketFactory();\n\n        httpsUrlConnection.setSSLSocketFactory(sslSocketFactory);\n\n        try (InputStream inputStream = httpsUrlConnection.getInputStream()) {\n\n            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));\n\n            String line = null;\n\n            while ((line = reader.readLine()) != null) {\n\n                System.out.println(line);\n\n            }\n\n        }\n\n    }\n\n    private static SSLSocketFactory createTrustAllSslSocketFactory() throws Exception {\n\n        TrustManager[] byPassTrustManagers = new TrustManager[] { new X509TrustManager() {\n\n            public X509Certificate[] getAcceptedIssuers() {\n\n                return new X509Certificate[0];\n\n            }\n\n            public void checkClientTrusted(X509Certificate[] chain, String authType) {\n\n            }\n\n            public void checkServerTrusted(X509Certificate[] chain, String authType) {\n\n            }\n\n        } };\n\n        SSLContext sslContext = SSLContext.getInstance("TLS");\n\n        sslContext.init(null, byPassTrustManagers, new SecureRandom());\n\n        return sslContext.getSocketFactory();\n\n    }\n\n}\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);