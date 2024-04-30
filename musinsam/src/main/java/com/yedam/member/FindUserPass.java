package com.yedam.member;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class FindUserPass implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = request.getParameter("name");
		String userId = request.getParameter("userId");
		
		Map<String, String> map = new HashMap<>();
		map.put("name", name);
		map.put("userId", userId);
		
		MemberService service = new MemberServiceImpl();
		String userPass = service.findUserPass(map);
		
		if(userPass == null) {
			response.getWriter().print("<script>alert('입력하신 정보에 대한 비밀번호가 없습니다.'); location.href='findUserPassForm.do';</script>");
		}
		else {
			response.getWriter().print("<script>alert('입력하신 정보에 대한 비밀번호는 \"" + userPass + "\" 입니다.'); location.href='loginForm.do';</script>");
		}
	
		
	}

}
