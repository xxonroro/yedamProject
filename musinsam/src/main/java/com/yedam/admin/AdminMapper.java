package com.yedam.admin;

import java.util.List;

public interface AdminMapper {
	public int mergeProd(StockVO vo);
	public List<StockVO> selectStock(int clothNo);
	public double selSale(int clothNo);
	public ClothesVO selProd(int clothNo);
	public int uptSale(ClothesVO cvo);
	public List<String> selCate(String cate);
}
