package com.yedam.category;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;


public class CategoryServiceImpl implements CategoryService {

	SqlSession session = DataSource.getInstance().openSession(true);
	CategoryMapper mapper = session.getMapper(CategoryMapper.class);
	
	@Override
	public List<ClothesVO> clothesList() {
		
		return mapper.clothList();
	}

	@Override
	public List<ClothesVO> clothesListPants() {
		
		return mapper.clothListpants();
	}

	@Override
	public List<ClothesVO> cateList(String cate) {
		
		return mapper.categoryList(cate);
	}

}
