package com.yedam.order.control;

import java.io.IOException;
import java.util.ArrayList;
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

public class PayList implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String st = request.getParameter("no");
		Service svc = new ServiceImpl();
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();

		System.out.println(st);

			String[] num = st.split(",");
			for(String num_ : num) {
				int no_ = Integer.parseInt(num_);
				list.addAll(svc.payList(no_));
			}
		
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			String json = gson.toJson(list);
			response.getWriter().print(json);
	}

}
