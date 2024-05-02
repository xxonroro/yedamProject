package com.yedam.admin;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.yedam.common.Control;

public class InsProTable implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String savePath = request.getServletContext().getRealPath("img/cloth");
		int maxSize = 1024 * 1024 * 5;
		MultipartRequest multi = new MultipartRequest(request, savePath, maxSize, "utf-8", new DefaultFileRenamePolicy()  );
		
		String cName = multi.getParameter("prodName"); 
		int price = Integer.parseInt(multi.getParameter("prodPrice"));
		String cate = multi.getParameter("smallCate");
		String brand = multi.getParameter("prodBrand");
		
		ClothesVO cvo = new ClothesVO();
		AdminService svc = new AdminServiceImpl();
		
		cvo.setClothName(cName);
		cvo.setPrice(price);
		cvo.setSmallCategory(cate);
		cvo.setBrand(brand);
		
		String encodeName = URLEncoder.encode(cName, "UTF-8");
		
		if(svc.insertProd(cvo)) {
			int cno = svc.checkNo(cName);
			response.sendRedirect("setProd.do?clothNo=" + cno + "&clothName=" + encodeName);
		}else {
			request.setAttribute("msg", "등록중 에러가 발생.");
		}
				
	}

}
