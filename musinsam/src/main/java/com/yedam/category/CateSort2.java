package com.yedam.category;

import java.io.IOException;
import java.util.List;

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
		
		
		
		CategoryService csv = new CategoryServiceImpl();
		
		List<ClothesVO> list = csv.clothesListSort2(bigCategory, orderby, searchword);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		response.getWriter().print(json);

	}

}
