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

function adjustPosition(element, ...others) {
	if (window.innerWidth >= 960) {
		// above.getBoundingClientRect().bottom - beside.getBoundingClientRect().bottom
		const distance =
			others
				.map(element => element.getBoundingClientRect().bottom)
				.reduce((a, b) => a - b);

		if (distance <= 0)
			return element.style.marginTop = `${distance}px`;
	}
	element.style.marginTop = 0;
}

const calibrate = () => {
	[
		[
			languages,
			skills,
			profile
		],
		[
			education,
			languages,
			work
		]
	].forEach(elements => adjustPosition(...elements));
	window.requestAnimationFrame(calibrate);
}

calibrate();

// when menu toggle is clicked ...

const checkbox = document.getElementById("menu-toggle");
const menuList = document.querySelector(".menu-list");
const menuLabel = document.querySelector(".menu");
const body = document.body;

function delayAddClassName(element, className, delayTime = 0) {
	setTimeout(
		() => {
			element.classList.add(className)
		},
		delayTime
	);
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
		],
		[
			body,
			"noscroll"
		]
	].forEach(args => delayAddClassName(...arguments));
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
