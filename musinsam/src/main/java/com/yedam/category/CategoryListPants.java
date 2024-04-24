package com.yedam.category;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class CategoryListPants implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		CategoryService csv = new CategoryServiceImpl();
		List<ClothesVO> list = csv.clothesList();
		
		request.setAttribute("clist", list);
		request.getRequestDispatcher("inner/categorypants.tiles").forward(request, response);;

	}

}
