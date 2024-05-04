/**
 * 
 */

 
 $('.adCol').css({'font-size':'18px'})
 
	var url_href = window.location.href;

	var url = new URL(url_href);
	var clothNo = url.searchParams.get("clothNo");
	
	 
 
 $('.qtBtn').click(function(e){
	 
	
	 $.ajax({
		 url : 'uptProd.do',
		 data : {clothNo:clothNo , sQt:$('#sQt').val(), mQt:$('#mQt').val(), lQt:$('#lQt').val() },
		 method : 'post',
		 dataType : 'json'
	 })
	 .done(function(result){
		 alert('추가 완료');
		 $.ajax({
		 url : 'selProd.do',
		 data : {clothNo:clothNo},
		 method : 'get',
		 dataType : 'json'
	 })
	 .done(function(result){
		result.forEach(elem =>{
			if(elem.csize == 'S'){
				$('.smallSize').text(' (' + elem.quantity.toLocaleString() + '개)')
			}else if(elem.csize == 'M'){
				$('.mediumSize').text(' (' + elem.quantity.toLocaleString() + '개)')
			}else if(elem.csize == 'L'){
				$('.largeSize').text(' (' + elem.quantity.toLocaleString() + '개)')
			}
		})
		 
	 })
	 .fail(function(err){
		 console.log(err)
	 })
		 
	 })
	 .fail(function(err){
		console.log(err)
		alert('에러')
		
	 })
	 .always(function(result){
		 $('#sQt').val('') ;
		 $('#mQt').val('') ;
		 $('#lQt').val('') ;
	 })
 })
 
 
$('.saleBtn').click(function(e){
	$.ajax({
		 url : 'uptSale.do',
		 data : {clothNo:clothNo , sale:$('#uptSale').val()},
		 method : 'post',
		 dataType : 'json'
	 })
	 .done(function(result){
		 $.ajax({
		 url : 'selSale.do',
		 data : {clothNo:clothNo},
		 method : 'get',
		 dataType : 'json'
	 })
	 	.done(function(result){
			$('#salePercent').text(' ('+ (result.sale * 100) + '%)')
	 	})
	 	.fail(function(err){
			 console.log(err)
		 alert('할인율에러')
	 })
	 })
	 .fail(function(){
		 alert('할인율변경에러')
	 })
}) 

$('#insertForm').on('submit', function(e){
	alert("제품 등록 완료")
})

$('.insBtn').click(function(e){
	if($('.insertProd input:eq(0)').val() == '' ||
		$('.insertProd input:eq(1)').val() == ''||
		$('.insertProd input:eq(2)').val() == ''||
		$('.insertProd input:eq(3)').val() == ''||
		$('.insertProd input:eq(4)').val() == ''||
		$('#smallCate option:selected').val() == ''){
			alert('데이터를 입력하세요');
	}else{
		$('#insertForm').submit();
		
		
	}
})

$('.resetBtn').click(function(e){
	$('.insertProd').find('input').val('');
	$('#bigCate').find('option').remove();
	$('#bigCate').append($('<option />').val('').text('대분류').attr('hidden', 'hidden'))
	$('#bigCate').append($('<option />').val('상의').text('상의'))
	$('#bigCate').append($('<option />').val('바지').text('하의'))
	$('#bigCate').append($('<option />').val('아우터').text('아우터'))
	$('#bigCate').append($('<option />').val('신발').text('신발'))
	$('#smallCate').find('option').remove();
	$('#smallCate').append($('<option />').val('').text('중분류').attr('hidden', 'hidden'))
	$('#smallCate').append($('<option />').val('').text('대분류를 선택해주세요').attr('disabled', 'disabled'))
})	
 
$('#bigCate').change(function(e){
	$.ajax({
		url: 'selCate.do' , 
		data: {category:$('#bigCate').val()},
		method : 'get',
		dataType : 'json'
	})
	.done(function(result){
		$('#smallCate').find($('option')).remove();
		result.forEach(function(e){
			let opt = $('<option />').val(e).text(e)
			$('#smallCate').append(opt)
		})
	})
	
})
 
 
 $(document).ready(function(){
	 if(clothNo != null){
		 $.ajax({
			 url : 'selProd.do',
			 data : {clothNo:clothNo},
			 method : 'get',
			 dataType : 'json'
		 })
		 .done(function(result){
			result.forEach(elem =>{
				if(elem.csize == 'S'){
					$('.smallSize').text(' (' + elem.quantity + '개)')
				}else if(elem.csize == 'M'){
					$('.mediumSize').text(' (' + elem.quantity + '개)')
				}else if(elem.csize == 'L'){
					$('.largeSize').text(' (' + elem.quantity + '개)')
				}
			})
			 
		 })
		 .fail(function(err){
			 console.log(err)
			 alert('사이즈수량 에러')
		 })
		 
		 $.ajax({
			 url : 'selSale.do',
			 data : {clothNo:clothNo},
			 method : 'get',
			 dataType : 'json'
		 })
		 .done(function(result){
			$('#salePercent').text(' ('+ (result.sale * 100) + '%)')
		 })
		 .fail(function(err){
			 console.log(err)
			 alert('할인율에러')
			 
		 })
	 }
	 
	 
	 setTimeout(function(){
		 $('select').niceSelect('destroy')
	 }, 600)
	 
	 
	 
	 
	 
 })
 
 
 
 