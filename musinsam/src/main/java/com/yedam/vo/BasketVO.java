package com.yedam.vo;

import lombok.Data;

@Data
public class BasketVO {
	private int basketNo; // sequence
	private String basketUid; //userId
	private String bclothNo; // 옷번호 
	private int basketCnt; /// 상품개수
}
