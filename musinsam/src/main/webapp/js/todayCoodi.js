/**
 * 
 */


console.log('hi')
$(document).ready(function(){
	$('#singleCoodi').css('display' , 'none');
	let toprow1 = $('.toprow').clone();
	let toprow2 = $('.toprow').clone();
	toprow1.attr('class', 'bottomrow');
	toprow1.find('h3').text('오늘의 하의');
	toprow1.appendTo('#tcoodi');
	
	toprow2.attr('class', 'shoesrow');
	toprow2.find('h3').text('오늘의 신발');
	toprow2.appendTo('#tcoodi');
	
	$('#tcoodi').css('text-align' , 'center')
	
	// 오늘의 코드 리스트
	$.ajax({
		url: 'todayCoodi.do',
		method: 'get',
		dataType: 'json'
	})
	.done(function(result){
		result.forEach((cloth,index) =>{
			let temp = $('#singleCoodi').clone();
			temp.css('display' ,'inline-block');
			
			temp.attr('id' , cloth.clothNo)
			
			temp.find('img').attr('src', 'img/cloth/' + cloth.clothName +'.jpg')
			temp.find('.card-body p:nth-of-type(1)').text(cloth.smallCategory);
			temp.find('.card-body h4').text(cloth.clothName);
			temp.find('.card-body p:nth-of-type(2)').text(cloth.price + '원');
			
			if(index <= 4){
				temp.appendTo('.toprow')
			}else if(index <= 9){
				temp.appendTo('.bottomrow')
			}else {
				temp.appendTo('.shoesrow')
			}
			
			
		});
	})
	
	
})