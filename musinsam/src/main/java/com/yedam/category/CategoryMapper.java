package com.yedam.category;

import java.util.List;

public interface CategoryMapper {
	
	public List<ClothesVO> clothList();
	public List<ClothesVO> clothListpants();
	public List<ClothesVO> categoryList(String cate);

}
