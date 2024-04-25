package com.yedam.board;

import java.util.List;

public interface TodayCoodiService {
	public List<ClothesVO> randomTop();
	public List<ClothesVO> randomBottom();
	public List<ClothesVO> randomShoes();
	public List<ClothesVO> randomAll(String clo);
}
