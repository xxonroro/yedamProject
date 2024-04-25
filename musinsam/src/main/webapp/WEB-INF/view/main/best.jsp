<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js"></script>
<script src ="//cdn.datatables.net/2.0.3/js/dataTables.min.js"></script>

	
	    <!-- ================ Best Selling item  carousel ================= --> 
    <section class="section-margin calc-60px">
      <div class="container">
      
        <div class="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Best <span class="section-intro__style">Sellers</span></h2>
        </div>
        
        <div class="owl-carousel owl-theme" id="bestSellerCarousel">
        
          <div class="card text-center card-product" data-id="1">
            <div class="card-product__img">
              <img class="img-fluid" src="img/product/product1.png" alt="">
              <ul class="card-product__imgOverlay" id="ul1">
                <li><button><i class="ti-search"><a></a></i></button></li>
                <li><button><i class="ti-shopping-cart"></i></button></li>
                <li><button><i class="ti-heart"></i></button></li>
              </ul>
            </div>
            <div class="card-body" id="content">
              <p>123456789</p>
              <h4 class="card-product__title"><a href="getProduct.do?clothNo=1">Watch</a></h4>
              <p class="card-product__price">$150.00</p>
            </div>
          </div>
          <div class="card text-center card-product" data-id="0">
            <div class="card-product__img">
              <img class="img-fluid" src="img/product/product1.png" alt="">
              <ul class="card-product__imgOverlay" id="ul1">
                <li><button><i class="ti-search"><a></a></i></button></li>
                <li><button><i class="ti-shopping-cart"></i></button></li>
                <li><button><i class="ti-heart"></i></button></li>
              </ul>
            </div>
            <div class="card-body" id="content">
              <p>12345ㅁㄴㅇㄹ6789</p>
              <h4 class="card-product__title"><a href="getProduct.do?clothNo=1">ㅂㅈㄷㄱㅂㅈㄷㄱ</a></h4>
              <p class="card-product__price">123</p>
            </div>
          </div>


        </div>
      </div>
    </section>
    <!-- ================ Best Selling item  carousel end ================= --> 
<script src="js/mainpage.js"></script>
    