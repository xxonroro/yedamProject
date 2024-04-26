<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="js/order/likeService.js"></script>
<script type="text/javascript" src="js/order/like.js"></script>
  <link rel="stylesheet" href="css/order/like.css">
    <!-- ================ start banner area ================= -->	
	<section class="blog-banner-area" id="category">
		<div class="container h-100">
			<div class="blog-banner">
				<div class="text-center">
					<h1>찜목록</h1>
					<nav aria-label="breadcrumb" class="banner-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
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
            <div class="sorting mr-auto" align="right">
              <select>
                <option value="8">8개씩 보기</option>
                <option value="12">12개씩 보기</option>
                <option value="16">16개씩 보기</option>
              </select>
            </div>
            
            <div>
            </div>
            <div>
              <div class="input-group filter-bar-search">
              	
                <select>
                <option value="1">Default sorting</option>
                <option value="1">Default sorting</option>
                <option value="1">Default sorting</option>
              	</select>
              </div>
            </div>
          </div>
          <!-- End Filter Bar -->
          <!-- Start Best Seller -->
          <section class="lattest-product-area pb-40 category-list">
          <div id="like_list">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <div class="card text-center card-product">
                  <div class="card-product__img">
                    <input type="checkbox" class="like_chk" onclick="javascript:wish.changeChk();">
                    <img class="card-img" src="img/product/product1.png" alt="" width="255" height="255">
                    <ul class="card-product__imgOverlay">
                      <li><button><i class="ti-search"></i></button></li>
                      <li><button ><i class="ti-shopping-cart"></i></button></li>
                      <li><button onclick=""><i class="ti-heart"></i></button></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Accessories</p>
                    <h4 class="card-product__title"><a href="#">Quartz Belt Watch</a></h4>
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
					<li class="page-item"><a href="#" class="page-link"
						aria-label="Previous"> <span aria-hidden="true"> <span
								class="lnr lnr-chevron-left"></span>
						</span>
					</a></li>
					<li class="page-item"><a href="#" class="page-link">01</a></li>
					<li class="page-item"><a href="#" class="page-link">02</a>
					</li>
					<li class="page-item"><a href="#" class="page-link">03</a></li>
					<li class="page-item"><a href="#" class="page-link">04</a></li>
					<li class="page-item"><a href="#" class="page-link">05</a></li>
					<li class="page-item"><a href="#" class="page-link"
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
	<!-- ================ category section end ================= -->		  
