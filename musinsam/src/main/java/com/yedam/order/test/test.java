package com.yedam.order.test;

import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.order.service.Service;
import com.yedam.order.service.ServiceImpl;

public class test {
	public static void main(String[] args) {
		
		Service svc = new ServiceImpl();
		List<Map<String, Object>> list = svc.cartList();
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		System.out.println(json);
	}
}
