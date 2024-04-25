package com.yedam.board;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;

public class TodayCoodiServiceImpl implements TodayCoodiService{

	SqlSession session = DataSource.getInstance().openSession(true);
	
	TodayCoodiMapper mapper = session.getMapper(TodayCoodiMapper.class);
	
	
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


	@Override
	public List<ClothesVO> randomAll(String clo) {
		return mapper.randomAll(clo);
	}




}
