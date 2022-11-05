# ramdo

Ramda extension

* [I. Installation]()
* [II. Concept]()
* [III. Functions]()

## I. Installation

You don't need to install Ramda, every native function can be imported directly.

```bash
$ npm install ramdo
```

```js
import * as R from 'ramdo';
```

```js
import { isNil, isNilOrEmpty } from 'ramdo';
```

## II. Concept

Ramda is a very useful functional library, however, some pratictal functions are missing.

This package tries to add many functions that seem important, yet not provided by the source material.

Also, all functions working with a path are now compatible with string paths :
```js
pathEq(['prop1', 'prop2', 'prop3'], 'value', {})
// Can also be written
pathEq('prop1.prop2.prop3', 'value', {})
```

## III. Functions
* [findOr]()
* [isNilOrEmpty]()
* [log]()
* [pathDefaultTo]()
* [pathIs]()
* [propDefaultTo]()
