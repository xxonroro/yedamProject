/**
 * 
 */
const lvc = {
	likeList(uid='user001', page=1, maxPg=8, successCall, errorCall) {
		fetch('likeList.do?uid=' + uid + '&page=' + page + '&maxPg=' + maxPg)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	likeRemove(no = [], successCall, errorCall) {
		fetch('removeLike.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	likeInsert(lvo = {uid, no}, successCall, errorCall) {
		fetch('insertLike.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'uid=' + lvo.uid + '&no=' + lvo.no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartInsertIcon(bvo={cnt, uid, no} , successCall, errorCall) {
		fetch('insertCartIcon.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'cnt=' + bvo.cnt + '&uid=' + bvo.uid + '&no=' + bvo.no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartRemoveIcon(bvo={uid, no} , successCall, errorCall) {
		fetch('removeCartIcon.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'uid=' + bvo.uid + '&no=' + bvo.no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	likeCount(uid='user001', successCall, errorCall) {
		fetch('countLike.do?uid=' + uid )
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
}