package com.yedam.order.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.order.service.Service;
import com.yedam.order.service.ServiceImpl;

public class RemoveCart implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int no = Integer.parseInt(request.getParameter("no"));
		
		Service svc = new ServiceImpl();
		
		if(svc.removeCart(no)) {
			//{"retCode": "Success"}
			response.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			//{"retCode": "Fail"}
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}
		
	}

}
