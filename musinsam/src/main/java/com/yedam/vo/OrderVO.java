package com.yedam.vo;

import java.util.Date;

import lombok.Data;

@Data
public class OrderVO {
	private int orderNo;  // sequence
	private int clothNo;  // 옷번호
	private String userId; //user id
	private int orderCnt; //주문 개수
	private Date ordDate; //주문날짜
	private int ordPirce; //주문금액
	private String deliveryState; //배송상태
	private String address; //주문주소
	private String recipient; //받는이 이름
	private String phone; //받는이 전화번호
	private String csize; //구입한 옷사이즈

}
