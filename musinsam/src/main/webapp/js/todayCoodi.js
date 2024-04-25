/**
 * 
 */

function makeRow (cloth){
	let temp = $('#singleCoodi').clone();
	temp.css('display' ,'inline-block');
			
	temp.attr('id' , cloth.clothNo)
	temp.find('.ti-search').closest('a').attr('href' , 'http://localhost:8080/musinsam/getProduct.do?clothNo=' + cloth.clothNo)
	temp.find('img').attr('src', 'img/cloth/' + cloth.clothName +'.jpg')
	temp.find('.card-body p:nth-of-type(1)').text(cloth.smallCategory);
	temp.find('.card-body h4').text(cloth.clothName);
	temp.find('.card-body p:nth-of-type(2)').text(cloth.price + '원');
	
	return temp;
}


console.log('hi')
$(document).ready(function(){
	$('#singleCoodi').css('display' , 'none');
	$('h3:nth-child(1)').text('오늘의 상의')
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
		url: 'todayList.do',
		method: 'get',
		dataType: 'json'
	})
	.done(function(result){
		
		//상의 랜덤
		result.shirts.forEach((cloth,index) =>{
			let temp = makeRow(cloth);
			temp.appendTo('.toprow')
			});
			
		//바지 랜덤
		result.pants.forEach(cloth =>{
			let temp = makeRow(cloth);
			temp.appendTo('.bottomrow')
		});
		
		//신발 랜덤
		result.shoes.forEach(cloth =>{
			let temp = makeRow(cloth);
			temp.appendTo('.shoesrow')
		});	
		
	})
	
	
})