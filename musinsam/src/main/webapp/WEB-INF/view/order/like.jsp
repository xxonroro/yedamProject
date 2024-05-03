<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

  <link rel="stylesheet" href="css/order/like.css">
    <!-- ================ start banner area ================= -->	
	<section class="blog-banner-area" id="category">
		<div class="container h-100">
			<div class="blog-banner">
				<div class="text-center">
					<h1>찜목록</h1>
					<nav aria-label="breadcrumb" class="banner-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/musinsam/like.do">찜목록</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="/musinsam/cart.do">장바구니</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="/musinsam/orderInqueryForm.do">주문/배송조회</a></li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	<!-- ================ end banner area ================= -->
	
<section class="section-margin--small mb-5">
    <div class="container">
      <div class="row">
        
        <div class="col">
          <!-- Start Filter Bar -->
          <div class="filter-bar d-flex flex-wrap align-items-center">
            <div class="sorting" >
              <span class="like_chkAll" ><input type="checkbox" onclick="javascript:wish.changeChkAll();"><b>전체 선택</b></span>
			  <a class="button button-header" href="javascript:void(0)" onclick="javascript:wish.delCart();"><b>선택 삭제</b></a>
            </div>
            <div>
            	<div class="sorting" onchange="javascript:wish.changeMaxPg();">
              	<select>
                	<option value="8">8개씩 보기</option>
                	<option value="12">12개씩 보기</option>
                	<option value="16">16개씩 보기</option>
              	</select>
            	</div>
            </div>
           
            <div >
              <div class="sorting mr-auto" search-id="C">
              	<select>
                <option value="1">전체</option>
                <option value="1">상의</option>
                <option value="1">하의</option>
                <option value="1">아우터</option>
                <option value="1">신발</option>
              	</select>
              </div>
            </div>
            
            
            
          </div>
          <!-- End Filter Bar -->
          <!-- Start Best Seller -->
          <section class="lattest-product-area pb-40 category-list">
          <div id="like_list">
            <div class="row">
              <div class="col-md-6 col-lg-3" style="display:none">
                <div class="card text-center card-product">
                  <div class="card-product__img">
                    <input type="checkbox" class="like_chk" onclick="javascript:wish.changeChk();">
                    <img class="card-img" src="img/product/product1.png" alt="" width="255" height="255">
                    <ul class="card-product__imgOverlay">
                      <li><button><i class="ti-search"></i></button></li>
                      <li><button><i class="ti-shopping-cart"></i></button></li>
                      <li><button><i class="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Accessories</p>
                    <h4 class="card-product__title"><a href="javascript:void(0)">Quartz Belt Watch</a></h4>
                    <p class="card-product__price">$150.00</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          <!-- End Best Seller -->
          <nav class="blog-pagination justify-content-center d-flex">
				<ul class="pagination">
					<li class="page-item" style="display:none"><a href="javascript:void(0)" class="page-link"
						aria-label="Previous"> <span aria-hidden="true"> <span
								class="lnr lnr-chevron-left"></span>
						</span>
					</a></li>
					<li class="page-item active" style="display:none"><a href="javascript:void(0)" class="page-link" aria-label="Num">1</a></li>
					<li class="page-item" style="display:none"><a href="javascript:void(0)" class="page-link"
						aria-label="Next"> <span aria-hidden="true"> <span
								class="lnr lnr-chevron-right"></span>
						</span>
					</a></li>
				</ul>
				</nav>
			</div>
      </div>
      
    </div>
  </section>
  
  
  
  <script>
   let userId = "${sessionScope.userId}"
  </script>
<script type="text/javascript" src="js/order/likeService.js"></script>
<script type="text/javascript" src="js/order/cartService.js"></script>
<script type="text/javascript" src="js/order/like.js"></script>
	<!-- ================ category section end ================= -->		  
