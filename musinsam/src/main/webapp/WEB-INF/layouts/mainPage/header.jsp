<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!--================ Start Header Menu Area =================-->
<header class="header_area">
	<div class="main_menu">
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container">
				<a class="navbar-brand logo_h" href="main.do"> <img
					src="img/무신삼2.png" alt="" width="150px">
				</a>

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
						<li class="nav-item submenu dropdown"><a href="cateform.do"
							class="nav-link " role="button" aria-haspopup="true"
							aria-expanded="false">상품리스트</a></li>

						<li class="nav-item submenu dropdown"><a href="#"
							class="nav-link dropdown-toggle" data-toggle="dropdown"
							role="button" aria-haspopup="true" aria-expanded="false">내 쇼핑</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><c:choose>
										<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">찜</a>
										</c:when>
										<c:otherwise>
											<a class="nav-link" href="like.do">찜</a>
										</c:otherwise>
									</c:choose></li>
								<li class="nav-item"><c:choose>
										<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">장바구니</a>
										</c:when>
										<c:otherwise>
											<a class="nav-link" href="cart.do">장바구니</a>
										</c:otherwise>
									</c:choose></li>
							</ul></li>


						<li class="nav-item submenu dropdown"><a href="#"
							class="nav-link dropdown-toggle" data-toggle="dropdown"
							role="button" aria-haspopup="true" aria-expanded="false">마이페이지</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><c:choose>
										<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">정보 확인</a>
										</c:when>
										<c:otherwise>
											<a class="nav-link" href="userinfoForm.do">정보 확인</a>
										</c:otherwise>
									</c:choose></li>
								<li class="nav-item"><c:choose>
										<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">정보 수정</a>
										</c:when>
										<c:otherwise>
											<a class="nav-link" href="modifyMemberInfoForm.do">정보 수정</a>
										</c:otherwise>
									</c:choose></li>
								<li class="nav-item"><c:choose>
										<c:when test="${sessionScope.userId == null}">
											<a class="nav-link" href="loginForm.do">주문 조회</a>
										</c:when>
										<c:otherwise>
											<a class="nav-link" href="orderInqueryForm.do">주문 조회</a>
										</c:otherwise>
									</c:choose></li>
							</ul></li>
						<c:choose>
							<c:when test="${sessionScope.userId == null}">
								<li class="nav-item"><a class="nav-link"
									href="loginForm.do">로그인</a></li>
							</c:when>
							<c:otherwise>
								<li class="nav-item"><a class="nav-link" href="logout.do">로그아웃</a>
								</li>
							</c:otherwise>
						</c:choose>
						<li class="nav-item"><a class="nav-link" href="faq.do">문의게시판</a>
							<c:if test="${sessionScope.authority == 1 }">
								<li class="nav-item submenu dropdown"><a href="#"
									class="nav-link dropdown-toggle" data-toggle="dropdown"
									role="button" aria-haspopup="true" aria-expanded="false">관리자
										페이지</a>
									<ul class="dropdown-menu">

										<li class="nav-item">
									 		<a class="nav-link" href="insertProd.do">상품 등록</a>
								 		</li> 
								 		<li class="nav-item">
									 		<a class="nav-link" href="manageProd.do?page=1">상품 리스트</a>
								 		</li> 
							 		</ul>
							 </li>
							 
						</c:if>
                        </li>





					</li>

					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>

<!-- ================ End Header Menu Area ================= -->

