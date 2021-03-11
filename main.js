'use strict';

const likeIcons = document.querySelectorAll('.fa-heart');
const likes = document.querySelectorAll('.card__likes');

for (let i = 0; i < likeIcons.length; i++) {
	likeIcons[i].addEventListener('click', onClickLike);
  
	let likeCount = 0;
	function onClickLike() {
		const result = likeCount++;
		likes[i].innerHTML = `${result}`;
	}
}
