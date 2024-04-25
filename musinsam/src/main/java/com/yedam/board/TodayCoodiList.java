package com.yedam.board;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.security.auth.Subject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
	
public class TodayCoodiList implements Control{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		TodayCoodiService svc = new TodayCoodiServiceImpl();
		
		String clo = "상의";
		
		Map<String, List<ClothesVO>> clothes = new HashMap<>();
		
		List<ClothesVO> list = svc.randomAll(clo);
		clothes.put("shirts", list);
		
		
		clo = "바지";
		list = svc.randomAll(clo);
		clothes.put("pants", list);
		
		clo = "신발";
		list = svc.randomAll(clo);
		clothes.put("shoes", list);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(clothes);
		
		response.getWriter().print(json);
		
		
	}
	
}
