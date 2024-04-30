	<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
  
	
	<section class="order_details section-margin--small">
		<div class="container">
			<div class="order_details_table">
				<div class="col-lg-6 offset-lg-2">
					<div class="s_product_text">
						<table class="table">
							<caption style ="caption-side:top"><h3>제품 등록</h3></caption>
							<tr>
								<th>이미지 등록</th> 
								<td><input class="form-control" type = "file" name = "insertImg"></td>
							</tr>
							<tr>
								<th>상품 이름</th>
								<td><input class="form-control" type = "text" name = "prodName" ></td>
							</tr>
							<tr>
								<th>상품 가격</th>
								<td><input class="form-control" type = "text" name = "prodPrice" ></td>
							</tr>
							<tr>
								<th>카테고리</th>
								<td>
									<select id ="bigCate" required="required" name = "bigCate">
										<option value="none" selected disabled hidden>대분류</option>
										<option value = "상의" >상의</option>
										<option value = "바지">하의</option>
										<option value = "아우터">아우터</option>
										<option value = "신발">신발</option>
									</select>
									<select id ="smallCate">
										<option value="" selected disabled hidden>중분류</option>
										<option value = "none" id = "warnCate" disabled>대분류를 선택해주세요</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>브랜드</th>
								<td><input class="form-control" type = "text" name = "prodBrand" class="테스트"></td>
							</tr>
							
						</table>
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