package com.yedam.product;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.vo.ReviewVO;

public class GradeCal implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ReviewVO vo = new ReviewVO();
		int cNo = Integer.parseInt(req.getParameter("cNo"));
        ReviewService  svc = new ReviewServiceImpl();
        
        double gradeRe = svc.getGrade(cNo);
		
		

		
	}

}
