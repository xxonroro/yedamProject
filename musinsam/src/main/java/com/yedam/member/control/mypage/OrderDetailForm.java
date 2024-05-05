package com.yedam.member.control.mypage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.member.OrderDetailVO;
import com.yedam.member.OrderQuery;
import com.yedam.member.service.MemberService;
import com.yedam.member.service.MemberServiceImpl;

public class OrderDetailForm implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String orderNo = request.getParameter("orderNo");
		
		OrderQuery orderQuery = new OrderQuery();
		orderQuery.setOrderNo(Integer.parseInt(orderNo));
		
		MemberService service = new MemberServiceImpl();
		OrderDetailVO vo = service.selectDetailOrder(orderQuery);
		
		request.setAttribute("ovo", vo);

		request.getRequestDispatcher("member/orderDetailForm.tiles").forward(request, response);

	}

}
