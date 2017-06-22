> "_stolen_" from [SASS Lint plugin for Intellij](https://github.com/idok/sass-lint-plugin)

Idea support for [SassLint](https://github.com/sasstools/sass-lint) A Node-only Sass linter for both sass and scss syntax. see more [here](https://github.com/sasstools/sass-lint).<br/>
SassLint plugin for WebStorm, PHPStorm and other Idea family IDE with Javascript plugin, provides integration with SassLint and shows errors and warnings inside the editor.
* Support displaying SassLint warnings as intellij inspections

## Getting started ##
### Prerequisites ###
* [NodeJS](http://nodejs.org/)
* IntelliJ 13.1.4 / Webstorm 8.0.4, or above.

Install happiness-scss npm package [happiness-scss npm](https://www.npmjs.com/package/happiness-scss)</a>:<br/>
```bash
$ cd <project path>
$ npm install happiness-scss
```
Or, install happiness-scss globally:<br/>
```bash
$ npm install -g happiness-scss
```

### Settings ###
To get started, you need to set the SassLint plugin settings:<br/>

* Go to preferences, SassLint plugin page and check the Enable plugin.
* Set the path to the nodejs interpreter bin file.
* Set the path to the happiness-scss bin file. should point to ```<project path>node_modules/happiness-scss/bin``` if you installed locally or ```/usr/local/bin/happiness-scss``` if you installed globally.
  * For Windows: install happiness-scss globally and point to the happiness-scss cmd file like, e.g.  ```C:\Users\<username>\AppData\Roaming\npm\happiness-scss.cmd```
* Select whether to let happiness-scss search for ```.sass-lint.yml``` file
  * ```<project path>node_modules/happiness-scss/.sass-lint.yml``` if you installed locally
  * ```/usr/local/lib/node_modules/happiness-scss/.sass-lint.yml``` if you installed globally.
     * For Windows: ```C:\Users\<username>\AppData\Roaming\npm\node_modules\happiness-scss\.sass-lint.yml```
