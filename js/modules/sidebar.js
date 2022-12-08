export default function() {
	let button = document.querySelector('#button');
	let sidebar = document.querySelector('.sidebar');
	let searchButton = document.querySelector('.bx-search');

	button.onclick = function() {
		 sidebar.classList.toggle('active');
	}      
	searchButton.onclick = function() {
		 sidebar.classList.toggle('active');
		 
	}
};