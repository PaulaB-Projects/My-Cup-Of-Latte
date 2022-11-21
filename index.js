import express from "express";
import { readFileSync as read } from "fs";

const app = express();

const PUBLIC_FOLDER = './public';
const VIEW_FOLDER = './view';
const DATA_FOLDER = './data';
const PORT = 8080;
const ENCODING = 'utf8';
const PAGES = [
	"home",
	"about",
	"contact",
	"portofolio"
];

function open(file) {
	return read(file, ENCODING);
};

function load(data_file) {
	return JSON.parse(open(data_file));
};

function load_data(json_file) {
	return load(`${ DATA_FOLDER }/${ json_file }.json`);
};

function render_template(template_file, model) {
	const params = Object.keys(model);
	const args = Object.values(model);
	const renderer = new Function(...params, "return `" + open(template_file) + "`;");

	return renderer(...args);
};

for (const page of PAGES) {
	app.get(
		page === "home" ? "/" : `/${ page }`,
		(_, res) => {
			res.send(
				render_template(
					`${ VIEW_FOLDER }/${ page }.html`,
					{}
				)
			)
		}
	);
}
//research for express.js how to create a page not found
//arrays can have arrays inside of it 

app.use(
	express.static(PUBLIC_FOLDER)
);

app.use((req, res) => {
	res.status(404).send(
		"<h1>Page not found on the server</h1>"
	)
})

app.listen(
	PORT,
	() => console.log(`Web Server ready. Lisening on port ${ PORT }`)
);
