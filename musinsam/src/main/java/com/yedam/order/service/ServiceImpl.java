package com.yedam.order.service;

import java.util.List;
import java.util.Map;

import com.yedam.common.DataSource;
import com.yedam.order.mapper.Mapper;
import com.yedam.vo.BasketVO;
import com.yedam.vo.LikeVO;
import com.yedam.vo.UserVO;

public class ServiceImpl implements Service{
	Mapper mapper = DataSource.getInstance().openSession(true).getMapper(Mapper.class);
	@Override
	public List<Map<String, Object>> cartList(String uid) {
		return mapper.cartList(uid);
	}
	
	@Override
	public boolean updownCount(BasketVO bvo) {
		return mapper.updownCount(bvo) == 1;
	}
	
	@Override
	public boolean removeCart(int no) {
		return mapper.removeCart(no) == 1;
	}
	
	@Override
	public List<Map<String, Object>> csizeList(int no) {
		return mapper.csizeList(no);
	}
	
	
	
	@Override
	public List<Map<String, Object>> likeList(String uid, int page, int maxPg) {
		return mapper.likeList(uid, page, maxPg);
	}
	
	@Override
	public boolean removeLike(int no) {
		return mapper.removeLike(no) == 1;
	}
	
	@Override
	public boolean insertLike(LikeVO lvo) {
		return mapper.insertLike(lvo) == 1;
	}
	
	@Override
	public boolean insertCartIcon(BasketVO bvo) {
		return mapper.insertCartIcon(bvo) == 1;
	}
	
	@Override
	public boolean removeCartIcon(BasketVO bvo) {
		return mapper.removeCartIcon(bvo) == 1;
	}
	
	@Override
	public int CountLike(String uid) {
		return mapper.CountLike(uid);
	}
	
	
	
	@Override
	public List<Map<String, Object>> payList(int no) {
		return mapper.payList(no);
	}
	
	@Override
	public List<UserVO> userInfo(String uid) {
		return mapper.userInfo(uid);
	}
	
}
