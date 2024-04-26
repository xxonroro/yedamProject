package com.yedam.admin;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class UptSale implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int clothNo = Integer.parseInt(request.getParameter("clothNo"));
		double sale = Double.parseDouble(request.getParameter("sale"));
		
		sale = sale / 100;
		
		ClothesVO cvo = new ClothesVO();
		AdminService svc = new AdminServiceImpl();
			
		cvo.setClothNo(clothNo);
		cvo.setDiscountRate(sale);
		
		if(svc.uptSale(cvo)) {
			response.getWriter().print("{\"retCode\" : \"Success\"}");
		}else {
			response.getWriter().print("{\"retCode\" : \"Fail\"}");
		}
		
		
		
	}

}
