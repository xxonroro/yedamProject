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
		
		if(userId == null) {
			response.getWriter().print("<script>alert('입력하신 정보에 대한 아이디가 없습니다.'); location.href='findUserIdForm.do';</script>");
		}
		else {
			response.getWriter().print("<script>alert('입력하신 정보에 대한 아이디는 \"" + userId + "\" 입니다'); location.href='loginForm.do';</script>");
		}
		
		

	}

}
