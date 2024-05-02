package com.yedam.order.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.order.service.Service;
import com.yedam.order.service.ServiceImpl;
import com.yedam.vo.StockVO;

public class DownStock implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8");

		String cno = request.getParameter("cno");
		String pty = request.getParameter("pty");
		String csz = request.getParameter("csz");
		Service svc = new ServiceImpl();
		StockVO svo = new StockVO();

		boolean ret = false;

		String[] num = cno.split(",");
		String[] ptity = pty.split(",");
		String[] csize = csz.split(",");

		for (int i = 0; i < num.length; i++) {
			int cno_ = Integer.parseInt(num[i]);
			int pty_ = Integer.parseInt(ptity[i]);
			String csz_ = csize[i];

			svo.setClothNo(cno_);
			svo.setQuantity(pty_);
			svo.setCsize(csz_);

			if (svc.downStock(svo)) {
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
