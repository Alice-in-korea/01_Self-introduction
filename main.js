'use strict';

//click count
const likeIcons = document.querySelectorAll('.fa-heart');
const likes = document.querySelectorAll('.card__likes');

for (let i = 0; i < likeIcons.length; i++) {
	likeIcons[i].addEventListener('click', onClickLike);

	let likeCount = 1;
	function onClickLike() {
		const result = likeCount++;
		likes[i].innerHTML = `${result}`;
	}
}

//Intersection Observer API
const options = {
	rootMargin: '-10% 0px -90%',
};

const observer = new IntersectionObserver(navCheck, options);
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});

function navCheck(entries) {
	entries.forEach((entry) => {
		// console.log(entry.target.className);
		const activeSection = entry.target.className;
		const activeMenu = document.querySelector(`[data-name = ${activeSection}]`);
		// console.log(activeMenu);
		if (entry.isIntersecting) {
			// console.log(entry.target.className);
			activeMenu.classList.add('active');
		} else {
			activeMenu.classList.remove('active');
		}
	});
}

//menu click하면 해당 section top으로 scrolling
//project
const projectBtn = document.querySelector('[data-name = project]');
const aboutBtn = document.querySelector('[data-name = about]');
const projectSection = document.querySelector('.project');
const aboutSection = document.querySelector('.about');

// console.log(projectSection.offsetTop)

projectBtn.addEventListener('click', () => {
	// projectSection.scrollIntoView({block: "start", behavior: 'smooth'});
	window.scrollTo({
		left: 0,
		top: projectSection.offsetTop - 50,
		behavior: 'smooth',
	});
});

aboutBtn.addEventListener('click', () => {
	// aboutSection.scrollIntoView({block: 'start', behavior: 'smooth'});
	window.scrollTo({
		left: 0,
		top: aboutSection.offsetTop - 50,
		behavior: 'smooth',
	});
});

//To the top
const homes = document.querySelectorAll('.fa-home');
homes.forEach((home) => {
	home.addEventListener('click', () => {
		window.scrollTo({
			left: 0,
			top: 0,
			behavior: 'smooth',
		});
	});
});
