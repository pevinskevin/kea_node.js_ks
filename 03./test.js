const name = {
    name: "Kevin",
    age: 29,
    occupation: "Student"
};

const name2 =
	{
		name: 'Horse',
		age: 18,
		occupation: 'Horse',
	};

const newHorse = {...name, ...name2};


console.log({ ...name2 });
