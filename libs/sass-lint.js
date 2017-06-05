'use strict';

// ----------------------------------------
// Imports
// ----------------------------------------

const path = require('path');
const lint = require('sass-lint');

// ----------------------------------------
// Helpers
// ----------------------------------------

/**
 * Save fn
 * @const {*}
 */
const lintText = lint.lintText;

/**
 * Runs each rule against our AST tree and returns our main object of detected
 * errors, warnings, messages and filenames.
 * @override
 *
 * @param {object} file file object from fs.readFileSync
 * @param {object} options user specified rules/options passed in
 * @param {string} configPath path to a config file
 * @returns {object} an object containing error & warning counts plus lint messages for each parsed file
 */
lint.lintText = function (file, options, configPath) {
	if (options.options.noDisabling) {
		let text = String(file.text);

		text = text.replace(/(\s|\t)*\/\/(\s|\t)+sass-lint(\s|\t)*:(\s|\t)*disable.+/ig, '');
		file.text = text;
	}
	return lintText.call(this, file, options, configPath)
}

/**
 * Handles formatting of results using EsLint formatters
 * @override
 *
 * @param {object} results our results object
 * @param {object} options user specified rules/options passed in
 * @param {string} configPath path to a config file
 * @returns {object} results our results object in the user specified format
 */
lint.format = function (results, options, configPath) {
	const config = this.getConfig(options, configPath);
	const format = config.options.formatter.toLowerCase();

	let formatter = 'eslint/lib/formatters/' + format;

	if (format === 'html') {
		formatter = path.join(__dirname, './formatters/html')
	}

	let formatted = require(formatter);

	let newResults = JSON.parse(JSON.stringify(results));
	let tail = '';
	let hiddenErrors = 0;
	let showMaxStack = options.options.showMaxStack || 0;

	if (config.options['output-file']) {
		showMaxStack = 0;
	}

	if (showMaxStack > 0) {
		newResults.forEach(result => {
			if (result.errorCount > showMaxStack) {
				let resultHiddenErrors = result.errorCount - showMaxStack;

				hiddenErrors += resultHiddenErrors;
				result.messages = result.messages.slice(0, showMaxStack);
			}
		});
	}

	if (hiddenErrors > 0) {
		tail = `\n\tNOTE! Showed maximum ${showMaxStack} errors for each result\n\tand ${hiddenErrors} errors was not printed in console\n`;
	}

	return formatted(newResults) + tail;
};

// ----------------------------------------
// Exports
// ----------------------------------------


module.exports = lint;
