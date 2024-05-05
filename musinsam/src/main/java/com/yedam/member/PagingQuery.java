package com.yedam.member;

import lombok.Data;

@Data
public class PagingQuery {
	private int currentPage;
	private String userId;
}
