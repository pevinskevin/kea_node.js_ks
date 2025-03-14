function partyFactory(partyName) {
	return {
		partyName,
		supplies: ['🥳', '🍾', '🥂', '🎈', '🎉', '🎊', '🎓'],
	};
}
export default partyFactory;

// Is the same as 
export const partyFactoryExport = partyFactory;