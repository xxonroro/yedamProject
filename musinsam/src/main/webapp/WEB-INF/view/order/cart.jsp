<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <script type="text/javascript" src="js/order/cartService.js"></script>
  <script type="text/javascript" src="js/order/cart.js"></script>
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
                              <th scope="col" width="65"><input type="checkbox" onclick="javascript:basket.changeChkAll();">&nbsp;</th>
                              <th scope="col"><b>상품명</b></th>
                              <th scope="col" ><b>판매가</b></th>
                              <th scope="col" width="112"><b>사이즈</b></th>
                              <th scope="col" width="148"><b>수량</b></th>
                              <th scope="col" ><b>주문금액</b></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                          	  <td align="center"><input type="checkbox" onchange="javascript:basket.changeChk();">&nbsp;</td>
                              <td>
                                  <div class="media">
                                      <div class="d-flex">
                                          <img src="img/cart/cart1.png" alt="" width="150" height="100">
                                      </div>
                                      <div class="media-body">
                                          <p>Minimalistic shop for multipurpose use</p>
                                          <a href="#" target="_blank">상세 보기</a>
                                      </div>
                                  </div>
                              </td>
                              <td align="center">
                                  <h5>$360.00</h5>
                              </td>
                              <td>
								  <div class="csize">
                                  	<select class="shipping_select">
                                          <option value="S">S</option>
                                          <option value="M">M</option>
                                          <option value="L">L</option>
                                      </select>
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
                                  <h4>0원</h4>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  
                      <div align="center" class="orderBtn">
                          <a class="button" href="#"><font size="4"><b>상품 주문하기</b></font></a>
                      </div>
              </div>
          </div>
      </div>
  </section>
  <!--================End Cart Area =================-->