package com.yedam.product;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;

public class ProductServiceImpl implements ProductService {
	
	SqlSession session = DataSource.getInstance().openSession(true);
	
	ProductMapper mapper = session.getMapper(ProductMapper.class);

	@Override
	public ClothesVO getProduct(int cno) {
		return mapper.getCloth(cno);
	}

}
