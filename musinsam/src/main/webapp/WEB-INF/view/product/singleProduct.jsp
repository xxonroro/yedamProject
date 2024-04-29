<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>   
<link rel="stylesheet" href="css/product/review.css"> 
  <!--================Single Product Area =================-->
	<div class="product_image_area">
		<div class="container">
			<div class="row s_product_inner">
				<div class="col-lg-6">
					<div class="owl-carousel owl-theme s_Product_carousel">
						<div class="single-prd-item">
							<img class="img-product" src="img/cloth/${pinfo.clothName}.jpg" alt="">  <!-- 상품 이미지 -->
							<!--img/cloth/s-p1.jpg  -->
						</div>
					</div>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
						<h3>${pinfo.clothName}</h3>   
						<h2>${pinfo.price}</h2>
						<ul class="list">
							<li><a class="active" href="#"><span>카테고리</span>${pinfo.smallCategory}</a></li>
							<li><a href="#"><span>브랜드</span>${pinfo.brand}</a></li>
							<li><a href="#" style="display:none" ><span style="display:none">의류번호</span>${pinfo.clothNo}</a></li>
							<li><a href="#"><span>사이즈</span>${pinfo.csize}</a></li>  <!-- 선택 기능으로 구현 -->
							
						</ul>
						<!--<p>상품 설명</p> : 이미지로 대체-->
						<div class="product_count">
							<div>
							    
							   <c:choose>
								   <c:when test="${sessionScope.authority == 1 }">
								  	 <a class="button cart-btn" href="http://localhost:8080/musinsam/setProd.do?clothNo=${pinfo.clothNo}&clothName=${pinfo.clothName}" >상품 관리</a></li>   
								   </c:when>
								   <c:otherwise>
								   	<a class="button price-ptn" href="#">구매하기</a></li>
							  		<a class="button cart-btn" href="#">장바구니 담기 </a></li>
								   </c:otherwise>
							   </c:choose>
   							</div>		          
						</div>
						<div class="card_area d-flex align-items-center">
							<a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a> 
							<a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--================End Single Product Area =================-->

	<!--================Product Description Area =================-->
	<section class="product_description_area">
		<div class="container">
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item">
					<a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">상세페이지</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
					 aria-selected="false">Reviews</a> 
				</li>
			</ul>
			<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
				<img src="img/cloth/${pinfo.clothName} info.jpg" alt="" width="700px">   
				</div>			
				
	<!--=================start review  =============================--> 
				<div class="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
					<div class="row">
						<div class="col-lg-6">
							<div class="row total_rate">
								<div class="col-6">
									<div class="box_total">
										<h5>별점 평균</h5>
										<h4>4.0</h4>  <!-- 평균 입력 -->
										<h6>(nn개의 리뷰)</h6>  <!-- 리뷰 개수 입력 -->
									</div>
								</div>
							</div>
							<div class="review_list">
								<div class="review_item">
									<div class="media">
										<div class="d-flex">
											<img src="img/product/review-1.png" alt="">
										</div>
										<div class="media-body">
											<h4>회원이름</h4>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</div>
									</div>
									<p>예시리뷰1</p>
								</div>
								<div class="review_item">
									<div class="media">
										<div class="d-flex">
											<img src="img/product/review-2.png" alt="">
										</div>
										<div class="media-body">
											<h4>회원이름</h4>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</div>
									</div>
									<p>예시리뷰2</p>
								</div>
								<div class="review_item">
									<div class="media">
										<div class="d-flex">
											<img src="img/product/review-3.png" alt="">
										</div>
										<div class="media-body">
											<h4>회원이름</h4>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</div>
									</div>
									<p>예시리뷰3</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="review_box">
								<h4>리뷰 등록</h4>
								<p>별점:</p>
								<ul class="list">  <!-- css에서 list에 속성값이 등록되어 있는 거 같음. 클래스명 list로 고정해두기  -->
									<li><i class="rating__star far fa-star"></i></li>
									<li><i class="rating__star far fa-star"></i></li>
									<li><i class="rating__star far fa-star"></i></li>
									<li><i class="rating__star far fa-star"></i></li>
									<li><i class="rating__star far fa-star"></i></li>
								</ul>
                <form action="#/" class="form-contact form-review mt-3">
                  <div class="form-group">
                    <input class="form-control" id="cNo"  type="hidden" placeholder="옷번호" value="${param.clothNo }" required>
                  </div>
                  <div class="form-group">
                    <input class="form-control"id="uid"  type="text" placeholder="아이디" value="user01" readonly >  <!--아이디는 로그인하면 고정으로 쓸 수 있도록-->
                  </div>
                  <div class="form-group">
                    <textarea class="form-control different-control w-100" name="detail" id="textarea" cols="30" rows="5" placeholder="리뷰내용"></textarea>
                  </div>
                  <div class="form-group text-center text-md-right mt-3">
                    <button type="button" class="button button--active button-review" id="addReview">리뷰 쓰기</button>
                  </div>
                </form>
							</div>
						</div>
					</div>
				</div>
		<!-- ================ end of review ================== -->
			</div>
		</div>
	</section>
	<!--================End Product Description Area =================-->
	

	
<script src="js/reviewService.js"></script>
