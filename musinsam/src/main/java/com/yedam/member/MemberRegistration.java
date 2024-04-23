package com.yedam.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class MemberRegistration implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String userId = request.getParameter("userId");
		String userPass = request.getParameter("userPass");
		String username = request.getParameter("username");
		String birthday = request.getParameter("birthday");
		String address = request.getParameter("address");
		String phone = request.getParameter("phone");
		
		UserVO vo = new UserVO();
		vo.setUserId(userId);
		vo.setUpassword(userPass);
		vo.setUname(username);
		vo.setBirthdate(birthday);
		vo.setAddress(address);
		vo.setPhone(phone);
		
		System.out.println(vo);
		
		MemberService service = new MemberServiceImpl();
		if(service.memberInsert(vo)) {
			response.getWriter().print("{\"retCode\": \"Success\"}");
		}
		else {
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}
		
		

	}

}
