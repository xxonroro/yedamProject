<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!--================ Start Header Menu Area =================-->
<header class="header_area">
	<div class="main_menu">
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container">

				<a class="navbar-brand logo_h" href="main.do"><img
					src="img/무신삼2.png" alt="" width="150px"></a>

				<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<div class="collapse navbar-collapse offset"
					id="navbarSupportedContent">
					<ul class="nav navbar-nav menu_nav ml-auto mr-auto">
						<li class="nav-item active"><a class="nav-link"

							href="main.do">Home</a></li>

						<li class="nav-item submenu dropdown"><a href="#"
							class="nav-link dropdown-toggle" data-toggle="dropdown"
							role="button" aria-haspopup="true" aria-expanded="false">Shop
								여기 카테고리 물품리스트</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="nav-link"

									href="cateform.do">Shop Category</a></li>

								<li class="nav-item"><a class="nav-link"
									href="single-product.html">Product Details</a></li>
								<li class="nav-item"><a class="nav-link"
									href="checkout.html">Product Checkout</a></li>
								<li class="nav-item"><a class="nav-link"
									href="confirmation.html">Confirmation</a></li>
								<li class="nav-item"><a class="nav-link" href="cart.html">Shopping
										Cart</a></li>
							</ul></li>
						<li class="nav-item submenu dropdown"><a href="#"
							class="nav-link dropdown-toggle" data-toggle="dropdown"
							role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
							<ul class="dropdown-menu">

								<li class="nav-item"><a class="nav-link" href="index.html">Blog</a></li>

								<li class="nav-item"><a class="nav-link"
									href="single-blog.html">Blog Details</a></li>
							</ul></li>
						<li class="nav-item submenu dropdown"><a href="#"
							class="nav-link dropdown-toggle" data-toggle="dropdown"
							role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="nav-link" href="login.html">로그인</a></li>
								<li class="nav-item"><a class="nav-link"
									href="register.html">회원가입</a></li>
								<li class="nav-item"><a class="nav-link"

									href="#">문의게시판</a></li>

							</ul></li>
						<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
					</ul>

					<ul class="nav-shop">
						<li class="nav-item"><button>
								<i class="ti-search"></i>
							</button></li>
						<li class="nav-item"><button>
								<a class="ti-shopping-cart" href="cart.html"></a><span
									class="nav-shop__circle">30</span>
							</button></li>
						<li class="nav-item"><a class="button button-header" href="#">Buy
								Now(결제로 이동)</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>
<!--================ End Header Menu Area =================-->