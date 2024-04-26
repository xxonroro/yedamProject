package com.yedam.order.control;

import java.io.IOException;
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

public class LikeList implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");
		
		String uid = request.getParameter("uid");
		int page = Integer.parseInt(request.getParameter("page"));
		int maxPg = Integer.parseInt(request.getParameter("maxPg"));
		
		Service svc = new ServiceImpl();
		List<Map<String, Object>> list = svc.likeList(uid, page, maxPg);
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		response.getWriter().print(json);

	}

}
