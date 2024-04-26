/**
 * 
 */

 
 $('.adCol	').css({'font-size':'18px'})
 
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
 
 
 
 $(document).ready(function(){
	 $.ajax({
		 url : 'selProd.do',
		 data : {clothNo:clothNo},
		 method : 'get',
		 dataType : 'json'
	 })
	 .done(function(result){
		 console.log(result)
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
	 
	 
	 
	 
	 
	 
	 
 })
 
 
 
 