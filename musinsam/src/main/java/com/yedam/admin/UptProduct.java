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
		String sQt = request.getParameter("sQt");
		String mQt = request.getParameter("mQt");
		String lQt = request.getParameter("lQt");
		
		if(sQt.equals("")) {
			sQt = "0";
		}
		if(mQt.equals("")) {
			mQt = "0";
		}
		if(lQt.equals("")) {
			lQt = "0";
		}
		
		
		
		AdminService svc = new AdminServiceImpl();
		
		StockVO svo = new StockVO();
		StockVO mvo = new StockVO();
		StockVO lvo = new StockVO();
		
		int check = 0;
		
		svo.setClothNo(clothNo);
		svo.setAddQt(Integer.parseInt(sQt));
		svo.setCsize("S");
		
	
		
		if(svc.mergeProd(svo)) {
			check += 1 ;
		}else {
			check += 0;
		}
		
		mvo.setClothNo(clothNo);
		mvo.setAddQt(Integer.parseInt(mQt));
		mvo.setCsize("M");
		
		if(svc.mergeProd(mvo)) {
			check += 2 ;
		}else {
			check += 0;
		}
		
		lvo.setClothNo(clothNo);
		lvo.setAddQt(Integer.parseInt(lQt));
		lvo.setCsize("L");
		
		if(svc.mergeProd(lvo)) {
			check += 4 ;
		}else {
			check += 0;
		}
		
		if(check == 7) {
			response.getWriter().print("{\"retCode\" : \"Success\"}");
		}else if (check == 6) {
			response.getWriter().print("{\"retCode\": \"S사이즈 에러\"}");
		}else if (check == 5) {
			response.getWriter().print("{\"retCode\": \"M사이즈 에러\"}");
		}else if (check == 4) {
			response.getWriter().print("{\"retCode\": \"S, M사이즈 에러\"}");
		}else if (check == 3) {
			response.getWriter().print("{\"retCode\": \"L사이즈 에러\"}");
		}else if (check == 2) {
			response.getWriter().print("{\"retCode\": \"S, L사이즈 에러\"}");
		}else if (check == 1) {
			response.getWriter().print("{\"retCode\": \"M, L사이즈 에러\"}");
		}else {
			response.getWriter().print("{\"retCode\": \"S, M, L사이즈 에러\"}");
		}
		
		
		
		
	}

}
