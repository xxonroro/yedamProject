package com.yedam.board;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;

public class todayCoodiList implements Control{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		todayCoodiService svc = new todayCoodiServiceImpl();
		List<ClothesVO> list = svc.randomTop();
		List<ClothesVO> listAll = new ArrayList<ClothesVO>();
		listAll.addAll(list);
		
		list = svc.randomBottom();
		listAll.addAll(list);
		
		list = svc.randomShoes();
		listAll.addAll(list);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(listAll);
		
		response.getWriter().print(json);
		
		
	}
	
}
