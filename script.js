const getData = () => {
fetch("file.json")
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	});
}
