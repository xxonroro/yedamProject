package com.yedam.member;

import java.util.List;
import java.util.Map;

import com.yedam.common.DataSource;

public class MemberServiceImpl implements MemberService {
	
	MemberMapper mapper = DataSource.getInstance().openSession(true).getMapper(MemberMapper.class);
	
	// 회원 가입
	@Override
	public boolean memberInsert(UserVO vo) {
		return mapper.memberInsert(vo) == 1;
	}

	// 이이디 중복 체크
	@Override
	public boolean checkMemberId(String userId) {
		return mapper.checkMemberId(userId) == 1;
	}

	// 휴대폰 중복 체크
	@Override
	public boolean checkMemberPhone(String phone) {
		return mapper.checkMemberPhone(phone) == 1;
	}

	@Override
	public UserVO loginCheck(UserVO vo) {
		return mapper.loginCheck(vo);
	}

	@Override
	public String findUserId(UserVO vo) {
		return mapper.findUserId(vo);
	}

	@Override
	public String findUserPass(Map<String, String> map) {
		return mapper.findUserPass(map);
	}

	@Override
	public boolean updateMemberInfo(UserVO vo) {
		return mapper.updateMemberInfo(vo) == 1;
	}

	@Override
	public List<OrderVO> selectOrderList(String id) {
		return mapper.selectOrderList(id);
	}

	@Override
	public boolean userPassChange(UserVO vo) {
		return mapper.userPassChange(vo) == 1;
	}

}
