package com.yedam.member;

import lombok.Data;

@Data
public class OrderQuery {
	// 회원 ID, 주문 번호
	private String userId;
	private int orderNo;
}
