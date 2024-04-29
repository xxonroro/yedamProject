package com.yedam.order.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.order.service.Service;
import com.yedam.order.service.ServiceImpl;
import com.yedam.vo.BasketVO;

public class RemoveCartIcon implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int no = Integer.parseInt(request.getParameter("no"));
		String uid = request.getParameter("uid");
		
		BasketVO bvo = new BasketVO();
		bvo.setClothNo(no);
		bvo.setUserId(uid);
		
		Service svc = new ServiceImpl();
		
		if(svc.removeCartIcon(bvo)) {
			response.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}

	}

}
