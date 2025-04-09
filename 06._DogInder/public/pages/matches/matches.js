let dogs = [];

// assignment: import the rest of the headers and update them with the profile info

const dogMatchesNameH1 = document.getElementById('dog-matches-name');
const dogMatchesImageContainerDiv = document.getElementById('dog-matches-image-container');
const dogMatchesStreetAddress = document.getElementById('dog-matches-street-address');
const dogMatchesCity = document.getElementById('dog-matches-city');
const dogMatchesBio = document.getElementById('dog-matches-bio');

function getMatches() {
	fetch('/api/matches')
		.then((response) => response.json())
		.then((result) => {
			dogs = result.data;
			createMatchImage(dogs.pop());
		});
}

getMatches();

function createMatchImage(dog) {
	dogMatchesNameH1.textContent = 'Name: ' + dog.name; // Update the text content instead of reassigning the variable
	dogMatchesStreetAddress.textContent = 'Street address: ' + dog.streetAddress;
	dogMatchesCity.textContent = 'City: ' + dog.city;
	dogMatchesBio.textContent = 'Bio: ' + dog.bio;
	console.log(dog);

	const imageTag = document.createElement('img');
	imageTag.src = dog.image;
	imageTag.id = 'dog-matches-image';

	dogMatchesImageContainerDiv.appendChild(imageTag);

	setupHammerPanEvents(imageTag);
}

function setupHammerPanEvents(dogImageTag) {
	const hammertime = new Hammer(dogImageTag);

	hammertime.on('pan', (event) => {
		// Calculate the new position based on the pan movement
		const deltaX = event.deltaX;

		// Apply the transformation to the image
		dogImageTag.style.transform = `translateX(${deltaX}px)`;
	});

	hammertime.on('panend', (event) => {
		if (event.deltaX > 0) {
			console.log('Ended dragging to the right');
			// todo: Handle end of right drag here
		} else {
			console.log('Ended dragging to the left');
			// todo: Handle end of left drag here
		}
		if (dogs.length > 0) {
			createMatchImage(dogs.pop());
		} else {
			getMatches();
		}
	});
}
