package com.yedam.product;

import lombok.Data;

@Data
public class ClothesVO {
	private int clothNo;
	private String smallCategory;
	private String clothName;
	private int price;
	private String brand;
	private double discountRate;
	private String csize;
	private int cnt;
	
}
