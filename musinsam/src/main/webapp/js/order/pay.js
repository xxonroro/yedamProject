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
 
 
 const payment = {
	list : function(){
		 JSON.parse(localStorage.getItem("bkId"));
		 JSON.parse(localStorage.getItem("csize"));
		 var no = JSON.parse(localStorage.getItem("bkId"));
		 var sz = JSON.parse(localStorage.getItem("csize"));
		 
		 let pay = 0;
		 let dis = 0;
		 
		 pvc.cartList(no, function(result){
			 console.log(result);
			 
			 result.forEach(pay =>{				
				let temp = payment.makeList(pay);				
				$('tr.bottom_button').before(temp);

				}, function(err) {
					console.log(err);
			})	
			 for (let i = 0; i < no.length; i++) {

				 $('.csize:eq(' + (i + 1) + ') h4').text(sz[i]);
				 
				 let pc = parseInt($('[basket_id]:eq('+i+') td s').text());
				 let dispc = parseInt($('[basket_id]:eq('+i+') td:eq(1) h5').text().replaceAll(",",""));
				 let cnt = parseInt($('[basket_id]:eq('+i+') td:eq(3) h4').text());
				 pay += pc * cnt;
				 dis += (pc - dispc) * cnt;			  
			 }
			 $('.pay_sum span').text(pay + '원');
			 $('.pay_discount span').text('-' +  dis + '원');
			 $('.pay_order span').text(pay - dis + '원');
			 
			 pvc.userInfo(userId, function(result){
				 console.log(result);
			 })

		 })
	},
	makeList : function(pay){
		let temp = $('tbody tr:eq(0)').clone();
		let prc = pay.PRICE * (1 - pay.DISCOUNT_RATE);
		
		temp.attr('basket_id', pay.BASKET_NO);
		temp.attr('data-id', pay.CLOTH_NO);
		temp.css('display', '');
		temp.find('.d-flex img').attr('src', 'img/cloth/' + pay.CLOTH_NAME + '.jpg');
		temp.find('.media-body p').text(pay.CLOTH_NAME);
		temp.find('.media-body a').attr('onclick','javascript:payment.clickProduct('+pay.CLOTH_NO+');');
		
		temp.find('td h5:eq(0)').before('<s><i>' + pay.PRICE +'원 </i></s>');
		temp.find('td h5:eq(0)').text(Math.round((prc / 10) * 10).formatNumber() + '원');
		temp.find('td h5:eq(0)').attr('class', 'price' + pay.BASKET_NO);
		if(pay.DISCOUNT_RATE == 0){
			temp.find('td s').css('display', 'none');
		}
		
		temp.find('.product_count h4').text(pay.BASKET_CNT);
		temp.find('td h5:eq(1)').text(Math.round((prc * pay.BASKET_CNT / 10) * 10).formatNumber() + '원');
		temp.find('td h5:eq(1)').attr('class', 't_price' + pay.BASKET_NO);
		return temp;
	},
	
	clickProduct(no){ //상세페이지
		$("<a>").prop({
            target: "_blank",
            href: "http://localhost:8080/musinsam/getProduct.do?clothNo=" + no
        })[0].click();
	}
}

payment.list();