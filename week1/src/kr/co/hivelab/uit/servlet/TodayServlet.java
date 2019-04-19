package kr.co.hivelab.uit.servlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TodayServlet extends HttpServlet {

    @Override
    protected void doGet( HttpServletRequest req, HttpServletResponse resp ) throws ServletException,IOException {
        RequestDispatcher rd                = req.getRequestDispatcher( "currentTime.jsp" );
        DateTimeFormatter formatter         = DateTimeFormatter.ofPattern( "yyyy/MM/dd HH:mm" );
        String            formatDateTime    = LocalDateTime.now().format( formatter );

        req.setAttribute( "currentTime",formatDateTime );
        rd.forward( req,resp );
    }

    @Override
    protected void doPost( HttpServletRequest req, HttpServletResponse resp ) throws ServletException,IOException {
        this.doGet( req,resp );
    }
}
