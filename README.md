# happiness-scss

![working in progress](https://img.shields.io/badge/Status-WIP-red.svg)
![npm](https://img.shields.io/badge/node-6.3.1-yellow.svg)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/dutchenkoOleg/gulp-happiness/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/dutchenkoOleg/happiness-scss.svg?branch=master)](https://travis-ci.org/dutchenkoOleg/gulp-happiness)

> ___One Style You Might Like___  
> ___It is Coming Soon ;)___

> ___Happiness works based on [Sass Lint](https://www.npmjs.com/package/sass-lint)___

[![js happiness style](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)
[![scss happiness style](https://cdn.rawgit.com/dutchenkoOleg/happiness-scss/master/badge.svg)](https://github.com/dutchenkoOleg/happiness-scss)


> It is called _happiness_, because we hope that it brings you joy, love and ends strife among your fellow developers.  
>   
> **Reminder:** Happiness is not for everyone. Some people will choose to be sad, normal and some might even say ~~"standard"~~ "[Sass Guidelines](https://sass-guidelin.es/)". That is alright. A happy person is comfortable with being them and fine to let others be who they want to be. "_You do you_"
>   
> _© [happiness](https://github.com/JedWatson/happiness)_

Do not worry about what it's called SCSS  
Since this works on [Sass Lint](https://www.npmjs.com/package/sass-lint), it will also work well with your `*.sass` files ;)  
_It's has filename extension-based syntax detection._

---

## CLI usage and install

The easiest way to use Happiness SCSS Style to check your code is to install it globally as a Node command line program. To do so, simply run the following command in your terminal (flag -g installs `happiness-scss` globally on your system, omit it if you want to install in the current working directory):

```shell
npm i -g happiness-scss
# or using yarn cli
yarn global add happiness-scss
```

After you've done that you should be able to use the `happiness-scss` program. The simplest use case would be checking the style of all `*.scss/*.sass` files in the current working directory and inner, except `node_modules/**`:

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

Your also cane choose one of the available [Eslint formats](https://github.com/eslint/eslint/tree/master/lib/formatters) to format the output of sass-lint results

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

##### `-o,--output [output]`

The path plus file name relative to where Sass Lint is being run from where the output should be written to.


```shell
# json
happiness-scss -f json -o "./tmp/lint-result.json"

# html
happiness-scss -f html -o "./tmp/lint-result.html"
```

##### `-V,--version`

Outputs the version number of Happiness SCSS

---

## Why should I use Happiness SCSS Style?

> If you do not want to, do not use it. And be happy without it ;)

In defense of happiness it is better to quote part of the description from the [standardjs.com](https://standardjs.com/index.html#why-should-i-use-javascript-standard-style)

> The beauty of ~~JavaScript Standard~~ Happiness SCSS is that it's simple. No one wants to maintain multiple hundred-line style configuration files for every module/project they work on. Enough of this madness!

\- no `.sass-lint.yml` and other config files  
\- no sasslint configs in `package.json`  
\- no `.sassignore.rc` files  
\- forget about tone of configs

Only rock-n-roll and _happiness-scss_

---

### Node.js API

_wip_

---

## Rules

Please read [RULES.md](https://github.com/dutchenkoOleg/happiness-scss/blob/master/RULES.md)

## I disagree with rule X, can you change it?

No. The whole point of `happiness-scss` is to save you time by avoiding [bikeshedding](https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting) about code style. There are lots of debates online about tabs vs. spaces, etc. that will never be resolved. These debates just distract from getting stuff done. At the end of the day you have to 'just pick something', and that's the whole philosophy of `happiness-scss` -- its a bunch of sensible 'just pick something' opinions. Hopefully, users see the value in that over defending their own opinions.

> **Pro tip:** Just use `happiness-scss` and move on.    
> There are actual real problems that you could spend your time solving! ;)

---

## Disabling Linters via Source

Happiness works on [Sass Lint](https://www.npmjs.com/package/sass-lint), so you can use special comments to disable and enable certain rules throughout your source files in a variety of scenarios.

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

## Tests

1. `npm test` for testing js and scss code style
1. `npm run happiness-fix` for automatically fix most of problems with **js code style** 

## Changelog

Please read [CHANGELOG.md](https://github.com/dutchenkoOleg/happiness-scss/blob/master/CHANGELOG.md)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/dutchenkoOleg/happiness-scss/blob/master/CONTRIBUTING.md)
