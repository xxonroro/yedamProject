<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <!--================ Start Header Menu Area =================-->

	<!--================ End Header Menu Area =================-->


  <!-- ================ start banner area ================= -->	
  <section class="blog-banner-area" id="blog">
    <div class="container h-100">
      <div class="blog-banner">
        <div class="text-center">
         	<img src ="img/옷마카세 배너.jpg" style = "width:800	px;height:410px">
        </div>
      </div>
    </div>
  </section>
  <!-- ================ end banner area ================= -->


  <!--================todayCoodi area =================-->
		<section class="lattest-product-area pb-40 category-list" id="tcoodi">
            <div class="toprow">
            <h3 style="margin:100px 0px;text-align:center">ha</h3>
              <div class="col-md-3 col-lg-2" id = "singleCoodi">
                <div class="card text-center card-product">
                  <div class="card-product__img" >
                    <img class="card-img" src="img/product/product1.png" alt="">
                    <ul class="card-product__imgOverlay" style ="width:200px">
                      <li><a target='_blank'><button><i class="ti-search" ></i></button></a></li>
                      <li><a target='_blank'><button><i class="ti-shopping-cart"></i></button></a></li>
                      <li><a target='_blank'><button><i class="ti-heart"></i></button></a></li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <p>Accessories</p>
                    <a href="#"><h6 class="card-product__title">Quartz Belt Watch</h6></a>	
                    <p class="card-product__price">$150.00<span></span></p>
                    <p class="card-product__price"></p>
                  </div>
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
  <script src="vendors/jquery/jquery-3.2.1.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="vendors/skrollr.min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="vendors/nice-select/jquery.nice-select.min.js"></script>
  <script src="vendors/jquery.ajaxchimp.min.js"></script>
  <script src="vendors/mail-script.js"></script>
  <script src="js/todayCoodi.js"></script>
</body>
</html>