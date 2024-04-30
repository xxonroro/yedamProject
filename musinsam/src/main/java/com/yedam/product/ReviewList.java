package com.yedam.product;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.vo.ReviewVO;

public class ReviewList implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int clothNo =(Integer.parseInt(req.getParameter("cNo")));
		ReviewService svc = new ReviewServiceImpl();
		List<ReviewVO> list = svc.reviewList(clothNo);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);

	}

}
