package com.yedam.product;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class GetProductControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String clothNo = req.getParameter("clothNo");
        
		ProductService  svc = new ProductServiceImpl();
		ClothesVO vo = svc.getProduct(Integer.parseInt(clothNo));
		req.setAttribute("pinfo", vo);  //
		System.out.println(vo);
		req.getRequestDispatcher("product/singleProduct.tiles").forward(req, resp);
	}

}
