<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="com.yedam.category.PageDTO"%>
<%@page import="com.yedam.category.ClothesVO"%>
<%@page import="java.util.List"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/moment.min.js"></script>
<script src ="//cdn.datatables.net/2.0.3/js/dataTables.min.js"></script>


<% PageDTO dto = (PageDTO) request.getAttribute("paging"); %>
<!-- ================ start banner area ================= -->
<section class="blog-banner-area" id="category">
	<div class="container h-100">
		<div class="blog-banner">
			<div class="text-center">
				<h1>카테고리</h1>
				<nav aria-label="breadcrumb" class="banner-breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="#">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">카테고리
							리스트</li>
					</ol>
				</nav>
			</div>
		</div>
	</div>
</section>

<!-- ================ category section start ================= -->
<section class="section-margin--small mb-5">
	<div class="container">
		<div class="row">
			<div class="col-xl-3 col-lg-4 col-md-5">
				<div class="sidebar-categories">
					<div class="head">Browse Categories</div>
					<ul class="main-categories">
						<li class="common-filter">
							<form action="#">
								<ul id="ul1">
									<li class="filter-list">
									<input class="pixel-radio" type="radio" id="men" name="cate" value="상의"><label 
									for="men">상의</label><span></span></li>
									<li class="filter-list">
									<input class="pixel-radio"
										type="radio" id="women" name="cate" value="바지"><label
										for="women">하의</label><span></span></li>
									<li class="filter-list">
									<input class="pixel-radio"
										type="radio" id="accessories" name="cate" value="아우터"><label
										for="accessories">아우터<span></span></label></li>
									<li class="filter-list">
									<input class="pixel-radio"
										type="radio" id="footwear" name="cate" value="신발"><label
										for="footwear">신발<span></span></label></li>
								<!--  		
									<li class="filter-list"><input class="pixel-radio"
										type="radio" id="bayItem" name="brand"><label
										for="bayItem">Bay item<span> (3600)</span></label></li>
									<li class="filter-list"><input class="pixel-radio"
										type="radio" id="electronics" name="brand"><label
										for="electronics">Electronics<span> (3600)</span></label></li>
									<li class="filter-list"><input class="pixel-radio"
										type="radio" id="food" name="brand"><label for="food">Food<span>
												(3600)</span></label></li>-->
								</ul>
							</form>
						</li>
					</ul>
				</div>
				<div class="sidebar-filter">
					<div class="top-filter-head">Product Filters</div>
					<div class="common-filter">
						<div class="head">Brands</div>
						<form action="#">
							<ul>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="apple" name="brand"><label for="apple">Apple<span>(29)</span></label></li>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="asus" name="brand"><label for="asus">Asus<span>(29)</span></label></li>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="gionee" name="brand"><label
									for="gionee">Gionee<span>(19)</span></label></li>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="micromax" name="brand"><label
									for="micromax">Micromax<span>(19)</span></label></li>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="samsung" name="brand"><label
									for="samsung">Samsung<span>(19)</span></label></li>
							</ul>
						</form>
					</div>
					<div class="common-filter">
						<div class="head">Color</div>
						<form action="#">
							<ul>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="black" name="color"><label for="black">Black<span>(29)</span></label></li>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="balckleather" name="color"><label
									for="balckleather">Black Leather<span>(29)</span></label></li>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="blackred" name="color"><label
									for="blackred">Black with red<span>(19)</span></label></li>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="gold" name="color"><label for="gold">Gold<span>(19)</span></label></li>
								<li class="filter-list"><input class="pixel-radio"
									type="radio" id="spacegrey" name="color"><label
									for="spacegrey">Spacegrey<span>(19)</span></label></li>
							</ul>
						</form>
					</div>
					<div class="common-filter">
						<div class="head">Price</div>
						<div class="price-range-area">
							<div id="price-range"></div>
							<div class="value-wrapper d-flex">
								<div class="price">Price:</div>
								<span>$</span>
								<div id="lower-value"></div>
								<div class="to">to</div>
								<span>$</span>
								<div id="upper-value"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-9 col-lg-8 col-md-7">
				<!-- Start Filter Bar -->
				<div class="filter-bar d-flex flex-wrap align-items-center">
					<div class="sorting">
						<select id="selectsort">
							<option value="">정렬</option>
							<option value="price desc">가격높은순</option>
							<option value="price">가격낮은순</option>
							<option value="discount_rate desc">할인율높은순</option>
							<option value="discount_rate">할인율낮은순</option>
							<option value="cnt desc">구매많은순</option>
							<option value="cnt">구매적은순</option>
						</select>
					</div>
					<!-- 
					<div class="sorting mr-auto">
						<select>
							<option value="1">show all</option>
							<option value="1">show all</option>
							<option value="1">show all</option>
						</select>
					</div>
					 -->
					<div>
						<div class="input-group filter-bar-search">
							<input type="text" placeholder="Search" id="searchdo">
							<div class="input-group-append">
								<button type="button" id="searchbutton">
									<i class="ti-search"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- End Filter Bar -->

				<!-- Start Best Seller -->
				<section class="lattest-product-area pb-40 category-list"
					id="section1">

					<div class="row" id="div1">

						<div class="col-md-6 col-lg-4" data-id="0" id="div2">
							<div class="card text-center card-product" id="div3">
								<div class="card-product__img" id="img">
									<img id="img1" class="card-img"
										src="upload/Short Sleeve Rugby T-Shirt.jpg" width="100px"
										height="200px" alt="">
									<ul class="card-product__imgOverlay">
										<li><a class="href1"><button>
												<i class="ti-"></i>
											</button></a></li>
										<li><button>
												<i class="ti-shopping-cart"></i>
											</button></li>
										<li><button>
												<i class="ti-heart"></i>
											</button></li>
									</ul>
								</div>
								<div class="card-body">
									<p id="p1">smallCategory</p>
									<h4 class="card-product__title">
										<a href="#" id="name1"></a>
									</h4>
									<p id="p2" class="card-product__price">원</p>
								</div>
							</div>
						</div>



					</div>
				</section>
				<!-- End Best Seller -->
			</div>
		</div>
	</div>

</section>
<script src="js/category.js"></script>
<!-- ================ category section end ================= -->

