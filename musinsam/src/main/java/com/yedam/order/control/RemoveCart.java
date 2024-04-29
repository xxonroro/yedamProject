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
		
		String no[] = request.getParameterValues("no");
		Service svc = new ServiceImpl();
		
		boolean ret = false;
		
		for(String st : no) {
			String[] num = st.split(",");
			for(String num_ : num) {
				int no_ = Integer.parseInt(num_);

				if(svc.removeCart(no_)) {
					ret = true;
				}
			}
		}
		
		if(ret == true) {
			response.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}
		
	}

}
