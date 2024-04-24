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
	public List<ClothesVO> clothListshirts() {
		
		return mapper.clothListshirts();
	}

	@Override
	public List<ClothesVO> cateList(String cate) {
		
		return mapper.categoryList(cate);
	}

	@Override
	public int getCount(SearchVO search) {
		
		return mapper.selectCount(search);
	}

	@Override
	public List<ClothesVO> clothListouter() {
		
		return mapper.clothListouter();
	}

	@Override
	public List<ClothesVO> clothListshoes() {
		// TODO Auto-generated method stub
		return mapper.clothListshoes();
	}

	@Override
	public List<ClothesVO> searchList(String searchword) {
		
		return mapper.searchList(searchword);
	}



}
