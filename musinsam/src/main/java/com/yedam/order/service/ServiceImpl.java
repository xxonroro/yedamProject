package com.yedam.order.service;

import java.util.List;
import java.util.Map;

import com.yedam.vo.BasketVO;
import com.yedam.order.mapper.Mapper;
import com.yedam.common.DataSource;

public class ServiceImpl implements Service{
	Mapper mapper = DataSource.getInstance().openSession(true).getMapper(Mapper.class);
	@Override
	public List<Map<String, Object>> cartList() {
		return mapper.cartList();
	}
	
	@Override
	public boolean updownCount(BasketVO bvo) {
		return mapper.updownCount(bvo) == 1;
	}
	
	@Override
	public boolean removeCart(int no) {
		return mapper.removeCart(no) == 1;
	}
}
