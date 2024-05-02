/**
 * 
 */

var url_href = window.location.href;
var url = new URL(url_href);
var page = url.searchParams.get("page");

  $(document).ready(function(){
	 
	 $.ajax({
		 url : 'prodList.do',
		method : 'get',
		dataType : 'json',
		data : {page:page}
	 })
	 .done(function(result){
		 console.log(result)
		 console.log(result.page)
		 $('#exam').css('display', 'none')
		 result.list.forEach(function(elem){
			 
			 let temp = $('#exam').clone();
			 temp.css({'display': 'block' , 'cursor':'pointer'})
			 //temp.attr('href' , 'setProd.do?clothNo=' + elem.clothNo + '&clothName=' + elem.clothName)
			 temp.click(function(){
				 location.href = 'setProd.do?clothNo=' + elem.clothNo + '&clothName=' + elem.clothName;
			 })
			
		 	temp.find('img').attr('src' , 'img/cloth/' + elem.clothName + '.jpg')
		 	temp.find('.prodNm span').text(elem.clothName)
		 	temp.find('.prodPr span').text(elem.price.toLocaleString() + '원')
		 	temp.find('.prodBr span').text(elem.brand)
		 	temp.appendTo('#listAll')
		 })
		 
		 if(result.page.prev){
			 let prev = $('<a />').text('《')
			 prev.attr('href' , 'manageProd.do?page=1')
			 prev.appendTo('#listNum')
		 }
		 
		 if(result.page.prev){
			 let prev = $('<a />').text('〈')
			 prev.attr('href' , 'manageProd.do?page=' + (result.page.page - 1))
			 prev.appendTo('#listNum')
		 }
		 
		 for (let i = result.page.startPage ; i <= result.page.endPage ; i++){
			 let a = $('<a />').text(i)
			 
			 if(result.page.page == i ){
				a.appendTo('#listNum')
				continue ;
			 }
			 a.attr('href', 'manageProd.do?page=' + i)
			 a.appendTo('#listNum')
		 }
		 
		 if(result.page.next){
			 let next = $('<a />').text('〉')
			 next.attr('href' , 'manageProd.do?page=' + (result.page.page + 1))
			 next.appendTo('#listNum')
		 }
		 
		 if(result.page.next){
			 let next = $('<a />').text('》')
			 next.attr('href' , 'manageProd.do?page=' + (result.page.realEnd))
			 next.appendTo('#listNum')
		 }
		 
		 
	 })
	 .catch(function(err){
		 console.log(err)
	 })
	 
	 
	 
	  
	})