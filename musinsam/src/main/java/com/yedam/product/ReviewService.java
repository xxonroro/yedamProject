package com.yedam.product;

import java.util.List;

import com.yedam.vo.ReviewVO;

public interface ReviewService {
  boolean insertReview (ReviewVO vo);
  List<ReviewVO> reviewList(int clothNo);}
