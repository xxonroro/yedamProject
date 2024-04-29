package com.yedam.order.control;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.order.service.Service;
import com.yedam.order.service.ServiceImpl;

public class RemoveLike implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String st = request.getParameter("no");
		Service svc = new ServiceImpl();
		
		boolean ret = false;
		

			String[] num = st.split(",");
			for(String num_ : num) {
				int no_ = Integer.parseInt(num_);

				if(svc.removeLike(no_)) {
					ret = true;
				}
			}
		
		
		if(ret == true) {
			response.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}
}
