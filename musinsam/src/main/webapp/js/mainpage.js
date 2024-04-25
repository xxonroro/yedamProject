/**
 * 
 */

//Ajax 호출`
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'category.do');
xhtp.send();

xhtp.onload = function() {
	let members = JSON.parse(xhtp.response);
	console.log(members);

	members.forEach(member => {

		$('[data-id]:eq(1)').css('display', 'none');
		/*
		let temp = $('#divContain').clone();
		temp.css('display', 'block');
		temp.css('display', 'inline-block');
		temp.find('#ul1 li a').attr('href','getProduct.do?clothNo='+member.clothNo);
		temp.find('#content img').attr('src', 'img/cloth/' + member.clothName + '.jpg')

		temp.find('#content p:eq(0)').text(member.brand);
		temp.find('#content h4').text(member.clothName);
		temp.find('#content p:eq(1)').text((member.price) + "원");

		temp.appendTo('#section1');
		*/
	})

}



