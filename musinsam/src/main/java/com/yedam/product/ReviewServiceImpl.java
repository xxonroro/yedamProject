package com.yedam.product;

import com.yedam.common.DataSource;
import com.yedam.vo.ReviewVO;

public class ReviewServiceImpl implements ReviewService {
	
	ReviewMapper mapper = DataSource.getInstance().openSession(true).getMapper(ReviewMapper.class);

	@Override
	public boolean insertReview(ReviewVO vo) {
		return mapper.insertReview (vo) == 1 ;
	}

}
