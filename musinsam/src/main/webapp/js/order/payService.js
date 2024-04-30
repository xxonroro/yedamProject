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
	userInfo(uid="user001", successCall, errorCall) {
		fetch('userInfo.do?uid=' + uid )
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
	
}