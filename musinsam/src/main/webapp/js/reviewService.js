/**
 * 
 */
 //리뷰 등록
 const svc = {
	 //get 방식 
	 addReview(vo ={cNo,uid,detail,grade},successCall, errorCall){
		 fetch('addReview.do',{
			 method:'post',
			 headers:{'Content-Type':'application/x-www-form-urlencoded'},
			 body:'cNo='+ vo.cNo + '&uid=' + vo.uid +'&detail=' + vo.detail + '&grade=' + vo.grade
		 })
		 .then(result => result.json())
		 .then(successCall)
		 .catch(errorCall);
	 },
	 
	 //post 방식
	 reviewList(cNo,successCall){
		 let url = 'reviewList.do?cNo=' + cNo;
		 fetch(url)
		 .then(result =>result.json())
		 .then(successCall)
		 .catch(err => console.error(err));
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
// 평점 -> 체크된 별 개수: fas.length    / QuerySelector  => grade 	
 // 받아온 grade를 mapper에서 insert into로 삽입하기 	 
	 let starCount = document.querySelectorAll(".fas.fa-star").length;    //querySelector는 1개만 출력, 여러개를 출력하고 싶으면 All을 사용 
	  console.log(starCount);

	 let vo = {
		 cNo:cNo,
		 uid:uid,
		 detail:detail,
		 grade:starCount
		 	 
	 }
	 svc.addReview(vo, function(result){
	if(result.retCode == 'Success'){
		alert('등록이 완료되었습니다');
	}else{
		alert('등록 중 에러가 발생했습니다');
	}
});
 });
 
 //별점 리뷰 -> 별 개수 띄우기
 
 const ratingStars = [...document.getElementsByClassName("rating__star")];
 
 function executeRating(stars){
	 const starClassActive = "rating__star fas fa-star";
	 const starClassInactive = "rating__star far fa-star";
	 const starsLength = stars.length;
	 let i;
	 
	 stars.map((star) => {    //map 메소드 : 루프
		 star.onclick = ()  => {      //별에 클릭 이벤트 걸어주기 
			i = stars.indexOf(star);   // i는 위에서 클릭된 별의 인덱스값을 가져옴  
			
			if (star.className === starClassInactive){
				for(i; i >= 0; --i) stars[i].className = starClassActive;	
			}else{
				for(i; i < starsLength; ++i) stars[i].className = starClassInactive;
			}
		 };
	 }); 
 }

executeRating(ratingStars);

let cNo = document.getElementById('cNo').value;
svc.reviewList(cNo,function(result){
	result.forEach(elem =>{
		let grade = "";
		for (i=0; i<elem.grade; i++){
			grade+='<i class="fas fa-star"></i>';
		}
		for (i=0; i<5-elem.grade; i++){
			grade+='<i class="far fa-star"></i>';
		}
		
		let temp =`	<div class="review_item">
						<div class="media">
							<div class="d-flex">
							</div>
							<div class="media-body">
								<h4>${elem.userId}</h4>
								${grade}
							</div>
						</div>
						<p>${elem.detail}</p>
					</div>`
					
					$('.review_list').append(temp);
	})
	
})
/*let starSum =[...document.getElementBy]

function starAvg(){
  
	
}
*/




