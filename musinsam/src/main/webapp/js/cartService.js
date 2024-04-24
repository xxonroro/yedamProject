/**
 * 
 */
const svc = {
	cartList(page = 1, successCall, errorCall) {
		fetch('cartList.do?page=' + page)
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	cartUpdate(bvo = {}, successCall, errorCall) {
		fetch('updownCount.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'no=' + bvo.no + '&qty=' + bvo.qty
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