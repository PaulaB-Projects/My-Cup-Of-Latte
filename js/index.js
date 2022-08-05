const cvButton = document.getElementById("cvButton");
const [
	profile,
	work,
	skills,
	languages,
	education
] = document.querySelectorAll("article > section")

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

function languagesPosition() {
	const viewportWidth = window.innerWidth;

	if(viewportWidth < 960)
		languages.style.marginTop = 0;
	else {
		const { bottom } = skills.getBoundingClientRect();
		const { bottom : bottomProfile } = profile.getBoundingClientRect();

		const b = bottom - bottomProfile;
		if (b <= 0)
			languages.style.marginTop = `${b}px`;
		else {
			languages.style.marginTop = 0;
		}
	}
}

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

// what about when we haven't resized the window?

const calibrate = () => {
	languagesPosition();
	educationPosition();
	window.requestAnimationFrame(calibrate);
}

calibrate();



// when menu toggle is clicked ...

const checkbox = document.getElementById("menu-toggle");
const menuList = document.querySelector(".menu-list");
const menuLabel = document.querySelector(".menu");
const body = document.body;


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
		],
		[
			body,
			"noscroll"
		]
	].forEach(([element, className, time = 0]) => {
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
	body.classList.remove("noscroll");
};

checkbox.addEventListener("input", () => {
	console.log(checkbox.checked);
	if (checkbox.checked)
		openMenu();
	else
		closeMenu();
});
