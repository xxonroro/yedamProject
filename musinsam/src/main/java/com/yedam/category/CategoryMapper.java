package com.yedam.category;

import java.util.List;

import org.apache.ibatis.annotations.Param;




public interface CategoryMapper {
	
	public List<ClothesVO> clothList();
	public List<ClothesVO> clothListpants();
	
	public List<ClothesVO> searchList(@Param("searchword")String searchword, @Param("orderby")String orderby,  @Param("page")int page, @Param("prod")int prod);
	public int searchCount(String searchword); //검색 개수
	
	
	public int categoryCount(String cate); //카테고리개수
	public int productCount(); // 상품개수
	public int brandCount(String brand); // 브랜드별개수
	
	public int selectCount(SearchVO search);
	
	public List<ClothesVO> randomMain();
	public List<ClothesVO> randomMain8();
	public List<ClothesVO> bestSeller7();
	
	
	public List<ClothesVO> clothListsort(String cate);
	public List<ClothesVO> clothListsort2(@Param("bigCategory")String bigCategory, @Param("orderby")String orderby, 
									@Param("searchword")String searchword, @Param("page")int page,  @Param("prod")int prod);
	
	public List<ClothesVO> brandsort(@Param("brand")String brand, @Param("orderby")String orderby, 
			@Param("searchword")String searchword, @Param("page")int page,  @Param("prod")int prod);


}
