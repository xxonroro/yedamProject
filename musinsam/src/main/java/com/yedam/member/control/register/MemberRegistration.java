package com.yedam.member.control.register;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.member.UserVO;
import com.yedam.member.service.MemberService;
import com.yedam.member.service.MemberServiceImpl;

public class MemberRegistration implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("userId");
		String password = request.getParameter("password");
		String name = request.getParameter("name");
		String birthday = request.getParameter("birthday");
		String address = request.getParameter("address");
		String phone = request.getParameter("phone");

		UserVO vo = new UserVO();
		vo.setUserId(id);
		vo.setPassword(password);
		vo.setName(name);
		vo.setBirthdate(birthday);
		vo.setAddress(address);
		vo.setPhone(phone);

		System.out.println(vo);

		MemberService service = new MemberServiceImpl();

		if (service.memberInsert(vo)) {
			response.sendRedirect("main.do");
		}

		
	}
}
