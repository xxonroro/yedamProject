package com.yedam.order.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.order.service.Service;
import com.yedam.order.service.ServiceImpl;


public class CountLike implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String uid = request.getParameter("uid");
		String bct = request.getParameter("bct");
		
		Service svc = new ServiceImpl();
		int totalCount = svc.CountLike(uid, bct);
		
		response.getWriter().print("{\"totalCount\" : " + totalCount + "}");
	}

}
