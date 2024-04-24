package com.yedam.question;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;

public class QuestionServiceImpl implements QuestionService{

	SqlSession session = DataSource.getInstance().openSession(true);
	QuestionMapper mapper = session.getMapper(QuestionMapper.class);
	
	@Override
	public List<QuestionVO> selectQa() {
		return mapper.selectQa();
	}

}
