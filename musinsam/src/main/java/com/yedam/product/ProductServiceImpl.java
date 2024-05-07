package com.yedam.product;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.vo.ReviewVO;

public class ProductServiceImpl implements ProductService {
	
	SqlSession session = DataSource.getInstance().openSession(true);
	
	ProductMapper mapper = session.getMapper(ProductMapper.class);

	@Override
	public ClothesVO getProduct(int clothNo) {
		return mapper.getCloth(clothNo);
	}





}
