const copyrightYearP = document.getElementById('footer-copyright-year');

const currentYear = new Date().getFullYear();
copyrightYearP.textContent = '©' + currentYear;
