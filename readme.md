You can use this method to transpose 2D array.

[![Build Status](https://travis-ci.org/grafikri/transpose-2D-array.svg?branch=master)](https://travis-ci.org/grafikri/transpose-2D-array)
[![install size](https://packagephobia.now.sh/badge?p=transpose-2d-array)](https://packagephobia.now.sh/result?p=transpose-2d-array)

## Install

```
$ npm i transpose-2d-array
```

## Usage

```js
import transpose from "transpose-2d-array"
```

or

```js
const transpose = require("transpose-2d-array")
```

```js
const arr = [
  [[1], [2]],
  [[1], [2]],
  [[1], [2]],
  [[1], [2]]
]

const result = transpose(arr)

// result will be
//
// [
//   [[1], [1], [1], [1]],
//   [[2], [2], [2], [2]]
// ]
```
