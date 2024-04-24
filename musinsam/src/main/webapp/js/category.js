/**
 *  category
 */



//Ajax 호출`
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'category.do');
xhtp.send();

xhtp.onload = function(){
	let members = JSON.parse(xhtp.response);
	console.log(members);
	
	members.forEach(member =>{
		$('[data-id]:eq(0)').css('display','none');
		let temp = $('[data-id]:eq(0)').clone();
		temp.css('display', 'block');
		temp.css('display', 'inline-block');
		temp.find('div #img1').attr('src', 'upload/' + member.clothName+'.jpg')
		temp.find('div #p1').text(member.smallCategory);
		temp.find('div #name1').text(member.clothName);
		temp.find('div #p2').text((member.price) + "원");
		
		temp.appendTo('#section1');
	})
	
}






