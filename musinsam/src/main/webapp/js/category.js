/**
 *  category
 */



//Ajax 호출`
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'category.do');
xhtp.send();

xhtp.onload = function() {
	let members = JSON.parse(xhtp.response);
	console.log(members);

	members.forEach(member => {

		$('[data-id]:eq(0)').css('display', 'none');
		let temp = $('[data-id]:eq(0)').clone();
		temp.css('display', 'block');
		temp.css('display', 'inline-block');
		temp.find('div #img1').attr('src', 'upload/' + member.clothName + '.jpg')
		temp.find('div #p1').text(member.smallCategory);
		temp.find('div #name1').text(member.clothName);
		temp.find('div #p2').text((member.price) + "원");

		temp.appendTo('#section1');
	})

}



$(document).ready(function() {
	$("input:radio[name=cate]").click(function() {
		if ($("input:radio[name=cate]:checked").val() == "1") {
			const xhtp = new XMLHttpRequest();
			xhtp.open('get', 'categorypants.do');
			xhtp.send();

			xhtp.onload = function() {
				let members = JSON.parse(xhtp.response);
				console.log(members);
				let temp = $('[data-id]:eq(0)').clone();
				document.querySelector('#section1').innerHTML = '';

				members.forEach(member => {
					let temp2 = temp.clone();
					temp.css('display', 'none');
					temp2.css('display', 'block');
					temp2.css('display', 'inline-block');
					temp2.find('div #img1').attr('src', 'upload/' + member.clothName + '.jpg')
					temp2.find('div #p1').text(member.smallCategory);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price) + "원");

					temp2.appendTo('#section1');
				})


			}
		}
		if ($("input:radio[name=cate]:checked").val() == "2") {
			const xhtp = new XMLHttpRequest();
			xhtp.open('get', 'categoryshirts.do');
			xhtp.send();

			xhtp.onload = function() {
				let members = JSON.parse(xhtp.response);
				console.log(members);
				let temp = $('[data-id]:eq(0)').clone();
				document.querySelector('#section1').innerHTML = '';

				members.forEach(member => {
					let temp2 = temp.clone();
					temp.css('display', 'none');
					temp2.css('display', 'block');
					temp2.css('display', 'inline-block');
					temp2.find('div #img1').attr('src', 'upload/' + member.clothName + '.jpg')
					temp2.find('div #p1').text(member.smallCategory);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price) + "원");

					temp2.appendTo('#section1');
				})


			}
		}
			if ($("input:radio[name=cate]:checked").val() == "3") {
			const xhtp = new XMLHttpRequest();
			xhtp.open('get', 'categoryouter.do');
			xhtp.send();

			xhtp.onload = function() {
				let members = JSON.parse(xhtp.response);
				console.log(members);
				let temp = $('[data-id]:eq(0)').clone();
				document.querySelector('#section1').innerHTML = '';

				members.forEach(member => {
					let temp2 = temp.clone();
					temp.css('display', 'none');
					temp2.css('display', 'block');
					temp2.css('display', 'inline-block');
					temp2.find('div #img1').attr('src', 'upload/' + member.clothName + '.jpg')
					temp2.find('div #p1').text(member.smallCategory);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price) + "원");

					temp2.appendTo('#section1');
				})


			}
		}
			if ($("input:radio[name=cate]:checked").val() == "4") {
			const xhtp = new XMLHttpRequest();
			xhtp.open('get', 'categoryshoes.do');
			xhtp.send();

			xhtp.onload = function() {
				let members = JSON.parse(xhtp.response);
				console.log(members);
				let temp = $('[data-id]:eq(0)').clone();
				document.querySelector('#section1').innerHTML = '';

				members.forEach(member => {
					let temp2 = temp.clone();
					temp.css('display', 'none');
					temp2.css('display', 'block');
					temp2.css('display', 'inline-block');
					temp2.find('div #img1').attr('src', 'upload/' + member.clothName + '.jpg')
					temp2.find('div #p1').text(member.smallCategory);
					temp2.find('div #name1').text(member.clothName);
					temp2.find('div #p2').text((member.price) + "원");

					temp2.appendTo('#section1');
				})


			}
		}



	})
})


document.querySelector('#searchbutton').addEventListener('click', function(e){
	let searchword = document.getElementById('searchdo').value;
	
	
	
})










