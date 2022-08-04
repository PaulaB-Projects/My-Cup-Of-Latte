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
const menuLabel = document.querySelector(".menu");

let thing = () => { 
	console.log("Hello"); 
}


function openMenu() {
	[
		[
			menuList,
			"openMenu",
			1000
		],
		[
			menuLabel,
			"active",
			550
		]
	].forEach(([element, className, time]) => {
		setTimeout(
			() => {
				element.classList.add(className)
			},
			time
		);
	});

	// setTimeout(
	// 	() => {
	// 		menuList.classList.add("openMenu");
	// 	},
	// 	1000
	// );
	// setTimeout(
	// 	() => {
	// 		menuLabel.classList.add("active");
	// 	},
	// 	500
	// );
};

function closeMenu() {
	menuList.classList.remove("openMenu");
	menuLabel.classList.remove("active");
};

checkbox.addEventListener("input", () => {
	console.log(checkbox.checked);
	if (checkbox.checked)
		openMenu();
	else
		closeMenu();
});
