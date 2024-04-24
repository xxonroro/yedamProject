package com.yedam.category;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;

public class CategoryListShirts implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");
	
		
		CategoryService csv = new CategoryServiceImpl();
		List<ClothesVO> list = csv.clothListshirts();
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		response.getWriter().print(json);
	}

}
