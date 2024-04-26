/**
 * 
 */
const svc = {
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
	}
}
