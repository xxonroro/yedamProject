package com.yedam.member;

import java.util.Date;

import lombok.Data;

@Data
public class OrderDetailVO {
	// 주문 옷 이름, 사이즈, 개수, 가격, 상태, 받는 사람, 받는 사람 주소, 보내는 사람, 보내는 사람 연락처
	private String clothName;
	private String csize;
	private int orderCnt;
	private int orderPrice;
	private String deliveryState;
	private String recipient;
	private String phone;
	private String address;
	private String name;
	private String userPhone;

}
