const fetchAllData = () => {
	fetch('http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
		});
}