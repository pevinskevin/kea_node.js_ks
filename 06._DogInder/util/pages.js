import { readPage, constructPage } from './templatingEngine.js';

const frontpage = readPage('./public/pages/frontpage/frontpage.html');
const matches = readPage('./public/pages/matches/matches.html');

export const frontpagePage = constructPage(frontpage);
export const matchesPage = constructPage(matches);
