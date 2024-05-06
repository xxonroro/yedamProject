package com.yedam.category;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;


public class CategoryServiceImpl implements CategoryService {

	SqlSession session = DataSource.getInstance().openSession(true);
	CategoryMapper mapper = session.getMapper(CategoryMapper.class);
	


	@Override
	public int getCount(SearchVO search) {
		
		return mapper.selectCount(search);
	}



	@Override
	public List<ClothesVO> searchList(String searchword, String orderby, int page, int prod) {
		
		return mapper.searchList(searchword, orderby, page, prod);
	}

	@Override
	public int categoryCount(String cate) {
		
		return mapper.categoryCount(cate);
	}

	@Override
	public List<ClothesVO> randomCloth() {
		
		return mapper.randomMain();
	}

	@Override
	public List<ClothesVO> clothesListSort(String cate) {

		return mapper.clothListsort(cate);
	}


	@Override
	public List<ClothesVO> randomCloth8() {
		
		return mapper.randomMain8();
	}

	@Override
	public List<ClothesVO> bestSeller() {
		
		return mapper.bestSeller7();
	}

	@Override
	public List<ClothesVO> clothesListSort2(String bigCategory, String orderby, String searchword, int page, int prod) {
		
		return mapper.clothListsort2(bigCategory, orderby, searchword, page, prod);
	}

	@Override
	public int productCount() {
		
		return mapper.productCount();
	}

	@Override
	public int searchCount(String searchword) {
		
		return mapper.searchCount(searchword);
	}



	@Override
	public List<ClothesVO> brandsort(String brand, String orderby, String searchword, int page, int prod) {
		
		return mapper.brandsort(brand, orderby, searchword, page, prod);
	}



	@Override
	public int brandCount(String brand) {
		
		return mapper.brandCount(brand);
	}



}
