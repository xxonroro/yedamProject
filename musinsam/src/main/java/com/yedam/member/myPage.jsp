<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<style>
	.h-100 {
		height: 410px;
	}
	.myPageContainer {
		height: 600px;
		display: grid;
		grid-template-columns: 1fr 5fr;
	}
	.myPageContainer__nav div{
		height: 200px;
		font-size: 20px;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid black;
	}
</style>

<div class="container h-100">
	<div class="blog-banner">
		<div class="text-center">
			<h1>마이페이지</h1>
		</div>
	</div>
</div>
<div class="myPageContainer">
	<div class="myPageContainer__nav">
		<div>정보 수정</div>
		<div>주문 조회</div>
		<div>상품 리뷰</div>
	</div>
	<div class="col-lg-6">
		<div class="login_form_inner">
			<h3>회원 정보 수정</h3>
			<form class="row login_form" action="modifyMemberInfo.do" id="contactForm" autocomplete='off' method="post" style="display: flex; flex-direction: column; justify-content: center;">
				<div class="col-md-12 form-group" style="display: grid; align-items: center; grid-template-columns: 0.8fr 1.5fr;">
					이름<input type="text" class="form-control" id="name" name="username" placeholder="" value="${sessionScope.username}">
				</div>
				<div class="col-md-12 form-group" style="display: grid; align-items: center; grid-template-columns: 0.8fr 1.5fr;">
					아이디<input type="text" class="form-control" id="name" name="userId" value="${sessionScope.userId}" readonly>
				</div>
				<div class="col-md-12 form-group" style="display: grid; align-items: center; grid-template-columns: 0.8fr 1.5fr;">
					연락처<input type="text" class="form-control" id="name" name="phone"  value="${sessionScope.phone}" readonly>
				</div>
				<div class="col-md-12 form-group" style="display: grid; align-items: center; grid-template-columns: 0.8fr 1.5fr;">
					비밀번호<input type="text" class="form-control" id="name" name="userPass" placeholder="" value="${sessionScope.userPass}">
				</div>
				<div class="col-md-12 form-group" style="display: grid; align-items: center; grid-template-columns: 0.8fr 1.5fr;">
					생일<input type="text" class="form-control" id="name" name="birthday" maxlength="6" placeholder="" value="${sessionScope.birthday}">
				</div>
				<div class="col-md-12 form-group" style="display: grid; align-items: center; grid-template-columns: 0.8fr 1.5fr;">
					주소<input type="text" class="form-control" id="name" name="address" placeholder="" value="${sessionScope.address}">
				</div>
				<div class="col-md-12 form-group" style="padding-right: 0; padding-left: 30px; width:300px; align-self: center;">
					<button type="submit" value="submit" class="button button-login w-100">수정</button>
				</div>
			</form>
		</div>
	</div>
</div>
