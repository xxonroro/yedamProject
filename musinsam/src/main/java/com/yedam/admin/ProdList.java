package com.yedam.admin;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;

public class ProdList implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String page = request.getParameter("page");
		page = page == null ? "1" : page ;
		
		AdminService svc = new AdminServiceImpl();
		List<ClothesVO> list = svc.prodList(Integer.parseInt(page));
		
		PageDTO dto = new PageDTO(Integer.parseInt(page), svc.listCount());
		
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("page", dto);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(map);
		response.getWriter().print(json);
		
		
	}

}
