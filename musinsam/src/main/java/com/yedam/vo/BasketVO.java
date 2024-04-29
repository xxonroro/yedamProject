package com.yedam.vo;

import lombok.Data;

@Data
public class BasketVO {
	private int basketNo; // sequence
	private String userId; //userId
	private int clothNo; // 옷번호 
	private int basketCnt; /// 상품개수
}
