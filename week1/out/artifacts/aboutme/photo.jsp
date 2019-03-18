<%--
  Created by IntelliJ IDEA.
  User: PM102
  Date: 2019-01-15
  Time: 오전 10:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8"
         language="java" %>
<html>
<head>
    <jsp:include page="head.html"/>
</head>
<body>
<jsp:include page="menu.jsp"/>
<div class="container">
    <div class="content-photo">
        <div class="content-photo-top">
            <img class="content-photo-top-img" src="asset/img/dev1.jpeg"/>
            <div class="content-photo-desc">
                <p class="content-desc">
                    2018.11
                </p>
                <p class="content-desc">
                    그렇습니다.. 안되다가 갑자기..?? 되? 이게? 이렇습니다..
                </p>
            </div>
        </div>
    </div>
    <div class="content-photo">
        <div class="content-photo-bottom">
            <img class="content-photo-bottom-img" src="asset/img/dev2.JPG"/>
            <div class="content-photo-desc">
                <p class="content-desc">
                    2019.01
                </p>
                <p class="content-desc">
                    그렇죠.. 네이밍룰이 제일 어렵슴다..
                </p>
            </div>
        </div>
    </div>
</div>
<jsp:include page="footer.html"/>
</body>
</html>
