package com.yedam.order.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.BasketVO;
import com.yedam.vo.LikeVO;
import com.yedam.vo.UserVO;

public interface Mapper {
	public List<Map<String, Object>> cartList(@Param("userId") String uid);
	public int updownCount(BasketVO bvo);
	public int removeCart(int no);
	public List<Map<String, Object>> csizeList(int no);
	
	public List<Map<String, Object>> likeList(@Param("userId") String uid, @Param("page") int page, @Param("maxPg") int maxPg);
	public int removeLike(int no);
	public int insertLike(LikeVO lvo);
	public int insertCartIcon(BasketVO bvo);
	public int removeCartIcon(BasketVO bvo);
	public int CountLike(String uid);
	
	public List<Map<String, Object>> payList(@Param("basketNo") int no);
	public List<UserVO> userInfo(String uid);
}
