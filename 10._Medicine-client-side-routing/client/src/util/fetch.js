export async function fetchGet(url) {
	try {
		const response = await fetch(url, {
			credentials: 'include',
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
}

export function fetchPost(url, body) {
	return fetch(url, {
		method: 'POST',
		credentials: 'include', // Something about credentials being included in the fetch being very import for client rendering?
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((response) => response.json)
		.then((result) => result)
		.catch((error) => console.log(error));
}
