<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
  
	<!-- ================ start banner area ================= -->	
	<section class="blog-banner-area" id="category" style="height:100px">
		<div class="container h-100" >
			<div class="blog-banner">
				<div class="text-center">
					<h1>상품 관리 페이지</h1>
					<nav aria-label="breadcrumb" class="banner-breadcrumb">
            <ol class="breadcrumb">
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	<!-- ================ end banner area ================= -->
  
  <!--================Order Details Area =================-->
  <section class="order_details section-margin--small">
    <div class="container">
      <div class="order_details_table">
        <a href="getProduct.do?clothNo=${param.clothNo }"><h2> 《 ${param.clothName}</h2></a>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="adCol">사이즈</th>
                <th scope="col" class="adCol">수량 추가</th>
              </tr>
            </thead>
            <tbody class = "filter-bar-search">
              <tr>
                <td>
                  <p>S<span class="smallSize"></span></p>
                </td>
                <td>
                	<input type ="text" id="sQt" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'')" placeholder ="음수 값을 입력하면 수량이 감소합니다" >
                </td>
                
              </tr>
              <tr>
                <td>
                  <p>M<span class="mediumSize"></span></p>
                </td>
                <td>
                	<input type ="text" id="mQt" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'')" placeholder ="음수 값을 입력하면 수량이 감소합니다" >
                		<div class="right-align">
	                  	<button class="btn btn-round effectbtn-marquee">
						   <span data-text="등록" class="qtBtn">등록</span>
						</button>
						</div>
                </td>
                	
              </tr>
              <tr>
                <td>
                  <p>L<span class="largeSize"></span></p>
                </td>
                <td>
                	<input type ="text" id="lQt" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'')" placeholder ="음수 값을 입력하면 수량이 감소합니다" >
                </td>
              </tr>
              <tr>
              
              </tr>
             </tbody>
             <thead>
              <tr>
                <th scope="col" class="adCol">할인율 변경</th>
              </tr>
            </thead>
             <tbody class = "filter-bar-search">
              <tr>
               	<td>
                  <p>할인율 <span id="salePercent"></span> </p>
                </td>
                <td>
                	<input type ="text" id="uptSale" onKeyup="this.value=this.value.replace(/[^-0-9]/g,'')" placeholder ="0~100 값 넣으세요">
                	<div class="right-align">
	                  	<button class="btn btn-round effectbtn-marquee">
						   <span data-text="변경" class="saleBtn">변경</span>
						</button>
					</div>
                </td>
              </tr>
              </tbody>
          </table>
          
          
        </div>
      </div>
    </div>
  </section>
  <!--================End Order Details Area =================-->



 



  <script src="vendors/jquery/jquery-3.2.1.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="vendors/skrollr.min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="vendors/nice-select/jquery.nice-select.min.js"></script>
  <script src="vendors/jquery.ajaxchimp.min.js"></script>
  <script src="vendors/mail-script.js"></script>
  <script src="js/admin.js"></script>
</body>
</html>