package com.yedam.category;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;

public class CateCount implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");
		
		//Map(int, )
		
		CategoryService csv = new CategoryServiceImpl();
		Map<String, Integer> clothescount = new HashMap<>();
		
		String cate = "상의";
		int num = csv.categoryCount(cate);
		clothescount.put("shirts", num);
		
		cate = "바지";
		num = csv.categoryCount(cate);
		clothescount.put("pants", num);
		
		cate = "신발";
		num = csv.categoryCount(cate);
		clothescount.put("shoes", num);
		
		cate = "아우터";
		num = csv.categoryCount(cate);
		clothescount.put("outer", num);
		
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(clothescount);
		response.getWriter().print(json);
		
	}

}
