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
