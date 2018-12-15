const getData = () => {
	return fetch('http://jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(data => console.log(data))
}

const data = {
	title: "wow",
	body: "users",
}
const newData = post => {
	const options = {
		method: 'POST',
		body: JSON.stringify(post),
		headers: new Headers ({
			'Content-Type': 'application/json'
		})
	}

	return fetch('http://jsonplaceholder.typicode.com/users', options)
		.then(res => res.json())
		.then(res => console.log(res))
}

newData(data)
