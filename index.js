const today = dayjs();
const webExpo = dayjs('2023-04-19');

const pageTitleElm = document.querySelector('.page__title')

if (today.isAfter(webExpo)) {
  pageTitleElm.textContent = 'WebExpo zahajen! Pospěš si!';
  pageTitleElm.classList.add('title--yes')
} else {
  pageTitleElm.textContent = 'Ještě si počkej...';
  pageTitleElm.classList.add('title--no')
}