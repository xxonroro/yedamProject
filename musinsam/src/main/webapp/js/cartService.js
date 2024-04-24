/**
 * 
 */
const svc = {
	cartList(successCall, errorCall) {
		fetch('cartList.do')
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartUpdate(cvo = {}, successCall, errorCall) {
		fetch('updownCount.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + cvo.no + '&qty=' + cvo.qty //JSON.stringify({})
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartRemove(no = 1, successCall, errorCall) {
		fetch('removeCart.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + no
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
}