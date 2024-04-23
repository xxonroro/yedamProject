const service = {
  insertMember(data = {}, successCall, errorCall) {
    fetch("memberRegistration.do", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "userId=" + data[0] + "&userPass=" + data[1] + "&username=" + data[2] + "&birthday=" + data[3] + "&address=" + data[4] + "&phone=" + data[5],
    })
    .then((response) => response.json())
    .then(successCall)
    .catch(errorCall);
  },
};

const btn = document.querySelector(".form-group button");
const inputs = document.querySelectorAll(".form-group input");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  let cvo = Array.from(inputs).map((element) => {
    return element.value;
  });

  service.insertMember(cvo, (result) => {
	if(result.retCode == "Success") {
    	location.href = "main.do";	
  	} else {
    alert("회원 가입을 실패했습니다.")
  }
  }, (error) => console.log(error)
);
});
