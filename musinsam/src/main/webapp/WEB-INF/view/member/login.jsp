<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<section class="login_box_area section-margin">
		<div class="col-lg-6">
			<div class="login_form_inner">
				<h3>로그인</h3>
				<form class="row login_form" action="login.do" id="contactForm" autocomplete='off' method="post">
					<div class="col-md-12 form-group">
						<input type="text" class="form-control" id="name" name="userId" placeholder="아이디">
					</div>
					<div class="col-md-12 form-group">
						<input type="password" class="form-control" id="name" name="userPass" placeholder="비밀번호">
					</div>
					<div class="col-md-12 form-group">
						<div class="creat_account">
							<input type="checkbox" id="f-option2" name="selector"> 
							<label for="f-option2">로그인 상태 유지</label>
						</div>
					</div>
					<div class="col-md-12 form-group">
						<button type="submit" value="submit" class="button button-login w-100">로그인</button>
					</div>
				</form>
				<div class="account-links">
					<a href="findUserIdForm.do">아이디 찾기 </a>
					<span>|</span> 
					<a href="findUserPassForm.do">비밀번호 찾기</a> 
					<span>|</span>
					<a href="memberRegisterForm.do"> 회원가입</a>
				</div>
			</div>
		</div>
</section>