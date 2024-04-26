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
		let uid = 'user001';
		let page = 1;
		let maxPg = 8;
		svc.likeList(uid, page, maxPg,likeListFnc);
		
		function likeListFnc(result){
			result.forEach(like => {

				let temp = $('.row:eq(1) div:eq(0)').clone();

				temp.attr('cloth_id', like.CLOTH_NO);
				
				temp.find('img').attr('src', 'img/cloth/' + like.CLOTH_NAME + '.jpg');

				temp.find('h4 a').text(like.CLOTH_NAME);
				temp.find('h4 a').css('word-break', 'keep-all');
				temp.find('h4 a').css('overflow-wrap', 'break-word');
				
				temp.find('.card-body p:eq(0)').text(like.BRAND);
				if (like.DISCOUNT_RATE > 0) {
					temp.find('.card-body p:eq(1)').before('<s><i>' + like.PRICE + '원 </i></s>');
				}
				temp.find('.card-body p:eq(1)').text(Math.round((like.PRICE * (1 - like.DISCOUNT_RATE) / 10) * 10).formatNumber() + '원');
		
				temp.find('.ti-heart').parent().css('background','red');
				
				temp.appendTo('.row:eq(1)');
			})

			$('.row:eq(1) div:eq(0)').remove();
		}
		
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
				console.log(delNo);

		for(let i = 0; i < $('[cloth_id]').length ; i++){
			if ($('[cloth_id]:eq("' + i +'") input:checkbox').is(':checked') == true) {
				delNo.push($('[cloth_id]:eq("' + i +'")').attr('cloth_id'));

			}
		}
				console.log(delNo);
				console.log(delNo.length);
		
		svc.likeRemove(delNo, (result) => {
			if (result.retCode == "Success") {
				//$('[cloth_id='+delNo+']').remove();
			}
		},
		(err) => { })

	}
}
wish.list();

