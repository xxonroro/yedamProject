package com.yedam.order.service;

import java.util.List;
import java.util.Map;

import com.yedam.vo.BasketVO;
import com.yedam.vo.LikeVO;
import com.yedam.vo.OrderVO;
import com.yedam.vo.StockVO;
import com.yedam.vo.UserVO;

public interface Service {
	public List<Map<String, Object>> cartList(String uid);
	public boolean updownCount(BasketVO bvo);
	public boolean removeCart(String st);
	public List<Map<String, Object>> csizeList(int no);
	
	public List<Map<String, Object>> likeList(String uid, String bigCategory, int page, int maxPg);
	public boolean removeLike(LikeVO lvo);
	public boolean insertLike(LikeVO lvo);
	public boolean insertCartIcon(BasketVO bvo);
	public boolean removeCartIcon(BasketVO bvo);
	public int CountLike(String uid, String bigCategory);
	
	public List<Map<String, Object>> payList(int no);
	public List<UserVO> userInfo(String uid);
	public boolean insertOrder(OrderVO ovo);
	public boolean downStock(StockVO svo);
	
	public List<BasketVO> cartProduct(BasketVO bvo);
	public List<LikeVO> likeProduct(LikeVO lvo);
}
