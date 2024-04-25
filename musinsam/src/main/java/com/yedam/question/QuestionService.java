package com.yedam.question;

import java.util.List;

public interface QuestionService {
	List<QuestionVO> selectQa();
	List<QuestionVO> searchQa(String content);
}
