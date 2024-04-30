package com.yedam.member;

import java.util.Date;

import lombok.Data;

@Data
public class ClothOrderVO {
	private int orderNo;  // sequence
	private String userId; //user id
	private Date ordDate; //주문날짜
	private int ordPirce; //주문금액
	private String clothName;
}
