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

const Wish = {

	list : function(){
		let uid = 'user001';
		let page = 1;
		svc.likeList(uid, page, function(result){
			console.log(result);

			result.forEach(like => {
				let temp = $('.row:eq(1) div:eq(0)').clone();

				//temp.find('.like_chk').css('position','relative');
				//temp.find('.like_chk').css('left','100px');
				//temp.find('.like_chk').css('bottom','-40px');
				//temp.find('.like_chk').css('width','20px');
				//temp.find('.like_chk').css('height','20px');
				//temp.find('.like_chk').css('border-radius','50%');
				//temp.find('.like_chk').css('appearance','none');
				
				temp.find('img').attr('src', 'img/cloth/' + like.CLOTH_NAME + '.jpg');

				temp.find('h4 a').text(like.CLOTH_NAME);
				temp.find('h4 a').css('word-break', 'keep-all');
				temp.find('h4 a').css('overflow-wrap', 'break-word');

				if (like.DISCOUNT_RATE > 0) {
					temp.find('.card-body p:eq(1)').before('<s><i>' + like.PRICE + '원 </i></s>');
				}
				temp.find('.card-body p:eq(1)').text(Math.round((like.PRICE * (1 - like.DISCOUNT_RATE) / 10) * 10).formatNumber() + '원');
				
				temp.find('.ti-heart').parent().css('background','red');
				

				temp.appendTo('.row:eq(1)');
			})

			$('.row:eq(1) div:eq(0)').remove();

		}, function(err) {
			console.log(err);
		})
	}
}
Wish.list();

