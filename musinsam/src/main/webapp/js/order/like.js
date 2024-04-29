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

function likeListFnc(result){
	
				console.log(result);
	result.forEach(like => {
				let temp = $('.row:eq(1) div:eq(0)').clone();

				temp.attr('cloth_id', like.CLOTH_NO);
				temp.css('display', 'block');
				
				temp.find('img').attr('src', 'img/cloth/' + like.CLOTH_NAME + '.jpg');
				temp.find('.like_chk').prop('checked', false);

				temp.find('h4 a').text(like.CLOTH_NAME);
				temp.find('h4 a').css('word-break', 'keep-all');
				temp.find('h4 a').css('overflow-wrap', 'break-word');
				
				temp.find('.card-body p:eq(0)').text(like.BRAND);
				if (like.DISCOUNT_RATE > 0) {
					temp.find('.card-body p:eq(1)').before('<s><i>' + like.PRICE + '원 </i></s>');
				}
				temp.find('.card-body p:eq(1)').text(Math.round((like.PRICE * (1 - like.DISCOUNT_RATE) / 10) * 10).formatNumber() + '원');
		
				temp.find('.card-product__title a').attr('onclick','javascript:wish.clickProduct('+like.CLOTH_NO+');');
				temp.find('.ti-search').parent().attr('onclick','javascript:wish.clickProduct('+like.CLOTH_NO+');');
				temp.find('.ti-shopping-cart').parent().attr('onclick','javascript:wish.clickCart('+like.CLOTH_NO+');');
				temp.find('.ti-heart').parent().css('background','red');
				temp.find('.ti-heart').parent().attr('onclick','javascript:wish.clickLike('+like.CLOTH_NO+');');
				
				
				temp.appendTo('.row:eq(1)');
				
				
			},(err) => { })
			
			svc.cartList(result.USER_ID, function(result){
			result.forEach(basket => {
				for (let i = 0; i < $('[cloth_id]').length; i++) {
					if ($('[cloth_id]:eq(' + i + ')').attr('cloth_id') == basket.CLOTH_NO) {
						$('[cloth_id]:eq(' + i + ') .ti-shopping-cart').parent().css('background', 'red');
					}
				}
			})
		})
			
			lvc.likeCount(result.USER_ID, function(result){
				console.log(result);
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
				prev = startPage > 1 ; 
				
				if (prev) {
					let aTag = $('[aria-label=Previous]').parent().clone();
					aTag.attr('data-page', (startPage - 1));
					aTag.appendTo('.pagination');
				}
				for (let pg = startPage; pg <= endPage; pg++) {
					let aTag = $('.pagination .page-item:eq(1)').clone();
					aTag.text(pg);
					aTag.attr('data-page', pg);
					aTag.appendTo('.pagination');
					if (pg == page) {
						aTag.className = 'active';
					}
				}
				if (next) {
					let aTag = $('[aria-label=Next]').parent().clone();
					aTag.attr('data-page', (endPage + 1));
					aTag.appendTo('.pagination');
				}

				//pagination 이동
				//document.querySelectorAll('.pagination>a').forEach(item => {
					//item.addEventListener('click', function(e) {
						//e.preventDefault();
						//page = item.dataset.page;
						//svc.replyList({ bno, page }, replyListFnc2);
					//})
				//})

			})

			
}

const wish = {

	list : function(){
		let uid = 'user001';
		let page = 1;
		let maxPg = 8;
		lvc.likeList(uid, page, maxPg, likeListFnc);
		
	},
	changeChkAll(){
		if($('.like_chkAll input:checkbox').is(':checked') == true){
			$('.like_chk').prop('checked', true);
			
		}else{
			$('.like_chk').prop('checked', false);
		}
	},
	changeChk(){
		if($('.like_chk:checked').length == $('.like_chk').length){
			$('.like_chkAll :checkbox').prop('checked', true);
		}else{
			$('.like_chkAll :checkbox').prop('checked', false);
		}
	},
	delCart(){

		var delNo = new Array();

		for(let i = 0; i < $('[cloth_id]').length ; i++){
			if ($('[cloth_id]:eq("' + i +'") input:checkbox').is(':checked') == true) {
				delNo.push($('[cloth_id]:eq("' + i +'")').attr('cloth_id'));

			}
		}
			
		lvc.likeRemove(delNo, (result) => {
			if (result.retCode == "Success") {
				
				let lng = $('[cloth_id]').length;
				for(let i =0; i < lng ; i++){
					$('.row:eq(1) [cloth_id]:eq(0)').remove();
				}
				$('.like_chkAll :checkbox').prop('checked', false);
				
				let uid = 'user001';
				let page = 1;
				let maxPg = parseInt($('span.current:eq(0)').text());
				lvc.likeList(uid, page, maxPg, likeListFnc);
			}
		},
		(err) => { })

	},
	changeMaxPg(){
		let uid = 'user001';
		let page = 1;
		let maxPg = parseInt($('span.current:eq(0)').text());
		let lng = $('[cloth_id]').length
		
		if(maxPg != lng){
			for(let i =0; i < lng ; i++){
			$('.row:eq(1) [cloth_id]:eq(0)').remove();
			}
			lvc.likeList(uid, page, maxPg, likeListFnc);
		}
	},
	clickCart(no){
		if($('[cloth_id="'+no+'"] .ti-shopping-cart').parent().attr('style') != 'background: red;'){
			let uid ='user001';
			let cnt = 1;
			let bvo = {cnt, uid, no}
			lvc.cartInsertIcon(bvo, (result) => {
				if (result.retCode == "Success") {
				}
			},(err) => { })
			
			$('[cloth_id="'+no+'"] .ti-shopping-cart').parent().css('background','red');
		}else{
			let uid ='user001';
			let bvo = {uid, no}
			lvc.cartRemoveIcon(bvo, (result) => {
				if (result.retCode == "Success") {
				}
			},(err) => { })
			$('[cloth_id="'+no+'"] .ti-shopping-cart').parent().removeAttr('style');
		}
	},
	clickLike(no){
		if($('[cloth_id="'+no+'"] .ti-heart').parent().attr('style') != 'background: red;'){
			
			let uid ='user001';
			let lvo={uid, no};

			lvc.likeInsert(lvo, (result) => {
				if (result.retCode == "Success") {
				}
			},(err) => { })
			
			$('[cloth_id="'+no+'"] .ti-heart').parent().css('background','red');
		
		}else{
			lvc.likeRemove(no, (result) => {
			if (result.retCode == "Success") {
			}
			},(err) => { })
			
			$('[cloth_id="'+no+'"] .ti-heart').parent().removeAttr('style');
		}
	},
	clickProduct(no){
		$("<a>").prop({
            target: "_blank",
            href: "http://localhost:8080/musinsam/getProduct.do?clothNo=" + no
        })[0].click();
	}
}
wish.list();

