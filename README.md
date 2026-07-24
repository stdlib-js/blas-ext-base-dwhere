<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dwhere

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Take elements from one of two double-precision floating-point strided arrays depending on a condition.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import dwhere from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dwhere@deno/mod.js';
```

#### dwhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut )

Takes elements from one of two double-precision floating-point strided arrays depending on a condition.

```javascript
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var condition = new BooleanArray( [ true, false, true ] );
var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float64Array( [ 4.0, 5.0, 6.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );

dwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
// out => <Float64Array>[ 1.0, 5.0, 3.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **condition**: condition [`BooleanArray`][@stdlib/array/bool].
-   **strideC**: stride length for `condition`.
-   **x**: first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length for `y`.
-   **out**: output [`Float64Array`][@stdlib/array/float64].
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to select from every other element:

```javascript
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var condition = new BooleanArray( [ true, false, false, true, true, false ] );
var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );

dwhere( 3, condition, 2, x, 2, y, 2, out, 1 );
// out => <Float64Array>[ 1.0, 9.0, 5.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Initial arrays...
var condition0 = new BooleanArray( [ false, true, false, true, false, true ] );
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var out0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var condition1 = new BooleanArray( condition0.buffer, condition0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dwhere( 3, condition1, 2, x1, 2, y1, 2, out1, 1 );
// out0 => <Float64Array>[ 0.0, 2.0, 4.0, 6.0, 0.0, 0.0 ]
```

<!-- lint disable maximum-heading-length -->

#### dwhere.ndarray( N, condition, strideC, offsetC, x, strideX, offsetX, y, strideY, offsetY, out, strideOut, offsetOut )

<!-- lint enable maximum-heading-length -->

Takes elements from one of two double-precision floating-point strided arrays depending on a condition using alternative indexing semantics.

```javascript
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var condition = new BooleanArray( [ true, false, true ] );
var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float64Array( [ 4.0, 5.0, 6.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );

dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
// out => <Float64Array>[ 1.0, 5.0, 3.0 ]
```

The function has the following additional parameters:

-   **offsetC**: starting index for `condition`.
-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to select from every other element starting from the second element:

```javascript
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var condition = new BooleanArray( [ false, true, false, false, false, true ] );
var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0 ] );

dwhere.ndarray( 3, condition, 2, 1, x, 2, 1, y, 2, 1, out, 1, 0 );
// out => <Float64Array>[ 2.0, 10.0, 6.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `out` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@deno/mod.js';
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import BooleanArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import dwhere from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dwhere@deno/mod.js';

var cbuf = bernoulli( 20, 0.5, {
    'dtype': 'uint8'
});
var condition = new BooleanArray( cbuf.buffer );
console.log( condition );

var x = uniform( 20, 0.0, 100.0, {
    'dtype': 'float64'
});
console.log( x );

var y = uniform( 20, -100.0, 0.0, {
    'dtype': 'float64'
});
console.log( y );

var out = new Float64Array( condition.length );
console.log( out );

dwhere( condition.length, condition, 1, x, 1, y, 1, out, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dwhere.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dwhere

[test-image]: https://github.com/stdlib-js/blas-ext-base-dwhere/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-dwhere/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dwhere/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dwhere?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dwhere.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dwhere/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dwhere/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-dwhere/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dwhere/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-dwhere/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dwhere/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-dwhere/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dwhere/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dwhere/main/LICENSE

[@stdlib/array/bool]: https://github.com/stdlib-js/array-bool/tree/deno

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
