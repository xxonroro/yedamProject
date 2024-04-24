package com.yedam.category;

import java.util.List;


public interface CategoryMapper {
	
	public List<ClothesVO> clothList();
	public List<ClothesVO> clothListpants();
	public List<ClothesVO> clothListshirts();
	public List<ClothesVO> clothListouter();
	public List<ClothesVO> clothListshoes();
	
	public List<ClothesVO> searchList(String searchword);
	
	public List<ClothesVO> categoryList(String cate);
	
	public int selectCount(SearchVO search);

}
