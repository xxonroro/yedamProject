package com.yedam.product;

import java.util.List;
import java.util.Map;

import com.yedam.vo.ReviewVO;

public interface ReviewService {
  boolean insertReview (ReviewVO vo);
  List<ReviewVO> reviewList(int clothNo);
  Map<String,Double> getGrade(int clothNo);
  }
  
