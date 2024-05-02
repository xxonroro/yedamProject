package com.yedam.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class ModifyUserPass implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String newPass = request.getParameter("newPass");
		String pass = request.getParameter("pass");
		String id = request.getParameter("id");
		
		UserVO vo = new UserVO();
		vo.setUserId(id);
		vo.setPassword(newPass);
		
		MemberService service = new MemberServiceImpl();
		if(newPass.equals(pass)) {
			response.getWriter().print("{\"change\": \"x\"}");
		}
		else {
			if(service.userPassChange(vo)) {
				response.getWriter().print("{\"change\": \"o\", \"redirectUrl\": \"loginForm.do\"}");
			}
		}
		
	}
}
