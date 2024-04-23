<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <script type="text/javascript" src="js/cartService.js"></script>
  <script type="text/javascript" src="js/cart.js"></script>
    <!-- ================ start banner area ================= -->	
	<section class="blog-banner-area" id="category">
		<div class="container h-100">
			<div class="blog-banner">
				<div class="text-center">
					<h1>장바구니</h1>
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
  
  

  <!--================Cart Area =================-->
  <section class="cart_area">
      <div class="container">
          <div class="cart_inner">
              <div class="table-responsive">
                  <table class="table">
                      <thead>
                          <tr align="center">
                              <th scope="col"><input type="checkbox" onclick="javascript:basket.changeChkAll();">&nbsp;</th>
                              <th scope="col"><b>상품명</b></th>
                              <th scope="col"><b>판매가</b></th>
                              <th scope="col" width="100"><b>사이즈</b></th>
                              <th scope="col" width="148"><b>수량</b></th>
                              <th scope="col" width="150"><b>주문금액</b></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                          	  <td align="center"><input type="checkbox" onchange="javascript:basket.changeChk();">&nbsp;</td>
                              <td>
                                  <div class="media">
                                      <div class="d-flex">
                                          <img src="img/cart/null.png" alt="" width="150" height="100">
                                      </div>
                                      <div class="media-body">
                                          <p>Minimalistic shop for multipurpose use</p>
                                      </div>
                                  </div>
                              </td>
                              <td align="center">
                                  <h5>$360.00</h5>
                              </td>
                              <td align="center">
								  <div class="csize">
                                  	<h4>S</h4>
                                  	<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="javascript:void(0)" onclick=""><b>변경</b></a>
                                  		
                                  </div>
                              </td>
                              <td>
                                  <div class="product_count">
                                      <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                          class="input-text qty">
                                      <button onclick="javascript:basket.changePNum(0);"
                                          class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                      <button onclick="javascript:basket.changePNum(0);"
                                          class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                  </div>
                              </td>
                              <td align="center">
                                  <h5>$720.00</h5>
                              </td>
                          </tr>
                         
                          <tr class="bottom_button">
                          	  <td>

                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <div class="cupon_text d-flex align-items-center">
                                      <input type="text" placeholder="Coupon Code">
                                      <a class="primary-btn" href="#">Apply</a>
                                      <a class="button" href="#">Have a Coupon?</a>
                                  </div>
                              </td>
                          </tr>
                          <tr class="subtotal" >
                              <td>
                              </td>
                              <td>
                                  <a class="gray_btn" href="javascript:void(0)" onclick="javascript:basket.delCartAll();"><b>전체 삭제</b></a>
								  <a class="gray_btn" href="javascript:void(0)" onclick="javascript:basket.delCart();"><b>선택 삭제</b></a>
                              </td>
                              <td colspan="2" align="right">
								  <h4><b>총 결제 예상금액 :</b></h4>
                              </td>
                              <td colspan="2" align="right">
                                  <h4>$2160.00</h4>
                              </td>
                          </tr>
                          <tr class="shipping_area">
                              <td class="d-none d-md-block">

                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>

                              </td>
                              <td>
                                  <h5>Shipping</h5>
                              </td>
                              <td>
                                  <div class="shipping_box">
                                      <ul class="list">
                                          <li><a href="#">Flat Rate: $5.00</a></li>
                                          <li><a href="#">Free Shipping</a></li>
                                          <li><a href="#">Flat Rate: $10.00</a></li>
                                          <li class="active"><a href="#">Local Delivery: $2.00</a></li>
                                      </ul>
                                      <h6>Calculate Shipping <i class="fa fa-caret-down" aria-hidden="true"></i></h6>
                                      <select class="shipping_select">
                                          <option value="1">Bangladesh</option>
                                          <option value="2">India</option>
                                          <option value="4">Pakistan</option>
                                      </select>
                                      <select class="shipping_select">
                                          <option value="1">Select a State</option>
                                          <option value="2">Select a State</option>
                                          <option value="4">Select a State</option>
                                      </select>
                                      <input type="text" placeholder="Postcode/Zipcode">
                                      <a class="gray_btn" href="#">Update Details</a>
                                  </div>
                              </td>
                          </tr>
                          <tr class="out_button_area">
                              <td colspan="6" align="center">
                                  <div >
                                      <a class="button" href="#"><font size="4"><b>상품 주문하기</b></font></a>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </section>
  <!--================End Cart Area =================-->