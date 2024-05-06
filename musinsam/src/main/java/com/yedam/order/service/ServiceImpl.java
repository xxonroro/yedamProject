package com.yedam.order.service;

import java.util.List;
import java.util.Map;

import com.yedam.common.DataSource;
import com.yedam.order.mapper.Mapper;
import com.yedam.vo.BasketVO;
import com.yedam.vo.LikeVO;
import com.yedam.vo.OrderVO;
import com.yedam.vo.StockVO;
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
	public boolean removeCart(String st) {
		String[] num = st.split(",");
		int cnt = 0;
		for (String num_ : num) {
			int no_ = Integer.parseInt(num_);
			cnt += mapper.removeCart(no_);
		}
		return cnt == num.length;
	}
	
	@Override
	public List<Map<String, Object>> csizeList(int no, String uid) {
		return mapper.csizeList(no, uid);
	}
	
	
	
	@Override
	public List<Map<String, Object>> likeList(String uid, String bigCategory, int page, int maxPg) {
		return mapper.likeList(uid, bigCategory, page, maxPg);
	}
	
	@Override
	public boolean removeLike(LikeVO lvo) {
		return mapper.removeLike(lvo) == 1;
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
	public int CountLike(String uid, String bct) {
		return mapper.CountLike(uid, bct);
	}
	
	
	
	@Override
	public List<Map<String, Object>> payList(int no) {
		return mapper.payList(no);
	}
	
	@Override
	public List<UserVO> userInfo(String uid) {
		return mapper.userInfo(uid);
	}
	
	@Override
	public boolean insertOrder(OrderVO ovo) {
		return mapper.insertOrder(ovo) == 1;
	}
	
	@Override
	public boolean downStock(StockVO svo) {
		return mapper.downStock(svo) == 1;
	}
	
	@Override
	public List<BasketVO> cartProduct(BasketVO bvo) {
		return mapper.cartProduct(bvo);
	}
	
	@Override
	public List<LikeVO> likeProduct(LikeVO lvo) {
		return mapper.likeProduct(lvo);
	}
}
