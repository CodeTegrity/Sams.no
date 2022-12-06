export default function() {

	let background = document.querySelector('#background');
	let moon = document.querySelector('#moon');
	let mountain = document.querySelector('#mountain');
	let road = document.querySelector('#road');
	let text = document.querySelector('#text');
	
	/* This function sets the position of elements when scrolling in the Y axis */
	window.addEventListener('scroll', function() {
		const value = window.scrollY;
		
		background.style.top = -value * 0.6 + 'px';
		moon.style.left = -value * 1.5 + 'px';
		mountain.style.top = -value * 0.15 + 'px';
		road.style.top = value * 0.15 + 'px';
		text.style.top = value * 0.6 + 'px';
		
		})
	};