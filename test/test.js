'use strict';

/**
 * @module
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 */

// ----------------------------------------
// Imports
// ----------------------------------------

var happinessScss = require('../index');

happinessScss.lintFiles('./test/fixtures/function-name-format.scss', false, function(err, data) {
	if (err) {
		throw new Error(err);
	}
	console.log(data);
});
