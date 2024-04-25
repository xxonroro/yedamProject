/**
 * 
 */

 const svc = {
	 addReview(vo ={rNo,cNo,uid,detail},successCall, errorCall){
		 fetch('addReview.do',{
			 method:'post',
			 headers:{'Content-Type':'application/x-www-form-urlencoded'},
			 body: 'rNo=' + vo.rNo +'&cNo='+ vo.cNo + '&uid=' + vo.uid +'&detail=' + vo.detail
		 })
		 .then(result => result.json())
		 .then(successCall)
		 .catch(errorCall);
	 }
 }
 
 document.getElementById('addReview').addEventListener('click',function(e){
	 console.log('yes');
	 let cNo = document.getElementById('cNo').value;
	  console.log(cNo);
	 let uid = document.getElementById('uid').value;
	  console.log(uid);
	 let detail = document.getElementById('textarea').value;
	  console.log(detail);
	 
	 let vo = {
		 cNo:cNo,
		 uid:uid,
		 detail:detail	 
	 }
	 svc.addReview(vo, function(result){
	if(result.retCode == 'Success'){
		alert('등록이 완료되었습니다');
	}else{
		alert('등록 중 에러가 발생했습니다');
	}
});
 });
