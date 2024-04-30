package com.yedam.member;

import java.util.List;
import java.util.Map;

public interface MemberService {
	public boolean memberInsert(UserVO vo);
	public boolean checkMemberId(String userId);
	public boolean checkMemberPhone(String phone);
	public UserVO loginCheck(UserVO vo);
	public String findUserId(UserVO vo);
	public String findUserPass(Map<String, String> map);
	public boolean updateMemberInfo(UserVO vo);
	public List<OrderVO> selectOrderList(String id);
}
