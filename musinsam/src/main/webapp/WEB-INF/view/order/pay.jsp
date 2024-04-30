<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>

<!-- ================ start banner area ================= -->	
	<section class="blog-banner-area" id="category">
		<div class="container h-100">
			<div class="blog-banner">
				<div class="text-center">
					<h1>주문서 작성</h1>
					<nav aria-label="breadcrumb" class="banner-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Checkout</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>
	<!-- ================ end banner area ================= -->
    
    
<!--================Checkout Area =================-->
  <section class="checkout_area section-margin--small">
    <div class="container">
        <div class="returning_customer">
            
        </div>
        
        
              <div class="cart_inner">
              <div class="table-responsive">
                  <table class="table">
                      <thead>
                          <tr align="center">
                              <th scope="col" ><b>상품명</b></th>
                              <th scope="col" width="120"><b>판매가</b></th>
                              <th scope="col" width="112"><b>사이즈</b></th>
                              <th scope="col" width="80"><b>수량</b></th>
                              <th scope="col" width="180"><b>주문금액</b></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr style="display:none">
                              <td style="padding:15px">
                                  <div class="media">
                                      <div class="d-flex">
                                          <img src="img/cart/cart1.png" alt="" width="100" height="100">
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
								  <div class="csize" align="center">
                                  	<h4>S</h4>
                                  </div>
                              </td>
                              <td align="center">
                                  <div class="product_count" >
                                  	<h4>2</h4>
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
                          </tr>
                          
                      </tbody>
                  </table>
                  
              </div>
          </div>
        
        
        <div class="billing_details">
            <div class="row">
                <div class="col-lg-8">
                    <h3>Details</h3>
                    <form class="row contact_form" action="#" method="post" novalidate="novalidate">
						<div class="col-md-12 form-group" style="font-size:large">
							<b>주문자 정보</b>
						</div>
						<div class="col-md-6 form-group p_star">
                            <input type="text" class="form-control" id="name" name="name" placeholder="이름" readonly>
                            <span class="placeholder" data-placeholder="name"></span>
                        </div>
                        <div class="col-md-6 form-group p_star">
                             <input type="text" class="form-control" id="number" name="number" placeholder="전화번호" readonly>
                            <span class="placeholder" data-placeholder="Phone number"></span>
                        </div>
                        <div class="col-md-12 form-group" >
                            <b style="font-size:large; padding-right:15px">배송지 정보</b>
                             <input type="checkbox" id="user_chk" name="user_chk" onclick="javascript:payment.userChk();">
                             <label for="f-option">주문인 정보와 동일</label>
                        </div>
                        
                        <div class="col-md-6 form-group p_star">
                            <input type="text" class="form-control" id="order_name" name="order_name" placeholder="이름" >
                            <span class="placeholder" data-placeholder="order_name"></span>
                        </div>
                        <div class="col-md-6 form-group p_star">
                            <input type="text" class="form-control" id="order_number" name="order_number" placeholder="전화번호" >
                            <span class="placeholder" data-placeholder="order_number"></span>
                        </div>
                       
                        <div class="col-md-6 form-group p_star">
                            <select class="country_select">
                                <option value="1">District</option>
                                <option value="2">District</option>
                                <option value="4">District</option>
                            </select>
                        </div>
                        <div class="col-md-6 form-group p_star">
                            <select class="country_select">
                                <option value="1">District</option>
                                <option value="2">District</option>
                                <option value="4">District</option>
                            </select>
                        </div>
                        <div class="col-md-12 form-group p_star">
                            <input type="text" class="form-control" id="address" name="address" placeholder="상세 주소">
                            <span class="placeholder" data-placeholder="Address"></span>
                        </div>
                       
                        <div class="col-md-12 form-group mb-0">
                            <div class="creat_account">
                                <p>주문건 관련하여 요청사항 있으실 경우 게시판에 꼭! 남겨주세요:)</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-4">
                    <div class="order_box">
                        <b style="font-size:19px; color:black">결제 정보</b>
                        
                        <ul class="list list_2" style="padding-top:20px">
                            <li><a href="#" class="pay_sum">총 상품금액 <span>$2160.00</span></a></li>
                            <li><a href="#" class="pay_discount">총 할인금액 <span>Flat rate: $50.00</span></a></li>
                            <hr>
                            <li><a href="#" class="pay_order"><b style="font-size:19px">총 주문금액</b><span style="font-size:20px">$2210.00</span></a></li>
                        </ul>
                        
                        <div class="text-center" style="padding-top:50px">
                          <a class="button button-paypal" href="#" onclick="javascript:payment.pay();">결제하기</a>
                          <a class="gray_btn" href="#" style="margin-top:10px; padding-right:113.9px; padding-left:113.9px" onclick="javascript:payment.reset();">취소하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!--================End Checkout Area =================-->

<script>
	let userId = "${sessionScope.userId}"
</script>
<script type="text/javascript" src="js/order/payService.js"></script>
<script type="text/javascript" src="js/order/pay.js"></script>