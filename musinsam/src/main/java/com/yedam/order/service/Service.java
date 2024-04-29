package com.yedam.order.service;

import java.util.List;
import java.util.Map;

import com.yedam.vo.BasketVO;
import com.yedam.vo.LikeVO;

public interface Service {
	public List<Map<String, Object>> cartList(String uid);
	public boolean updownCount(BasketVO bvo);
	public boolean removeCart(int no);
	public List<Map<String, Object>> csizeList(int no);
	
	public List<Map<String, Object>> likeList(String uid, int page, int maxPg);
	public boolean removeLike(int no);
	public boolean insertLike(LikeVO lvo);
	public boolean insertCartIcon(BasketVO bvo);
	public boolean removeCartIcon(BasketVO bvo);
	public int CountLike(String uid);
}
