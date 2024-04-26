package com.yedam.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;

public class Login implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("userId");
		String userPass = request.getParameter("userPass");
		String check = request.getParameter("selector");
		
		UserVO vo = new UserVO();
		vo.setUserId(userId);
		vo.setUpassword(userPass);
		
		MemberService service = new MemberServiceImpl();
		vo = service.loginCheck(vo);
		
		if(vo != null) {
			HttpSession session = request.getSession(true);
			session.setAttribute("userId", vo.getUserId());
			session.setAttribute("authority", vo.getAuthority());
			
			
			if(check != null) {
				Cookie cookie = new Cookie("JSESSIONID", session.getId());
				cookie.setMaxAge(3600);
				response.addCookie(cookie);
			}
			
			if(vo.getAuthority() == 1) {
				response.sendRedirect("main.do"); // 관리자
			}
			else {
				response.sendRedirect("main.do"); // 일반 사용자.
			}
		}

	}

}
