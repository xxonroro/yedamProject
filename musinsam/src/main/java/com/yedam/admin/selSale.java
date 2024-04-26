package com.yedam.admin;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;

public class selSale implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int clothNo = Integer.parseInt(request.getParameter("clothNo")) ;
		
		AdminService svc = new AdminServiceImpl();
		
		
		double sale = svc.selSale(clothNo);
		
		Map<String , Double> map = new HashMap<>();
		
		
		ClothesVO cvo = svc.selProd(clothNo);
		
		
		map.put("sale", sale);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(map);
		
		response.getWriter().print(json);
		
		
	}

}
