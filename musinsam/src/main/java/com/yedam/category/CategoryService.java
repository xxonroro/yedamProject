package com.yedam.category;

import java.util.List;



public interface CategoryService {
	
	public List<ClothesVO> clothesList();
	public List<ClothesVO> clothesListPants();

	
	public List<ClothesVO> searchList(String searchword);
	public List<ClothesVO> cateList(String cate);
	
	public int categoryCount(String cate);
	
	public int getCount(SearchVO search); //전체 건수 가져오기
	
	public List<ClothesVO> randomCloth();
	public List<ClothesVO> randomCloth8();
	
	public List<ClothesVO> clothesListSort(String cate);


}
