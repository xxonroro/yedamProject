<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<section class="login_box_area section-margin">
		<div class="col-lg-6">
			<div class="login_form_inner">
				<h3>비밀번호 찾기</h3>
				<form class="row login_form" action="findUserPass.do" id="contactForm" autocomplete='off' method="post" name="findPass">
					<div class="col-md-12 form-group">
						<input type="text" class="form-control findPassName" id="name" name="name" placeholder="이름">
					</div>
					<div class="col-md-12 form-group">
						<input type="text" class="form-control findPassId" id="name" name="userId" placeholder="아이디">
					</div>
					<div class="col-md-12 form-group">
						<button type="submit" value="submit" class="button button-login w-100 findPass">비밀번호 찾기</button>
					</div>
				</form>
				<div class="account-links">
					<a href="findUserIdForm.do">아이디 찾기</a>
					<span>|</span> 
					<a href="loginForm.do">로그인</a> 
					<span>|</span>
					<a href="memberRegisterForm.do">회원가입</a>
				</div>
			</div>
		</div>
</section>
<div class="myModal hidden">
	<div class="myModal_content">
		<button><i class="fa-solid fa-xmark"></i></button>
		<strong></strong>
	</div>
</div>
<script>
	//pass 찾기
	const findPassForm = document.querySelector(".login_form_inner #contactForm[name='findPass']");
	
	const findName = document.querySelector(".form-group .findPassName");
	const findId = document.querySelector(".form-group .findPassId");
	const findPassBtn = document.querySelector(".form-group .findPass");
	
	
	const modal = document.querySelector(".myModal");
	const xBtn = document.querySelector(".myModal_content button");
	const text = document.querySelector(".myModal_content strong");
	
	findPassBtn.addEventListener("click", function(event) {
		event.preventDefault();

		if(ValidationLogin()) {
			fetch("findUserPass.do", {
			method: "post",
			headers: {"Content-Type": "application/x-www-form-urlencoded"},
			body: "name=" + findName.value + "&userId=" + findId.value
		})
		.then(response => response.json())
		.then(result => {
			console.log(result);
			if(result.userInfo == "x") {
				text.innerText = "입력된 정보가 잘못되었습니다."
				modal.classList.remove("hidden");
				xBtn.addEventListener("click", function(event) {
					modal.classList.add("hidden");
				})
			}
			else {
				text.innerText = "비밀번호는 " + result.id + "입니다";
				modal.classList.remove("hidden");
				xBtn.addEventListener("click", function(event) {
					location.href = result.redirectUrl;
				})
			}
		})
		.catch(error => {
			console.error(error);
		})	
		}
	});
	
		// 유효성 검사
		function ValidationLogin() {
			if(findName.value.trim() == "") {
				const nameMessage = findPassBtn.parentNode.querySelector("span");
				if(nameMessage) {
					nameMessage.remove();
				}
				
				const nameSpan = document.createElement("span");
				nameSpan.style.color = "red";
				nameSpan.innerText = "이름을 입력해 주세요.";
				findPassBtn.closest("div").prepend(nameSpan);
				return false;
			}
			else {
				const nameMessage = findPassBtn.parentNode.querySelector("span");
				if(nameMessage) {
					nameMessage.remove();
				}
			}
		
			if(findId.value.trim() == "") {
				const idMessage = findPassBtn.parentNode.querySelector("span");
				if(idMessage) {
					idMessage.remove();
				}
		
				const idSpan = document.createElement("span");
				idSpan.style.color = "red";
				idSpan.innerText = "연락처를 입력해 주세요.";
				findPassBtn.closest("div").prepend(idSpan);
		
				return false;
			}
			else {
				const idMessage = findPassBtn.parentNode.querySelector("span");
				if(idMessage) {
					idMessage.remove();
				}
			}
		
			return true;
		};
	
	</script>