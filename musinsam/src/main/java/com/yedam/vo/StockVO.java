package com.yedam.vo;

import lombok.Data;

@Data
public class StockVO {
	private int clothNo; //옷번호
	private int quantity; //옷 재고 양
	private int addQt; //재고 추가
	private String csize; //옷사이즈

}
