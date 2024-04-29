const modifyBtn = document.querySelector(".form-group button");
const inputs = document.querySelectorAll(".form-group input");

console.log(inputs);
console.log(modifyBtn);

modifyBtn.addEventListener("click", function(event) {
    let isValid = true;

    Array.from(inputs).forEach(input => {
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
