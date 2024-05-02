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
 
 
 const payment = {
	list : function(){ //값 받기
		 JSON.parse(localStorage.getItem("bkId"));
		 JSON.parse(localStorage.getItem("csize"));
		 var no = JSON.parse(localStorage.getItem("bkId"));
		 var sz = JSON.parse(localStorage.getItem("csize"));
		 
		 let pay = 0;
		 let dis = 0;
		 
		 pvc.cartList(no, function(result){ //본문
			 console.log(result);
			 
			 result.forEach(pay =>{				
				let temp = payment.makeList(pay);				
				$('tr.bottom_button').before(temp);

				}, function(err) {
					console.log(err);
			})	
			 for (let i = 0; i < no.length; i++) { //결제 계산

				 $('.csize:eq(' + (i + 1) + ') h4').text(sz[i]);
				 
				 let pc = parseInt($('[basket_id]:eq('+i+') td s').text());
				 let dispc = parseInt($('[basket_id]:eq('+i+') td:eq(1) h5').text().replaceAll(",",""));
				 let cnt = parseInt($('[basket_id]:eq('+i+') td:eq(3) h4').text());
				 pay += pc * cnt;
				 dis += (pc - dispc) * cnt;			  
			 }
			 $('.pay_sum span').text(pay + '원');
			 $('.pay_discount span').text('-' +  dis + '원');
			 $('.pay_order span').text(pay - dis + '원');
			 
			 
			 pvc.userInfo(userId, function(result){ //주문자 정보
				 console.log(result);
				 
				 result.forEach(user => {
					 $('#name').val(user.name);
					 $('#number').val(user.phone);

				 }, function(err) {
					 console.log(err);
				 })
			 })
		 })
	},
	makeList : function(pay){ //본문
		let temp = $('tbody tr:eq(0)').clone();
		let prc = pay.PRICE * (1 - pay.DISCOUNT_RATE);
		
		temp.attr('basket_id', pay.BASKET_NO);
		temp.attr('cloth_id', pay.CLOTH_NO);
		temp.css('display', '');
		temp.find('.d-flex img').attr('src', 'img/cloth/' + pay.CLOTH_NAME + '.jpg');
		temp.find('.media-body p').text(pay.CLOTH_NAME);
		temp.find('.media-body a').attr('onclick','javascript:payment.clickProduct('+pay.CLOTH_NO+');');
		
		temp.find('td h5:eq(0)').before('<s><i>' + pay.PRICE +'원 </i></s>');
		temp.find('td h5:eq(0)').text(Math.round((prc / 10) * 10).formatNumber() + '원');
		temp.find('td h5:eq(0)').attr('class', 'price' + pay.BASKET_NO);
		if(pay.DISCOUNT_RATE == 0){
			temp.find('td s').css('display', 'none');
		}
		
		temp.find('.product_count h4').text(pay.BASKET_CNT);
		temp.find('td h5:eq(1)').text(Math.round((prc * pay.BASKET_CNT / 10) * 10).formatNumber() + '원');
		temp.find('td h5:eq(1)').attr('class', 't_price' + pay.BASKET_NO);
		return temp;
	},
	
	clickProduct(no){ //상세페이지
		$("<a>").prop({
            target: "_blank",
            href: "/musinsam/getProduct.do?clothNo=" + no
        })[0].click();
	},
	userChk(){ //배송지 정보
		if($('#user_chk').is(':checked') == true){
		pvc.userInfo(userId, function(result){
				 result.forEach(user => {
					 $('#order_name').val(user.name);
					 $('#order_name').attr('readonly','')
					 $('#order_number').val(user.phone);
					 $('#order_number').attr('readonly','')
					 $('#address').val(user.address);
					 $('#address').attr('readonly','')

				 }, function(err) {
					 console.log(err);
				 })
			 })
		}else{
			$('#order_name').val('');
			$('#order_name').removeAttr('readonly')
			$('#order_number').val('');
			$('#order_number').removeAttr('readonly')
			$('#address').val('');
			$('#address').removeAttr('readonly')
		}
	},
	reset(){ //취소버튼
		$("<a>").prop({
            target: "_self",
            href: "/musinsam/cart.do"
        	})[0].click();
	},
	pay(){ //결제버튼
		
        let today = new Date();   
        let hours = today.getHours(); // 시
        let minutes = today.getMinutes();  // 분
        let seconds = today.getSeconds();  // 초
        let milliseconds = today.getMilliseconds();
        let makeMerchantUid = hours +''+  minutes +''+ seconds +''+ milliseconds;
        
        let buyer_name = $('#order_name').val();
        let buyer_tel = $('#order_number').val();
        let del_addr = $('#address').val();
        if(del_addr == '' || buyer_name == '' || buyer_tel == ''){
			alert('배송지 정보를 입력해주세요.');
			return;
		}
        let buyer_pay = parseInt($('.pay_order span').text());
		
		if(userId != ''){
			
			IMP.init("imp87235074"); 
			
			IMP.request_pay(
				{
					pg: "kakaopay.TC0ONETIME",
					pay_method: "card", // 생략가능
					merchant_uid: "IMP" + makeMerchantUid, // 상점에서 생성한 고유 주문번호
					name: userId,
					amount: buyer_pay,
					//buyer_email: "test@portone.io",
					buyer_name: buyer_name,
					buyer_tel: buyer_tel,
					buyer_addr: del_addr,
					//buyer_postcode: "123-456",
					//m_redirect_url: "{모바일에서 결제 완료 후 리디렉션 될 URL}",
				},
				function(rsp) {
					if (rsp.success) { //결제 성공시
                    	console.log(rsp);
						var cno = new Array();
						var cnt = new Array();
						var prc = new Array();
						var csz = new Array();
						var no = new Array();
						
						for(let i =0; i < $('[cloth_id]').length; i++){
							cno.push($('[cloth_id]:eq("' + i +'")').attr('cloth_id'));
							cnt.push($('[cloth_id]:eq("' + i +'") td:eq(3) h4').text());
							prc.push(parseInt($('[cloth_id]:eq("' + i +'") td:eq(4) h5').text()));
							csz.push($('[cloth_id]:eq("' + i +'") td:eq(2) h4').text());
							no.push($('[cloth_id]:eq("' + i +'")').attr('basket_id'));
						}
						
						let del = 1;
						let rec = $('#order_name').val();
						let phn = $('#order_number').val();
						let adr = $('#address').val();
						let bvo ={del, userId, adr, rec, phn};
						
						pvc.orderInsert(bvo, cnt, cno, prc, (result) => {
							if (result.retCode == "Success") {
								alert("결제 완료 되었습니다.");
								$("<a>").prop({
									target: "_self",
									href: "/musinsam/orderInqueryForm.do"
								})[0].click();
							}
						},(err) => { })
						
						pvc.stockDown(cnt, cno, csz, (result) => {
							if (result.retCode == "Success") {
							}
						},(err) => { })
						
						svc.cartRemove(no, (result) => {
							if (result.retCode == "Success") {
							}
						},(err) => { })
						
						lvc.likeRemove(userId, cno, (result) => {
						if (result.retCode == "Success") {
						}
			},(err) => { })
						
                	} else if (rsp.success == false) { // 결제 실패시
                    	alert(rsp.error_msg)
                	}
				}
			);
			
		}else{
			alert('로그인 필요!');
		}
	}
}

payment.list();