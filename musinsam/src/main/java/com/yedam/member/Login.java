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
		String selector = request.getParameter("selector");

		UserVO vo = new UserVO();
		vo.setUserId(userId);
		vo.setPassword(userPass);

		System.out.println(vo);

		MemberService service = new MemberServiceImpl();
		vo = service.loginCheck(vo);
		
		System.out.println(vo);

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
			response.sendRedirect("main.do");

		} else {
			response.getWriter().print("<script>alert('아이디 또는 비밀번호가 맞지 않습니다.'); location.href='loginForm.do';</script>");
		}

	}
}
