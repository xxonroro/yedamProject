package com.yedam.member;

import java.util.Date;

import lombok.Data;

@Data
public class OrderClothVO {
	// 회원 ID, 주문 번호, 주문 날짜, 옷 번호, 옷 이름, 옷 가격 
	private String userId; 
	private int orderNo;
	private String orderDate; 
	private int clothNo;
	private String clothName;
	private int orderPrice;
}
