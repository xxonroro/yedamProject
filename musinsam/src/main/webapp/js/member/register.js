// 입력 요소 이벤트
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

