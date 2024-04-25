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
		String rNo = req.getParameter("rNo");
		String cNo = req.getParameter("cNo");
		String uid = req.getParameter("uid");
		String detail = req.getParameter("detail");
		//String grade = req.getParameter("grade");
		
		vo.setReviewNo(Integer.parseInt(rNo));
		vo.setClothNo(Integer.parseInt(cNo));
		vo.setUserId(uid);
		vo.setDetail(detail);
		//vo.setGrade(Integer.parseInt(grade));
		
		ReviewService svc = new ReviewServiceImpl();
		if(svc.insertReview(vo)) {
			resp.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			resp.getWriter().print("{\"retCode\":\"Fail\"}");
		}

	}

}
