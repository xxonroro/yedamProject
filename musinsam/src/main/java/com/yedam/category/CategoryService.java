package com.yedam.category;

import java.util.List;



public interface CategoryService {
	
	List<ClothesVO> clothesList();
	List<ClothesVO> clothesListPants();

	
	List<ClothesVO> searchList(String searchword);
	List<ClothesVO> cateList(String cate);
	
	int categoryCount(String cate);
	
	int getCount(SearchVO search); //전체 건수 가져오기
	
	public List<ClothesVO> randomCloth();

}
