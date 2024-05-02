<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<section class="login_box_area section-margin">
		<div class="col-lg-6">
			<div class="login_form_inner">
				<h3>아이디 찾기</h3>
				<form class="row login_form" action="findUserId.do" id="contactForm" autocomplete='off' method="post" name="findId">
					<div class="col-md-12 form-group">
						<input type="text" class="form-control findIdName" id="name" name="name" placeholder="이름">
					</div>
					<div class="col-md-12 form-group">
						<input type="text" class="form-control findIdPhone" id="name" name="phone" placeholder="연락처">
					</div>
					<div class="col-md-12 form-group">
						<button type="submit" value="submit" class="button button-login w-100 findId">아이디 찾기</button>
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
<div class="myModal hidden">
	<div class="myModal_content">
		<button><i class="fa-solid fa-xmark"></i></button>
		<strong></strong>
	</div>
</div>
<script>
//id 찾기
const findIdForm = document.querySelector(".login_form_inner #contactForm[name='findId']");

const findName = document.querySelector(".form-group .findIdName");
const findPhone = document.querySelector(".form-group .findIdPhone");
const findIdBtn = document.querySelector(".form-group .findId");


const modal = document.querySelector(".myModal");
const xBtn = document.querySelector(".myModal_content button");
const text = document.querySelector(".myModal_content strong");

let inputs = document.querySelectorAll(".form-group input");

inputs.forEach(input => {
  const originPlaceholder = input.getAttribute("placeholder");

  // input 요소로 포커스가 들어왔을 때,
  input.addEventListener("focus", function (event) {
    this.setAttribute("placeholder", "");
  })

  // 포커스를 받았던 input 요소가 포커스를 잃었을 때
  input.addEventListener("blur", function (event) {
    this.setAttribute("placeholder", originPlaceholder);
  })
});

findIdBtn.addEventListener("click", function(event) {
    event.preventDefault();
	if(ValidationLogin()) {
	    fetch("findUserId.do", {
        method: "post",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: "name=" + findName.value + "&phone=" + findPhone.value
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
			text.innerText = "아이디는 " + result.id + "입니다";
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
	        const nameMessage = findIdBtn.parentNode.querySelector("span");
	        if(nameMessage) {
	            nameMessage.remove();
	        }
	        
	        const nameSpan = document.createElement("span");
	        nameSpan.style.color = "red";
	        nameSpan.innerText = "이름을 입력해 주세요.";
	        findIdBtn.closest("div").prepend(nameSpan);
	        return false;
	    }
	    else {
	        const nameMessage = findIdBtn.parentNode.querySelector("span");
	        if(nameMessage) {
	            nameMessage.remove();
	        }
	    }
	
	    if(findPhone.value.trim() == "") {
	        const phoneMessage = findPhone.parentNode.querySelector("span");
	        if(phoneMessage) {
	            phoneMessage.remove();
	        }
	
	        const phoneSpan = document.createElement("span");
	        phoneSpan.style.color = "red";
	        phoneSpan.innerText = "연락처를 입력해 주세요.";
	        findIdBtn.closest("div").prepend(phoneSpan);
	
	        return false;
	    }
	    else {
	        const phoneMessage = findIdBtn.parentNode.querySelector("span");
	        if(phoneMessage) {
	            phoneMessage.remove();
	        }
	    }
	
	    return true;
	};

</script>