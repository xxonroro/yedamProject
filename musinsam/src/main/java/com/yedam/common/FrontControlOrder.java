package com.yedam.common;

import java.util.Map;

import com.yedam.order.control.Cart;
import com.yedam.order.control.CartList;
import com.yedam.order.control.RemoveCart;
import com.yedam.order.control.UpDownCount;

public class FrontControlOrder {
	public static void put(Map<String, Control> map) {
		map.put("/cart.do",	new Cart());
		map.put("/cartList.do", new CartList());
		map.put("/updownCount.do", new UpDownCount());
		map.put("/removeCart.do", new RemoveCart());
		
		//FrontControlOrder.put(map);
	}
}
