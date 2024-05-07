package com.yedam.member.control.login;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.member.UserVO;
import com.yedam.member.service.MemberService;
import com.yedam.member.service.MemberServiceImpl;

public class Login implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("loginId");
		String userPass = request.getParameter("loginPass");
		String selector = request.getParameter("selector");
		
		UserVO vo = new UserVO();
		vo.setUserId(userId);
		vo.setPassword(userPass);


		MemberService service = new MemberServiceImpl();
		vo = service.loginCheck(vo);


		if (vo != null) {
			HttpSession session = request.getSession(true);

			session.setAttribute("userId", vo.getUserId());
			session.setAttribute("userPass", vo.getPassword());
			session.setAttribute("username", vo.getName());
			session.setAttribute("address", vo.getAddress());
			session.setAttribute("phone", vo.getPhone());
			session.setAttribute("birthday", vo.getBirthdate());
			session.setAttribute("authority", vo.getAuthority());

			if (selector != null) {
				Cookie cookie = new Cookie("JSESSIONID", session.getId());
				cookie.setMaxAge(3600);
				response.addCookie(cookie);
			}
		    response.setContentType("application/json;charset=UTF-8");
		    
		    response.getWriter().print("{\"login\": \"Success\", \"redirectUrl\": \"main.do\" }");
		} else {
			response.getWriter().print("{\"login\": \"Fail\" }");
		}
	}
}
