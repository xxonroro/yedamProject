package com.yedam.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class IdCheck implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json;charset=UTF-8");

		String userId = request.getParameter("id").trim();

		MemberService service = new MemberServiceImpl();
		if (service.checkMemberId(userId)) {
			response.getWriter().print("{\"exist\": true}");
		} else {
			response.getWriter().print("{\"exist\": false}");
		}

	}

}
