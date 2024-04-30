package com.yedam.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class FindUserId implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");

		UserVO vo = new UserVO();
		vo.setName(name);
		vo.setPhone(phone);
		
		MemberService service = new MemberServiceImpl();
		String userId = service.findUserId(vo);

		System.out.println(userId);

		if (userId == null) {
			response.getWriter().print("{\"userInfo\": \"x\"}");
		} else {
			response.getWriter().print("{\"userInfo\": \"o\", \"redirectUrl\": \"loginForm.do\", \"id\": \"" + userId + "\" }");
		}

	}
}
