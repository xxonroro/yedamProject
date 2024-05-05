package com.yedam.member.service;

import java.util.List;
import java.util.Map;

import com.yedam.common.DataSource;
import com.yedam.member.OrderClothVO;
import com.yedam.member.OrderDetailVO;
import com.yedam.member.OrderQuery;
import com.yedam.member.UserVO;
import com.yedam.member.mapper.MemberMapper;

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

	// 로그인
	@Override
	public UserVO loginCheck(UserVO vo) {
		return mapper.loginCheck(vo);
	}
	
	// 아이디 찾기
	@Override
	public String findUserId(UserVO vo) {
		return mapper.findUserId(vo);
	}

	// 비번 찾기
	@Override
	public String findUserPass(Map<String, String> map) {
		return mapper.findUserPass(map);
	}
	
	// 비밀번호 변경
	@Override
	public boolean userPassChange(UserVO vo) {
		return mapper.userPassChange(vo) == 1;
	}

	// 회원 정보 변경
	@Override
	public boolean updateMemberInfo(UserVO vo) {
		return mapper.updateMemberInfo(vo) == 1;
	}
	
	// 주문 조회
	@Override
	public List<OrderClothVO> selectOrderList(String id) {
		return mapper.selectOrderList(id);
	}
	
	// 주문 상세 조회
	@Override
	public OrderDetailVO selectDetailOrder(OrderQuery orderQuery) {
		return mapper.selectDetailOrder(orderQuery);
	}
	

}
