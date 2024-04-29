<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<section class="login_box_area section-margin">
		<div class="col-lg-6">
			<div class="login_form_inner">
				<h3>아이디 찾기</h3>
				<form class="row login_form" action="findUserId.do" id="contactForm" autocomplete='off' method="post">
					<div class="col-md-12 form-group">
						<input type="text" class="form-control" id="name" name="name" placeholder="이름">
					</div>
					<div class="col-md-12 form-group">
						<input type="text" class="form-control" id="name" name="phone" placeholder="연락처">
					</div>
					<div class="col-md-12 form-group">
						<button type="submit" value="submit" class="button button-login w-100">아이디 찾기</button>
					</div>
				</form>
				<div class="account-links">
					<a href="findUserPassForm.do">비밀번호 찾기</a>
					<span>|</span> 
					<a href="loginForm.do">로그인</a> 
					<span>|</span>
					<a href="memberRegisterForm.do">회원가입</a>
				</div>
			</div>
		</div>
</section>