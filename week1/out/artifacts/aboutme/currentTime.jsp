<%--
  Created by IntelliJ IDEA.
  User: PM102
  Date: 2019-01-15
  Time: 오후 12:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8"
         language="java" %>
<html>
<jsp:include page="head.html"/>
<body>
<a href="index.jsp">메인화면</a>
<h1>현재시간:<%=request.getAttribute("currentTime")%></h1>
</body>
</html>
