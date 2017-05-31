#!/usr/bin/env node
'use strict';

/**
 * @fileOverview this cli file is copy of original sass-lint/bin/sass-lint.js
 * @licence
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Sam Richard
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var program = require('commander'),
	path = require('path'),
	meta = require('../package.json'),
	lint = require('sass-lint'); // change path to linter

delete meta.sasslintConfig;

var configPath = path.join(__dirname, '../.sass-lint.yml'),
	config,
	configOptions = {},
	exitCode = 0;

var tooManyWarnings = function (detects, userConfig) {
	var warningCount = lint.warningCount(detects).count;

	return warningCount > 0 && warningCount > userConfig.options['max-warnings'];
};

var detectPattern = function (pattern, userConfig) {
	var detects = lint.lintFiles(pattern, configOptions, configPath);

	if (program.verbose || userConfig.options.verbose) {
		lint.outputResults(detects, configOptions, configPath);
	}

	if (lint.errorCount(detects).count || tooManyWarnings(detects, userConfig)) {
		exitCode = 1;
	}

	if (program.exit && userConfig.options['no-exit'] !== true) {
		lint.failOnError(detects, configOptions, configPath);
	}
};

program
	.version(meta.version)
	.usage('[options] <pattern>')
	// .option('-c, --config [path]', 'path to custom config file') // disable user config
	.option('-i, --ignore [pattern]', 'pattern to ignore. For multiple ignores, separate each pattern by `, ` within a string')
	// .option('-q, --no-exit', 'do not exit on errors') // always no-exit
	// .option('-v, --verbose', 'verbose output') // always verbose
	.option('-f, --format [format]', 'pass one of the available eslint formats')
	.option('-o, --output [output]', 'the path and filename where you would like output to be written')
	// .option('-s, --syntax [syntax]', 'syntax to evaluate the file(s) with (either sass or scss)') // filename extension-based syntax detection
	// .option('--max-warnings [integer]', 'Number of warnings to trigger nonzero exit code') // disable
	.parse(process.argv);

configOptions.files = configOptions.files || {};
configOptions.options = configOptions.options || {};

// if (program.config && program.config !== true) {
// 	configPath = program.config;
// }

if (program.ignore && program.ignore !== true) {
	configOptions.files.ignore = program.ignore.split(', ');
	configOptions.files.ignore.push('./node_modules/**'); // always ignore node_modules
}

// if (program.syntax && ['sass', 'scss'].indexOf(program.syntax) > -1) {
// 	configOptions.syntax = program.syntax;
// }

if (program.format && program.format !== true) {
	configOptions.options.formatter = program.format;
}

if (program.output && program.output !== true) {
	configOptions.options['output-file'] = program.output;
}

// if (program.maxWarnings && program.maxWarnings !== true) {
// 	configOptions.options['max-warnings'] = program.maxWarnings;
// }

// load our config here so we only load it once for each file
config = lint.getConfig(configOptions, configPath);

if (program.args.length === 0) {
	detectPattern(null, config);
}
else {
	program.args.forEach(function (path) {
		detectPattern(path, config);
	});
}

process.on('exit', function () {
	process.exit(exitCode); // eslint-disable-line no-process-exit
});
