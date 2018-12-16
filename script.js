function createNode(element){
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const ul = document.getElementById("users");
const url = 'https://randomuser.me/api/?results=5'

fetch(url)
.then((resp) => resp.json())
.then(function(data){
	let users = data.results;

	return users.map(function(user){
			let li = createNode('li'),
			img = createNode('img'),
			span = createNode('span');

			img.src=user.picture.medium;
			span.innerHtml=`${user.name.first} ${user.name.last}`;

			append(li,img);
			append(li,span);
			append(ul,li);
	})
})

.catch(function(error){
	console.log(JSON.stringify(error))
});



// const getData = () => {
// 	return fetch('http://jsonplaceholder.typicode.com/users')
// 	.then(res => res.json())
// 	.then(data => console.log(data))
// }
//
// const data = {
// 	title: "wow",
// 	body: "users",
// }
// const newData = post => {
// 	const options = {
// 		method: 'POST',
// 		body: JSON.stringify(post),
// 		headers: new Headers ({
// 			'Content-Type': 'application/json'
// 		})
// 	}
//
// 	return fetch('http://jsonplaceholder.typicode.com/users', options)
// 		.then(res => res.json())
// 		.then(res => console.log(res))
// }
//
// newData(data)
