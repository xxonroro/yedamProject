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
	},
	orderInsert(bvo={del, userId, adr, rec, phn}, cnt=[], cno=[], prc=[], csz=[], successCall, errorCall){
		fetch('insertOrder.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'del=' + bvo.del + '&uid=' + bvo.userId + '&adr=' + bvo.adr + '&rec='+ bvo.rec + '&phn=' + bvo.phn
				 + '&cnt=' + cnt + '&cno=' + cno + '&prc=' + prc + '&csz=' + csz
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	},
	stockDown(pty=[], cno=[], csz=[], successCall, errorCall){
		fetch('downStock.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'pty=' + pty + '&cno=' + cno + '&csz=' + csz 
		})
			.then(resolve => resolve.json())
			.then(successCall)
			.catch(errorCall);
	}
	
}