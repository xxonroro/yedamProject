package com.yedam.member;

import lombok.Data;

@Data
public class PageDTO {
	// 현재 페이지, 시작 페이지, 끝 페이지, 총 페이지 수, 한 페이지에 표시할 항목의 수, 표시할 페이지 수
	private int currentPage;
	private int startPage;
	private int endPage;
	private int realEndPage;
	private int pageItemCount;
	private int visiblePageCount = 5;
	private boolean prevision;
	private boolean next;

	public PageDTO(int currentPage, int totalItemCount, int pageItemCount) {
		this.currentPage = currentPage;

		if (totalItemCount == pageItemCount) {
			this.realEndPage = 1;
		} else {
			this.realEndPage = (int) Math.ceil((double) totalItemCount / pageItemCount);
		}

		this.endPage = (int) Math.ceil((double) currentPage / pageItemCount) * pageItemCount;
		this.endPage = this.endPage <= this.realEndPage ? this.endPage : this.realEndPage;
		this.startPage = this.endPage - (pageItemCount - 1);
		this.prevision = this.startPage > 1;
		this.next = this.endPage < this.realEndPage;
	}

}
