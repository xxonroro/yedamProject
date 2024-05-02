<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="com.yedam.category.ClothesVO"%>
<%@page import="com.yedam.category.UserVO"%>
<%@page import="java.util.List"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js"></script>
<script src="//cdn.datatables.net/2.0.3/js/dataTables.min.js"></script>


<!-- ================ start banner area ================= -->
<section class="blog-banner-area" id="category">
	<div class="container h-100">
		<div class="blog-banner">
			<div class="text-center">
				<h1>User Information</h1>

			</div>
		</div>
	</div>
</section>
<!-- ================ end banner area ================= -->

<!--================Order Details Area =================-->
<section class="order_details section-margin--small">

	<div class="container">
		<p style="font-size:20px; font-weight:bold;">${sessionScope.username} 님 회원정보</p>
		<div class="row mb-5">
			
			<div class="col-md-6 col-xl-4 mb-4 mb-xl-0">
				<div class="confirmation-card">
					<h3 class="billing-title">User ID / PASSWORD</h3>
					<table class="order-rable">
						<tr>
							<td>ID</td>
							<td>${sessionScope.userId}</td>
						</tr>
						
						<tr>
							<td>    </td>
							<td>    </td>
						<tr>
						<tr>
							<td>PASSWORD</td>
							<td>${sessionScope.userPass}</td>
						</tr>

					</table>
				</div>
			</div>
			
			<div class="col-md-6 col-xl-4 mb-4 mb-xl-0">
				<div class="confirmation-card">
					<h3 class="billing-title">Users info</h3>
					<table class="order-rable">
						<tr>
							<td>NAME</td>
							<td>${sessionScope.username}</td>
						</tr>
						
						<tr>
							<td>PHONE</td>
							<td>${sessionScope.phone}</td>
						</tr>
						<tr>
							<td>ADDRESS</td>
							<td>${sessionScope.address}</td>
						</tr>

					</table>
				</div>
			</div>
			
			
			<div class="col-md-6 col-xl-4 mb-4 mb-xl-0">
				<div class="confirmation-card">
					<h3 class="billing-title">Edit User Information</h3>
					<table class="order-rable">
						<tr>
							<td>Edit User Information</td>
							<td><a href="modifyMemberInfoForm.do"><button>Edit User Information</button></a></td>
						</tr>
						<tr>
							<td>Order Check</td>
							<td><a href="orderInqueryForm.do"><button>Order Check</button></a></td>
						</tr>
	
					</table>
				</div>
			</div>
		</div>
		
		<div class="order_details_table">
			<h2>${sessionScope.username} 님 회원정보</h2>
			<div class="table-responsive">
				<table class="table">

					<tbody>
						<tr>
							<td>
								<h4>ID</h4>
							</td>
							<td>
								<p>${sessionScope.userId}</p>
							</td>
						</tr>
						
						<tr>
							<td>
								<h4>PASSWORD</h4>
							</td>
							<td>
								<p>${sessionScope.userPass}</p>
							</td>

						</tr>
						<tr>
							<td>
								<p>NAME</p>
							</td>
							<td>
								<p>${sessionScope.username}</p>
							</td>
						</tr>
						<tr>
							<td>
								<h4>PHONE</h4>
							</td>
							<td>
								<p>${sessionScope.phone}</p>
							</td>
						</tr>
						<tr>
							<td>
								<h4>ADDRESS</h4>
							</td>

							<td>
								<p>${sessionScope.address}</p>
							</td>
						</tr>
						<tr>
							<td>
								<h4>BIRTHDAT</h4>
							</td>

							<td>
								<p>${sessionScope.birthday}</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>


		</div>
	</div>
</section>
<!--================End Order Details Area =================-->