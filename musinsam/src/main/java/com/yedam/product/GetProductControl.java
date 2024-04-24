package com.yedam.product;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class GetProductControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//String cno = "1";//req.getParameter("cno");
        
		ProductService  svc = new ProductServiceImpl();
		//ClothesVO vo = svc.getProduct(Integer.parseInt(cno));
		//req.setAttribute("pinfo", vo);
		req.getRequestDispatcher("inner/singleProduct.tiles").forward(req, resp);
	}

}
