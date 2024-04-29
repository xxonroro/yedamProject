<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!--================ Start Header Menu Area =================-->
<header class="header_area">
	<div class="main_menu">
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container">
				<a class="navbar-brand logo_h" href="main.do">
					<img src="img/무신삼2.png" alt="" width="150px">
				</a>

				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar"></span> 
					<span class="icon-bar"></span> 
					<span class="icon-bar"></span>
				</button>

				<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
					<ul class="nav navbar-nav menu_nav ml-auto mr-auto">
						<li class="nav-item submenu dropdown">
							<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">카테고리</a>
							<ul class="dropdown-menu">
								<li class="nav-item">
									<a class="nav-link" href="single-product.html">상의</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="checkout.html">아우터</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="confirmation.html">하의</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="cart.html">신발</a>
								</li>
							</ul>
						</li>
						
						<li class="nav-item submenu dropdown">
							<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">내 쇼핑</a>
							<ul class="dropdown-menu">
								<li class="nav-item">
								<c:choose>
									<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">찜</a>
									</c:when>
									<c:otherwise>
											<a class="nav-link" href="#">찜</a>
									</c:otherwise>
								</c:choose>
								</li>
								<li class="nav-item">
								<c:choose>
									<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">장바구니</a>
									</c:when>
									<c:otherwise>
											<a class="nav-link" href="#">장바구니</a>
									</c:otherwise>
								</c:choose>
									
								</li>
							</ul>
						</li>

						<li class="nav-item submenu dropdown">
							<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">마이페이지</a>
								<ul class="dropdown-menu">
									<li class="nav-item">
									<c:choose>
										<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">정보 수정</a>
										</c:when>
										<c:otherwise>
											<a class="nav-link" href="#">정보 수정</a>
										</c:otherwise>
									</c:choose>			
									</li>
									<li class="nav-item">
									<c:choose>
										<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">주문 조회</a>
										</c:when>
										<c:otherwise>
											<a class="nav-link" href="single-blog.html">주문 조회</a>
										</c:otherwise>
									</c:choose>			
									</li>
									<li class="nav-item">
									<c:choose>
										<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">상품 리뷰</a>
										</c:when>
										<c:otherwise>
											<a class="nav-link" href="index.html">상품 리뷰</a>
										</c:otherwise>
									</c:choose>			
									</li>
								</ul>
							</li>
						<c:choose>
						 <c:when test="${sessionScope.userId == null}">
							<li class="nav-item">
								<a class="nav-link" href="loginForm.do">로그인</a>
							</li> 
						 </c:when>
						 <c:otherwise>
						 	<li class="nav-item">
						 		<a class="nav-link" href="logout.do">로그아웃</a>
						 	</li> 
						 </c:otherwise> 
						</c:choose>
						<li class="nav-item">
							<a class="nav-link" href="faq.do">문의게시판</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>
<!—================ End Header Menu Area =================—>