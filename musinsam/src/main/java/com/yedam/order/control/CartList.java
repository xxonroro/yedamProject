package com.yedam.order.control;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.order.service.Service;
import com.yedam.order.service.ServiceImpl;

public class CartList implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");
		
		String uid = request.getParameter("uid");
		
		Service svc = new ServiceImpl();
		List<Map<String, Object>> list = svc.cartList(uid);
		
		for(Map map : list) {
			List<Map<String, Object>> sizeList = svc.csizeList(((BigDecimal)map.get("CLOTH_NO")).intValue());
			map.put("sizeList", sizeList);
		}
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		response.getWriter().print(json);
	}

}
