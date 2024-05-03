package com.yedam.category;

import java.util.List;



public interface CategoryService {
	


	
	public List<ClothesVO> searchList(String searchword, String orderby, int page, int prod);
	public int searchCount(String searchword);
	
	public int categoryCount(String cate);
	public int productCount();
	
	public int getCount(SearchVO search); //전체 건수 가져오기
	
	public List<ClothesVO> randomCloth();
	public List<ClothesVO> randomCloth8();
	public List<ClothesVO> bestSeller();
	
	
	public List<ClothesVO> clothesListSort(String cate);
	public List<ClothesVO> clothesListSort2(String bigCategory, String orderby, String searchword, int page, int prod);


}
