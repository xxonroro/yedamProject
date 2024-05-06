/**
 *  category
 */


function makeprod(page) {
	let bigCategory2 = $("input:radio[name=cate]:checked").length > 0 ? $("input:radio[name=cate]:checked").val() : '' // 상의 바지 아우터 신발
	console.log(bigCategory2);

	let orderby2 = $("option:selected:eq(0)").val(); //정렬 
	console.log(orderby2);

	let searchword = document.getElementById('searchdo').value;
	let prod = $("option:selected:eq(1)").val();

	let xxhtp = new XMLHttpRequest();
	xxhtp.open('get', 'cateSort2.do?bigCategory=' + bigCategory2 + '&orderby=' + orderby2 + '&searchword=' + searchword + '&page=' + page + '&prod=' + prod);
	xxhtp.send();
	xxhtp.onload = function() {
		let clothes = JSON.parse(xxhtp.response);
		console.log(clothes.list);
		console.log(clothes.pg);


		let temp = $('[data-id]:eq(0)').clone();
		document.querySelector('#section1').innerHTML = '';

		clothes.list.forEach(cloth => {
			let temp2 = temp.clone();
			temp.css('display', 'none');
			temp2.css('display', 'block');
			temp2.css('display', 'inline-block');

			temp2.find('div #img1').attr('src', 'img/cloth/' + cloth.clothName + '.jpg')
			temp2.find('div #p1').text(cloth.brand);
			temp2.find('div #name1').text(cloth.clothName);
			temp2.attr('cloth_id', cloth.clothNo);

			if (cloth.discountRate != 0) {
				temp2.find('.card-body p:eq(1)').text((cloth.price).toLocaleString() + ' 원');
				temp2.find('.card-body p:eq(2)').text(Math.round((cloth.price * (1 - cloth.discountRate) / 10) * 10).toLocaleString() + '원');
			} else {
				temp2.find('.card-body p:eq(1)').text(' ');
				temp2.find('.card-body p:eq(2)').text((cloth.price).toLocaleString() + '원');
			}

			//temp2.find('div #p2').text((cloth.price.toLocaleString()) + "원");

			temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + cloth.clothNo);
			temp2.find('.ti-shopping-cart').parent().attr('onclick', 'javascript:wish.clickCart(' + cloth.clothNo + ');');
			temp2.find('.ti-heart').parent().css('background', 'red');
			temp2.find('.ti-heart').parent().attr('onclick', 'javascript:wish.clickLike(' + cloth.clothNo + ');');

			temp2.appendTo('#section1');
		})

		//페이지 호출
		let pagetag = "";

		let paging = clothes.pg; //onclick="movepage(${paging.startpage-1})
		if (paging.prev) {
			pagetag = '<a href ="#" onclick="makeprod(' + (paging.startPage - 1) + ')">&laquo;</a>';
		}

		for (let p = paging.startPage; p <= paging.endPage; p++) {
			let url = 'cateSort2.do?bigCategory=' + bigCategory2 + '&orderby=' + orderby2 + '&searchword=' + searchword + '&page=' + p + '&prod=' + prod;
			if (p == paging.page) {
				pagetag += '<a href ="#" onclick="makeprod(' + p + ')" class="active">' + p + '</a>';
			} else {
				pagetag += '<a href ="#" onclick="makeprod(' + p + ')" >' + p + '</a>'; //onclick="makeprod2('+p+'})"
			}

		}
		if (paging.next) {
			pagetag += '<a href ="#" onclick="makeprod(' + (paging.endPage + 1) + ')">&raquo;</a>'
		}


		$('#page').html(pagetag);

	}
}


function makeprod2(page) {
	let bigCategory2 = $("input:radio[name=cate]:checked").length > 0 ? $("input:radio[name=cate]:checked").val() : '' // 상의 바지 아우터 신발
	console.log(bigCategory2);

	let orderby2 = $("option:selected:eq(0)").val();; // 정렬
	console.log(orderby2);

	let searchword = document.getElementById('searchdo').value;
	let prod2 = $("option:selected:eq(1)").val();

	let xxhtp = new XMLHttpRequest();
	xxhtp.open('get', 'cateSort.do?bigCategory=' + bigCategory2 + '&orderby=' + orderby2 + '&searchword=' + searchword + '&page=' + page + '&prod=' + prod2);
	xxhtp.send();
	xxhtp.onload = function() {
		let clothes = JSON.parse(xxhtp.response);
		console.log(clothes.list);
		console.log(clothes.pg);


		let temp = $('[data-id]:eq(0)').clone();
		document.querySelector('#section1').innerHTML = '';

		clothes.list.forEach(cloth => {
			let temp2 = temp.clone();
			temp.css('display', 'none');
			temp2.css('display', 'block');
			temp2.css('display', 'inline-block');

			temp2.find('div #img1').attr('src', 'img/cloth/' + cloth.clothName + '.jpg')
			temp2.find('div #p1').text(cloth.brand);
			temp2.find('div #name1').text(cloth.clothName);

			if (cloth.discountRate != 0) {
				temp2.find('.card-body p:eq(1)').text((cloth.price).toLocaleString() + ' 원');
				temp2.find('.card-body p:eq(2)').text(Math.round((cloth.price * (1 - cloth.discountRate) / 10) * 10).toLocaleString() + '원');
			} else {
				temp2.find('#p2').text(' ');
				temp2.find('.card-body p:eq(2)').text((cloth.price).toLocaleString() + '원');
			}
			temp2.find('div #p2').text((cloth.price.toLocaleString()) + "원");
			temp2.attr('cloth_id', cloth.clothNo);
			temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + cloth.clothNo);

			temp2.find('.ti-shopping-cart').parent().attr('onclick', 'javascript:wish.clickCart(' + cloth.clothNo + ');');
			temp2.find('.ti-heart').parent().css('background', 'red');
			temp2.find('.ti-heart').parent().attr('onclick', 'javascript:wish.clickLike(' + cloth.clothNo + ');');

			temp2.appendTo('#section1');
		})

		//페이지 호출
		let pagetag = "";

		let paging = clothes.pg; //onclick="movepage(${paging.startpage-1})
		if (paging.prev) {
			pagetag = '<a href ="#" onclick="makeprod2(' + (paging.startPage - 1) + ')">&laquo;</a>';
		}

		for (let p = paging.startPage; p <= paging.endPage; p++) {
			//let url = 'cateSort2.do?bigCategory=' + bigCategory2 + '&orderby=' + orderby2 + '&searchword=' + searchword + '&page=' + p +'&prod='+prod;
			if (p == paging.page) {
				pagetag += '<a href ="#" onclick="makeprod2(' + p + ')" class="active">' + p + '</a>';
			} else {
				pagetag += '<a href ="#" onclick="makeprod2(' + p + ')" >' + p + '</a>'; //onclick="makeprod2('+p+'})"
			}

		}
		if (paging.next) {
			pagetag += '<a href ="#" onclick="makeprod2(' + (paging.endPage + 1) + ')">&raquo;</a>'
		}


		$('#page').html(pagetag);

	}
}

function makeprod3(page) {
	let orderby = $("option:selected:eq(0)").val(); //정렬
	let searchword = document.getElementById('searchdo').value;
	console.log(searchword);
	let prod = $("option:selected:eq(1)").val();

	let sehtp = new XMLHttpRequest();
	sehtp.open('get', 'searchcate.do?searchword=' + searchword + '&orderby=' + orderby + '&page=' + page + '&prod=' + prod);
	sehtp.send();

	sehtp.onload = function() {
		let clothes = JSON.parse(sehtp.response);
		console.log(clothes);
		let temp = $('[data-id]:eq(0)').clone();
		document.querySelector('#section1').innerHTML = '';

		clothes.list.forEach(cloth => {
			let temp2 = temp.clone();
			temp.css('display', 'none');
			temp2.css('display', 'block');
			temp2.css('display', 'inline-block');

			temp2.find('div #img1').attr('src', 'img/cloth/' + cloth.clothName + '.jpg')
			temp2.find('div #p1').text(cloth.brand);
			temp2.find('div #name1').text(cloth.clothName);

			if (cloth.discountRate != 0) {
				temp2.find('.card-body p:eq(1)').text((cloth.price).toLocaleString() + ' 원');
				temp2.find('.card-body p:eq(2)').text(Math.round((cloth.price * (1 - cloth.discountRate) / 10) * 10).toLocaleString() + '원');
			} else {
				temp2.find('#p2').text(' ');
				temp2.find('.card-body p:eq(2)').text((cloth.price).toLocaleString() + '원');
			}
			temp2.find('div #p2').text((cloth.price.toLocaleString()) + "원");
			temp2.attr('cloth_id', cloth.clothNo);
			temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + cloth.clothNo);

			temp2.find('.ti-shopping-cart').parent().attr('onclick', 'javascript:wish.clickCart(' + cloth.clothNo + ');');
			temp2.find('.ti-heart').parent().css('background', 'red');
			temp2.find('.ti-heart').parent().attr('onclick', 'javascript:wish.clickLike(' + cloth.clothNo + ');');

			temp2.appendTo('#section1');
			//document.getElementById('searchdo').value = ''; //초기화
		})

		//페이지 호출
		let pagetag = "";

		let paging = clothes.pg; //onclick="movepage(${paging.startpage-1})
		if (paging.prev) {
			pagetag = '<a href ="#" onclick="makeprod3(' + (paging.startPage - 1) + ')">&laquo;</a>';
		}

		for (let p = paging.startPage; p <= paging.endPage; p++) {
			//let url = 'cateSort2.do?bigCategory=' + bigCategory2 + '&orderby=' + orderby2 + '&searchword=' + searchword + '&page=' + p;
			if (p == paging.page) {
				pagetag += '<a href ="#" onclick="makeprod3(' + p + ')" class="active">' + p + '</a>';
			} else {
				pagetag += '<a href ="#" onclick="makeprod3(' + p + ')" >' + p + '</a>'; //onclick="makeprod2('+p+'})"
			}

		}
		if (paging.next) {
			pagetag += '<a href ="#" onclick="makeprod3(' + (paging.endPage + 1) + ')">&raquo;</a>'
		}


		$('#page').html(pagetag);
	}
}

function makeprod4(page) {  //브랜드 카테고리
	let brand = $("input:radio[name=brand]:checked").length > 0 ? $("input:radio[name=brand]:checked").val() : '' // 상의 바지 아우터 신발
	console.log(brand);

	let orderby2 = $("option:selected:eq(0)").val();; // 정렬
	console.log(orderby2);

	let searchword = document.getElementById('searchdo').value;
	let prod2 = $("option:selected:eq(1)").val();

	let xxhtp = new XMLHttpRequest();
	xxhtp.open('get', 'brandSort.do?brand=' + brand + '&orderby=' + orderby2 + '&searchword=' + searchword + '&page=' + page + '&prod=' + prod2);
	xxhtp.send();
	xxhtp.onload = function() {
		let clothes = JSON.parse(xxhtp.response);
		console.log(clothes.list);
		console.log(clothes.pg);


		let temp = $('[data-id]:eq(0)').clone();
		document.querySelector('#section1').innerHTML = '';

		clothes.list.forEach(cloth => {
			let temp2 = temp.clone();
			temp.css('display', 'none');
			temp2.css('display', 'block');
			temp2.css('display', 'inline-block');

			temp2.find('div #img1').attr('src', 'img/cloth/' + cloth.clothName + '.jpg')
			temp2.find('div #p1').text(cloth.brand);
			temp2.find('div #name1').text(cloth.clothName);

			if (cloth.discountRate != 0) {
				temp2.find('.card-body p:eq(1)').text((cloth.price).toLocaleString() + ' 원');
				temp2.find('.card-body p:eq(2)').text(Math.round((cloth.price * (1 - cloth.discountRate) / 10) * 10).toLocaleString() + '원');
			} else {
				temp2.find('#p2').text(' ');
				temp2.find('.card-body p:eq(2)').text((cloth.price).toLocaleString() + '원');
			}
			temp2.find('div #p2').text((cloth.price.toLocaleString()) + "원");
			temp2.attr('cloth_id', cloth.clothNo);
			temp2.find('#div3 li a').attr('href', 'getProduct.do?clothNo=' + cloth.clothNo);

			temp2.find('.ti-shopping-cart').parent().attr('onclick', 'javascript:wish.clickCart(' + cloth.clothNo + ');');
			temp2.find('.ti-heart').parent().css('background', 'red');
			temp2.find('.ti-heart').parent().attr('onclick', 'javascript:wish.clickLike(' + cloth.clothNo + ');');

			temp2.appendTo('#section1');
		})

		//페이지 호출
		let pagetag = "";

		let paging = clothes.pg; //onclick="movepage(${paging.startpage-1})
		if (paging.prev) {
			pagetag = '<a href ="#" onclick="makeprod2(' + (paging.startPage - 1) + ')">&laquo;</a>';
		}

		for (let p = paging.startPage; p <= paging.endPage; p++) {
			//let url = 'cateSort2.do?bigCategory=' + bigCategory2 + '&orderby=' + orderby2 + '&searchword=' + searchword + '&page=' + p +'&prod='+prod;
			if (p == paging.page) {
				pagetag += '<a href ="#" onclick="makeprod2(' + p + ')" class="active">' + p + '</a>';
			} else {
				pagetag += '<a href ="#" onclick="makeprod2(' + p + ')" >' + p + '</a>'; //onclick="makeprod2('+p+'})"
			}

		}
		if (paging.next) {
			pagetag += '<a href ="#" onclick="makeprod2(' + (paging.endPage + 1) + ')">&raquo;</a>'
		}


		$('#page').html(pagetag);

	}
}


$(document).ready(function() { //시작

	makeprod(1);


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
			$("input:radio[name=brand]:checked").prop('checked', false);
			makeprod2(1)

		}),
		// 브랜드 선택
		$("input:radio[name=brand]").click(function() {
			$("input:radio[name=cate]:checked").prop('checked', false);
			makeprod4(1)

		}),

		// 검색
		document.querySelector('#searchbutton').addEventListener('click', function(e) {

			$("input:radio[name=cate]:checked").prop('checked', false);
			makeprod3(1);
			//let bigCategory2 = '';
			//console.log(bigCategory2);


		}),
		//정렬
		$("#selectsort").on("change", function() {

			let bigCategory = $("input:radio[name=cate]:checked").length > 0 ? $("input:radio[name=cate]:checked").val() : '' // 상의 바지 아우터 신발
			let brand = $("input:radio[name=brand]:checked").length > 0 ? $("input:radio[name=brand]:checked").val() : ''
			if (bigCategory != '') {
				makeprod2(1)
			} if (brand != '') {
				makeprod4(1);
			}
			else {
				makeprod(1);
			}



		}),
		//화면에 출력하는 상품수
		$("#selectsort2").on("change", function() {
			let a = $("option:selected:eq(1)").val();
			console.log(a);
			let bigCategory = $("input:radio[name=cate]:checked").length > 0 ? $("input:radio[name=cate]:checked").val() : '' // 상의 바지 아우터 신발
			if (bigCategory != '') {
				makeprod2(1)
			} else {
				makeprod(1);
			}

		})

})









