package com.yedam.admin;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;

public class AdminServiceImpl implements AdminService{
		
SqlSession session = DataSource.getInstance().openSession(true);
	
	AdminMapper mapper = session.getMapper(AdminMapper.class);
	
	@Override
	public boolean mergeProd(StockVO vo) {
		return mapper.mergeProd(vo) == 1;
	}

}
