package com.yedam.category;

import java.util.List;

public interface CategoryService {
	
	List<ClothesVO> clothesList();
	List<ClothesVO> clothesListPants();
	List<ClothesVO> cateList(String cate);
	

}
