package com.yedam.product;

import java.util.List;

import com.yedam.vo.ReviewVO;

public interface ReviewMapper {

	public int insertReview(ReviewVO vo);

	public List<ReviewVO> reviewList(int clothNo);
	public double selectGrade(int cNo);
}
