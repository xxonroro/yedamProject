package com.yedam.member.service;

import java.util.List;
import java.util.Map;

import com.yedam.member.OrderClothVO;
import com.yedam.member.OrderDetailVO;
import com.yedam.member.OrderQuery;
import com.yedam.member.UserVO;

public interface MemberService {
	public boolean memberInsert(UserVO vo);
	public boolean checkMemberId(String userId);
	public boolean checkMemberPhone(String phone);
	public UserVO loginCheck(UserVO vo);
	public String findUserId(UserVO vo);
	public String findUserPass(Map<String, String> map);
	public boolean updateMemberInfo(UserVO vo);
	public List<OrderClothVO> selectOrderList(String id);
	public boolean userPassChange(UserVO vo);
	public OrderDetailVO selectDetailOrder(OrderQuery orderQuery);
}
