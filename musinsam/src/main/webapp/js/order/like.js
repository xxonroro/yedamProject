/**
 * 
 */
console.log('start');
 
Number.prototype.formatNumber = function() {
	if (this == 0)
		return 0;
	let regex = /(^[+-]?\d+)(\d{3})/;
	let nstr = (this + '');
	while (regex.test(nstr)) {
		nstr = nstr.replace(regex, '$1' + ',' + '$2');
	}
	return nstr;
};

const wish = {

	list : function(){
		let page = 1;
		let maxPg = 8;

		lvc.likeList(userId, page, maxPg, function(result){
			console.log(result);
			
			//likeList
			result.forEach(like =>{				
				let temp = wish.makeLike(like);				
				temp.appendTo('.row:eq(1)');

				}, function(err) {
					console.log(err);
			})		
		})
		
		svc.cartList(userId, function(result) { //장바구니 아이콘 활성화
			result.forEach(basket => {
				for (let i = 0; i < $('[cloth_id]').length; i++) {
					if ($('[cloth_id]:eq(' + i + ')').attr('cloth_id') == basket.CLOTH_NO) {
						$('[cloth_id]:eq(' + i + ') .ti-shopping-cart').parent().css('background', 'red');
					}
				}
			})
		})
		
		lvc.likeCount(userId, function(result){ //페이징
			wish.makePage(result);
		})
		
	},
	makeLike : function(like){ //본문
	
		let temp = $('.row:eq(1) div:eq(0)').clone();

		temp.attr('cloth_id', like.CLOTH_NO);
		temp.removeAttr('style');

		temp.find('img').attr('src', 'img/cloth/' + like.CLOTH_NAME + '.jpg');
		temp.find('.like_chk').prop('checked', false);

		temp.find('h4 a').text(like.CLOTH_NAME);
		temp.find('h4 a').css('word-break', 'keep-all');
		temp.find('h4 a').css('overflow-wrap', 'break-word');

		temp.find('.card-body p:eq(0)').text(like.BRAND);
		if (like.DISCOUNT_RATE > 0) {
			temp.find('.card-body p:eq(1)').before('<s><i>' + like.PRICE + '원 </i></s>');
		}
		temp.find('.card-body p:eq(1)').text(Math.round((like.PRICE * (1 - like.DISCOUNT_RATE) / 100)).formatNumber() * 100 + '원');

		temp.find('.card-product__title a').attr('onclick', 'javascript:wish.clickProduct(' + like.CLOTH_NO + ');');
		temp.find('.ti-search').parent().attr('onclick', 'javascript:wish.clickProduct(' + like.CLOTH_NO + ');');
		temp.find('.ti-shopping-cart').parent().attr('onclick', 'javascript:wish.clickCart(' + like.CLOTH_NO + ');');
		temp.find('.ti-heart').parent().css('background', 'red');
		temp.find('.ti-heart').parent().attr('onclick', 'javascript:wish.clickLike(' + like.CLOTH_NO + ');');
		return temp;
		
	},
	
	makePage : function(result){ //페이징

		let maxPg = parseInt($('span.current:eq(0)').text());
		let page = 1;

		let totalCnt = result.totalCount;
		let startPage, endPage;
		let next, prev;
		let realEnd = Math.ceil(totalCnt / maxPg);
		

		endPage = Math.ceil(page / 5) * 5;
		startPage = endPage - 4;
		endPage = endPage > realEnd ? realEnd : endPage;

		next = endPage < realEnd ? true : false
		prev = startPage > 1;


			let pv = $('[aria-label=Previous]').parent().clone();
			pv.attr('data-page', 'Previous');
			pv.css('display', '');
			pv.attr('onclick', 'javascript:wish.changePrev()');
			pv.appendTo('.pagination');

		for (let pg = startPage; pg <= endPage; pg++) {
			let liTag = $('.page-item:eq(1)').clone();
			let aTag = $('.page-item:eq(1)').children().clone();
			aTag.text(pg);
			aTag.attr('data-page', pg);
			aTag.attr('onclick', 'javascript:wish.changePg('+pg+')');
			liTag.css('display', '');
			liTag.find('a:first').remove();
			liTag.attr('class', 'page-item');
			liTag.appendTo('.pagination');
			aTag.appendTo(liTag);
		}

			let nx = $('[aria-label=Next]').parent().clone();
			nx.attr('data-page', 'Next');
			nx.css('display', '');
			nx.attr('onclick', 'javascript:wish.changeNext()');
			nx.appendTo('.pagination');

			$('[data-page=1]').parent().attr('class', 'page-item active');
			
			
		console.log('maxPg :' + maxPg);
		console.log('totalCnt :' + totalCnt);
		console.log('next :' + next);
		console.log('prev :' + prev);
		console.log('realEnd :' + realEnd);
		console.log('endPage :' + endPage);
		console.log('startPage :' + startPage);

		//pagination 이동
		//document.querySelectorAll('.pagination>a').forEach(item => {
		//item.addEventListener('click', function(e) {
		//e.preventDefault();
		//page = item.dataset.page;
		//svc.replyList({ bno, page }, replyListFnc2);
		//})
		//})


	},
	
	changePg(no){
		
		let lng = $('[cloth_id]').length;
		for (let i = 0; i < lng; i++) {
			$('.row:eq(1) [cloth_id]:eq(0)').remove();
		}
		$('.like_chkAll :checkbox').prop('checked', false);
		$('[aria-label=Num]').parent().attr('class', 'page-item');
		$('[data-page='+no+']').parent().attr('class', 'page-item active');
		
		let page = no;
		let maxPg = parseInt($('span.current:eq(0)').text());
		
		
		lvc.likeList(userId, page, maxPg, function(result) {
			//likeList
			result.forEach(like => {
				let temp = wish.makeLike(like);
				temp.appendTo('.row:eq(1)');

			}, function(err) {
				console.log(err);
			})
		})
	},
	
	changeChkAll(){ //전체 선택
		if($('.like_chkAll input:checkbox').is(':checked') == true){
			$('.like_chk').prop('checked', true);
			
		}else{
			$('.like_chk').prop('checked', false);
		}
	},
	
	changeChk(){ //단건 선택
		if($('.like_chk:checked').length == $('.like_chk').length){
			$('.like_chkAll :checkbox').prop('checked', true);
		}else{
			$('.like_chkAll :checkbox').prop('checked', false);
		}
	},
	
	delCart(){ //삭제

		var delNo = new Array();

		for(let i = 0; i < $('[cloth_id]').length ; i++){
			if ($('[cloth_id]:eq("' + i +'") input:checkbox').is(':checked') == true) {
				delNo.push($('[cloth_id]:eq("' + i +'")').attr('cloth_id'));
			}
		}
			
		lvc.likeRemove(userId, delNo, (result) => {
			if (result.retCode == "Success") {
				
				let lng = $('[cloth_id]').length;
				for(let i =0; i < lng ; i++){
					$('.row:eq(1) [cloth_id]:eq(0)').remove();
				}
				$('.like_chkAll :checkbox').prop('checked', false);
				
				let page = 1;
				let maxPg = parseInt($('span.current:eq(0)').text());
				lvc.likeList(userId, page, maxPg, function(result) {
					//likeList
					result.forEach(like => {
						let temp = wish.makeLike(like);
						temp.appendTo('.row:eq(1)');

					}, function(err) {
						console.log(err);
					})
				})
			}
		},
		(err) => { })
	},
	
	changeMaxPg(){ //한 페이지 목록 건수
		let page = 1;
		let maxPg = parseInt($('span.current:eq(0)').text());
		let lng = $('[cloth_id]').length
		
		$('.like_chkAll :checkbox').prop('checked', false);
		
		$('[data-page]').remove();

		
		if(maxPg != lng){
			for(let i =0; i < lng ; i++){
			$('.row:eq(1) [cloth_id]:eq(0)').remove();}
			
			lvc.likeList(userId, page, maxPg, function(result) {
				//likeList
				result.forEach(like => {
					let temp = wish.makeLike(like);
					temp.appendTo('.row:eq(1)');

				}, function(err) {
					console.log(err);
				})
			})
			
			lvc.likeCount(userId, function(result) { //페이징
				wish.makePage(result);
			})
		}
	},
	changePrev(){
		let pgNo = parseInt($('.page-item.active [data-page]').text());
		if(pgNo == 1){
			wish.changePg(1);
		}else{
			wish.changePg(pgNo - 1);
		}
	},
	changeNext(){
		let pgNo = parseInt($('.page-item.active [data-page]').text());
		
		lvc.likeCount(userId, function(result){ //페이징
			let maxPg = parseInt($('span.current:eq(0)').text());
			let page = 1;

			let totalCnt = result.totalCount;
			let endPage;
			let realEnd = Math.ceil(totalCnt / maxPg);


			endPage = Math.ceil(page / 5) * 5;
			endPage = endPage > realEnd ? realEnd : endPage;
			
			if (pgNo == endPage) {
				wish.changePg(endPage);
			} else {
				wish.changePg(pgNo + 1);
			}
		})
		
	},
	
	clickCart(no){ // 장바구니 아이콘 클릭
		if($('[cloth_id="'+no+'"] .ti-shopping-cart').parent().attr('style') != 'background: red;'){
			let cnt = 1;
			let bvo = {cnt, userId, no}

			lvc.cartInsertIcon(bvo, (result) => {
				if (result.retCode == "Success") {
					$('[cloth_id="'+no+'"] .ti-shopping-cart').parent().css('background','red');
				}
			},(err) => { })
			
		}else{
			let bvo = {userId, no}
			lvc.cartRemoveIcon(bvo, (result) => {
				if (result.retCode == "Success") {
					$('[cloth_id="'+no+'"] .ti-shopping-cart').parent().removeAttr('style');
				}
			},(err) => { })
		}
	},
	
	clickLike(no){ // 찜목록 아이콘 클릭
		if($('[cloth_id="'+no+'"] .ti-heart').parent().attr('style') != 'background: red;'){
			
			let lvo={userId, no};

			lvc.likeInsert(lvo, (result) => {
				if (result.retCode == "Success") {
				}
			},(err) => { })
			
			$('[cloth_id="'+no+'"] .ti-heart').parent().css('background','red');
		
		}else{
			let num = new Array();
			num.push(no);
			
			lvc.likeRemove(userId, no, (result) => {
			if (result.retCode == "Success") {
			}
			},(err) => { })
			
			$('[cloth_id="'+no+'"] .ti-heart').parent().removeAttr('style');
		}
	},
	
	clickProduct(no){ //상세페이지
		$("<a>").prop({
            target: "_blank",
            href: "/musinsam/getProduct.do?clothNo=" + no
        })[0].click();
	}
}
wish.list();

