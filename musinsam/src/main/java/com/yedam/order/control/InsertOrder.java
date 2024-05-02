package com.yedam.order.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.order.service.Service;
import com.yedam.order.service.ServiceImpl;
import com.yedam.vo.OrderVO;

public class InsertOrder implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");
		
		String cnt = request.getParameter("cnt");
		String prc = request.getParameter("prc");
		String cno = request.getParameter("cno");
		
		
		String del = request.getParameter("del");
		String uid = request.getParameter("uid");
		String adr = request.getParameter("adr");
		String rec = request.getParameter("rec");
		String phn = request.getParameter("phn");
		
		Service svc = new ServiceImpl();
		OrderVO ovo = new OrderVO();
		
		String[] count = cnt.split(",");
		String[] price = prc.split(",");
		String[] cloNo = cno.split(",");
		
		boolean ret = false;
		
		ovo.setDeliveryState(del);
		ovo.setUserId(uid);
		ovo.setAddress(adr);
		ovo.setRecipient(rec);
		ovo.setPhone(phn);
		
		for (int i = 0; i < cloNo.length; i++) {
			int cno_ = Integer.parseInt(cloNo[i]);
			int prc_ = Integer.parseInt(price[i]);
			int cnt_ = Integer.parseInt(count[i]);

			ovo.setClothNo(cno_);
			ovo.setOrdPirce(prc_);
			ovo.setOrderCnt(cnt_);

			if (svc.insertOrder(ovo)) {
				ret = true;
			} else {
				ret = false;
			}

		}
		if (ret == true) {
			response.getWriter().print("{\"retCode\": \"Success\"}");
		} else {
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}
		

	}

}
