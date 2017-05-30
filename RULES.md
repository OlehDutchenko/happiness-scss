# Rules

:back: [README.md](./README.md)

## Table of contents

1. [Attribute Quotes](#attribute-quotes)
1. [BEM Depth](#bem-depth)
1. [Border Zero](#border-zero)
1. [Attribute](#attribute)
1. [Brace Style](#brace-style)
1. [Class Name Format](#class-name-format)
1. [Clean Import Paths](#clean-import-paths)
1. [Declarations Before Nesting](#declarations-before-nesting)
1. [Empty Args](#empty-args)
1. [Empty Line Between Blocks](#empty-line-between-blocks)
1. [Extends Before Declarations](#extends-before-declarations)
1. [Final Newline](#final-newline)
1. [Force Attribute Nesting](#force-attribute-nesting)
1. [Force Element Nesting](#force-element-nesting)
1. [Force Pseudo Nesting](#force-pseudo-nesting)
1. [Function Name Format](#function-name-format)
1. [Hex Length](#hex-length)
1. [Hex Notation](#hex-notation)
1. [ID Name Format](#id-name-format)
1. [Indentation](#indentation)
1. [Leading Zero](#leading-zero)
1. [Max File Line Count](#max-file-line-count)
1. [Max Line Length](#max-line-length)
1. [Mixin Name Format](#mixin-name-format)
1. [Nesting Depth](#nesting-depth)
1. [No Attribute Selectors](#no-attribute-selectors)
1. [No Color Hex](#no-color-hex)
1. [No Color Keyword](#no-color-keywords)
1. [No Color Literals](#no-color-literals)
1. [No Combinators](#no-combinators)
1. [No CSS Comments](#no-css-comments)
1. [No Debug](#no-debug)
1. [No Disallowed Properties](#no-disallowed-properties)
1. [No Duplicate Properties](#no-duplicate-properties)
1. [No Empty Rulesets](#no-empty-rulesets)
1. [No Extends](#no-extends)
1. [No IDs](#no-ids)
1. [lorem](#lorem)
1. [No Warn](#no-warn)

---

This project working in progress. So there no stable notable changes yet.

### Attribute Quotes

[↑ rules list](#table-of-contents)

Use single quotes in attribute values.  

_sass-lint rule - [`attribute-quotes`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/attribute-quotes.md)_

```scss
// ✓ ok
// --------------------------------

span {
	&[lang='pt'] {  
		color: green;
	}
}

// ✗ avoid
// --------------------------------

span {
	&[lang=pt] {  
		color: green;
	}
}

span {
	&[lang="pt"] {  
		color: green;
	}
}

```

---

### BEM Depth

[↑ rules list](#table-of-contents)

Max depth `1`.  

_sass-lint rule - [`bem-depth`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/bem-depth.md)_

```scss
// ✓ ok
// --------------------------------

.block {
	&__element {
		// one element
	}
}

.sub-block {
	&__sub-element {
		// one element
	}
}

.block__element {
	position: relative;
}

// ✗ avoid
// --------------------------------

.block {
	&__element {
		&__subelement {
			// two elements
		}
	}
}

.block__element__subelement__subelement-two {
	// three elements
}

```

---

### Border Zero

[↑ rules list](#table-of-contents)

Use `none` keyword for disable border or `0` for `border-width` property.  

_sass-lint rule - [`border-zero`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/border-zero.md)_

```scss
// ✓ ok
// --------------------------------

.foo {
	border: none;
}

.bar {
	border-width: 0;
}

// ✗ avoid
// --------------------------------

.foo {
	border: 0;
}

.bar {
	border-right: 0;
}

```

---

### Brace Style

[↑ rules list](#table-of-contents)

Use `1tbs` brace style.  
Single line are disallowed.

_sass-lint rule - [`brace-style`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/brace-style.md)_

```scss
// ✓ ok
// --------------------------------

.foo {
	content: 'foo';
}

// ✗ avoid
// --------------------------------

.foo
{
	content: 'foo';
}

// ✓ ok
// --------------------------------

@if ($foo) {
	$bar: 'bar';
} @else {
	$bar: false;
}

// ✗ avoid
// --------------------------------

@if ($foo) {
	$bar: 'bar';
}
@else {
	$bar: false;
}

// ✗ avoid single line
// --------------------------------

.foo { content: 'foo'; }

@if ($foo) { $bar: 'foo'; }
@else { $bar: false; }

```

---

### Class Name Format

[↑ rules list](#table-of-contents)

Use [`hyphenatedbem`](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) convention for class names.  
Leading underscore is allowed for no-namespace modifiers / utils / helpers (name them as you like)  

_sass-lint rule - [`class-name-format`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/class-name-format.md)_


```scss
// ✓ ok
// --------------------------------

.block__element {
	position: relative;
	width: 50%;
}

.block__element--modifier {
	background-color: $color-primary;
}

// ✓  allow-leading-underscore
// --------------------------------

._primary-color {
	color: $color-primary;
}

// ✗ avoid
// --------------------------------

.HYPHENATED-UPPERCASE {
	content: '';
}

.camelCase {
	@extend .snake_case;
}

```

---

### Clean Import Paths

[↑ rules list](#table-of-contents)

Files paths should not have leading underscores and should not have filename extensions

_sass-lint rule - [`clean-import-paths`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/clean-import-paths.md)_


```scss
// ✓ ok
// --------------------------------

@import 'private';
@import '_variables/colors';

// ✗ avoid
// --------------------------------

@import '_private';
@import 'variables/colors.scss';

```

---

### Declarations Before Nesting

[↑ rules list](#table-of-contents)

Declarations should be written before nesting in a ruleset!

_sass-lint rule - [`declarations-before-nesting`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/declarations-before-nesting.md)_


```scss
// ✓ ok
// --------------------------------

.parent-block {
	content: 'baz';

	&__inner-element {
		content: 'qux';
	}
}

// ✗ avoid
// --------------------------------

.parent-block  {
	&__inner-element {
		content: 'qux';
	}
  
	content: 'baz';
}

```

---

### Empty Args

[↑ rules list](#table-of-contents)

Parentheses should be included even if no arguments are defined or used, when declaring or invoking a mixin

_sass-lint rule - [`empty-args`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/empty-args.md)_


```scss
// ✓ ok
// --------------------------------

@mixin foo() {
	padding: 10px;
}

.foo {
	@include foo();
}

// ✗ avoid
// --------------------------------


@mixin bar {
	padding: 10px;
}

.bar {
	@include bar;
}

```

---

### Empty Line Between Blocks

[↑ rules list](#table-of-contents)

Nested blocks should include a space between the last non-comment declaration.  
Single line rulesets are disallowed

_sass-lint rule - [`empty-line-between-blocks`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/empty-line-between-blocks.md)_


```scss
// ✓ ok
// --------------------------------

.foo {
	content: 'foo';

	.bar {
		content: 'bar';

		// Waldo
		&--baz {
			content: 'baz';
		}
	}
}

// ✗ avoid
// --------------------------------

.foo {
	content: 'foo';
	.bar {
		content: 'bar';
		// Waldo
		&--baz {
			content: 'baz';
		}
	}
}

// ✗ not allow-single-line-rulesets
// --------------------------------

.foo { content: 'foo'; }
.bar { content: 'bar'; }
.baz { content: 'baz'; }

```

---

### Extends Before Declarations

[↑ rules list](#table-of-contents)

Extends should be written before declarations in a ruleset!

_sass-lint rule - [`extends-before-declarations`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/extends-before-declarations.md)_


```scss
// ✓ ok
// --------------------------------

.foo {
	@extend %bar;

	content: 'baz';
}

// ✗ avoid
// --------------------------------

.foo {
	content: 'baz';

	@extend %bar;
}

```

---

### Final Newline

[↑ rules list](#table-of-contents)

Extends should be written before declarations in a ruleset!

_sass-lint rule - [`final-newline`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/final-newline.md)_


```scss
// ✓ ok
// --------------------------------

.foo {
	content: 'bar';
}
// Newline under this comment at end of file
```


```scss
// ✗ avoid
// --------------------------------

.foo {
	content: 'bar';
} // No newline at end of file
```

---

### Force Attribute Nesting

[↑ rules list](#table-of-contents)

Use nesting of attributes

_sass-lint rule - [`force-attribute-nesting`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/force-attribute-nesting.md)_


```scss
// ✓ ok
// --------------------------------

input {
	&[type='submit'] {
		font-weight: bold;
	}

	&[type='reset'] {
		font-size: 2rem;
	}
}

.form {
	&__input {
		&[type='text'] {
			padding: 0;
		}
	}
}

// ✗ avoid
// --------------------------------

input[type='submit'] {
	font-weight: bold;
}

input[type='reset'] {
	font-size: 2rem;
}

.form {
	&__input[type='text'] {
		padding: 0;
	}
}

```

---

### Force Element Nesting

[↑ rules list](#table-of-contents)

Use nesting of elements

_sass-lint rule - [`force-element-nesting`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/force-element-nesting.md)_


```scss
// ✓ ok
// --------------------------------

div {
	p {
		content: '';
	}
}

.one {
	.two {
		position: relative;
	}
}

.parent {
	&__child {
		h1 {
			content: '';
		}
	}
}

a {
	&[target='_blank'] {
		span {
			content: '';
		}
	}
}


// ✗ avoid
// --------------------------------

div p {
	content: '';
}

.parent {
	&__child h1 {
		content: '';
	}
}

.one .two {
	position: relative;
}

a[target="_blank"] span {
	content: '';
}

```

---

### Force Pseudo Nesting

[↑ rules list](#table-of-contents)

Use nesting of pseudo elements/classes

_sass-lint rule - [`force-pseudo-nesting`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/force-pseudo-nesting.md)_


```scss
// ✓ ok
// --------------------------------

p {
	&:nth-of-type(2) {
		margin: 0;
	}
}

.parent {
	.child {
		p {
			&::first-line {
				font-size: 125%;
			}
		}
	}
}


// ✗ avoid
// --------------------------------

p:nth-of-type(2) {
	margin: 0;
}

.parent {
	.child {
		p::first-line {
			font-size: 125%;
		}
	}
}

```

---

### Function Name Format

[↑ rules list](#table-of-contents)

Use `hyphenatedlowercase` convention for function names.  
Leading underscore is allowed.

_sass-lint rule - [`function-name-format`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/function-name-format.md)_


```scss
// ✓ ok
// --------------------------------

@function hyphenated-lowercase() {
	@return 'foo';
}

@function _leading-underscore($x) {
	@return $x;
}

.foo {
	content: hyphenated-lowercase('bar');
}


// ✗ avoid
// --------------------------------

@function HYPHENATED-UPPERCASE() {
	@return 'foo';
}

@function _camelCaseWithLeadingUnderscore($x) {
	@return $x;
}

.foo {
	content: snake_case();
}

```

---

### Hex Length

[↑ rules list](#table-of-contents)

Use `short` length of hexadecimal values if it can be shortened.

_sass-lint rule - [`hex-length`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/hex-length.md)_


```scss
// ✓ ok
// --------------------------------

$foo-color: #456;
$bar-color: #ddd;
$baz-color: #fff;

.bar {
	background: linear-gradient(top, $foo-color, $bar-color);
}

.baz {
	color: $baz-color;
}

// ✗ avoid
// --------------------------------

$foo-color: #445566;
$bar-color: #dddddd;
$baz-color: #ffffff;

.bar {
	background: linear-gradient(top, $foo-color, $bar-color);
}

.baz {
	color: $baz-color;
}

// ✓ the values cannot be shortened
// --------------------------------

$quz-color: #abcdef;

.qux {
	color: $quz-color;
}

```

---

### Hex Notation

[↑ rules list](#table-of-contents)

Use `lowercase` style for hexadecimal values.

_sass-lint rule - [`hex-notation`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/hex-notation.md)_


```scss
// ✓ ok
// --------------------------------

$foo-color: #4a5a6b;
$bar-color: #ddd;
$baz-color: #abcdef;

// ✗ avoid
// --------------------------------

$foo-color: #4A5A6B;
$bar-color: #DDD;
$baz-color: #ABCDEF;

```

---

### ID Name Format

[↑ rules list](#table-of-contents)

Rule is disabled in accordance with the ban on the use of identifiers. See [No IDs](#no-ids).

_sass-lint rule - [`id-name-format`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/id-name-format.md)_

---

### Indentation

[↑ rules list](#table-of-contents)

Use `tab` for indentation, with size `4`.

_sass-lint rule - [`indentation`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/indentation.md)_


```scss
// ✓ ok
// --------------------------------

html {
	// position
	position: relative;
}

// ✗ avoid
// --------------------------------

html {
  // position
  position: relative;
}

```

---

### Leading Zero

[↑ rules list](#table-of-contents)

Use `tab` for indentation, with size `4`.

_sass-lint rule - [`leading-zero`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/leading-zero.md)_


```scss
// ✓ ok
// --------------------------------

.foo {
	font-size: .5em;
}

// ✗ avoid
// --------------------------------

.foo {
	font-size: 0.5em;
}

```

---

### Max File Line Count

[↑ rules list](#table-of-contents)

File's length doesn't exceed a `500` number of lines.

_sass-lint rule - [`max-file-line-count`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/max-file-line-count.md)_

---

### Max Line Length

[↑ rules list](#table-of-contents)

Lines do not exceed a max length in `120` characters.

_sass-lint rule - [`max-line-length`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/max-line-length.md)_


---

### Mixin Name Format

[↑ rules list](#table-of-contents)

Use `hyphenatedlowercase` convention for mixin names.  
Leading underscore is allowed.

_sass-lint rule - [`mixin-name-format`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/mixin-name-format.md)_

```scss
// ✓ ok
// --------------------------------

@mixin hyphenated-lowercase() {
	content: '';
}

@mixin _leading-underscore() {
	content: '';
}

.foo {
	@include hyphenated-lowercase();
}

// ✗ avoid
// --------------------------------

@mixin HYPHENATED-UPPERCASE() {
	content: '';
}

@mixin _camelCaseWithLeadingUnderscore() {
	content: '';
}

.foo {
	@include snake_case();
}

```

---

### Mixins Before Declarations

[↑ rules list](#table-of-contents)

Mixins should be written before declarations in a ruleset.  
Exception `[breakpoint, mq, media, clearfix]`

_sass-lint rule - [`mixins-before-declarations`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/mixins-before-declarations.md)_

```scss
// ✓ ok
// --------------------------------

.foo {
	@include bar();

	content: 'foo';
	text-transform: uppercase;
	color: $foo-color;
	border-color: inherit;

	@include breakpoint(500px) {
		content: 'qux';
	}

	@include mq(500px) {
		content: 'qux';
	}

	@include media($lg) {
		content: 'qux';
	}

	@include clearfix();
}

// ✗ avoid
// --------------------------------

.bar {
	content: 'baz';

	@include baz();
}

```

---

### Nesting Depth

[↑ rules list](#table-of-contents)

Max nesting depth is `5`. 

_sass-lint rule - [`nesting-depth`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/nesting-depth.md)_

```scss
// ✓ ok
// --------------------------------

.parent {
	&__child {
		&--is-acitve {
			.no-touchevents & {
				p {
					&::first-line {
						// max-depth is 5
						font-weight: bold;
					}
				}
			}
		}
	}
}


// ✗ avoid
// --------------------------------

.parent {
	&__child {
		&--is-acitve {
			.no-touchevents & {
				p {
					&:hover {
						&::first-line {
							// 6 and more not allowed
							font-weight: bold;
						}
					}
				}
			}
		}
	}
}

```

---

### No Attribute Selectors

[↑ rules list](#table-of-contents)

Attribute selectors are allowed.

_sass-lint rule - [`no-attribute-selectors`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-attribute-selectors.md)_


---

### No Color Hex

[↑ rules list](#table-of-contents)

Hexadecimal colors are allowed.

_sass-lint rule - [`no-color-hex`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-color-hex.md)_


---

### No Color Keywords

[↑ rules list](#table-of-contents)

Max nesting depth is `5`. 

_sass-lint rule - [`no-color-keywords`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-color-keywords.md)_

```scss
// ✓ ok
// --------------------------------

$new-red: #f00;

.foo {
	color: $new-red;
}

// ✗ avoid
// --------------------------------

$new-red: red;

.foo {
	color: $new-red;
}

```


---

### No Color Literals

[↑ rules list](#table-of-contents)

Color literals are allowed. 

- `allow-map-identifiers: true`
- `allow-rgba: true`
- `allow-variable-identifiers: true`

_sass-lint rule - [`no-color-literals`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-color-literals.md)_

```scss
// ✓ ok
// --------------------------------

$color-white: #fff;

.background {
	background: 1px solid $color-white;
}

.hex {
	color: $color-white;
}

// rgb function passed directly as function argument
.adj {
	color: adjust-color(rgb(255, 0, 0), $blue: 5);
}

// hsl function passed directly as function argument
.scale {
	color: scale-color(hsl(120, 70%, 80%), $lightness: 50%);
}

// hsl function passed directly as function argument
.change {
	color: change-color(hsl(25, 100%, 80%), $lightness: 40%, $alpha: .8);
}

// color literal passed directly as function argument
.function {
	color: test($color-white);
}

// color functions used directly as property values
.rgb {
	color: rgb(255, 255, 255);
	background-color: rgb($color-white);
}

.rgba {
	color: rgba(255, 255, 255, .3);
	background-color: rgb($color-white, .5);
}

.hsl {
	color: hsl(40, 50%, 50%);
	background-color: hsl($color-white);
}

.hsla {
	color: hsla(40, 50%, 50%, .3);
	background-color: hsla($color-white, .5);
}

```


---

### No Combinators

[↑ rules list](#table-of-contents)

Do not use of combinators.

_sass-lint rule - [`no-combinators`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-combinators.md)_

```scss
// ✓ ok
// --------------------------------

.foo {
	.bar {
		content: 'qux';
	}
}

.block {
	&__element {
		.sub-block {
			position: relative;
		}
	}
}

.block {
	&__element {
		span {
			position: relative;
		}
	}
}

// ✗ avoid
// --------------------------------

.foo + .bar {
	content: 'qux';
}

.foo ~ .bar {
	content: 'qux';
}

.foo > .bar {
	content: 'qux';
}

.foo .bar {
	content: 'qux';
}

.block {
	&__element {
		> span {
			position: relative;
		}
	}
}

```


---

### No CSS Comments

[↑ rules list](#table-of-contents)

Do not use of CSS comments.  
Bang comments (`/*! */`, will be printed even in minified mode) are still allowed.

_sass-lint rule - [`no-css-comments`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-css-comments.md)_

```scss
// ✓ ok
// --------------------------------

// This is a good comment

// =========
// This is a good comment
// =========

//////////////////
// This is a good comment
//////////////////

/*! This is a good bang comment */

/*!
  * This is a good bang comment
**/

// ✗ avoid
// --------------------------------

/* This comment will appear in your compiled css */

/*
 * Mulitline comments are bad
 */

```


---

### No Debug

[↑ rules list](#table-of-contents)

`@debug` statements are disallowed to be used.

_sass-lint rule - [`no-debug`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-debug.md)_

```scss
// ✗ avoid
// --------------------------------

@debug 'foo';

```


---

### No Disallowed Properties

[↑ rules list](#table-of-contents)

Do not use of properties: 
- [`zoom`](https://developer.mozilla.org/ru/docs/Web/CSS/zoom)
- [`@document`](https://developer.mozilla.org/ru/docs/Web/CSS/@document)

_sass-lint rule - [`no-disallowed-properties`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-disallowed-properties.md)_

```scss
// ✗ avoid
// --------------------------------

@document url(http://www.w3.org/), url-prefix(http://www.w3.org/Style/), domain(mozilla.org), regexp("https:.*")

.zoom {
	zoom: 3;
}

```


---

### No Duplicate Properties

[↑ rules list](#table-of-contents)

Duplicate properties are disallowed within the same block.  
Exception `[display]`

_sass-lint rule - [`no-duplicate-properties`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-duplicate-properties.md)_

```scss
// ✓ ok
// --------------------------------

%margins {
	margin: 0 0 15px;
}

@mixin margins() {
	margin: 0 0 15px;
}

.foo {
	@extend %margins;
	@include margins();

	margin: 0;
}

// ✗ avoid
// --------------------------------

.foo {
	margin: 0 0 15px;
	margin: 0;
}

$m1: 0 0 10px;
$m2: 20px 0;

.bar {
	margin: $m1;
	position: relative;
	margin: $m2;
}

// ✓ ok, when `display` is added to the exclude array
// --------------------------------

.display-block {
	display: flex;
	display: inline-block;
	float: right;
}

// ✗ avoid, would still be disallowed as the duplicate properties are separated by another property
// --------------------------------

.display-block {
	display: flex;
	float: right;
	display: inline-block;
}

```


---

### No Empty Rulesets

[↑ rules list](#table-of-contents)

Empty rulesets are disallowed.

_sass-lint rule - [`no-empty-rulesets`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-empty-rulesets.md)_

```scss
// ✓ ok
// --------------------------------

.foo {
	// not empty
}

.bar {
	content: 'baz';

	.qux {
		// position: relative
	}
}

// ✗ avoid
// --------------------------------

.foo {

}

.bar {
  content: 'baz';

  .qux {}
}

.waldo {}

```


---

### No Extends

[↑ rules list](#table-of-contents)

All extends are allowed to be used. Except IDs, see [No IDs](#no-ids).

_sass-lint rule - [`no-extends`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-extends.md)_

```scss
// ✓ ok
// --------------------------------

.foo {
	@extend %bar;
	@extend .bar;
}

// ✗ avoid
// --------------------------------

.foo {
	@extend #bar;
}

```


---

### No IDs

[↑ rules list](#table-of-contents)

ID selectors are not allowed to be used

_sass-lint rule - [`no-ids`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-ids.md)_

```scss
// ✗ avoid
// --------------------------------

#foo {
	content: 'bar';
}

```


---

### No Warn

[↑ rules list](#table-of-contents)

`@warn` statements are disallowed to be used.

_sass-lint rule - [`no-warn`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/no-warn.md)_

```scss
// ✗ avoid
// --------------------------------

@warn 'foo';

```
