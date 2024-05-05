/**
 * 
 */

 const prd = {
	cartProduct(userId, no =1,  successCall, errorCall) {
		fetch('cartProduct.do?uid=' + userId + '&no=' + no)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	likeProduct(userId, no = 1, successCall, errorCall) {
		fetch('likeProduct.do?uid=' + userId + '&no=' + no)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}