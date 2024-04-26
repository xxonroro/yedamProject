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
		String[] no = request.getParameterValues("no");
		
		Service svc = new ServiceImpl();
		System.out.println(no.length);
		
		List<String> list = new ArrayList<>(Arrays.asList(no));
        System.out.println(list.toString());
        System.out.println(list.size());
        
        
		for(int i=0; i<no.length; i++) {
			int num = Integer.parseInt(no[i]);
			if(svc.removeLike(num)) {
				response.getWriter().print("{\"retCode\": \"Success\"}");
			}else {
				response.getWriter().print("{\"retCode\": \"Fail\"}");
			}
		}
		
		
	}

}
