export default function() {
	let toolbar = document.querySelector('.toolbar');
	toolbar.onclick = function() {
		toolbar.classList.toggle('active');
	}
};