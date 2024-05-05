package com.yedam.member.mapper;

import java.util.List;
import java.util.Map;

import com.yedam.member.OrderClothVO;
import com.yedam.member.OrderDetailVO;
import com.yedam.member.OrderQuery;
import com.yedam.member.UserVO;

public interface MemberMapper {
	public int memberInsert(UserVO vo);
	public int checkMemberId(String userId);
	public int checkMemberPhone(String phone);
	public UserVO loginCheck(UserVO vo);
	public String findUserId(UserVO vo);
	public String findUserPass(Map<String, String> map);
	public int updateMemberInfo(UserVO vo);
	public List<OrderClothVO> selectOrderList(String id);
	public int userPassChange(UserVO vo);
	public OrderDetailVO selectDetailOrder(OrderQuery orderQuery);
}
