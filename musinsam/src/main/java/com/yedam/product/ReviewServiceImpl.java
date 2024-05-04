package com.yedam.product;

import java.util.List;
import java.util.Map;

import com.yedam.common.DataSource;
import com.yedam.vo.ReviewVO;

public class ReviewServiceImpl implements ReviewService {
	
	ReviewMapper mapper = DataSource.getInstance().openSession(true).getMapper(ReviewMapper.class);

	@Override
	public boolean insertReview(ReviewVO vo) {
		return mapper.insertReview (vo) == 1 ;
	}

	@Override
	public List<ReviewVO> reviewList(int clothNo) {
		return mapper.reviewList(clothNo);
	}

	@Override
	public Map<String,Double> getGrade(int clothNo) {
		return mapper.getGrade(clothNo);
	}

	
}
