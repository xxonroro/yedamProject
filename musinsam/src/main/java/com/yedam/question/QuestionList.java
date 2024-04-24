package com.yedam.question;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;

public class QuestionList implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		QuestionService svc = new QuestionServiceImpl();
		List<QuestionVO> list = svc.selectQa();
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		response.getWriter().print(json);
		
	}

}
