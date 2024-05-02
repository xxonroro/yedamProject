<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
.modal-body {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

.modal-body label {
	margin-right: 10px;
	margin-bottom: 0;
}

.modal-body input {
	border-radius: 6px;
	width: 250px;
	padding: 10px in !important;
}

.modal-body i {
	position: absolute;
	right: 100px;
	cursor: pointer;
}
</style>
<section class="login_box_area section-margin">
	<div class="col-lg-6">
		<div class="login_form_inner">
			<h3>비밀번호 찾기</h3>
			<form class="row login_form" action="findUserPass.do"
				id="contactForm" autocomplete='off' method="post" name="findPass">
				<div class="col-md-12 form-group">
					<input type="text" class="form-control findPassName" id="name"
						name="name" placeholder="이름">
				</div>
				<div class="col-md-12 form-group">
					<input type="text" class="form-control findPassId" id="name"
						name="userId" placeholder="아이디">
				</div>
				<div class="col-md-12 form-group">
					<button type="submit" value="submit" class="button button-login w-100 findPass">비밀번호 찾기</button>
				</div>
			</form>
			<div class="account-links">
				<a href="findUserIdForm.do">아이디 찾기</a> <span>|</span> <a
					href="loginForm.do">로그인</a> <span>|</span> <a
					href="memberRegisterForm.do">회원가입</a>
			</div>
		</div>
	</div>
</section>
<div class="myModal hidden">
	<div class="myModal_content">
		<button>
			<i class="fa-solid fa-xmark"></i>
		</button>
		<strong></strong>
	</div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
	  <div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title" id="exampleModalLabel">비밀번호 변경</h5>
		  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		  </button>
		</div>
		<div class="modal-body">
		  <label for="passwordChange" style="margin-bottom: 0;">비밀번호</label> 
		  <input type="password" id="passwordChange" placeholder="새로운 비밀번호" style="padding: 5px;"> 
		  <i class="fa-solid fa-eye-slash"></i>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
		  <button type="button" class="btn btn-primary changeBtn">변경</button>
		</div>
	  </div>
	</div>
  </div>

<script>
	
	var exampleModal = $('#exampleModal').modal({
  keyboard: false,
  show: false,
});
	
	// 모달 관련 요소
	const modalFooter = document.querySelector(".modal-footer");
	const changeBtn = document.querySelector(".modal-footer .changeBtn");
    const input = document.querySelector(".modal-body #passwordChange");
	const modalIcon = document.querySelector(".modal-body i");
	
	// 유효성 검사
	input.addEventListener("focus", function(event) {
		this.setAttribute("placeholder", "");
	});

    input.addEventListener("blur", function(event) {
		input.setAttribute("placeholder", "새로운 비밀번호");
	});

	// 아이콘 기능
    modalIcon.addEventListener("click", function(event) {
		if (input.type == 'password') {
			input.type = 'text';
            this.classList.replace('fa-eye-slash', 'fa-eye');
		} else {
			input.type = 'password';
            this.classList.replace('fa-eye', 'fa-eye-slash');
		}
	});

	//pass 찾기
	const findPassForm = document.querySelector(".login_form_inner #contactForm[name='findPass']");
	const findName = document.querySelector(".form-group .findPassName");
	const findId = document.querySelector(".form-group .findPassId");
	const findPassBtn = document.querySelector(".form-group .findPass");

	
	// 내가 만든 모달
	const modal = document.querySelector(".myModal");
	const xBtn = document.querySelector(".myModal_content button");
	const text = document.querySelector(".myModal_content strong");


	findPassBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (ValidationLogin()) {
        fetch("findUserPass.do", {
            method: "post",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: "name=" + findName.value + "&userId=" + findId.value
        })
        .then(response => response.json())
        .then(result => {
            if (result.userInfo == "x") {
                text.innerText = "입력된 정보가 잘못되었습니다.";
                modal.classList.remove("hidden");
                xBtn.addEventListener("click", function(event) {
                    modal.classList.add("hidden");
                });
            } else {
                $('#exampleModal').modal('show');
                changeBtn.addEventListener("click", function(event) {
                    fetch("modifyUserPass.do", {
                        method: "post",
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: "newPass=" + input.value + "&pass=" + result.pass + "&id=" + findId.value
                    })
                    .then(response => response.json())
                    .then(result => {
                       if(result.change == "x") {
							const parent = modalFooter.parentNode;
							const existingSpan = parent.querySelector("span");

							if(existingSpan) {
								existingSpan.remove();
							}
							const span = document.createElement("span");
							span.innerText = "새로운 비밀번호를 입력하세요";
							span.style.color = "red";
							span.style.textAlign = "center";
							modalFooter.parentNode.insertBefore(span, modalFooter);
					   }
					   else {
							location.href = result.redirectUrl;
					   }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                });
            }
        })
        .catch(error => {
            console.error(error);
        });
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
				idSpan.innerText = "아이디를 입력해 주세요.";
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

