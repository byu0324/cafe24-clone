'use strict'

//검색 버튼 열기
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const searchOverlay = document.querySelector('.search-overlay');

searchBtn.addEventListener('click', () => {
  search.style.transform = 'translate(-50%, 0)';
  search.style.visibility = 'visible';
});