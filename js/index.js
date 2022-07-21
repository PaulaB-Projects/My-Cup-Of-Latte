const cvButton = document.getElementById("cvButton");
const languages = document.querySelector(".languages");
const education = document.querySelector(".education");
const work = document.querySelector(".work-experience");

cvButton.addEventListener("click", () => {
	// SOLUTION 1:
	// const pageHeader = document.querySelector("header");
	// const headerHeight = pageHeader.offsetHeight;
	// window.scrollTo({
	// 	top: headerHeight,
	// 	behavior: 'smooth'
	// });

	// SOLUTION 2:
	// const mainElem = document.querySelector("main");
	// const { top } = mainElem.getBoundingClientRect();
	// window.scrollBy({ top });

	// SOLUTION 3:
	// scroll to #main
	
	location = "#main"; // ./#main
});

function educationPosition() {
	const viewportWidth = window.innerWidth;
	console.log(viewportWidth);

	if (viewportWidth < 960)
		education.style.marginTop = 0;
	else {
		const { bottom } = languages.getBoundingClientRect();
		const { bottom : bottomWork } = work.getBoundingClientRect();

		const a = bottom - bottomWork;
		education.style.marginTop = `${a}px`;
	}
}

window.addEventListener('resize', () => {
	educationPosition();
}, true);

// what about when we haven't resized the window?
educationPosition();
