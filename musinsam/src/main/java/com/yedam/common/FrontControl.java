
package com.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.admin.InsProTable;
import com.yedam.admin.InsertProduct;
import com.yedam.admin.ProdList;
import com.yedam.admin.SelCate;
import com.yedam.admin.SelProduct;
import com.yedam.admin.SetProductControl;
import com.yedam.admin.UptProduct;
import com.yedam.admin.UptSale;
import com.yedam.admin.manageProd;
import com.yedam.admin.selSale;
import com.yedam.board.TodayCoodiControl;
import com.yedam.board.TodayCoodiList;
import com.yedam.category.BestSeller;
import com.yedam.category.BrandSort;
import com.yedam.category.CateCount;
import com.yedam.category.CateSort;
import com.yedam.category.CateSort2;
import com.yedam.category.Cateform;
import com.yedam.category.RandomMain;
import com.yedam.category.RandomMain8;
import com.yedam.category.SearchCate;
import com.yedam.category.UserinfoForm;
import com.yedam.main.MainControl;
import com.yedam.member.control.find.FindUserId;
import com.yedam.member.control.find.FindUserIdForm;
import com.yedam.member.control.find.FindUserPass;
import com.yedam.member.control.find.FindUserPassForm;
import com.yedam.member.control.find.ModifyUserPass;
import com.yedam.member.control.login.Login;
import com.yedam.member.control.login.LoginForm;
import com.yedam.member.control.login.Logout;
import com.yedam.member.control.mypage.ModifyMemberInfo;
import com.yedam.member.control.mypage.ModifyMemberInfoForm;
import com.yedam.member.control.mypage.OrderDetailForm;
import com.yedam.member.control.mypage.OrderInquery;
import com.yedam.member.control.mypage.OrderInqueryForm;
import com.yedam.member.control.register.IdCheck;
import com.yedam.member.control.register.MemberRegisterForm;
import com.yedam.member.control.register.MemberRegistration;
import com.yedam.member.control.register.PhoneCheck;
import com.yedam.order.control.Cart;
import com.yedam.order.control.CartList;
import com.yedam.order.control.CartProduct;
import com.yedam.order.control.CountLike;
import com.yedam.order.control.DownStock;
import com.yedam.order.control.InsertCartIcon;
import com.yedam.order.control.InsertLike;
import com.yedam.order.control.InsertOrder;
import com.yedam.order.control.Like;
import com.yedam.order.control.LikeList;
import com.yedam.order.control.LikeProduect;
import com.yedam.order.control.Pay;
import com.yedam.order.control.PayList;
import com.yedam.order.control.RemoveCart;
import com.yedam.order.control.RemoveCartIcon;
import com.yedam.order.control.RemoveLike;
import com.yedam.order.control.UpDownCount;
import com.yedam.order.control.UserInfo;
import com.yedam.product.AddReview;
import com.yedam.product.GetProductControl;
import com.yedam.product.ReviewList;
import com.yedam.product.GetGrade;
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

		// 회원 가입 (동한)
		map.put("/memberRegisterForm.do", new MemberRegisterForm());
		map.put("/memberRegistration.do", new MemberRegistration());
		map.put("/idCheck.do", new IdCheck());
		map.put("/phoneCheck.do", new PhoneCheck());
		// 로그인 (동한)
		map.put("/loginForm.do", new LoginForm());
		map.put("/login.do", new Login());
		// 로그아웃 (동한)
		map.put("/logout.do", new Logout());
		// 아이디 찾기(동한)
		map.put("/findUserIdForm.do", new FindUserIdForm());
		map.put("/findUserId.do", new FindUserId());
		// 비밀번호 찾기(동한)
		map.put("/findUserPassForm.do", new FindUserPassForm());
		map.put("/findUserPass.do", new FindUserPass());
		map.put("/modifyUserPass.do", new ModifyUserPass());
		// 마이페이지 (동한)
		// 회원 정보 수정
		map.put("/modifyMemberInfoForm.do", new ModifyMemberInfoForm());
		map.put("/modifyMemberInfo.do", new ModifyMemberInfo());
		// 주문 조회
		map.put("/orderInqueryForm.do", new OrderInqueryForm());
		map.put("/orderInquery.do", new OrderInquery());
		map.put("/orderDetailForm.do", new OrderDetailForm());
		
		
		
		
		
		
		


		// 이영주
		//장바구니
		map.put("/cart.do", new Cart());
		map.put("/cartList.do", new CartList());
		map.put("/updownCount.do", new UpDownCount());
		map.put("/removeCart.do", new RemoveCart());

		
		//찜목록
		map.put("/like.do", new Like());
		map.put("/likeList.do", new LikeList());
		map.put("/removeLike.do", new RemoveLike());
		map.put("/insertLike.do", new InsertLike());
		map.put("/insertCartIcon.do", new InsertCartIcon());
		map.put("/removeCartIcon.do", new RemoveCartIcon());
		map.put("/countLike.do", new CountLike());

		
		//결제페이지
		map.put("/pay.do", new Pay());
		map.put("/payList.do", new PayList());
		map.put("/userInfo.do", new UserInfo());
		map.put("/insertOrder.do", new InsertOrder());
		map.put("/downStock.do", new DownStock());
	
		
		//단건조회
		map.put("/cartProduct.do", new CartProduct());
		map.put("/likeProduct.do", new LikeProduect());
		
		
		
		
		
		

		//한승민
		map.put("/cateform.do", new Cateform()); //페이지 이동


		map.put("/searchcate.do", new SearchCate()); //검색   
		map.put("/cateCount.do", new CateCount()); //항목별 개수
		map.put("/cateSort.do", new CateSort()); //정렬		
		map.put("/cateSort2.do", new CateSort2()); //정렬	main	
		map.put("/brandSort.do", new BrandSort()); //정렬	brand
	
    		
		map.put("/randomMain.do", new RandomMain());
		map.put("/randomMain8.do", new RandomMain8());
		map.put("/bestproduct.do", new BestSeller());    
		map.put("/userinfoForm.do", new UserinfoForm());// 페이지이동
    
    
    
    
		
		
		
		
		
		
		
		

		
		
		
		//송재현
		map.put("/todayCoodi.do", new TodayCoodiControl());
		map.put("/todayList.do", new TodayCoodiList());
		map.put("/faq.do", new QuestionControl());
		map.put("/faqList.do", new QuestionList());
		map.put("/faqSearch.do", new QuestionSearch());
		map.put("/setProd.do", new SetProductControl());
		map.put("/uptProd.do", new UptProduct());
		map.put("/selProd.do", new SelProduct());
		map.put("/selSale.do", new selSale());
		map.put("/uptSale.do", new UptSale());
		map.put("/insertProd.do", new InsertProduct());
		map.put("/selCate.do", new SelCate());
		map.put("/insProd.do", new InsProTable());
		map.put("/manageProd.do", new manageProd());
		map.put("/prodList.do", new ProdList());



		
		
		
		
		
		
		
    
		//상지현
		map.put("/getProduct.do", new GetProductControl());  
		map.put("/addReview.do", new AddReview());	
		map.put("/reviewList.do", new ReviewList());  
		map.put("/setGrade.do", new GetGrade());

    
    
    
    


}

	@Override
	protected void service(HttpServletRequest reqeust, HttpServletResponse response) throws ServletException, IOException {
		reqeust.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");

		String uri = reqeust.getRequestURI();
		String context = reqeust.getContextPath();
		String path = uri.substring(context.length());

		Control control = map.get(path);
		control.execute(reqeust, response);
	}
}