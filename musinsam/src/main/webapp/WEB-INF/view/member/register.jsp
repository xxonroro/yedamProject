<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!--================Login Box Area =================-->
<section class="login_box_area section-margin">
  <div class="container">
    <div class="login_form_inner register_form_inner">
      <h3>회원 가입</h3>
      <form class="row login_form" action="memberRegistration.do" name="register_form" method="post">
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="userId" name="userId" placeholder="아이디" required/>
          <button type="submit" id="idCheckBtn">중복 체크</button>
        </div>
        <div class="col-md-12 form-group">
          <input type="password" class="form-control" id="password" name="password" placeholder="비밀번호" required/>
          <i class="fa-solid fa-eye-slash"></i>
        </div>
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="name" name="name" placeholder="이름" required/>
        </div>
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="birthday" name="birthday" placeholder="생년월일 6자리" maxlength="6" required/>
        </div>
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="address" name="address" placeholder="주소" required/>
        </div>
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="phone" name="phone" placeholder="휴대폰 번호" required maxlength="13"/>
          <button type="submit" id="phoneCheckBtn">중복 체크</button>
        </div>
        <div class="col-md-12 form-group">
          <button type="submit" value="submit" class="button button-register w-100">등록</button>
        </div>
      </form>
    </div>
  </div>
</section>
<<script defer>
//입력 요소 이벤트
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

// 중복 체크
const idCheckBtn = document.querySelector("#idCheckBtn");
const submitBtn = document.querySelector(".form-group:last-child button");
let isUserIdCheck = false;
let isUserIdAvailable = false;

idCheckBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let inputIdValue = idCheckBtn.closest(".form-group").querySelector("input").value;

  if (!inputIdValue.trim()) {
    alert("아이디를 입력하세요");
  }
  else {
    fetch("idCheck.do", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "id=" + inputIdValue,
    })
      .then(resposne => resposne.json())
      .then(result => {
        if (result.exist) {
          alert("중복된 아이디")
          isUserIdCheck = true;
          isUserIdAvailable = false;
        }
        else {
          alert("사용 가능한 아이디입니다.")
          isUserIdCheck = true;
          isUserIdAvailable = true;
        }
      }
      )
      .catch(error => console.log("Error:" + error));
  }
});

// input 요소의 값을 변경했을 때 발생하는 이벤트
const idInput = document.querySelector("#idCheckBtn").closest(".form-group").querySelector("input");
idInput.addEventListener("input", function() {
  isUserIdCheck = false;
  isUserIdAvailable = false;
});

// 폰 중복 체크
const phoneCheckBtn = document.querySelector("#phoneCheckBtn");
let isUserPhoneCheck = false;
let isUserPhoneAvailable = false;

phoneCheckBtn.addEventListener("click", function (event) {
  event.preventDefault();

  let inputPhoneValue = phoneCheckBtn.closest(".form-group").querySelector("input").value;

  if (!inputPhoneValue.trim()) {
    alert("연락처를 입력하세요.");
  }
  else {
    fetch("phoneCheck.do", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "phone=" + inputPhoneValue,
    })
      .then(resposne => resposne.json())
      .then(result => {
        if (result.exist) {
          alert("이미 등록된 연락처입니다.")
          isUserPhoneCheck = true;
          isUserPhoneAvailable = false;
        }
        else {
          alert("사용 가능한 연락처입니다.")
          isUserPhoneCheck = true;
          isUserPhoneAvailable = true;
        }
      }
      )
      .catch(error => console.log("Error:" + error));
  }
});

// 전화번호 입력 필드를 수정했을 때 발생하는 이벤트
const phoneInput = document.querySelector("#phoneCheckBtn").closest(".form-group").querySelector("input");
phoneInput.addEventListener("input", function() {
  isUserPhoneCheck = false; 
  isUserPhoneAvailable = false;
});

// 비밀번호 표시
let icon = document.querySelector(".form-group i");

let input = icon.closest(".form-group").querySelector("input");

icon.addEventListener('click', function () {
  if (input.type == 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  }
});


// 유효성 검사
submitBtn.addEventListener("click", function(event) {
  if(!isUserIdCheck) {
    alert("아이디 중복 검사를 해주세요");
    event.preventDefault();
  }
  else if(!isUserPhoneCheck) {
    alert('휴대폰 중복 검사를 해주세요.');
    event.preventDefault();
  }
  else if(!isUserIdAvailable) {
    alert("사용할 수 없는 아이디 입니다.")  
    event.preventDefault();
  }
  else if(!isUserPhoneAvailable) {
    alert("이미 등록된 연락처 입니다.")
    event.preventDefault();
  }
})


// 폰
let phone = document.querySelector(".form-group #phone");

phone.addEventListener("input", function(event) {
  let input = this.value;
  input = input.replace(/[^0-9]/g, ''); // ^(not), /g(global(전체)), 정규표현식은 /로 시작한다.  0부터 9 사이의 숫자인 문자열을 제외한 모든 문자열을 빈 문자열로 대체한다.

  let formatted = '';

  if (input.length > 3) {
    formatted = input.substring(0, 3) + '-';
    if (input.length > 7) {
      formatted += input.substring(3, 7) + '-' + input.substring(7);
    } else {
      formatted += input.substring(3);
    }
  } else {
    formatted = input;
  }
  
  this.value = formatted;
});

</script>

<!--================End Login Box Area =================-->
