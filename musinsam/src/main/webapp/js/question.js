/**
 * 
 */

$('.faqsearch').css('.')



$('.headQa').find('span').css({"padding-right":"560px", "font-size":"15px"});
$('.headQa').find('p').css({"padding":"20px", "border-top":"3px solid black"
							, "border-bottom":"1px solid black"});



$('.arow').css({'font-family':'Nanum Gothic Coding' ,"display":"block"})
$('.arow').find('p').css({"font-size": "25px", "padding":"20px"});
$('.answer').find('p').css({"font-size": "15px"});
$('.arow').find('span').css({"padding-right":"60px", "font-size":"15px" ,"padding-left":"20px" });

$('.arow').find('.answer').attr('class', 'answer burrow')
$('.arow').find('.answer').css('background-color', '#E3F2FD');

$('.arow').find('.quest').css({'font-weight':'bold', 'margin':'50px 0px', "cursor":"pointer"})

$('#faq').click(function(e){
	$('.arow').find('.answer').attr('class', 'answer burrow')
	$(e.target).closest($('.arow')).find('.answer').toggleClass('burrow');
})
$('#faq').on('mouseover',function(e){
	$(e.target).closest($('.quest')).css('background-color', '#E3F2FD')
})
$('#faq').on('mouseout',function(e){
	$(e.target).closest($('.quest')).css('background-color', '')
})

$(document).ready(function(){
	$('.arow').css('display' , 'none');
	
	
	
	$.ajax({
		url : 'faqList.do',
		method: 'post',
		dataType : 'json'
	})
	.done(function(result){
		result.forEach(elem =>{
			let temp = $('#example').clone();
			temp.attr('id',elem.questionNum);
			temp.css('display' ,'block');
			temp.find('.quest p').text(elem.title);
			temp.find('.answer p').text(elem.content);
			temp.appendTo('#faq');
			
		})
	})
})