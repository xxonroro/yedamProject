/**
 *  category
 */

//let num = (cateCount.do?cate='바지')

//$('ul1').find('li span').innerText = ;

/*
function makeCategory() { //지우고 조건에 맞게 다시 그리기
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
			temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);
			temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')
			temp2.find('div #p1').text(member.brand);
			temp2.find('div #name1').text(member.clothName);
			temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

			temp2.appendTo('#section1');
		})

	}
}
*/






$(document).ready(function() {
	const orderby = $("option:selected").val(); // order by 뒤
	const bigCategory = $("input:radio[name=cate]:checked").length > 0 ? $("input:radio[name=cate]:checked").val() : '' // 상의 바지 아우터 신발
	let searchword = document.getElementById('searchdo').value;
	
	console.log(orderby);
	console.log(bigCategory);
	//Ajax 호출`
	let xhtp = new XMLHttpRequest(); //첫화면 출력
	xhtp.open('get', 'cateSort2.do?bigCategory=' + bigCategory + '&orderby=' + orderby + '&searchword=' + searchword);
	xhtp.send();

	xhtp.onload = function() {
		let members = JSON.parse(xhtp.response);
		console.log(members);

		members.forEach(member => {

			$('[data-id]:eq(0)').css('display', 'none');
			let temp = $('[data-id]:eq(0)').clone();
			temp.css('display', 'block');
			temp.css('display', 'inline-block');
			temp.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);
			temp.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')

			temp.find('div #p1').text(member.brand);
			temp.find('div #name1').text(member.clothName);
			temp.find('div #p2').text((member.price.toLocaleString()) + "원");

			temp.appendTo('#section1');
		})

	};

	const xxhtp = new XMLHttpRequest();
	xxhtp.open('get', 'cateCount.do');
	xxhtp.send();

	xxhtp.onload = function() {
		let clothes = JSON.parse(xxhtp.response);
		console.log(clothes.shirts);
		$('#ul1').find('span:eq(0)').text(' (' + clothes.shirts + ')');
		$('#ul1').find('span:eq(1)').text(' (' + clothes.pants + ')');
		$('#ul1').find('span:eq(2)').text(' (' + clothes.outer + ')');
		$('#ul1').find('span:eq(3)').text(' (' + clothes.shoes + ')');

	},

		// 카테고리 선택
		$("input:radio[name=cate]").click(function() {

			let bigCategory2 = $("input:radio[name=cate]:checked").length > 0 ? $("input:radio[name=cate]:checked").val() : '' // 상의 바지 아우터 신발
			console.log(bigCategory2);

			let orderby2 = $("option:selected").val();; // 상의 바지 아우터 신발
			console.log(orderby2);

			let searchword = document.getElementById('searchdo').value;

			let xxhtp = new XMLHttpRequest();
			xxhtp.open('get', 'cateSort2.do?bigCategory=' + bigCategory2 + '&orderby=' + orderby2 + '&searchword=' + searchword);
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

					temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')
					temp2.find('div #p1').text(member.brand);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price.toLocaleString()) + "원");
					temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);

					temp2.appendTo('#section1');
				})


			}

		}),
		// 검색
		document.querySelector('#searchbutton').addEventListener('click', function(e) {

			$("input:radio[name=cate]:checked").prop('checked', false);

			//let bigCategory2 = '';
			//console.log(bigCategory2);
			let orderby2 = $("option:selected").val();; // 상의 바지 아우터 신발
			let searchword = document.getElementById('searchdo').value;
			console.log(searchword);

			let xxhtp = new XMLHttpRequest();
			xxhtp.open('get', 'searchcate.do?searchword=' + searchword +'&orderby='+orderby2);
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
					temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);
					temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')

					temp2.find('div #p1').text(member.brand);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

					temp2.appendTo('#section1');
				})


			}

		}),
		//정렬
		$("#selectsort").on("change", function() {

			let bigCategory2 = $("input:radio[name=cate]:checked").length > 0 ? $("input:radio[name=cate]:checked").val() : '' // 상의 바지 아우터 신발
			console.log(bigCategory2);

			let orderby2 = $("option:selected").val();; // 상의 바지 아우터 신발
			console.log(orderby2);

			let searchword = document.getElementById('searchdo').value;

			let xxhtp = new XMLHttpRequest();
			xxhtp.open('get', 'cateSort2.do?bigCategory=' + bigCategory2 + '&orderby=' + orderby2 + '&searchword=' + searchword);
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

					temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')
					temp2.find('div #p1').text(member.brand);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price.toLocaleString()) + "원");
					temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);

					temp2.appendTo('#section1'); //
				})


			}


		})

})









