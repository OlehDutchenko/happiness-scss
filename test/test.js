'use strict';

/**
 * @module
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const fs = require('fs');
const path = require('path');
const happinessScss = require('../index');

// ----------------------------------------
// Private
// ----------------------------------------

function pathTo (glob) {
	return path.join(__dirname, glob);
}

function printData(data, outputPath, outputFormatter = 'html') {
	if (data.errorCount.count) {
		let formatted = happinessScss.format(data.results, {
			formatter: 'table'
		});

		console.log(formatted);

		happinessScss.outputResults(data.results, {
			formatter: outputFormatter,
			outputFile: outputPath;
		});
	}
}

// ----------------------------------------
// Test
// ----------------------------------------

// lintText
happinessScss.lintText(pathTo('./fixtures/hex-notation.scss'), null, function(err, data) {
	if (err) {
		throw new Error(err);
	}

	printData(data, pathTo('../tmp/lint-files-output.html'));
});

// lintFiles
happinessScss.lintFiles(pathTo('./fixtures/**.scss'),  {
	ignore: [
		pathTo('./fixtures/hex-notation.scss')
	]
}, function(err, data) {
	if (err) {
		throw new Error(err);
	}

	if (data.errorCount.count) {
		let formatted = happinessScss.format(data.results, {
			formatter: 'table'
		});

		console.log(formatted);

		happinessScss.outputResults(data.results, {
			formatter: 'html',
			outputFile: pathTo('../tmp/lint-files-output.html')
		});
	}
});
