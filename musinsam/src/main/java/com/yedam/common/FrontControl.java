package com.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.board.todayCoodiControl;
import com.yedam.control.StartControl;
import com.yedam.category.CategoryList;
import com.yedam.category.CategoryListPants;
import com.yedam.category.CateList;
import com.yedam.category.Cateform;

public class FrontControl extends HttpServlet {
	Map<String, Control> map;
	
	public FrontControl() {
		map = new HashMap<>();
	}
	
	@Override
	public void init() throws ServletException {
		map.put("/main.do", new StartControl());

		//카테고리
		map.put("/catefrom.do", new Cateform());
		map.put("/category.do", new CategoryList());
		map.put("/categorypants.do", new CategoryListPants());
		map.put("/catelist.do", new CateList());
		map.put("/todayCoodi.do", new todayCoodiControl());

		
	}
	
	@Override
	protected void service(HttpServletRequest reqeust, HttpServletResponse response) throws ServletException, IOException {
		reqeust.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		String uri = reqeust.getRequestURI();
		String context = reqeust.getContextPath();
		String path = uri.substring(context.length());
		
		Control control = map.get(path);
		control.execute(reqeust, response);
	}
}
