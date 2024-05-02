package com.yedam.category;

import lombok.Data;

@Data
public class PageDTO {
	private int page; //현재페이지
	private int startPage, endPage, realEnd; // 11 [13]  20 시작/끝/총페이지수
	private boolean prev, next; // 이전, 이후 페이지
	private int prod = 12; // 한페이지 몇개
	private int pgnum = 5; // 페이지를 몇개표시
	
	
	public PageDTO(int page, int totalCnt) {
		this.page = page;
		realEnd = (int) Math.ceil(totalCnt/(double)prod);
		this.endPage = (int) Math.ceil(page/(double)pgnum) * pgnum;
		this.startPage = this.endPage-(pgnum-1);
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}

}

