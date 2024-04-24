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
		let page = 1;
		svc.cartList(page, function(result){
			console.log(result);
			console.log();
			
			result.forEach(cart =>{
				
				let temp = $('tbody tr:eq(0)').clone();
				let prc = cart.PRICE * (1 - cart.DISCOUNT_RATE);
				
				temp.attr('basket_id', cart.BASKET_NO);
				temp.attr('data-id', cart.CLOTH_NO);
				temp.find('.d-flex img').attr('src', 'img/cloth/' + cart.CLOTH_NAME + '.jpg');
				temp.find('.media-body p').text(cart.CLOTH_NAME);
				
				if(cart.DISCOUNT_RATE > 0){
					temp.find('td h5:eq(0)').before('<s><i>' + cart.PRICE +'원 </i></s>');
				}
				temp.find('td h5:eq(0)').text(Math.round((prc / 10) * 10).formatNumber() + '원');
				temp.find('td h5:eq(0)').attr('class', 'price' + cart.BASKET_NO);
				temp.find('.current').text(" ");
				temp.find('.list li').attr('class','option')
				
				temp.find('.product_count input').attr('value', cart.BASKET_CNT);
				temp.find('.product_count input').attr('class', 'qty' + cart.BASKET_NO);
				temp.find('div.product_count button').click(() => basket.changePNum(cart.BASKET_NO));
				temp.find('td h5:eq(1)').text(Math.round((prc * cart.BASKET_CNT / 10) * 10).formatNumber() + '원');
				temp.find('td h5:eq(1)').attr('class', 't_price' + cart.BASKET_NO);
				
				temp.appendTo('tbody');
				
				basket.cartTotal += prc * cart.BASKET_CNT;
				
				let pg = $('.page-item:eq(1)').clone();
				let next = $('.page-item:eq(2)').clone();
				console.log(pg);
				pg.find('.page-link').text(cart.RN);
				pg.appendTo('.pagination');
				let pCount = result.length / 5;
				
				
				
			
			});

			let sub = $('.subtotal').clone();
			
			sub.find('td h4:eq(1)').attr('class', 's_price');
			sub.appendTo('tbody');
			
			$('tbody tr:eq(0)').remove();
			$('.bottom_button:eq(0)').remove();
			$('.subtotal:eq(0)').remove();
			$('.shipping_area:eq(0)').remove();
			$('.out_button_area:eq(0)').remove();
			
			$('nav:eq(2)').css('padding', '25px 0px 50px');
			$('.orderBtn').css('padding', '0px 0px 50px');
			
			basket.reCalc();
			
			},function(err){
				console.log(err);
		})
		
	},
	reCalc() {
		$('.s_price').text(Math.round((basket.cartTotal / 10) * 10).formatNumber() + '원');
	},
	changePNum(no) {

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
				
				basket.cartTotal += parseInt(prc) * qty;
				basket.reCalc();
			}
		},
		(err) => {
			alert('에러가 발생');
		});

	},
	changeChkAll(){
		if($('thead input').is(':checked') == true){
			$('[basket_id] input:checkbox').prop('checked', true);
		}else{
			$('[basket_id] input:checkbox').prop('checked', false);
		}
	},
	changeChk(){
		if($('[basket_id] input:checked').length == $('[basket_id] input:checkbox').length){
			$('thead input').prop('checked', true);
		}else{
			$('thead input').prop('checked', false);
		}
	},
	delCart(){
		for(let i = 0; i < $('[basket_id]').length ; i++){
			if ($('tbody tr:eq("' + i +'") input').is(':checked') == true) {
				let delNo = $('tbody tr:eq("' + i +'")').attr('basket_id');
				
				svc.cartRemove(delNo,
					(result) => {
						if (result.retCode == "Success") {
							let t_prc = $('.t_price' + delNo);
							let tprc = t_prc.text().replace(",", "");
							
							basket.cartTotal -= parseInt(tprc);
							basket.reCalc();
							$('[basket_id="' + delNo + '"]').remove();
						}
					},
					(err) => { })
			}
		}
	},
	delCartAll(){
		for(let i = 0; i < $('[basket_id]').length ; i++){
			let delNo = $('tbody tr:eq("' + i + '")').attr('basket_id');

			svc.cartRemove(delNo,
				(result) => {
					if (result.retCode == "Success") {

						basket.cartTotal = 0;
						basket.reCalc();
						$('[basket_id="' + delNo + '"]').remove();
					}
				},
				(err) => { })
		}
	}
}
basket.list();