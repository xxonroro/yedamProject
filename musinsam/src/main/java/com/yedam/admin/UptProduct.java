package com.yedam.admin;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class UptProduct implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int clothNo = Integer.parseInt(request.getParameter("clothNo"));
		int sQt = Integer.parseInt(request.getParameter("sQt"));
		int mQt = Integer.parseInt(request.getParameter("mQt"));
		int lQt = Integer.parseInt(request.getParameter("lQt"));
		
		StockVO svo = new StockVO();
		
		svo.setClothNo(clothNo);
		svo.setAddQt(sQt);
		
		
	}

}
