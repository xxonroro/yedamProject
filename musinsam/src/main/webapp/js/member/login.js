// const loginForm = document.querySelector(".login_form_inner #contactForm[name='login']");
// const loginBtn = document.querySelector("button.button-login");

// const loginId = document.querySelector(".form-control[name='loginId']");
// const loginPass = document.querySelector(".form-control[name='loginPass']")
// const loginCheck = document.querySelector("input[name='selector']");


// // 로그인 이벤트
// loginBtn.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     if(ValidationLogin()) {
//         fetch("login.do", {
//             method: "post",
//             headers: {"Content-Type": "application/x-www-form-urlencoded"},
//             body: "loginId=" + loginId.value + "&loginPass=" + loginPass.value + "&selector=" + loginCheck.value
//         })
//         .then(response => response.json())
//         .then(result => {       
//             console.log(result);

//             if(result.login == "Success") {
//                 location.href = result.redirectUrl;
//             }
//             else {
//                 const validationMessage = loginBtn.parentNode.querySelector("span");
//                 if(validationMessage) {
//                     validationMessage.remove();
//                 }

//                 const validationSpan = document.createElement("span");
//                 validationSpan.style.color = "red";
//                 validationSpan.innerHTML = "아이디 또는 비밀번호를 잘못 입력했습니다.";
//                 loginBtn.closest("div").prepend(validationSpan);
//             }
//         })
//         .catch(error => {
//             console.error(error);
//         })
//     }
//     else {
//         event.preventDefault();
//     }
// });

// // 유효성 검사
// function ValidationLogin() {
//     if(loginId.value.trim() == "") {
//         const idMessage = loginBtn.parentNode.querySelector("span");
//         if(idMessage) {
//             idMessage.remove();
//         }
        
//         const idSpan = document.createElement("span");
//         idSpan.style.color = "red";
//         idSpan.innerText = "아이디를 입력해 주세요.";
//         loginBtn.closest("div").prepend(idSpan);
//         return false;
//     }
//     else {
//         const idMessage = loginBtn.parentNode.querySelector("span");
//         if(idMessage) {
//             idMessage.remove();
//         }
//     }

//     if(loginPass.value.trim() == "") {
//         const passMessage = loginBtn.parentNode.querySelector("span");
//         if(passMessage) {
//             passMessage.remove();
//         }

//         const passSpan = document.createElement("span");
//         passSpan.style.color = "red";
//         passSpan.innerText = "비밀번호를 입력해 주세요.";
//         loginBtn.closest("div").prepend(passSpan);

//         return false;
//     }
//     else {
//         const passMessage = loginBtn.parentNode.querySelector("span");
//         if(passMessage) {
//             passMessage.remove();
//         }
//     }

//     return true;
// };


