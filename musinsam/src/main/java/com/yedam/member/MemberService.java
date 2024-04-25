package com.yedam.member;

public interface MemberService {
	public boolean memberInsert(UserVO vo);
	public boolean checkMemberId(String userId);
	public boolean checkMemberPhone(String phone);
}
