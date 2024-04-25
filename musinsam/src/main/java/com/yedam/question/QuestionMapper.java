package com.yedam.question;

import java.util.List;

public interface QuestionMapper {
	public List<QuestionVO> selectQa();
	public List<QuestionVO> searchQa(String content);
}
