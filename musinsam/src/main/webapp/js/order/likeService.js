/**
 * 
 */
const lvc = {
	likeList(userId, bct='', page=1, maxPg=8, successCall, errorCall) {
		fetch('likeList.do?uid=' + userId + '&bct='+ bct + '&page=' + page + '&maxPg=' + maxPg)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	likeRemove(userId, no = [], successCall, errorCall) {
		fetch('removeLike.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'uid=' + userId + '&no=' + no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	likeInsert(lvo = {userId, no}, successCall, errorCall) {
		fetch('insertLike.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'uid=' + lvo.userId + '&no=' + lvo.no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartInsertIcon(bvo={cnt, userId, no} , successCall, errorCall) {
		fetch('insertCartIcon.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'cnt=' + bvo.cnt + '&uid=' + bvo.userId + '&no=' + bvo.no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartRemoveIcon(bvo={userId, no} , successCall, errorCall) {
		fetch('removeCartIcon.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'uid=' + bvo.userId + '&no=' + bvo.no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	likeCount(userId, bct='', successCall, errorCall) {
		fetch('countLike.do?uid=' + userId + '&bct='+ bct)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
}