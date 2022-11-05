# @sebdup/ramdo

Ramda extension

* [I. Installation](https://github.com/s-dupuis/ramdo#i-installation)
* [II. Concept](https://github.com/s-dupuis/ramdo#ii-concept)
* [III. New functions](https://github.com/s-dupuis/ramdo#iii-new-functions)

## I. Installation

You don't need to install Ramda, every native function can be imported directly.

```bash
$ npm install @sebdup/ramdo
```

```js
import * as R from '@sebdup/ramdo';
```

```js
import { isNil, isNilOrEmpty } from '@sebdup/ramdo';
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

## III. New functions
* [findOr](https://github.com/s-dupuis/ramdo#findor)
* [isNilOrEmpty](https://github.com/s-dupuis/ramdo#isnilorempty)
* [log](https://github.com/s-dupuis/ramdo#log)
* [pathDefaultTo](https://github.com/s-dupuis/ramdo#pathdefaultto)
* [pathIs](https://github.com/s-dupuis/ramdo#pathis)
* [propDefaultTo](https://github.com/s-dupuis/ramdo#propdefaultto)

### findOr

Returns the first element of the list which matches the predicate, or defaultValue if no element matches.

`(Function, any, any[]) => any`
```js
import { findOr, propEq } from '@sebdup/ramdo';

const items = [{ name: 'John' }];

findOr(
    propEq('name', 'Patrick'),
    { name: 'Harry' }
)(items); // { name: 'Harry' }
```

### isNilOrEmpty

Checks if the input value is null, undefined or empty.

`any => Boolean`
```js
import { isNilOrEmpty } from '@sebdup/ramdo';

isNilOrEmpty(undefined); // true
isNilOrEmpty(null); // true
isNilOrEmpty(''); // true
isNilOrEmpty([]); // true
isNilOrEmpty({}); // true
isNilOrEmpty('Text'); // false
```

### log

This function is meant to be used within a compose or a pipe.

It can be used to log a value at a step of a composition function. It does not affect the state of the value.

`any => any`
```js
import { log, compose, append } from '@sebdup/ramdo';

compose(
   append('Text 2'),
   log, // ['Text']
   append('Text') 
)([]);
```

### pathDefaultTo

When the given path is null, undefined or empty :

Makes a shallow clone of an object, setting or overriding the nodes required to create the given path, and placing the specific value at the tail end of that path.
Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.

Otherwise, the source object is returned.

`(String|String[], any, object) => object`
```js
import { pathDefaultTo } from '@sebdup/ramdo';

const obj = {
    user: {
        firstName: 'John'
    }
};

pathDefaultTo(['user', 'firstName'], 'Patrick', obj); // { user: { firstName: 'John' } }
pathDefaultTo(['user', 'lastName'], 'Doe', obj); // { user: { firstName: 'John', lastName: 'Doe' } }
pathDefaultTo('user.lastName', 'Doe', obj); // { user: { firstName: 'John', lastName: 'Doe' } }
```

### pathIs

See if the given path of an object (i.e. val) is an instance of the supplied constructor. This function will check up the inheritance chain, if any.

If val was created using Object.create, R.pathIs(path, Object, val) === true.

`(String|String[], Type, object) => Boolean`
```js
import { pathDefaultTo } from '@sebdup/ramdo';

const obj = {
    subObj1: {
        subObj2: {
            name: 'John'
        }
    }
};
pathIs(['subObj1', 'subObj2', 'name'], String, obj); // true
pathIs(['subObj1.subObj2.name'], Number, obj); // false
```

### propDefaultTo

When the given prop is null, undefined or empty :

Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the
new object as well. All non-primitive properties are copied by reference.

Otherwise, the source object is returned.

`(String, any, object) => object`
```js
import { propDefaultTo } from '@sebdup/ramdo';

const obj = {
    firstName: 'John'
};

propDefaultTo('firstName', 'Patrick', obj); // { firstName: 'John' }
propDefaultTo('lastName', 'Doe', obj); // { firstName: 'John', lastName: 'Doe' }
```
