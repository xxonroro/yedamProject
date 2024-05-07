	<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
  
	
	<section class="order_details section-margin--small">
		<div class="container">
			<div class="order_details_table">
				<div class="col-lg-6 offset-lg-2">
					<div class="s_product_text">
						<form action ="insProd.do" id="insertForm" method = "post" enctype ="multipart/form-data">
						<table class="table insertProd">
						
							<h3>상품 등록</h3>
							<tr>
								<th>상품 이미지 등록</th> 
								<td><input class="form-control" type = "file" name = "insertImg" ></td>
							</tr>
							<tr>
								<th>상품 설명 등록</th> 
								<td><input class="form-control" type = "file" name = "insertDescImg" ></td>
							</tr>
							<tr>
								<th>상품 이름</th>
								<td><input class="form-control" type = "text" name = "prodName" required="required"></td>
							</tr>
							<tr>
								<th>상품 가격</th>
								<td><input class="form-control" type = "text" name = "prodPrice" required="required"></td>
							</tr>
							<tr>
								<th>카테고리</th>
								<td>
									<select id ="bigCate" required="required" name = "bigCate">
										<option value="" selected hidden>대분류</option>
										<option value = "상의" >상의</option>
										<option value = "바지">하의</option>
										<option value = "아우터">아우터</option>
										<option value = "신발">신발</option>
									</select>
									<select id ="smallCate" required="required" name = "smallCate">
										<option value="" selected hidden>중분류</option>
										<option value = "" disabled>대분류를 선택해주세요</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>브랜드</th>
								<td><input class="form-control" type = "text" name = "prodBrand" ></td>
							</tr>
						
						</table>
						</form>
							<div class="center-align">
							  	<button class="btn btn-round effectbtn-marquee">
						  			 <span data-text="등록" class="insBtn">등록</span>
								</button>
								<button class="btn btn-round effectbtn-marquee">
						  			 <span data-text="초기화" class="resetBtn">초기화</span>
								</button>
   							</div>		          
					</div>
				</div>
			</div>
		</div>
	</section>>
	
	<script src="js/admin.js"></script>