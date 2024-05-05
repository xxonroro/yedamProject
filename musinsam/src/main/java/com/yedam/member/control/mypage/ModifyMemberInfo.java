package com.yedam.member.control.mypage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.member.UserVO;
import com.yedam.member.service.MemberService;
import com.yedam.member.service.MemberServiceImpl;

public class ModifyMemberInfo implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		String userId = request.getParameter("userId");
		String userPass = request.getParameter("userPass");
		String birthday = request.getParameter("birthday");
		String address = request.getParameter("address");
		
		UserVO vo = new UserVO();
		vo.setUserId(userId);
		vo.setName(username);
		vo.setPassword(userPass);
		vo.setBirthdate(birthday);
		vo.setAddress(address);
		
		MemberService service = new MemberServiceImpl();
		if(service.updateMemberInfo(vo)) {
            HttpSession session = request.getSession();
            session.setAttribute("username", vo.getName());
            session.setAttribute("userPass", vo.getPassword());
            session.setAttribute("birthday", vo.getBirthdate());
            session.setAttribute("address", vo.getAddress());
            
			response.sendRedirect("main.do");
		}
		
		
	}

}
