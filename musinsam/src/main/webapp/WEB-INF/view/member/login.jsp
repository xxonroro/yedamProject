<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<section class="login_box_area section-margin">
		<div class="col-lg-6">
			<div class="login_form_inner">
				<h3>로그인</h3>
				<form class="row login_form" action="login.do" id="contactForm" autocomplete='off' method="post" name="login">
					<div class="col-md-12 form-group">
						<input type="text" class="form-control" id="name" name="loginId" placeholder="아이디">
					</div>
					<div class="col-md-12 form-group">
						<input type="password" class="form-control" id="name" name="loginPass" placeholder="비밀번호">
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
<script defer>
	const loginForm = document.querySelector(".login_form_inner #contactForm[name='login']");
	const loginBtn = document.querySelector("button.button-login");

	const loginId = document.querySelector(".form-control[name='loginId']");
	const loginPass = document.querySelector(".form-control[name='loginPass']")
	const loginCheck = document.querySelector("input[name='selector']");


	// 로그인 이벤트
	loginBtn.addEventListener("click", function(event) {
	    event.preventDefault();
	    
	    if(ValidationLogin()) {
	        fetch("login.do", {
	            method: "post",
	            headers: {"Content-Type": "application/x-www-form-urlencoded"},
	            body: "loginId=" + loginId.value + "&loginPass=" + loginPass.value + "&selector=" + loginCheck.value
	        })
	        .then(response => response.json())
	        .then(result => {       
	            console.log(result);
	
	            if(result.login == "Success") {
	                location.href = result.redirectUrl;
	            }
	            else {
	                const validationMessage = loginBtn.parentNode.querySelector("span");
	                if(validationMessage) {
	                    validationMessage.remove();
	                }
	
	                const validationSpan = document.createElement("span");
	                validationSpan.style.color = "red";
	                validationSpan.innerHTML = "아이디 또는 비밀번호를 잘못 입력했습니다.";
	                loginBtn.closest("div").prepend(validationSpan);
	            }
	        })
	        .catch(error => {
	            console.error(error);
	        })
	    }
	    else {
	        event.preventDefault();
	    }
	});
	
	// 유효성 검사
	function ValidationLogin() {
	    if(loginId.value.trim() == "") {
	        const idMessage = loginBtn.parentNode.querySelector("span");
	        if(idMessage) {
	            idMessage.remove();
	        }
	        
	        const idSpan = document.createElement("span");
	        idSpan.style.color = "red";
	        idSpan.innerText = "아이디를 입력해 주세요.";
	        loginBtn.closest("div").prepend(idSpan);
	        return false;
	    }
	    else {
	        const idMessage = loginBtn.parentNode.querySelector("span");
	        if(idMessage) {
	            idMessage.remove();
	        }
	    }
	
	    if(loginPass.value.trim() == "") {
	        const passMessage = loginBtn.parentNode.querySelector("span");
	        if(passMessage) {
	            passMessage.remove();
	        }
	
	        const passSpan = document.createElement("span");
	        passSpan.style.color = "red";
	        passSpan.innerText = "비밀번호를 입력해 주세요.";
	        loginBtn.closest("div").prepend(passSpan);
	
	        return false;
	    }
	    else {
	        const passMessage = loginBtn.parentNode.querySelector("span");
	        if(passMessage) {
	            passMessage.remove();
	        }
	    }
	
	    return true;
	};

</script>