import fs from 'fs';

export function readPage(path) {
	return fs.readFileSync(path).toString(); // toString() is added, so that when you print it, you get the string rather than the bit array thing.
}
const header = readPage('./public/components/header/header.html');
const footer = readPage('./public/components/footer/footer.html');

export function constructPage(pageContent) {
	return header + pageContent + footer;
}
