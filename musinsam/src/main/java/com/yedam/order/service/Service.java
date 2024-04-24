package com.yedam.order.service;

import java.util.List;
import java.util.Map;

import com.yedam.vo.BasketVO;
import com.yedam.vo.ClothesVO;

public interface Service {
	public List<Map<String, Object>> cartList(int page);
	public boolean updownCount(BasketVO bvo);
	public boolean removeCart(int no);

}
