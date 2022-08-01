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

// when menu toggle is clicked ...

const checkbox = document.getElementById("menu-toggle");
const menuList = document.querySelector(".menu-list");

checkbox.addEventListener("input", () => {
	console.log(checkbox.checked);
	if (checkbox.checked) {
		///add a class name to the menu list
		menuList.classList.add("openAnimation");
		setTimeout(
			() => menuList.classList.remove("openAnimation"),
			2000
		);
	} else {
		console.log("menu has not been checked");
	}		
});
