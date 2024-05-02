/**
 * 
 */
 
const prod = {

list : function(){ //값 받기
		 
		let no = parseInt($('[style="display:none"] span').parent().text().replace('의류번호',''));
		 $('.button.cart-btn').attr('onclick', 'javascript:prod.clickProductCart(' + no + ');');
		 $('.icon_btn:eq(1)').attr('onclick', 'javascript:prod.clickProductLike(' + no + ');');
		 $('.button.price-ptn').attr('onclick', 'javascript:prod.clickOneOrder(' + no + ');');
		
		prd.cartProduct(userId, no, (result) => {
			if (result.retCode == "Success") {
				$('.button.cart-btn').attr('style', 'background: #DC143C; border: white;');
			}
		}, (err) => { })
		 
	},
	clickProductCart(no){
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
		var bkId = new Array();
		var csize = new Array();
		var cnt = new Array();
	}

}

prod.list();