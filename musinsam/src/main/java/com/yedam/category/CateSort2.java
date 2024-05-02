package com.yedam.category;

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

public class CateSort2 implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/json;charset=utf-8");
		
		String bigCategory = request.getParameter("bigCategory"); // 상의 바지 아우터 신발 
		String orderby = request.getParameter("orderby"); // order by ()에 들어가는
		String searchword = request.getParameter("searchword"); // 검색어
		
		String page = request.getParameter("page");
		page = page == null ? "1" : page;
		int page2 = Integer.parseInt(page);
		
		CategoryService csv = new CategoryServiceImpl();
		
		List<ClothesVO> list = csv.clothesListSort2(bigCategory, orderby, searchword, page2);
		
		int a = csv.productCount();
		
		PageDTO pg = new PageDTO(page2, a);
		
		//map형태로 변환해서 pagedto 같이 넣어줘야됨
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("pg", pg);
		
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(map);
		
		response.getWriter().print(json);

	}

}
