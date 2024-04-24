/**
 *  category
 */

function category_list(){
	$.ajax({
		url:""
	})
}

//Ajax 호출`
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'category.do');
xhtp.send();

xhtp.onload = function(){
	let members = JSON.parse(xhtp.response);
	console.log(members);
	
	members.forEach(member =>{
		let temp = $('[data-id]:eq(0)').clone();
		temp.css('display', 'block');
		temp.find('#div2.img img').attr('src', 'upload/' + member.clothName+'.jpg')
		//let p = document.createElement('p');
		//p.innerText = member.clothName;
		//document.querySelector('.card-body').appendChild(p);
		
		//temp.find('').text(member.price);
		//let span = document.createElement('span');
		
		temp.appendTo('#section1');
	})
	
}