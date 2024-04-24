let inputs = document.querySelectorAll(".form-group input");

inputs.forEach(input => {
    const originPlaceholder = input.getAttribute("placeholder");

    // input 요소로 포커스가 들어왔을 때,
    input.addEventListener("focus", function(event) {
        this.setAttribute("placeholder", "");
    })

    // 포커스를 받았던 input 요소가 포커스를 잃었을 때
    input.addEventListener("blur", function(event) {
        this.setAttribute("placeholder", originPlaceholder);
    })
});

let icon = document.querySelector(".form-group i");

let input = icon.closest(".form-group").querySelector("input");

icon.addEventListener('click', function() {
  if (input.type == 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  }
});