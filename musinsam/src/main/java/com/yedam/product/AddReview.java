package com.yedam.product;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.vo.ReviewVO;

public class AddReview implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		ReviewVO vo = new ReviewVO();
		String clothNo = req.getParameter("clothNo");
		String uid = req.getParameter("uid");
		String detail = req.getParameter("detail");
		String grade = req.getParameter("grade");
		
		vo.setClothNo(Integer.parseInt(clothNo));
		vo.setUserId(uid);
		vo.setDetail(detail);
		vo.setGrade(Integer.parseInt(grade));
		
		ReviewService svc = new ReviewServiceImpl();
		if(svc.insertReview(vo)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			resp.getWriter().print("{\"retCode\":\"Fail\"}");
		}

	}

}
