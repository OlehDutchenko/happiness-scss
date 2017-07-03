# happiness-scss

![npm](https://img.shields.io/badge/node-6.3.1-yellow.svg)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/dutchenkoOleg/gulp-happiness/blob/master/LICENSE)
[![Dependencies](https://www.versioneye.com/user/projects/592e84d1c0295d003a53fce3/badge.svg?style=flat)](https://www.versioneye.com/user/projects/592e84d1c0295d003a53fce3?child=summary)
[![Build Status](https://travis-ci.org/dutchenkoOleg/happiness-scss.svg?branch=master)](https://travis-ci.org/dutchenkoOleg/gulp-happiness)

> ___One Style You Might Like___  
> ___It is already here ;)___

[![js happiness style](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)
[![Happiness SCSS Style](https://cdn.rawgit.com/dutchenkoOleg/happiness-scss/master/badge.svg)](https://github.com/dutchenkoOleg/happiness-scss)


> It is called _happiness_, because we hope that it brings you joy, love and ends strife among your fellow developers.  
>   
> **Reminder:** Happiness is not for everyone. Some people will choose to be sad, normal and some might even say ~~"standard"~~ "[Sass Guidelines](https://sass-guidelin.es/)". That is alright. A happy person is comfortable with being them and fine to let others be who they want to be. "_You do you_"
>   
> _© [happiness](https://github.com/JedWatson/happiness)_

Don't worry about that it's called SCSS  
Since this works on [Sass Lint](https://www.npmjs.com/package/sass-lint), it will also work well with your `*.sass` files ;)  
_It's has filename extension-based syntax detection._

---

## CLI install and usage

The easiest way to use Happiness SCSS Style to check your code is to install it globally as a Node command line program. To do so, simply run the following command in your terminal (flag -g installs `happiness-scss` globally on your system, omit it if you want to install in the current working directory):

```shell
npm i -g happiness-scss
# or using yarn cli
yarn global add happiness-scss
```

After you've done that you should be able to use the `happiness-scss` program. The simplest use case would be checking the style of all files in the current working directory and inner (`./**/*.s+(a|c)ss`),  
_**NOTE!** it's always ignore `./node_modules/**`:_

```shell
happiness-scss

./test/fixtures/function-name-format.scss
  5:11  error  Function 'camelCase' should be written in lowercase with hyphens  function-name-format

✖ 1 problem (1 error, 0 warnings)

```

Or you can say where it should lint

```shell
happiness-scss "./test/**/*.scss"

# look for .scss and .sass files
happiness-scss "./test/**/*.s+(a|c)ss"
```

### CLI Options

##### `-h, --help`

Outputs usage information for the CLI

##### `-f, --format [format]`

Default formatter `stylish`

Your also can choose one of the available [Eslint formats](https://github.com/eslint/eslint/tree/master/lib/formatters) to format the output of sass-lint results

```shell
happiness-scss -f table
```

##### `-i, --ignore [pattern]`

Default ignore path `./node_modules/**`

A pattern that should be ignored from linting. Multiple patterns can be used by separating each pattern by `,`. Patterns should be wrapped in double quotes (will be merged with other ignore options)

```shell
happiness-scss -i "./test/fixtures/function-name-format.scss"
```

```shell
# more than one path
happiness-scss -i "./test/**, ./dev/wip/**"
```

##### `-o, --output [output]`

The path plus file name relative to where `happiness-scss` is being run from where the output should be written to.


```shell
# json
happiness-scss -f json -o "./tmp/lint-results.json"

# html
happiness-scss -f html -o "./tmp/lint-results.html"
```

##### `-m, --show-max-stack [number]`

This will be useful for a huge list of errors when they do not even fit in the console. It will print max errors in console.  
See example [`Nodejs Api → happinessScss.lintFileText() → config.showMaxStack`](#configshowmaxstack).

```shell
# max 100 errors will be printed, `-q` not to fall
happiness-scss -m 100 -q
```

##### `-q, --no-exit`

Prevents the CLI from throwing an error if there is one (useful for development work)

##### `-d, --no-disabling`

[Disabling linters via source](#disabling-linters-via-source) will not work.  
Yeah, only hard core!

##### `-V, --version`

Outputs the version number of Happiness SCSS

---

## Nodejs API

Install `happiness-scss` in your project

```shell
npm i --save happiness-scss
# or using yarn cli
yarn add happiness-scss
```


#### ~~happinessScss.lintText(file, config, cb)~~

***removed!***, doing same as `.lintFileText()`


#### happinessScss.lintFileText(file, config, cb)

Handles ignored files for plugins such as the gulp plugin. Checks every file passed to it against the ignores as specified in users config or passed in default config.

_Parameters:_

Name | Data type | Attributes | Description
 --- | --- | --- | ---
 `file` | `Object` |  | object, see example below
 `config` | `Object` | \<optional> | little configuration, see example below
 `cb` | `function` | \<optional> | see description below
 
##### `file`

This must be an object with following properties:

- text (string) - content for checking
- format (string) - syntax definition
- filename (string) - name of checking file with relative path

_Example:_

```js
let testFilePath = './fixtures/hex-notation.scss';
let testFile = {
	text: fs.readFileSync(testFilePath).toString(),
	format: path.extname(testFilePath).replace('.', ''), // scss
	filename: testFilePath
};

happinessScss.lintFileText(testFile);
```

##### `config`

Here you can set few parameters
```js
const myConfig = {
	formatter: 'stylish',
	showMaxStack: 50, // if 0 is unlimited, see description below
	outputFile: './path/to/output.file',
	noDisabling: false // if true -> "Disabling linters via source" will not work
	ignore: [ // must be an Array
		'./sass/vendor/**/*.scss',
		'./sass/test/**/*.scss'
		// Note! './node_modules/**' is always in ignore
	]
};
```

###### `config.showMaxStack`

Default value `0`.

This parameter will be useful for a huge list of errors when they do not even fit in the console. It will print max errors in console. 

_Example if set `showMaxStack: 10`_

```shell
C:/Wezom/NodeModules/happiness-scss/tmp/huge.scss
  1:0   error  line 1 exceeds the maximum line length of 120  max-line-length
  1:1   error  Single line statements are not allowed         brace-style
  1:1   error  Space expected between blocks                  empty-line-between-blocks
  1:9   error  Commas should be followed by a space           space-after-comma
  1:10  error  Selectors must be placed on new lines          single-line-per-selector
  1:20  error  Commas should be followed by a space           space-after-comma
  1:21  error  Selectors must be placed on new lines          single-line-per-selector
  1:31  error  Combinators are not allowed                    no-combinators
  1:40  error  Whitespace required before {                   space-before-brace
  1:48  error  Space expected after `:`                       space-after-colon

✖ 10 problems (10 errors, 0 warnings)

        NOTE! Showed maximum 10 errors for each result
        and 8123 errors was not printed in console
        
```

_**Note!** This option is available only for `.format()` method in nodejs API_
 
##### `cb(err, data)`

Callback for handing errors or resulting data.  
_Example_

```js
const fs = require('fs');
const path = require('path');
const happinessScss = require('happiness-scss');

const testFile = fs.readFileSync(path.join(__dirname, './fixtures/no-ids.scss'));

happinessScss.lintText(testFile, null, function(err, data) {
	if (err) {
		// handle errors
	}
	// handle data
});
```


#### happinessScss.lintFiles(files, config, cb)

Takes a glob pattern or target string and creates an array of files as targets for linting taking into account any user specified

_Parameters:_

Name | Data type | Attributes | Description
 --- | --- | --- | ---
 `files` | `string` |  | a glob pattern or single file path as a lint target
 `config` | `Object` | \<optional> | little configuration, see example in [happinessScss.lintFileText() → config](#config)
 `cb` | `function` | \<optional> | see description in [happinessScss.lintFileText() → cb(err, data)](#cberr-data)

###### Live example of usage

```js
const path = require('path');
const happinessScss = require('happiness-scss');

function pathTo (glob) {
	return path.join(__dirname, glob);
}

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
			formatter: 'table',
			showMaxStack: 50
		});

		console.log(formatted);

		happinessScss.outputResults(data.results, {
			formatter: 'html',
			outputFile: pathTo('../tmp/lint-files-output.html')
		});
	}
});
```

#### errorCount(results)

Parses results object to count errors and return paths to files with detected errors.  
_Returns errors object containing the error count and paths for files incl. errors_

#### warningCount(results)

Parses results object to count warnings and return paths to files with detected warnings.   
_Returns warnings object containing the error count and paths for files incl. warnings_

#### resultCount(results)

Parses results object to count warnings and errors and return a cumulative count of both  
_Returns the cumulative count (`number`) of errors and warnings detected_

#### format (results, config)

Handles formatting of results using EsLint formatters

- see [Live example of usage](#live-example-of-usage)
- see [happinessScss.lintText → config](#config)

_Returns results in the specified format as string. Use console.log(formattedResult) for showing in console_

#### outputResults (results, config)

Handles outputting results whether this be straight to the console/stdout or to a file. Passes results to the format function to ensure results are output in the chosen format

- see [Live example of usage](#live-example-of-usage)
- see [happinessScss.lintText → config](#config)

#### failOnError (results, config)

Throws an error if there are any errors detected. The error includes a count of all errors and a list of all files that include errors.

_No returns value. Just scream if has errors ;)_

---

## Rules

Please read [docs / Rules](https://github.com/dutchenkoOleg/happiness-scss/blob/master/docs/Rules.md)

## I disagree with rule X, can you change it?

No. The whole point of `happiness-scss` is to save you time by avoiding [bikeshedding](https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting) about code style. There are lots of debates online about tabs vs. spaces, etc. that will never be resolved. These debates just distract from getting stuff done. At the end of the day you have to 'just pick something', and that's the whole philosophy of `happiness-scss` - its a bunch of sensible 'just pick something' opinions. Hopefully, users see the value in that over defending their own opinions.

> **Pro tip:** Just use `happiness-scss` and move on.    
> There are actual real problems that you could spend your time solving! ;)

---

## Why should I use Happiness SCSS Style?

> If you do not want to, do not use it. And be happy without it ;)

In defense of `happiness-scss` it is better to quote part of the description from the [standardjs.com](https://standardjs.com/index.html#why-should-i-use-javascript-standard-style)

> The beauty of ~~JavaScript Standard~~ Happiness SCSS is that it's simple. No one wants to maintain multiple hundred-line style configuration files for every module/project they work on. Enough of this madness!

\- no `.sass-lint.yml` and other config files  
\- no sasslint configs in `package.json`  
\- no `.sassignore.rc` files  
\- forget about tone of configs

Only rock-n-roll and _happiness-scss_

---

## Disabling Linters via Source

Happiness SCSS works on [Sass Lint](https://www.npmjs.com/package/sass-lint), so you can use special comments to disable and enable certain rules throughout your source files in a variety of scenarios.

_**Note!** This comments may be ignored on linting process by [CLI](#-d---no-disabling) and [Nodejs API](#config) for strict checkout!_


Below are examples of how to use this feature:  

#### Disable a rule for the entire file

```scss
// sass-lint:disable border-zero
p {
  border: none; // No lint reported
}
```

#### Disable more than 1 rule

```scss
// sass-lint:disable border-zero, quotes
p {
  border: none; // No lint reported
  content: "hello"; // No lint reported
}
```

#### Disable a rule for a single line

```scss
p {
  border: none; // sass-lint:disable-line border-zero
}
```

#### Disable all lints within a block (and all contained blocks)

```scss
p {
  // sass-lint:disable-block border-zero
  border: none; // No result reported
}

a {
  border: none; // Failing result reported
}
```

#### Disable and enable again

```scss
// sass-lint:disable border-zero
p {
  border: none; // No result reported
}
// sass-lint:enable border-zero

a {
  border: none; // Failing result reported
}
```

#### Disable/enable all linters

```scss
// sass-lint:disable-all
p {
  border: none; // No result reported
}
// sass-lint:enable-all

a {
  border: none; // Failing result reported
}
```

---

## Is there a readme badge?

Yes! If you use `happiness-scss` in your project, you can include one of these badges in your readme to let people know that your code is using the `happiness-scss` style.

[![Happiness SCSS Style](https://cdn.rawgit.com/dutchenkoOleg/happiness-scss/master/badge.svg)](https://github.com/dutchenkoOleg/happiness-scss)

```markdown
[![Happiness SCSS Style](https://cdn.rawgit.com/dutchenkoOleg/happiness-scss/master/badge.svg)](https://github.com/dutchenkoOleg/happiness-scss)
```

[![Happiness SCSS Style](https://img.shields.io/badge/code_style-happiness--scss-blue.svg)](https://github.com/dutchenkoOleg/happiness-scss)

```markdown
[![Happiness SCSS Style](https://img.shields.io/badge/code_style-happiness--scss-blue.svg)](https://github.com/dutchenkoOleg/happiness-scss)
```

### Is there an automatic formatter?

Sorry, there no automatic formatter.

---

## Task Runner Integration

- [gulp-happiness-scss](https://www.npmjs.com/package/gulp-happiness-scss)


## TextEditor/IDE Integration

Already available solutions

- [docs / Integration with IntelliJ IDEA](https://github.com/dutchenkoOleg/happiness-scss/blob/master/docs/Integration-with-IntelliJ-IDEA.md)

Also we have [opened issue](https://github.com/dutchenkoOleg/happiness-scss/issues/3) for wanted list.

---

## Tests

1. `npm test` for testing js and scss code style
1. `npm run happiness-fix` for automatically fix most of problems with **js code style** 

## Changelog

Please read [CHANGELOG.md](https://github.com/dutchenkoOleg/happiness-scss/blob/master/CHANGELOG.md)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/dutchenkoOleg/happiness-scss/blob/master/CONTRIBUTING.md)

## Code of Conduct

Please read [CODE_OF_CONDUCT.md](https://github.com/dutchenkoOleg/happiness-scss/blob/master/CODE_OF_CONDUCT.md)
