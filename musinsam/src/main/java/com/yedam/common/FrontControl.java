package com.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.main.MainControl;
import com.yedam.member.MemberRegisterForm;
import com.yedam.member.MemberRegistration;

public class FrontControl extends HttpServlet {
	Map<String, Control> map;

	public FrontControl() {
		map = new HashMap<>();
	}

	@Override
	public void init() throws ServletException {
		// 메인 페이지
		map.put("/main.do", new MainControl());

		// 회원 가입
		map.put("/memberRegisterForm.do", new MemberRegisterForm());
		map.put("/memberRegistration.do", new MemberRegistration());
	}

	@Override
	protected void service(HttpServletRequest reqeust, HttpServletResponse response)
			throws ServletException, IOException {
		reqeust.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");

		String uri = reqeust.getRequestURI();
		String context = reqeust.getContextPath();
		String path = uri.substring(context.length());
		
		System.out.println(path);
		
		Control control = map.get(path);
		control.execute(reqeust, response);
	}
}
