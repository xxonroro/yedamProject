package com.yedam.category;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;

public class RandomMain8 implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		CategoryService csv = new CategoryServiceImpl();
		//Map<String, List<ClothesVO>> randomCloth = new HashMap<>();
		
		List<ClothesVO> list = csv.randomCloth8();
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		response.getWriter().print(json);
		

	}

}
