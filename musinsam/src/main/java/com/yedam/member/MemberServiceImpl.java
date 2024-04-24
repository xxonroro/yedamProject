package com.yedam.member;

import com.yedam.common.DataSource;

public class MemberServiceImpl implements MemberService {
	
	MemberMapper mapper = DataSource.getInstance().openSession(true).getMapper(MemberMapper.class);
	
	@Override
	public boolean memberInsert(UserVO vo) {
		return mapper.memberInsert(vo) == 1;
	}

}
