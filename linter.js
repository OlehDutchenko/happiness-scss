'use strict';

/**
 * @module happiness-scss
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 */

// ----------------------------------------
// Imports
// ----------------------------------------

var sassLint = require('sass-lint');

// ----------------------------------------
// Private
// ----------------------------------------

class Linter {
	/**
	 * @param {string} configPath
	 */
	constructor (configPath) {
		this.configPath = configPath;
	}

	/**
	 * Creating linting methods with happiness-scss configPath
	 * @param {string} mtd
	 * @param {string} file
	 * @param {object} [options={}]
	 * @param {function} [cb]
	 */
	lintMethod (mtd, file, options = {}, cb) {
		if (options && options.rules) {
			delete options.rules;
		}

		if (typeof cb !== 'function') {
			cb = function () {};
		}

		try {
			let results = sassLint[mtd](file, options, this.configPath);
			let data = {
				results,
				errorCount: sassLint.errorCount(results),
				warningCount: sassLint.warningCount(results)
			};

			cb(null, data);
		} catch (err) {
			cb(err, null);
		}
	}

	/**
	 * Runs each rule against sass-lint AST tree.
	 * After linting - run callback for user processing
	 *
	 * @param {object} file file object from fs.readFileSync
	 * @param {object} options user specified rules/options passed in
	 * @param {function} cb
	 */
	lintText (file, options, cb) {
		this.lintMethod('lintText', file, options, cb);
	}

	/**
	 * Handles ignored files for plugins such as the gulp plugin. Checks every file passed to it against
	 * the ignores as specified in our users config or passed in options.
	 * After linting - run callback for user processing
	 *
	 * @param {object} file - The file/text to be linted
	 * @param {object} options - The user defined options directly passed in
	 * @param {function} cb
	 */
	lintFileText (file, options, cb) {
		this.lintMethod('lintFileText', file, options, cb);
	}

	/**
	 * Takes a glob pattern or target string and creates an array of files as targets for
	 * linting taking into account any user specified ignores.
	 * After linting - run callback for user processing
	 *
	 * @param {string} files a glob pattern or single file path as a lint target
	 * @param {object} options user specified rules/options passed in
	 * @param {function} cb
	 */
	lintFiles (file, options, cb) {
		this.lintMethod('lintFiles', file, options, cb);
	}
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = Linter;

