const modifyBtn = document.querySelector(".form-group button");
const inputs1 = document.querySelectorAll(".form-group input");


modifyBtn.addEventListener("click", function(event) {
    let isValid = true;

    Array.from(inputs1).forEach(input => {
        if(input.value.trim() == "") {
            if(isValid) {
                alert("모든 입력 필드를 채워주세요.")
                input.focus();
                isValid = false;
                event.preventDefault();
            }
            
        }
    });
});
