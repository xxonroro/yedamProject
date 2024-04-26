/**
 * 
 */

//let temp = $('#divimg').clone();
//$('#divimg').css('display', 'none');
//temp.css('display', 'block');
//temp.appendTo('#sectionMain1');


/*
//Ajax 호출`
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'category.do');
xhtp.send();

xhtp.onload = function() {
	let members = JSON.parse(xhtp.response);
	console.log(members);
	$('#bestSellerCarousel #maind2').css('display', 'none');
	let temp2 = $('#bestSellerCarousel #maind2').clone();
	temp2.css('display', 'block');
	//temp2.css('display', 'inline-block');
	
	temp2.appendTo('#maind');
	
	
	

	//temp2.appendTo(temp1);
	//temp1.appendTo('#contain');
	members.forEach(member => {
		
		//let temp = $('#bestSellerCarousel #maind').clone();
		//temp.find('#content p').text(member.price);
		//temp.find('#imgsection img').attr('src', 'img/cloth/' + member.clothName + '.jpg')
		//temp.appendTo('#bestSellerCarousel');
		//$('[data-id]:eq(1)').css('display', 'none');
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
		///
		
		
		
	})

}

*/


//Ajax 호출`
const addhtp = new XMLHttpRequest();
addhtp.open('get', 'randomMain.do');
addhtp.send();

addhtp.onload = function() {
	let members = JSON.parse(addhtp.response);
	console.log(members);

	//temp.css('display', 'block');
	//temp.css('display', 'inline-block');
	//temp.appendTo('#sectionMain1');
	console.log(members[0].clothName);
	$('#divimg1 img').attr('src', 'img/cloth/' + members[0].clothName + '.jpg');
	//$('#divimg1 img').attr('height', '300px');
	$('#divimg1 h3').text(members[0].clothName);
	$('#divimg1 p').text(members[0].smallCategory);
	$('#divimg1 a').attr('href','getProduct.do?clothNo='+members[0].clothNo);
	
	$('#divimg2 img').attr('src', 'img/cloth/' + members[1].clothName + '.jpg');
	//$('#divimg2 img').attr('height', '300px');
	$('#divimg2 h3').text(members[1].clothName);
	$('#divimg2 p').text(members[1].smallCategory);
	$('#divimg2 a').attr('href','getProduct.do?clothNo='+members[1].clothNo);
	
	$('#divimg3 img').attr('src', 'img/cloth/' + members[2].clothName + '.jpg');
	//$('#divimg3 img').attr('height', '300px');
	$('#divimg3 h3').text(members[2].clothName);
	$('#divimg3 p').text(members[2].smallCategory);
	$('#divimg3 a').attr('href','getProduct.do?clothNo='+members[2].clothNo);
	
	$('#divimg4 img').attr('src', 'img/cloth/' + members[3].clothName + '.jpg');
	//$('#divimg4 img').attr('height', '300px');
	$('#divimg4 h3').text(members[3].clothName);
	$('#divimg4 p').text(members[3].smallCategory);
	$('#divimg4 a').attr('href','getProduct.do?clothNo='+members[3].clothNo);
	/*
	members.forEach(member => {
		
		//$('#divimg').css('display', 'none');
		let temp =$('#divimg div:eq('+i+')' );
		//temp.css('display', 'block');
		
		//temp.css('display', 'inline-block');
		temp.find('img').attr('src', 'img/cloth/' + member.clothName + '.jpg')
		temp.find('h3').text(member.clothName);
		i++;
		//temp.find('#divimg li a').attr('href','getProduct.do?clothNo='+member.clothNo);
		//temp.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')
		//$('#divimg').find('div img').attr('src', 'img/cloth/' + member.clothName + '.jpg')
		//$('#divimg').find('div h3').text(member.clothName);
		//temp.find('div #name1').text(member.clothName);
		//temp.find('div #p2').text((member.price) + "원");

		//temp.appendTo('#sectionMain1');
		*/

}








