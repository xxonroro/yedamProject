package com.yedam.member.control.register;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.member.service.MemberService;
import com.yedam.member.service.MemberServiceImpl;

public class PhoneCheck implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json;charset=UTF-8");

		String phone = request.getParameter("phone").trim();
		
		System.out.println(phone);
		
		MemberService service = new MemberServiceImpl();
		if (service.checkMemberPhone(phone)) {
			response.getWriter().print("{\"exist\": true}");
		} else {
			response.getWriter().print("{\"exist\": false}");
		}

	}

}
