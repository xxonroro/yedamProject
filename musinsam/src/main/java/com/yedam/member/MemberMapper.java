package com.yedam.member;

import java.util.List;
import java.util.Map;

public interface MemberMapper {
	public int memberInsert(UserVO vo);
	public int checkMemberId(String userId);
	public int checkMemberPhone(String phone);
	public UserVO loginCheck(UserVO vo);
	public String findUserId(UserVO vo);
	public String findUserPass(Map<String, String> map);
	public int updateMemberInfo(UserVO vo);
	public List<OrderVO> selectOrderList(String id);
	public int userPassChange(UserVO vo);
}
