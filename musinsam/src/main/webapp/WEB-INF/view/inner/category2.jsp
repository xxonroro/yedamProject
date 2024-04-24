<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.yedam.category.ClothesVO"%>
<%@page import="java.util.List"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
   	<!-- ================ start banner area ================= -->
<section class="blog-banner-area" id="category">
	<div class="container h-100">
		<div class="blog-banner">
			<div class="text-center">
				<h1>카테고리</h1>
				<nav aria-label="breadcrumb" class="banner-breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="#">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">카테고리 리스트</li>
					</ol>
				</nav>
			</div>
		</div>
	</div>
</section>
<!-- ================ end banner area ================= -->

<div class="container px-4 px-lg-5 mt-5">
  <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
	<c:forEach var="vo" items="${clist}">
            <div class="col mb-5">
         <div class="card h-100">
             <!-- Sale badge-->
             <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
             <!-- Product image-->
             <img class="card-img-top" src="upload/${vo.clothName}.jpg" width="50px" height="100px" alt="..." />
             <!-- Product details-->
             <div class="card-body p-4">
                 <div class="text-center">
                     <!-- Product name-->
                     <h5 class="fw-bolder"><c:out value="${vo.clothName}" /></h5>
                     <!-- Product reviews-->
                     <div class="d-flex justify-content-center small text-warning mb-2">
                         <div class="bi-star-fill"></div>
                         <div class="bi-star-fill"></div>
                         <div class="bi-star-fill"></div>
                         <div class="bi-star-fill"></div>
                         <div class="bi-star-fill"></div>
                     </div>
                     <!-- Product price-->
                     <span class="text-muted text-decoration-line-through"><c:out value="${vo.price}"/></span>
                     <span class="text-muted text-decoration-line-through"><c:out value="${vo.brand}"/></span>
                 </div>
             </div>
             <!-- Product actions-->
             <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
             		<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
             </div>
         </div>
     </div>
	</c:forEach>
</div>
  </div>