// Javascipt is single-threaded, everything runs on the main thread.

// async is used for database interactions, file handling, fetch / HTTP requests (network)

// Solution 1: Callback functions

// Leads to --> callback hell, pyramid of doom

// Solution 2: promises (syntactic sugar for callbacks)

// pending, fulfilled
// resolved / rejected

new Promise((resolve, reject) => {
	setTimeout(() => {
		try {
			resolve('Everything went well');
		} catch (error) {
			reject(error);
		}
	}, 1000);
})
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(console.error());
	});

// promisified function --> it returns a function
function myPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve('Something good');
			} catch (error) {
				reject('Something bad');
			}
		}, 3000);
	});
}

function myFetch()

//
