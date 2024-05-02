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
import com.yedam.vo.LikeVO;

public class RemoveLike implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String st = request.getParameter("no");
		String uid = request.getParameter("uid");
		
		LikeVO lvo = new LikeVO();
		Service svc = new ServiceImpl();
		
		lvo.setUserId(uid);
		
		boolean ret = false;
		

			String[] num = st.split(",");
			for(String num_ : num) {
				int no_ = Integer.parseInt(num_);
				
				lvo.setClothNo(no_);
				if(svc.removeLike(lvo)) {
					ret = true;
				}else {
					ret = false;
				}
			}
		
		
		if(ret == true) {
			response.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}
}
