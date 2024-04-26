/**
 *  category
 */

//let num = (cateCount.do?cate='바지')

//$('ul1').find('li span').innerText = ;




				
//Ajax 호출`
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'category.do');
xhtp.send();

xhtp.onload = function() {
	let members = JSON.parse(xhtp.response);
	console.log(members);

	members.forEach(member => {

		$('[data-id]:eq(0)').css('display', 'none');
		let temp = $('[data-id]:eq(0)').clone();
		temp.css('display', 'block');
		temp.css('display', 'inline-block');
		temp.find('#div3 li a').attr('href','getProduct.do?clothNo='+member.clothNo);
		temp.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')

		temp.find('div #p1').text(member.brand);
		temp.find('div #name1').text(member.clothName);
		temp.find('div #p2').text((member.price.toLocaleString()) + "원");

		temp.appendTo('#section1');
	})

}

const xxhtp = new XMLHttpRequest();
xxhtp.open('get', 'cateCount.do');
xxhtp.send();

xxhtp.onload = function() {
	let members = JSON.parse(xxhtp.response);
	console.log(members.shirts);
	$('#ul1').find('span:eq(0)').text(' ('+members.shirts+')' );
	$('#ul1').find('span:eq(1)').text(' ('+members.pants+')' );
	$('#ul1').find('span:eq(2)').text(' ('+members.outer+')' );
	$('#ul1').find('span:eq(3)').text(' ('+members.shoes+')' );

}

/*
$.ajax({
	url:'cateCount.do',
	method: 'get',
	dataType: 'json'
})
.done(function(result){
	console.log(result.shoes)
	$('ul1').find('li span').text(result.shoes);
})
*/

$(document).ready(function() {
	$("input:radio[name=cate]").click(function() {
		if ($("input:radio[name=cate]:checked").val() == "1") {
			const xhtp = new XMLHttpRequest();
			xhtp.open('get', 'catelist.do?cate=' + '상의');
			xhtp.send();

			xhtp.onload = function() {
				let members = JSON.parse(xhtp.response);
				console.log(members);
				let temp = $('[data-id]:eq(0)').clone();
				document.querySelector('#section1').innerHTML = '';

				members.forEach(member => {
					let temp2 = temp.clone();
					temp.css('display', 'none');
					temp2.css('display', 'block');
					temp2.css('display', 'inline-block');
					temp2.find('#div3 li a').attr('href','getProduct.do?clothNo='+member.clothNo);
					temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')
					temp2.find('div #p1').text(member.brand);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

					temp2.appendTo('#section1');
				})
			}
		}
		if ($("input:radio[name=cate]:checked").val() == "2") {
			const xhtp = new XMLHttpRequest();
			xhtp.open('get', 'catelist.do?cate=' + '바지');
			xhtp.send();

			xhtp.onload = function() {
				let members = JSON.parse(xhtp.response);
				console.log(members);
				let temp = $('[data-id]:eq(0)').clone();
				document.querySelector('#section1').innerHTML = '';

				members.forEach(member => {
					let temp2 = temp.clone();
					temp.css('display', 'none');
					temp2.css('display', 'block');
					temp2.css('display', 'inline-block');
					temp2.find('#div3 li a').attr('href','getProduct.do?clothNo='+member.clothNo);
					temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')
					temp2.find('div #p1').text(member.brand);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

					temp2.appendTo('#section1');
				})


			}
		}
			if ($("input:radio[name=cate]:checked").val() == "3") {
			const xhtp = new XMLHttpRequest();
			xhtp.open('get', 'catelist.do?cate=' + '아우터');
			xhtp.send();

			xhtp.onload = function() {
				let members = JSON.parse(xhtp.response);
				console.log(members);
				let temp = $('[data-id]:eq(0)').clone();
				document.querySelector('#section1').innerHTML = '';

				members.forEach(member => {
					let temp2 = temp.clone();
					temp.css('display', 'none');
					temp2.css('display', 'block');
					temp2.css('display', 'inline-block');
					temp2.find('#div3 li a').attr('href','getProduct.do?clothNo='+member.clothNo);
					temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')

					temp2.find('div #p1').text(member.brand);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

					temp2.appendTo('#section1');
				})


			}
		}
			if ($("input:radio[name=cate]:checked").val() == "4") {
			const xhtp = new XMLHttpRequest();
			xhtp.open('get', 'catelist.do?cate=' + '신발');
			xhtp.send();

			xhtp.onload = function() {
				let members = JSON.parse(xhtp.response);
				console.log(members);
				let temp = $('[data-id]:eq(0)').clone();
				document.querySelector('#section1').innerHTML = '';

				members.forEach(member => {
					let temp2 = temp.clone();
					temp.css('display', 'none');
					temp2.css('display', 'block');
					temp2.css('display', 'inline-block');
					temp2.find('#div3 li a').attr('href','getProduct.do?clothNo='+member.clothNo);
					temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')

					temp2.find('div #p1').text(member.brand);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

					temp2.appendTo('#section1');
				})


			}
		}



	})
})


document.querySelector('#searchbutton').addEventListener('click', function(e){
	
	let searchword = document.getElementById('searchdo').value;
	console.log(searchword);
	
	let xxhtp = new XMLHttpRequest();
		xxhtp.open('get', 'searchcate.do?searchword=' +searchword);
		xxhtp.send();

		xxhtp.onload = function() {
			let members = JSON.parse(xxhtp.response);
			console.log(members);
			let temp = $('[data-id]:eq(0)').clone();
			document.querySelector('#section1').innerHTML = '';

			members.forEach(member => {
				let temp2 = temp.clone();
				temp.css('display', 'none');
				temp2.css('display', 'block');
				temp2.css('display', 'inline-block');
				temp2.find('#div3 li a').attr('href','getProduct.do?clothNo='+member.clothNo);
				temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')

				temp2.find('div #p1').text(member.brand);
				temp2.find('div #name1').text(member.clothName);
				temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

				temp2.appendTo('#section1');
			})


		}
		

	
	
})










