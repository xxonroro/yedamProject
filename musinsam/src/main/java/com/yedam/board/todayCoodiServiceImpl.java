package com.yedam.board;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;

public class todayCoodiServiceImpl implements todayCoodiService{

	SqlSession session = DataSource.getInstance().openSession(true);
	
	todayCoodiMapper mapper = session.getMapper(todayCoodiMapper.class);
	
	
	@Override
	public List<ClothesVO> randomTop() {
		return mapper.randomTop();
	}


	@Override
	public List<ClothesVO> randomBottom() {
		return mapper.randomBottom();
	}


	@Override
	public List<ClothesVO> randomShoes() {
		return mapper.randomShoes();
	}




}
