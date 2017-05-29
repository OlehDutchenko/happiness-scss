# Rules

:back: [README.md](./README.md)

> _list of rules_

---

This project working in progress. So there no stable notable changes yet.

### Attribute Quotes

Use single quotes in attribute values.  
sass-lint [`attribute-quotes`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/attribute-quotes.md)

```scss
// ✓ ok 
span[lang='pt'] {  
  color: green;
}

// ✗ avoid 
span[lang=pt] {  
  color: green;
}
```

---

### BEM Depth

Max depth `1`.  
sass-lint [`bem-depth`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/bem-depth.md)

```scss
// ✓ ok 
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

Use `none` keyword for disable border or `0` for `border-width`.  
sass-lint [`border-zero`](https://github.com/sasstools/sass-lint/blob/master/docs/rules/border-zero.md)

```scss
// ✓ ok 
.foo1 {
	border: none;
}

.foo2 {
	border-width: 0;
}

// ✗ avoid 
.bar1 {
	border: 0;
}

.bar2 {
	border-right: 0;
}
```






