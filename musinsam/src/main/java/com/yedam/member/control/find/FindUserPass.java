package com.yedam.member.control.find;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.member.service.MemberService;
import com.yedam.member.service.MemberServiceImpl;

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
			response.getWriter().print("{\"userInfo\": \"x\"}");
		}
		else {
			response.getWriter().print("{\"userInfo\": \"o\", \"redirectUrl\": \"loginForm.do\", \"pass\": \"" + userPass + "\" }");
		}
	
		
	}

}
