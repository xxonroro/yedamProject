package com.yedam.member.control.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;

public class Logout implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession(false);
		
		if(session != null) {
			session.invalidate();
		}

		
//        Cookie cookie = new Cookie("keepLogin", null);
//        cookie.setMaxAge(0); 
//        response.addCookie(cookie);
        
		response.sendRedirect("main.do");
	}

}
