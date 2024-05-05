package com.yedam.product;

import java.util.List;
import java.util.Map;

import com.yedam.vo.ReviewVO;

public interface ReviewMapper {

	public int insertReview(ReviewVO vo);

	public List<ReviewVO> reviewList(int clothNo);

	public Map<String,Double> getGrade (int clothNo);
	

}
