package com.yedam.order.mapper;

import java.util.List;
import java.util.Map;

import com.yedam.vo.BasketVO;
import com.yedam.vo.ClothesVO;

public interface Mapper {
	public List<Map<String, Object>> cartList(int page);
	public int updownCount(BasketVO bvo);
	public int removeCart(int no);

}
