/**
 * 
 */

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
 
let lastClickTime = 0; 

const prod = {
		
list : function(){ //값 받기
		console.log(userId);
		let prc = parseInt($('.s_product_text h2').text());
		$('.s_product_text h2').text(prc.formatNumber() + ' 원');
		$('.s_product_text h2').css('margin-bottom', '20px');
		$('.product_count').css('margin-top', '30px');
		 
		let no = parseInt($('[style="display:none"] span').parent().text().replace('의류번호',''));
		 $('.button.cart-btn').attr('onclick', 'javascript:prod.clickProductCart(' + no + ');');
		 $('.icon_btn:eq(1)').attr('onclick', 'javascript:prod.clickProductLike(' + no + ');');
		 $('.button.price-ptn').attr('onclick', 'javascript:prod.clickOneOrder(' + no + ');');
		
		prd.cartProduct(userId, no, (result) => {
			if (result.retCode == "Success") {
				$('.button.cart-btn').attr('style', 'background: #DC143C; border: white;');
			}
		}, (err) => { })
		
		prd.likeProduct(userId, no, (result) => {
			if (result.retCode == "Success") {
				$('.icon_btn:eq(1)').attr('style', 'background: red; color:white;');
			}
		}, (err) => { })
		 
	},
	clickProductCart(no){
		
		if(userId == ''){
			alert('로그인 해주세요');
			return;
		}
		
		let currentTime = new Date().getTime();
		let timeDiff = currentTime - lastClickTime;
	
		if(timeDiff < 500){
			e.preventDefault();
			return;
		}
		
		lastClickTime = currentTime;
		
		if($('.button.cart-btn').attr('style') != 'background: #DC143C; border: white;'){
			let cnt = 1;
			let bvo = {cnt, userId, no}

			lvc.cartInsertIcon(bvo, (result) => {
				if (result.retCode == "Success") {
					$('.button.cart-btn').attr('style', 'background: #DC143C; border: white;');
				}
			},(err) => { })
		}else{
			let bvo = {userId, no}
			lvc.cartRemoveIcon(bvo, (result) => {
				if (result.retCode == "Success") {
					$('.button.cart-btn').removeAttr('style');
				}
			},(err) => { })
		}
	},
	clickProductLike(no){
		
		if(userId == ''){
			alert('로그인 해주세요');
			return;
		}
		
		let currentTime = new Date().getTime();
		let timeDiff = currentTime - lastClickTime;
	
		if(timeDiff < 500){
			e.preventDefault();
			return;
		}
		
		lastClickTime = currentTime;
		
		if($('.icon_btn:eq(1)').attr('style') != 'background: red; color:white;'){
			let lvo = {userId, no}

			lvc.likeInsert(lvo, (result) => {
				if (result.retCode == "Success") {
					$('.icon_btn:eq(1)').attr('style', 'background: red; color:white;');
				}
			},(err) => { })
		}else{
			lvc.likeRemove(userId, no, (result) => {
				if (result.retCode == "Success") {
					$('.icon_btn:eq(1)').removeAttr('style');
				}
			},(err) => { })
		}
	},
	clickOneOrder(no){
		
	}

}

prod.list();