
package com.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.admin.SetProductControl;
import com.yedam.admin.UptProduct;
import com.yedam.board.TodayCoodiControl;
import com.yedam.board.TodayCoodiList;
import com.yedam.category.CateList;
import com.yedam.category.Cateform;
import com.yedam.category.CategoryList;
import com.yedam.category.CategoryListOuter;
import com.yedam.category.CategoryListPants;
import com.yedam.category.CategoryListShirts;
import com.yedam.category.CategoryListShoes;
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
import com.yedam.question.QuestionControl;
import com.yedam.question.QuestionList;
import com.yedam.question.QuestionSearch;

public class FrontControl extends HttpServlet {
	Map<String, Control> map;

	public FrontControl() {
		map = new HashMap<>();
	}

	@Override
	public void init() throws ServletException {
		map.put("/main.do", new MainControl());


		// 동한 (start)
		// 회원 가입
		map.put("/memberRegisterForm.do", new MemberRegisterForm());
		map.put("/memberRegistration.do", new MemberRegistration());

		

		//이영주
		map.put("/cart.do",	new Cart());
		map.put("/cartList.do", new CartList());
		map.put("/updownCount.do", new UpDownCount());
		map.put("/removeCart.do", new RemoveCart());
		map.put("/csizeList.do", new CsizeList());
		map.put("/catelist.do", new CateList());
    
		map.put("/like.do", new Like());
		map.put("/likeList.do", new LikeList());
		

		//한승민
	  map.put("/cateform.do", new Cateform());
		map.put("/category.do", new CategoryList());
		map.put("/categorypants.do", new CategoryListPants());
		map.put("/categoryshirts.do", new CategoryListShirts());
		map.put("/categoryouter.do", new CategoryListOuter());
		map.put("/categoryshoes.do", new CategoryListShoes());

		map.put("/catelist.do", new CateList());

    

		//송재현
		map.put("/todayCoodi.do", new TodayCoodiControl());
		map.put("/todayList.do", new TodayCoodiList());
		
		map.put("/faq.do", new QuestionControl());
		map.put("/faqList.do", new QuestionList());

		map.put("/faqSearch.do", new QuestionSearch());
		
		map.put("/setProd.do", new SetProductControl());
		map.put("/uptProd.do", new UptProduct());


		

		
		//상지현
			
		map.put("/getProduct.do", new GetProductControl());  
		
		
		
		
		
		
		//
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
