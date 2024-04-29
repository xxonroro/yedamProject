<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js"></script>
<script src ="//cdn.datatables.net/2.0.3/js/dataTables.min.js"></script>
   
   <!--================ Hero Carousel start =================-->
   <section class="section-margin mt-0" id="sectionMain1">
    
     <div class="owl-carousel owl-theme hero-carousel"  >
       
      <div class="hero-carousel__slide" id="divimg1" >
         <img src="img/home/hero-slide1.png" alt="사진없음"  height="500px">
         <a href="#" class="hero-carousel__slideOverlay">
           <h3>Wireless Headphone</h3>
           <p>afdsdf Item</p>
         </a>    
       </div>
       
       <div class="hero-carousel__slide" id="divimg2">
         <img src="img/home/hero-slide2.png" alt="사진없음"   height="500px">
         <a href="#" class="hero-carousel__slideOverlay">
           <h3>Wireless Headphone</h3>
           <p>Accessories Iqrwerqwtem</p>
         </a>
       </div>
       <!---->
       <div class="hero-carousel__slide" id="divimg3">
         <img src="img/home/hero-slide3.png" alt="사진없음"   height="500px">
         <a href="#" class="hero-carousel__slideOverlay">
           <h3>Wireless Headphone</h3>
           <p>Accesadfafsdsories Item</p>
         </a>
       </div>

       <div class="hero-carousel__slide" id="divimg4" >
        <img src="img/home/hero-slide3.png" alt="사진없음"   height="500px">
        <a href="#" class="hero-carousel__slideOverlay">
          <h3>Wireless Headphone</h3>
          <p>Accesadfafsdsories Item</p>
        </a>
      </div>


      
     </div>
   </section> 
   <!--================ Hero Carousel end =================-->

   <!-- ================ trending product section start ================= -->  
    <section class="section-margin calc-60px">
      <div class="container">
      
        <div class="section-intro pb-60px" >
          <p>Popular Item in the market</p>
          <h2>Trending <span class="section-intro__style">Product</span></h2>
        </div>
        
        <div class="row" id="divbody" >
          <div class="col-md-6 col-lg-4 col-xl-3" id="prod">
     
            <div class="card text-center card-product" >
            
              <div class="card-product__img" style="display:inline-block">
                <img class="card-img" src="img/product/product1.png" alt="">
                <ul class="card-product__imgOverlay">
                  <li><a><button><i class="ti-search"></i></button></a></li>
                  <li><button><i class="ti-shopping-cart"></i></button></li>
                  <li><button><i class="ti-heart"></i></button></li>
                </ul>
              </div>
              <div class="card-body">
                <p>Accessories</p>
                <h4 class="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
                <p class="card-product__price">$150.00</p>
              </div>
              
            </div>
          </div>
          
         
         
          
        </div>
      </div>
    </section>
    <!-- ================ trending product section end ================= -->    


	    <!-- ================ Best Selling item  carousel ================= --> 
    <section class="section-margin calc-60px" >
      <div class="container" id="contain">
      
        <div class="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Best <span class="section-intro__style">Sellers</span></h2>
        </div>
        <!-- -->
        
        <div  class="owl-carousel owl-theme" id="bestSellerCarousel" >

          <div class="card text-center card-product" id="this" >
            <div class="card-product__img" id="imgsection">
              <img  src="img/product/product1.png" alt="사진없음" height="200px">
              <ul class="card-product__imgOverlay" id="ul1">
                <li><button><i class="ti-search"><a></a></i></button></li>
                <li><button><i class="ti-shopping-cart"></i></button></li>
                <li><button><i class="ti-heart"></i></button></li>
              </ul>
            </div>
            <div class="card-body" id="content">
              <p>이건가</p>
              <h4 class="card-product__title"><a href="getProduct.do?clothNo=1">Watch</a></h4>
              <p class="card-product__price">$150.00</p>
            </div>
     
        </div>
          
          <!--          <div class="card text-center card-product" data-id="1">
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
          -->


        </div>
      </div>
    </section>
    <!-- ================ Best Selling item  carousel end ================= --> 

