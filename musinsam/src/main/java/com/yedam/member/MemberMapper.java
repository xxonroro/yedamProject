package com.yedam.member;

public interface MemberMapper {
	public int memberInsert(UserVO vo);
	public int checkMemberId(String userId);
	public int checkMemberPhone(String phone);
	
}
