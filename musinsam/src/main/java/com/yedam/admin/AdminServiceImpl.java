package com.yedam.admin;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;

public class AdminServiceImpl implements AdminService{
		
SqlSession session = DataSource.getInstance().openSession(true);
	
	AdminMapper mapper = session.getMapper(AdminMapper.class);
	
	@Override
	public boolean mergeProd(StockVO vo) {
		return mapper.mergeProd(vo) == 1;
	}

	@Override
	public List<StockVO> selectStock(int clothNo) {
		return mapper.selectStock(clothNo);
	}

	@Override
	public double selSale(int clothNo) {
		return mapper.selSale(clothNo);
	}

	@Override
	public ClothesVO selProd(int clothNo) {
		// TODO Auto-generated method stub
		return mapper.selProd(clothNo);
	}

	@Override
	public boolean uptSale(ClothesVO cvo) {
		return mapper.uptSale(cvo) == 1;
	}

	

}
