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
	//Ajax 호출`
	let xhtp = new XMLHttpRequest(); //첫화면 출력
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

		$("input:radio[name=cate]").click(function() {
			if ($("input:radio[name=cate]:checked").val() == "1") {
				let xhtp = new XMLHttpRequest();
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
						temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);
						temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')
						temp2.find('div #p1').text(member.brand);
						temp2.find('div #name1').text(member.clothName);
						temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

						temp2.appendTo('#section1');
					})


				}
			}
			if ($("input:radio[name=cate]:checked").val() == "2") {
				let xhtp = new XMLHttpRequest();
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
						temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);
						temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')
						temp2.find('div #p1').text(member.brand);
						temp2.find('div #name1').text(member.clothName);
						temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

						temp2.appendTo('#section1');
					})


				}
			}
			if ($("input:radio[name=cate]:checked").val() == "3") {
				let xhtp = new XMLHttpRequest();
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
						temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);
						temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')

						temp2.find('div #p1').text(member.brand);
						temp2.find('div #name1').text(member.clothName);
						temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

						temp2.appendTo('#section1');
					})


				}
			}
			if ($("input:radio[name=cate]:checked").val() == "4") {
				let xhtp = new XMLHttpRequest();
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
						temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + member.clothNo);
						temp2.find('div #img1').attr('src', 'img/cloth/' + member.clothName + '.jpg')

						temp2.find('div #p1').text(member.brand);
						temp2.find('div #name1').text(member.clothName);
						temp2.find('div #p2').text((member.price.toLocaleString()) + "원");

						temp2.appendTo('#section1');
					})


				}
			}



		}),
		document.querySelector('#searchbutton').addEventListener('click', function(e) {

			let searchword = document.getElementById('searchdo').value;
			console.log(searchword);

			let xxhtp = new XMLHttpRequest();
			xxhtp.open('get', 'searchcate.do?searchword=' + searchword);
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
		$("#selectsort").on("change", function() {

			let cate = $("option:selected", this).attr("value");
			console.log(cate);
			let catetext = $("option:selected").text();
			console.log(catetext);

			let cxhtp = new XMLHttpRequest();
			cxhtp.open('get', 'cateSort.do?cate=' + cate);
			cxhtp.send();
			cxhtp.onload = function() {
				let members = JSON.parse(cxhtp.response);
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



		})

})









