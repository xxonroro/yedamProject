package com.yedam.admin;

import java.util.List;

public interface AdminService {
	public boolean mergeProd(StockVO vo);
	public List<StockVO> selectStock(int clothNo);
	public double selSale(int clothNo);
	public ClothesVO selProd(int clothNo);
	public boolean uptSale(ClothesVO cvo);
	public List<String> selCate(String cate);
	public boolean insertProd(ClothesVO cvo);
	public int checkNo(String clothName);
	public List<ClothesVO> prodList(int page);
	public int listCount();
}
