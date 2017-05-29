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
1. [lorem](#lorem)

---

This project working in progress. So there no stable notable changes yet.

### Attribute Quotes

[↑ rules list](#list-of-rules)

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
```

---

### BEM Depth

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

Use `none` keyword for disable border or `0` for `border-width`.  

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

[↑ rules list](#list-of-rules)

Use `1tbs` brace style.  
Single line are not allowed.

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

// ✗ avoid single lin
// --------------------------------

.foo { content: 'foo'; }

@if ($foo) { $bar: 'foo'; }
@else { $bar: false; }
```

---

### Class Name Format

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

Not parentheses should be included if no arguments are defined or used, when declaring or invoking a mixin

_sass-lint rule - [`empty-args`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/empty-args.md)_


```scss
// ✓ ok
// --------------------------------

@mixin bar {
	padding: 10px;
}

.bar {
	@include bar;
}

// ✗ avoid
// --------------------------------

@mixin foo() {
	padding: 10px;
}

.foo {
	@include foo();
}
```

---

### Empty Line Between Blocks

[↑ rules list](#list-of-rules)

Nested blocks should include a space between the last non-comment declaration.  
Single line rulesets are not allowed

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

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

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

[↑ rules list](#list-of-rules)

Use `camelCase` convention for function names.  
Leading underscore is allowed

_sass-lint rule - [`function-name-format`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/function-name-format.md)_


```scss
// ✓ ok
// --------------------------------

@function camelCase() {
	@return 'foo';
}

@function _leadingUnderscore($x) {
	@return $x;
}

.foo {
	content: camelCase('bar');
}


// ✗ avoid
// --------------------------------

@function HYPHENATED-UPPERCASE() {
	@return 'foo';
}

.foo {
	content: snake_case();
}

@function hyphenated-lowercase() {
	@return 'foo';
}

```

---


