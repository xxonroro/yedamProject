package com.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.board.todayCoodiControl;
import com.yedam.category.CateList;
import com.yedam.category.Cateform;
import com.yedam.category.CategoryList;
import com.yedam.category.CategoryListPants;
import com.yedam.main.MainControl;
import com.yedam.member.MemberRegisterForm;
import com.yedam.member.MemberRegistration;
import com.yedam.order.control.Cart;
import com.yedam.order.control.CartList;
import com.yedam.order.control.CsizeList;
import com.yedam.order.control.Like;
import com.yedam.order.control.LikeList;
import com.yedam.order.control.RemoveCart;
import com.yedam.order.control.UpDownCount;
import com.yedam.product.GetProductControl;

public class FrontControl extends HttpServlet {
	Map<String, Control> map;

	public FrontControl() {
		map = new HashMap<>();
	}

	@Override
	public void init() throws ServletException {

		// 메인 페이지 (이거에요 지우지마세요. start 뭐시기 그거 지워주세요
		map.put("/main.do", new MainControl());


		// 회원 가입
		map.put("/memberRegisterForm.do", new MemberRegisterForm());
		map.put("/memberRegistration.do", new MemberRegistration());
		
		
		// 장바구니
		map.put("/cart.do",	new Cart());
		map.put("/cartList.do", new CartList());
		map.put("/updownCount.do", new UpDownCount());
		map.put("/removeCart.do", new RemoveCart());
		map.put("/csizeList.do", new CsizeList());

		map.put("/like.do", new Like());
		map.put("/likeList.do", new LikeList());
		

		//카테고리
		map.put("/catefrom.do", new Cateform());
		map.put("/category.do", new CategoryList());
		map.put("/categorypants.do", new CategoryListPants());
		map.put("/catelist.do", new CateList());
		
		map.put("/todayCoodi.do", new todayCoodiControl());

	
	}

	@Override
	protected void service(HttpServletRequest reqeust, HttpServletResponse response)
			throws ServletException, IOException {
		reqeust.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");

		String uri = reqeust.getRequestURI();
		String context = reqeust.getContextPath();
		String path = uri.substring(context.length());
		
		System.out.println();
		
		Control control = map.get(path);
		control.execute(reqeust, response);
	}
}
