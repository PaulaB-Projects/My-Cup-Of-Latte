import express from "express";
import { readFileSync as read } from "fs";

const app = express();

const PUBLIC_FOLDER = './public';
const DATA_FOLDER = './data';
const PORT = 8080;
const ENCODING = 'utf8';

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

app.get(
	'/',
	(_, res) => {
		res.send(
			render_template(
				`${ PUBLIC_FOLDER }/index.html`,
				load_data("main")
			)
		)
	}
);

app.use(
	express.static(PUBLIC_FOLDER)
);

app.listen(
	PORT,
	() => console.log(`Web Server ready. Lisening on port ${ PORT }`)
);
