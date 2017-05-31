'use strict';

/**
 * @module happiness-scss
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const path = require('path');
const sassLint = require('sass-lint');

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * Return correct path to `node_modules` folder in Current Working Directory (cwd)
 * @returns {string}
 */
function ignoreNodeModules () {
	return path.join(process.cwd(), './node_modules/**');
}

/**
 * Transform user config for linter config
 * @private
 * @param {Object} [config]
 * @returns {Object}
 */
function transformConfig (config) {
	if (config === null || typeof config !== 'object') {
		config = {};
	}

	if (!Object.keys(config).length) {
		return {
			files: {
				ignore: [ignoreNodeModules()]
			}
		};
	}

	let runConfig = {};

	if (config.formatter) {
		runConfig.options = runConfig.options || {};
		runConfig.options.formatter = config.formatter;
	}
	if (config.outputFile) {
		runConfig.options = runConfig.options || {};
		runConfig.options['output-file'] = config.outputFile;
	}
	if (Array.isArray(config.ignore)) {
		runConfig.files = {
			ignore: config.ignore.concat(ignoreNodeModules())
		};
	} else {
		runConfig.files = {
			ignore: [ignoreNodeModules()]
		};
	}

	return runConfig;
}

/**
 * Creating linting methods with happiness-scss configPath
 * @param {string} mtd
 * @param {string} file
 * @param {Object} [config]
 * @param {function} [cb]
 * @param {string} configPath
 */
function lintMethod (mtd, file, config, cb, configPath) {
	let runConfig = transformConfig(config);

	if (typeof cb !== 'function') {
		cb = function () {};
	}

	try {
		let results = sassLint[mtd](file, runConfig, configPath);
		let data = {
			results,
			errorCount: sassLint.errorCount(results),
			warningCount: sassLint.warningCount(results)
		};
		cb(null, data);
	} catch (err) {
		cb(err);
	}
}

class Linter {
	/**
	 * @param {string} configPath
	 */
	constructor (configPath) {
		this.configPath = configPath;
	}

	/**
	 * Runs each rule against sass-lint AST tree.
	 * After linting - run callback for data processing
	 *
	 * @param {Object} file file object from fs.readFileSync
	 * @param {Object} config user specified rules/config passed in
	 * @param {function} cb
	 */
	lintText (file, config, cb) {
		return lintMethod('lintText', file, config, cb, this.configPath);
	}

	/**
	 * Handles ignored files for plugins such as the gulp plugin. Checks every file passed to it against
	 * the ignores as specified in users config or passed in default config.
	 * After linting - run callback for data processing
	 *
	 * @param {Object} file - The file/text to be linted
	 * @param {Object} config - The user defined config directly passed in
	 * @param {function} cb
	 */
	lintFileText (file, config, cb) {
		return lintMethod('lintFileText', file, config, cb, this.configPath);
	}

	/**
	 * Takes a glob pattern or target string and creates an array of files as targets for
	 * linting taking into account any user specified ignores.
	 * After linting - run callback for data processing
	 *
	 * @param {string} files a glob pattern or single file path as a lint target
	 * @param {Object} config user specified rules/config passed in
	 * @param {function} cb
	 */
	lintFiles (files, config, cb) {
		return lintMethod('lintFiles', files, config, cb, this.configPath);
	}

	/**
	 * Parses results object to count errors and return
	 * paths to files with detected errors.
	 *
	 * @param {Object} results results object
	 * @returns {Object} errors object containing the error count and paths for files incl. errors
	 */
	errorCount (results) {
		sassLint.errorCount(results);
	}

	/**
	 * Parses results object to count warnings and return
	 * paths to files with detected warnings.
	 *
	 * @param {Object} results results object
	 * @returns {Object} warnings object containing the error count and paths for files incl. warnings
	 */
	warningCount (results) {
		return sassLint.warningCount(results);
	}

	/**
	 * Parses results object to count warnings and errors and return
	 * a cumulative count of both
	 *
	 * @param {Object} results results object
	 * @returns {int} the cumulative count of errors and warnings detected
	 */
	resultCount (results) {
		return sassLint.resultCount(results);
	}

	/**
	 * Handles formatting of results using EsLint formatters
	 *
	 * @param {Object} results our results object
	 * @param {Object} config user specified rules/config passed in
	 * @returns {Object} results results in the specified format as string
	 */
	format (results, config) {
		config = transformConfig(config);
		return sassLint.format(results, config, this.configPath);
	}

	/**
	 * Handles outputting results whether this be straight to the console/stdout or to a file.
	 * Passes results to the format function to ensure results are output in the chosen format
	 *
	 * @param {Object} results our results object
	 * @param {Object} config user specified rules/config passed in
	 * @returns {Object} results our results object
	 */
	outputResults (results, config) {
		config = transformConfig(config);
		return sassLint.outputResults(results, config, this.configPath);
	}

	/**
	 * Throws an error if there are any errors detected. The error includes a count of all errors
	 * and a list of all files that include errors.
	 *
	 * @param {Object} results - our results object
	 * @param {Object} [config] - extra config to use when running failOnError
	 * @returns {void}
	 */
	failOnError (results, config) {
		config = transformConfig(config);
		return sassLint.failOnError(results, config, this.configPath);
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = Linter;

