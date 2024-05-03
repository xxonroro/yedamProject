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
<section class="tracking_box_area section-margin--small">
	<div class="container" id="faq">
		<div class="headQa">
			<div>
				<div class="prodImg">
					<span>제품 사진</span>
				</div>
				<div class="prodNm">
					<span>제품명</span>
				</div>
				<div class="prodPr">
					<span>제품 가격</span>
				</div>
				<div class="prodBr">
					<span>브랜드</span>
				</div>
			</div>
		</div>
		<div id="listAll">
			<div id="exam" class = "prodList">
				<div class="prodImg">
					<img style="height: 50px" src="#">
				</div>
				<div class="prodNm">
					<span></span>
				</div>
				<div class="prodPr">
					<span></span>
				</div>
				<div class="prodBr">
					<span></span>
				</div>
			</div>
		</div>
		<div id ="listNum" style = "font-size:1.2rem">
			
		</div>
		
	</div>
</section>

<script>
	
</script>
<script src="vendors/jquery/jquery-3.2.1.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="vendors/skrollr.min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="vendors/nice-select/jquery.nice-select.min.js"></script>
  <script src="vendors/jquery.ajaxchimp.min.js"></script>
  <script src="vendors/mail-script.js"></script>
	<script src="js/admin.js"></script>
	<script src="js/adminList.js"></script>
<!-- ================ category section end ================= -->

