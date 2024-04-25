/**
 * 
 */
const svc = {
	likeList(uid='user001', page=1, successCall, errorCall) {
		fetch('likeList.do?uid=' + uid + '&page=' + page)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}