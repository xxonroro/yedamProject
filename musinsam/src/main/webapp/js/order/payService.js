/**
 * 
 */
const pvc = {
 	cartList(no=[], successCall, errorCall) {
		fetch('payList.do?no=' + no )
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	userInfo(userId, successCall, errorCall) {
		fetch('userInfo.do?uid=' + userId )
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
	
}