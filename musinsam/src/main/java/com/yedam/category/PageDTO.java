package com.yedam.category;

import lombok.Data;

@Data
public class PageDTO {
	private int page; //현재페이지
	private int startPage, endPage; // 11 [13]  20
	private boolean prev, next; // 이전, 이후 페이지
	
	public PageDTO(int page, int totalCnt) {
		this.page = page;
		int realEnd = (int) Math.ceil(totalCnt/5.0);
		this.endPage = (int) Math.ceil(page/10.0) * 10;
		this.startPage = this.endPage-9;
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}

}

