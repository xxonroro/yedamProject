package com.yedam.product;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;

public class GetGrade implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int clothNo = Integer.parseInt(request.getParameter("clothNo")) ;
		ReviewService svc = new ReviewServiceImpl();
		Map<String, Double> list = svc.getGrade(clothNo);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		response.getWriter().print(json);
		
		
	}	

}
