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


const basket = {
	cartTotal : 0,
	list : function(){

		svc.cartList(userId, function(result){
			console.log(result);
			
			//cartList
			result.forEach(cart =>{				
				let temp = basket.makeCart(cart);				
				temp.appendTo('tbody');
				//svc.csizeList(cart.CLOTH_NO, basket.makeSize);  //fetch
				basket.makeSize(cart.sizeList)

				}, function(err) {
					console.log(err);
			})				

			//total
			let sub = $('.subtotal').clone();
			
			sub.find('td h4:eq(1)').attr('class', 's_price');
			sub.appendTo('tbody');
			
			$('.bottom_button:eq(0)').remove();
			$('.subtotal:eq(0)').remove();
			
			$('nav:eq(2)').css('padding', '25px 0px 50px');
			$('.orderBtn').css('padding', '0px 0px 50px');
			
			basket.reCalc();
			
			}, function(err){
				console.log(err);
		})
		}, 
		
	makeSize : function(result) {
					//console.log(result);
					result.forEach(size => {

					if(size.QUANTITY == 0){
						for (let i = 0; i < 3; i++) {
							if ($('[data-id=' + size.CLOTH_NO + '] .list li:eq(' + i + ')').text() == size.CSIZE) {
	
								$('[data-id=' + size.CLOTH_NO + '] .list li:eq(' + i + ')').remove();
							}
						}
					}
				})
			}	
		,
	makeCart : function(cart){ //본문
		let temp = $('tbody tr:eq(0)').clone();
		let prc = cart.PRICE * (1 - cart.DISCOUNT_RATE);
		
		temp.attr('basket_id', cart.BASKET_NO);
		temp.attr('data-id', cart.CLOTH_NO);
		temp.css('display', '');
		temp.find('.d-flex img').attr('src', 'img/cloth/' + cart.CLOTH_NAME + '.jpg');
		temp.find('.media-body p').text(cart.CLOTH_NAME);
		temp.find('.media-body a').attr('onclick','javascript:basket.clickProduct('+cart.CLOTH_NO+');');
		
		if(cart.DISCOUNT_RATE > 0){
			temp.find('td h5:eq(0)').before('<s><i>' + cart.PRICE +'원 </i></s>');
		}
		temp.find('td h5:eq(0)').text(Math.round((prc / 10) * 10).formatNumber() + '원');
		temp.find('td h5:eq(0)').attr('class', 'price' + cart.BASKET_NO);
		
		temp.find('.current').text(" ");
		temp.find('.list li').attr('class','option');

		temp.find('.product_count input').attr('value', cart.BASKET_CNT);
		
		temp.find('.product_count input').attr('class', 'qty' + cart.BASKET_NO);
		temp.find('div.product_count button').click(() => basket.changePNum(cart.BASKET_NO));
		temp.find('td h5:eq(1)').text(Math.round((prc * cart.BASKET_CNT / 10) * 10).formatNumber() + '원');
		temp.find('td h5:eq(1)').attr('class', 't_price' + cart.BASKET_NO);
		return temp;
	}
	,
	reCalc() { //총 결제 예상금액 계산
		$('.s_price').text(Math.round((basket.cartTotal / 10) * 10).formatNumber() + '원');
	},
	
	changePNum(no) { //수량

		if (!no) {
			return;
		}
		let qty = -1;
		if (event.target.nodeName == "I") {
			if (event.target.className.indexOf('up') != -1) {
				qty = 1;
			}
		}
		
		let prc = $('.price' + no).text().replaceAll(",","");
		let t_prc = $('.t_price' + no);
		let tprc = t_prc.text().replaceAll(",","");
		let qtyElem = $('.qty' + no);
		
		if (qtyElem.val() == 0 && qty == -1) {
			return;
		}

		let bvo = { no, qty };
		svc.cartUpdate(bvo, (result) => {
			if (result.retCode == "Success") {

				t_prc.text((parseInt(tprc) + parseInt(prc) * qty).formatNumber() + '원');
				qtyElem.val(parseInt(qtyElem.val()) + qty);
				
				if($('[basket_id='+no+'] input:checkbox').is(':checked') == true){
				basket.cartTotal += parseInt(prc) * qty;
				basket.reCalc();
				}
			}
		},
		(err) => {
			alert('에러가 발생');
		});

	},
	
	changeChkAll(){ //전체 선택
		if($('thead input').is(':checked') == true){
			basket.cartTotal = 0;
			$('[basket_id] input:checkbox').prop('checked', true);
			for(let i=0; i < $('[basket_id]').length ; i++){
				let t_prc = $('.t_price' + $('[basket_id]:eq('+i+')').attr('basket_id'));
				let tprc = t_prc.text().replaceAll(",","");
				basket.cartTotal += parseInt(tprc);
				basket.reCalc();
			}
		}else{
			$('[basket_id] input:checkbox').prop('checked', false);
			basket.cartTotal = 0;
			basket.reCalc();
		}
	},
	
	changeChk(){ //단건 선택
		basket.cartTotal = 0;
		if($('[basket_id] input:checked').length == $('[basket_id] input:checkbox').length){
			$('thead input').prop('checked', true);
		}else{
			$('thead input').prop('checked', false);
		}
		
		for(let i=0; i < $('[basket_id]').length ; i++){
			if($('[basket_id]:eq('+i+') input:checkbox').is(':checked') == true){
				let t_prc = $('.t_price' + $('[basket_id]:eq('+i+')').attr('basket_id'));
				let tprc = t_prc.text().replaceAll(",","");
				basket.cartTotal += parseInt(tprc);
				basket.reCalc();
			}
		}
		
		if($('tbody input').is(':checked') == false){
			basket.cartTotal = 0;
			basket.reCalc();
		}
	},
	
	delCart(){ //삭제
		
		var delNo = new Array();
		
		for(let i = 0; i < $('[basket_id]').length ; i++){
			if ($('[basket_id]:eq(' + i +') input:even').is(':checked') == true) {
				delNo.push($('[basket_id]:eq(' + i +')').attr('basket_id'));
				
			}
		}
		svc.cartRemove(delNo,
			(result) => {
				if (result.retCode == "Success") {
					basket.cartTotal = 0;
					basket.reCalc();
					delNo.forEach(no =>{
						$('[basket_id="' + no + '"]').remove();
					})
					$('thead input').prop('checked', false);
				}
			},
			(err) => { })
	},
	
	clickProduct(no){ //상세페이지
		$("<a>").prop({
            target: "_blank",
            href: "http://localhost:8080/musinsam/getProduct.do?clothNo=" + no
        })[0].click();
	},
	
	Order(){ //결제페이지 이동
		
		var bkId = new Array();
		var csize = new Array();
		
		for(let i=0; i < $('[basket_id]').length ; i++){
			if ($('[basket_id]:eq(' + i +') input:even').is(':checked') == true) {
				bkId.push($('[basket_id]:eq(' + i +')').attr('basket_id'));
				csize.push($('[basket_id]:eq(' + i +') .current').text());
			}
		}
		

		if(bkId.length > 0 && csize.indexOf(' ') == -1){
			
			localStorage.setItem("bkId", JSON.stringify(bkId));
			localStorage.setItem("csize", JSON.stringify(csize));
			
			$("<a>").prop({
            target: "_self",
            href: "http://localhost:8080/musinsam/pay.do"
        	})[0].click();
		}else if(bkId.length <= 0){
			alert('주문할 상품을 선택해 주세요');
		}else if(csize.indexOf(' ') >= 0){
			alert('상품의 사이즈를 선택해 주세요');
		}else{
			alert('상품을 다시 확인해 주세요');
		}
		
	}
}
basket.list();