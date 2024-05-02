package com.yedam.admin;

import lombok.Data;

@Data
public class PageDTO {
	
	private int page; //현재 페이지
	private int startPage, endPage;   // 1 [3] 10
	private boolean prev, next; // 이전페이지, 이후페이지
	private int realEnd;
	
	public PageDTO(int page, int totalCnt) {
		this.page = page;
		realEnd = (int) Math.ceil(totalCnt / 10.0);
		
		if (page <3) {
			this.endPage = 5;
		}else {
			this.endPage = page + 2;
		}
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		this.startPage = this.endPage - 4;
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
		
	}
	
	
	
	
}
