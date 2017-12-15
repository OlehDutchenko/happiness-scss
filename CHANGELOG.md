# Change log

:back: [README.md](./README.md)

> _All notable changes to this project will be documented in this file._  
> _This project adheres to [Semantic Versioning](http://semver.org/)._

---

## [5.2.2] - 2017-12-15

- external [`happiness-scss-config`](https://github.com/dutchenkoOleg/happiness-scss-config) file

---

## [5.2.0] - 2017-09-26

- relax `qoutes` rule

---

## [5.1.0] - 2017-09-13

- relax `no-color-keywords` rule
- bump `sass-lint` version

---

## [5.0.0] - 2017-07-03

### Changed

- Wiki pages removed to [`docs/`](https://github.com/dutchenkoOleg/happiness-scss/blob/master/docs/) folder

### Added

- `fr` unit in rule [Property Units](https://github.com/dutchenkoOleg/happiness-scss/blob/master/docs/Rules.md#property-units)
- [Code of Conduct](https://github.com/dutchenkoOleg/happiness-scss/blob/master/CODE_OF_CONDUCT.md)

### Removed

- wip badge and status message

---

## [4.0.1] - 2017-06-19

### Added

- wip status message

## [4.0.0] - 2017-06-19

### Breaking changes in Rules

- [Attribute Quotes](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#attribute-quotes) - Use ~~single~~ double quotes in attribute values.
- [Force Pseudo Nesting](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#force-pseudo-nesting) - rule is disabled
- [Hex Length](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#hex-length) - rule is disabled
- [Hex Notation](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#hex-notation) - rule is disabled
- [Leading Zero](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#leading-zero) - rule is disabled
- [Max Line Length](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#max-line-length) - rule is disabled
- [No Combinators](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#no-combinators) - combinators are allowed
- [Quotes](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#quotes) - style `double`
- [Url quotes](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules#url-quotes) - rule is disabled

---

## [3.0.0] - 2017-06-13

### Breaking changes

- Rename `./bin/happiness-scss.js` to `./bin/cmd.js`

---

## [2.1.5] - 2017-06-06

### Added

- Link to `gulp-happiness-scss`
- Missed `npm run happiness-fix` command

### Removed

- `.idea` folder in npm package

---

## [2.1.1] - 2017-06-05

### Added

- Fix `html` formatter

---

## [2.1.0] - 2017-06-05

### Added

- Ignore disabling linters via comments

---

## [2.0.3] - 2017-06-02

### Fixed

- Typo in `README.md`

---

## [2.0.1] - 2017-06-02

### Breaking changes in Nodejs API

- `happinessScss.lintText()` is ***removed!***, doing same as `happinessScss.lintFileText()`

#### Added

- `showMaxStack` options for Nodejs API, use `-m, --show-max-stack [number]`

---

## [1.1.2] - 2017-06-01

- Fixed incorrect comparison operator

---

## [1.1.0] - 2017-06-01

#### Added

- `showMaxStack` options for Nodejs API
- [Github wiki](https://github.com/dutchenkoOleg/happiness-scss/wiki)
- [Integration with IntelliJ IDEA](https://github.com/dutchenkoOleg/happiness-scss/wiki/Integration-with-IntelliJ-IDEA) description

#### Changed

- List of rules has been moved to wiki page [Rules](https://github.com/dutchenkoOleg/happiness-scss/wiki/Rules)

---

## [1.0.1] - 2017-05-31

- Clean dev logs
- Fix correct ignoring './node_modules/**'

## [1.0.0] - 2017-05-31

- Stable release

## [0.0.10] - 2017-05-31

#### Added

- Missed `extends-before-mixins` rule
- Fix typo

---

## [0.0.9] - 2017-05-31

#### Added

- CLI description

#### Added
- full rules list
- npm tests
- [Travis CI](https://travis-ci.org/dutchenkoOleg/gulp-not-supported-file) builds

---
