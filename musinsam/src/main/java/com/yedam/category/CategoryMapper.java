package com.yedam.category;

import java.util.List;

import org.apache.ibatis.annotations.Param;




public interface CategoryMapper {
	
	public List<ClothesVO> clothList();
	public List<ClothesVO> clothListpants();
	
	public List<ClothesVO> searchList(@Param("searchword")String searchword, @Param("orderby")String orderby);
	public List<ClothesVO> categoryList(String cate);
	
	public int categoryCount(String cate);
	
	public int selectCount(SearchVO search);
	
	public List<ClothesVO> randomMain();
	public List<ClothesVO> randomMain8();
	public List<ClothesVO> bestSeller7();
	
	
	public List<ClothesVO> clothListsort(String cate);
	public List<ClothesVO> clothListsort2(@Param("bigCategory")String bigCategory, @Param("orderby")String orderby, @Param("searchword")String searchword);

	

}
