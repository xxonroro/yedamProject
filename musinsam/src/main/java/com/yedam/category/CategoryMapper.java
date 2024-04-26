package com.yedam.category;

import java.util.List;




public interface CategoryMapper {
	
	public List<ClothesVO> clothList();
	public List<ClothesVO> clothListpants();
	
	public List<ClothesVO> searchList(String searchword);
	public List<ClothesVO> categoryList(String cate);
	
	public int categoryCount(String cate);
	
	public int selectCount(SearchVO search);
	
	public List<ClothesVO> randomMain();
	

}
