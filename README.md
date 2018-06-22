# @uedlinker/eslint-config-base

JS 代码规范基础配置，适用于 Node.js 项目。

## 安装

```shell
npm install --save-dev eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard @uedlinker/eslint-config-base
```

## 使用

在项目中，创建 `.eslintrc` 文件，并设置 `extends` 属性。

```json
{
  "extends": ["@uedlinker/eslint-config-base"]
}
```

## TODO

- [ ] 在项目中使用此配置；
- [ ] 仔细阅读 [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) 文档，并优化配置和文档；
- [ ] 仔细阅读 [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) 文档，并优化配置和文档；
- [ ] 仔细阅读 [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) 文档，并优化配置和文档；
- [ ] 仔细阅读 [eslint-plugin-standard](https://github.com/standard/eslint-plugin-standard) 文档，并优化配置和文档；
- [ ] 在 [awesome-eslint](https://github.com/dustinspecker/awesome-eslint) 寻找其他的插件，如果有适合 Node.js 项目的，则添加到配置项中。

## 规则

### 语法错误或逻辑错误相关

- 1.1 [`for-direction`](https://eslint.org/docs/rules/for-direction)：强制 `for` 循环的变量在正确的范围内变动，避免陷入死循环。

	```js
	// 错误
	for (let i = 0; i < 10; i--) {
    // Do something
	}

	// 错误
	for (let i = 10; i > 0; i++) {
    // Do something
	}

	// 正确
	for (let i = 0; i < 10; i++) {
    // Do something
	}
	```

- 1.2 [`getter-return`](https://eslint.org/docs/rules/getter-return)：强制在 `getter` 属性中显式 `return`。

	```js
	// 错误
	const obj1 = {
	  get attr1 () {
	    // 没有返回语句
	  }
	}

	// 错误
	const obj2 = {
	  get attr2 () {
	    // 隐式返回 `undefined` 值
	    return
	  }
	}

	// 正确
	const obj3 = {
	  get attr3 () {
	    return 'value'
	  }
	}
	```

- 1.3 [`no-await-in-loop`](https://eslint.org/docs/rules/no-await-in-loop)：推荐不要在循环中使用 `await`。大多数情况下，循环中的请求都是并行的，如果每次循环都需要等待上一次返回结果，会降低程序的性能，遇到这种情况，可以使用 `Promise.all()` 重构代码，使其更具有效率。也有少数情况可能在循环中使用 `await`：一次迭代的输出可能是另一次迭代的输入；循环可以重试不成功的异步操作。如果遇到后面这种情况，可以使用 `eslint-disable-next-line` 命令消除这个警告。

	```js
	function asyncSqrt (number) {
	  return new Promise((resolve) => {
	    setTimeout(() => {
	      resolve(Math.sqrt(number))
	    }, 1000)
	  })
	}

	// 警告
	async function awaitInLoop () {
	  const results = []

	  for (let i = 0; i < 10; i++) {
	    results.push(await asyncSqrt(i))
	  }

	  return results
	}

	// 正确
	async function awaitOutOfLoop () {
	  const promises = []

	  for (let i = 0; i < 10; i++) {
	    promises.push(asyncSqrt(i))
	  }

	  return await Promise.all(promises)
	}
	```

- 1.4 [`no-compare-neg-zero`](https://eslint.org/docs/rules/no-compare-neg-zero)：禁止与 -0 进行比较。

	```js
	// 错误
	if (x === -0) {
    // Do something
	}

	// 正确
	if (x === 0) {
    // Do something
	}

	// 正确
	if (Object.is(x, -0)) {
    // Do something
	}
	```

- 1.5 [`no-cond-assign`](https://eslint.org/docs/rules/no-cond-assign)：禁止在条件语句中出现赋值操作符，除非它们被圆括号括起来。

  ```js
  // 错误
  if (x = 0) {
    // Do something
  }

  // 正确
  if (x === 0) {
    // Do something
  }

  // 正确
  while ((x = someValue)) {
    // Do something
  }
  ```

- 1.6 [`no-constant-condition`](https://eslint.org/docs/rules/no-constant-condition)：禁止在条件中使用常量表达式。

  ```js
  // 错误
  if (false) {
    // Do something
  }

  // 正确
  if (x === 0) {
    // Do something
  }
  ```

- 1.7 [`no-control-regex`](https://eslint.org/docs/rules/no-control-regex)：禁止在正则表达式中使用控制字符。

  ```js
  // 错误
  const pattern1 = /\x1f/
  const pattern2 = new RegExp('\x1f')

  // 正确
  const pattern3 = /\x20/
  const pattern4 = new RegExp('\x20')
  ```

- 1.8 [`no-debugger`](https://eslint.org/docs/rules/no-debugger)：禁用 `debugger`。

- 1.9 [`no-dupe-args`](https://eslint.org/docs/rules/no-dupe-args)：禁止在 `function` 定义中出现重复的参数。

- 1.10 [`no-dupe-keys`](https://eslint.org/docs/rules/no-dupe-keys)：禁止在对象字面量中出现重复的键。

- 1.11 [`no-duplicate-case`](https://eslint.org/docs/rules/no-duplicate-case)：禁止重复 `case` 标签。

- 1.12 [`no-empty`](https://eslint.org/docs/rules/no-empty)：禁止空块语句，`catch` 子句除外。

  ```js
  // 错误
  if (x) {
  }

  // 正确
  if (x) {
    // 有注释是可以的
  }

  // 正确
  try {
    // Do something
  } catch (ex) {}
  ```

- 1.13 [`no-empty-character-class`](https://eslint.org/docs/rules/no-empty-character-class)：禁止在正则表达式中出现空字符集。

- 1.14 [`no-ex-assign`](https://eslint.org/docs/rules/no-ex-assign)：禁止对 `catch` 子句中的异常变量重新赋值。

- 1.15 [`no-extra-boolean-cast`](https://eslint.org/docs/rules/no-extra-boolean-cast)：禁止不必要的布尔类型转换。

- 1.16 [`no-extra-parens`](https://eslint.org/docs/rules/no-extra-parens)：在函数表达式周围禁止不必要的括号。

  ```js
  // 错误
  ((function foo () {}))()

  // 正确
  ;(function bar () {})()
  ```

- 1.17 [`no-extra-semi`](https://eslint.org/docs/rules/no-extra-semi)：禁止不必要的分号。

- 1.18 [`no-func-assign`](https://eslint.org/docs/rules/no-func-assign)：禁止对 `function` 声明重新赋值。

- 1.19 [`no-inner-declarations`](https://eslint.org/docs/rules/no-inner-declarations)：禁止在嵌套的语句块中出现 `function` 申明。

  ```js
  // 错误
  if (x) {
    function foo () {}
  }

  // 正确
  let bar
  if (x) {
    bar = function () {}
  }
  ```

- 1.20 [`no-invalid-regexp`](https://eslint.org/docs/rules/no-invalid-regexp)：禁止在 RegExp 构造函数中出现无效的正则表达式。

- 1.21 [`no-irregular-whitespace`](https://eslint.org/docs/rules/no-irregular-whitespace)：禁止不规则的空白。

- 1.22 [`no-obj-calls`](https://eslint.org/docs/rules/no-obj-calls)：禁止将全局对象当作函数进行调用。

- 1.23 [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)：禁止直接使用 `Object.prototypes` 的内置属性。

  ```js
  // 错误
  let hasBarProperty = foo.hasOwnProperty('bar')
  let isPrototypeOfBar = foo.isPrototypeOf(bar)
  let barIsEnumerable = foo.propertyIsEnumerable('bar')

  // 正确
  hasBarProperty = Object.prototype.hasOwnProperty.call(foo, 'bar')
  isPrototypeOfBar = Object.prototype.isPrototypeOf.call(foo, bar)
  barIsEnumerable = {}.propertyIsEnumerable.call(foo, 'bar')
  ```

- 1.24 [`no-regex-spaces`](https://eslint.org/docs/rules/no-regex-spaces)：禁止正则表达式字面量中出现多个空格。

  ```js
  // 错误
  let re = /foo   bar/

  // 正确
  re = /foo {3}bar/
  ```

- 1.25 [`no-sparse-arrays`](https://eslint.org/docs/rules/no-sparse-arrays)：禁止使用稀疏数组。

  ```js
  // 错误
  const arr = ['item1', , 'item3']
  ```

- 1.26 [`no-template-curly-in-string`](https://eslint.org/docs/rules/no-template-curly-in-string)：禁止在常规字符串中出现模板字面量占位符语法。

- 1.27 [`no-unexpected-multiline`](https://eslint.org/docs/rules/no-unexpected-multiline)：禁止使用令人困惑的多行表达式。

  ```js
  // 错误，下面的多行表达式在压缩工具处理后，可能会偏离预期
  const foo = 'bar'
  [1].forEach(doSomething)

  // 正确
  const bar = 'foo'
  ;[1].forEach(doSomething)
  ```

- 1.28 [`no-unreachable`](https://eslint.org/docs/rules/no-unreachable)：禁止在 `return`、`throw`、`continue` 和 `break` 语句后出现永远不会执行的代码。

- 1.29 [`no-unsafe-finally`](https://eslint.org/docs/rules/no-unsafe-finally)：禁止在 `finally` 语句块中出现控制流语句。JavaScript 暂停 `try` 和 `catch` 语句块中的控制流语句，直到 `finally` 语句块执行完毕。所以，当 `return`、`throw`、`break` 和 `continue` 出现在 `finally` 中时， `try` 和 `catch` 语句块中的控制流语句将被覆盖，这被认为是意外的行为。

  ```js
  // 错误，执行 `foo` 将会返回 'finally' 而不是 'success'
  const foo = () => {
    try {
      return 'success'
    } finally {
      return 'finally'
    }
  }

  // 正确
  const bar = () => {
    try {
      return 'success'
    } finally {
      doSomething()
    }
  }
  ```

- 1.30 [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation)：禁止对关系运算符的左操作数使用否定操作符。

  ```js
  // 错误
  if (!key in object) {
    // Do something
  }
  if (!obj instanceof Ctor) {
    // Do something
  }

  // 正确
  if (!(key in object)) {
    // Do something
  }
  if (!(obj instanceof Ctor)) {
    // Do something
  }
  ```

- 1.31 [`use-isnan`](https://eslint.org/docs/rules/use-isnan)：强制使用全局的 `isNaN` 判断 `NaN`。

- 1.32 [`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)：强制 `typeof` 表达式与有效的字符串字面量进行比较。

### 最佳实践

- 2.1 [`accessor-pairs`](https://eslint.org/docs/rules/accessor-pairs)：强制在对象中定义 `setter` 时定义对应的 `getter`。

- 2.2 [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)：强制原生数组方法的回调函数中使用 `return` 语句。

- 2.3 [`block-scoped-var`](https://eslint.org/docs/rules/block-scoped-var)：把 `var` 语句看作是在块级作用域范围之内。此规则可以避免因变量提升引起的 bug。

- 2.4 [`curly`](https://eslint.org/docs/rules/curly)：允许在单行中省略大括号，其他使用中依然会强制使用大括号。

  ```js
  // 错误
  if (x)
    doSomething()
  else
    doSomethingElse()

  // 正确
  if (x) doSomething()
  else doSomethingElse()

  // 正确
  if (x) {
    doSomething()
  } else {
    doSomethingElse()
  }
  ```

- 2.5 [`dot-location`](https://eslint.org/docs/rules/dot-location)：强制表达式中的点号操作符和属性在同一行。

  ```js
  // 错误
  returnPromise().
    then(() => {
      // Do something
    })

  // 正确
  returnPromise()
    .then(() => {
      // Do something
    })
  ```

- 2.6 [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)：强制使用 `===` 和 `!==`，比较 `null` 值时除外。

- 2.7 [`no-caller`](https://eslint.org/docs/rules/no-caller)：禁用 `caller` 和 `callee`。

- 2.8 [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations)：禁止在 `case` 或 `default` 子句中出现词法声明（`let`、`const`、`function` 和 `class`）。

  ```js
  // 错误
  switch (foo) {
    case 1:
      const x = 1
      break
    case 2:
      function func () {}
      break
    default:
      class C {}
  }

  // 正确
  switch (foo) {
    case 1: {
      const x = 1
      break
    }
    case 2: {
      function func () {}
      break
    }
    default: {
      class C {}
    }
  }
  ```

- 2.9 [`no-empty-pattern`](https://eslint.org/docs/rules/no-empty-pattern)：禁止使用空解构模式。

  ```js
  // 错误
  const {} = obj

  // 正确
  const { a } = obj
  ```

- 2.10 [`no-eval`](https://eslint.org/docs/rules/no-eval)：禁用 `eval()`。

- 2.11 [`no-extend-native`](https://eslint.org/docs/rules/no-extend-native)：禁止扩展原生对象。

- 2.12 [`no-extra-bind`](https://eslint.org/docs/rules/no-extra-bind)：禁止不必要的函数绑定。

- 2.13 [`no-extra-label`](https://eslint.org/docs/rules/no-extra-label)：禁止不必要的标签。

- 2.14 [`no-fallthrough`](https://eslint.org/docs/rules/no-fallthrough)：禁止 `case` 语句落空。

  ```js
  // 错误
  switch (x) {
    case 1:
      doSomething()
    case 2:
      doOther()
  }

  // 正确
  switch (x) {
    case 1:
      doSomething()
      break
    case 2:
      doOther()
  }

  // 正确
  switch (x) {
    case 1:
    case 2:
      doSomething()
  }
  ```

- 2.15 [`no-floating-decimal`](https://eslint.org/docs/rules/no-floating-decimal)：禁止浮点小数。

  ```js
  let num

  // 错误
  num = .5
  num = 2.
  num = -.7

  // 正确
  num = 0.5
  num = 2.0
  num = -0.7
  ```

- 2.16 [`no-global-assign`](https://eslint.org/docs/rules/no-global-assign)：禁止对原生对象或只读的全局对象进行赋值。

- 2.17 [`no-implied-eval`](https://eslint.org/docs/rules/no-implied-eval)：禁用隐式的 `eval()`。在使用 `setTimeout()`、`setInterval()` 或 `execScript()` 时，如果第一个参数是字符串，则会隐式调用 `eval()`。

- 2.18 [`no-iterator`](https://eslint.org/docs/rules/no-iterator)：禁用迭代器 `__iterator__`。

- 2.19 [`no-labels`](https://eslint.org/docs/rules/no-labels)：禁止在循环或 `switch` 之外的地方使用标签。

- 2.20 [`no-lone-blocks`](https://eslint.org/docs/rules/no-lone-blocks)：禁止不必要的嵌套块。

- 2.21 [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces)：禁止不必要的空格。

- 2.22 [`no-multi-str`](https://eslint.org/docs/rules/no-multi-str)：禁止使用多行字符串。

  ```js
  // 错误
  let str = 'Line 1 \
             Line 2'

  // 正确
  let str = 'Line 1 \n' +
            'Line 2'
  ```

- 2.23 [`no-new`](https://eslint.org/docs/rules/no-new)：禁止单边使用 `new`。

  ```js
  // 错误
  new Thing()

  // 正确
  const thing = new Thing()
  ```

- 2.24 [`no-new-func`](https://eslint.org/docs/rules/no-new-func)：禁用构造函数。使用 `class` 代替。

- 2.25 [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)：禁止对 `String`、`Number` 和 `Boolean` 使用 `new` 操作符。

- 2.26 [`no-octal`](https://eslint.org/docs/rules/no-octal)：禁用八进制字面量。

- 2.27 [`no-octal-escape`](https://eslint.org/docs/rules/no-octal-escape)：禁止在字符串字面量中使用八进制转义序列。

- 2.28 [`no-proto`](https://eslint.org/docs/rules/no-proto)：禁用 `__proto__`。

- 2.29 [`no-redeclare`](https://eslint.org/docs/rules/no-redeclare)：禁止重新声明变量。

- 2.30 [`no-return-assign`](https://eslint.org/docs/rules/no-return-assign)：禁止在返回语句中赋值，除非使用括号把它们括起来。

  ```js
  // 错误
  function doSomething () {
    return foo += 2
  }

  // 正确
  function doSomething () {
    return (foo += 2)
  }
  ```

- 2.31 [`no-return-await`](https://eslint.org/docs/rules/no-return-await)：禁止不必要的 `return await`。

- 2.32 [`no-self-compare`](https://eslint.org/docs/rules/no-self-compare)：禁止自身比较。

- 2.33 [`no-sequences`](https://eslint.org/docs/rules/no-sequences)：禁用逗号操作符。

- 2.34 [`no-throw-literal`](https://eslint.org/docs/rules/no-throw-literal)：禁止抛出字面量异常。

- 2.35 [`no-unmodified-loop-condition`](https://eslint.org/docs/rules/no-unmodified-loop-condition)：禁用一成不变的循环条件。

  ```js
  // 错误
  while (condition) {
    doSomething(condition)
  }

  // 正确
  while (condition) {
    doSomething(condition)
    condition = changeCondition(condition)
  }
  ```

- 2.36 [`allowTaggedTemplates`](https://eslint.org/docs/rules/no-unused-expressions)：禁止未使用过的表达式，以下情况除外：
  - 逻辑短路求值；
  - 类似逻辑短路求值的三元运算符；
  - 使用带标签的模板字面量。

- 2.37 [`no-unused-labels`](https://eslint.org/docs/rules/no-unused-labels)：禁用未使用过的标签。

- 2.38 [`no-useless-call`](https://eslint.org/docs/rules/no-useless-call)：禁用不必要的 `.call()` 和 `.apply()`。

  ```js
  // 错误
  foo.call(undefined, 1, 2, 3)
  foo.apply(undefined, [1, 2, 3])
  foo.call(null, 1, 2, 3)
  foo.apply(null, [1, 2, 3])
  obj.foo.call(obj, 1, 2, 3)
  obj.foo.apply(obj, [1, 2, 3])
  a[i++].foo.call(a[i++], 1, 2, 3)

  // 正确
  foo.call(obj, 1, 2, 3)
  foo.apply(obj, [1, 2, 3])
  obj.foo.call(null, 1, 2, 3)
  obj.foo.apply(null, [1, 2, 3])
  obj.foo.call(otherObj, 1, 2, 3)
  obj.foo.apply(otherObj, [1, 2, 3])
  foo.apply(undefined, args)
  foo.apply(null, args)
  obj.foo.apply(obj, args)
  a[++i].foo.call(a[i], 1, 2, 3)
  ```

- 2.39 [`no-useless-concat`](https://eslint.org/docs/rules/no-useless-concat)：禁止没有必要的字符拼接。

  ```js
  // 错误
  const foo = 'a' + 'b'

  // 正确
  const bar = 'ab'
  ```

- 2.40 [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)：禁用不必要的转义。

- 2.41 [`no-useless-return`](https://eslint.org/docs/rules/no-useless-return)：禁止多余的 `return` 语句。

- 2.42 [`no-void`](https://eslint.org/docs/rules/no-void)：禁止使用 `void`。

- 2.43 [`no-with`](https://eslint.org/docs/rules/no-with)：禁止使用 `with`。

- 2.44 [`prefer-promise-reject-errors`](https://eslint.org/docs/rules/prefer-promise-reject-errors)：要求使用 `Error` 对象作为 `Promise` 拒绝的原因，但允许调用不带参数的 `Promise.reject()`。

- 2.45 [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife)：强制包裹立即执行函数。

  ```js
  // 错误
  function () {}()
  function () {}.call(bar)

  // 正确
  ;(function () {}())
  ;(function () {})()
  ;(function () {}).call(bar)
  ```

- 2.46 [`yoda`](https://eslint.org/docs/rules/yoda)：禁止 Yoda 条件。

  ```js
  // 错误
  if ('red' === color) {
    // Do something
  }

  // 正确
  if (color === 'red') {
    // Do something
  }
  ```

### 严格模式相关

- 3.1 [`strict`](https://eslint.org/docs/rules/strict)：禁止使用 `'use strict'` 命令。

### 变量声明相关

- 4.1 [`no-delete-var`](https://eslint.org/docs/rules/no-delete-var)：禁止删除变量。

- 4.2 [`no-label-var`](https://eslint.org/docs/rules/no-label-var)：禁用与变量同名的标签。

- 4.3 [`no-shadow`](https://eslint.org/docs/rules/no-shadow)：禁止再次声明在外层作用域已经声明过的变量，以下变量除外：`resolve`、`reject`、`done`、`cb`、`callback`、`next`。

- 4.4 [`no-shadow-restricted-names`](https://eslint.org/docs/rules/no-shadow-restricted-names)：禁止将标识符定义为受限的名字，如：`NaN`、`Infinity`、`undefined`、`eval`、`arguments` 等。

- 4.5 [`no-undef`](https://eslint.org/docs/rules/no-undef)：禁用未声明的变量。

- 4.6 [`no-undef-init`](https://eslint.org/docs/rules/no-undef-init)：禁止初始化变量值为 `undefined`。

- 4.7 [`no-undefined`](https://eslint.org/docs/rules/no-undefined)：禁止将 `undefined` 作为标识符。

- 4.8 [`no-unused-vars`]()：禁止出现未使用过的变量。如果要忽略 `catch` 语句中的错误，可以以 `ignore` 开头命名错误变量，如下：

  ```js
  try {
    // Do something
  } catch (ignoreError) {
    // `ignoreError` 可以不被使用，且 ESLint 不会报错
  }
  ```

- 4.9 [`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define)：禁止在变量定义之前使用它们，`function` 定义除外。

### Node.js 和 CommonJS 相关

- 5.1 [`handle-callback-err`](https://eslint.org/docs/rules/handle-callback-err)：强制回调函数中有容错处理，只检测参数为 `err` 或 `error` 的变量。

  ```js
  // 错误
  fs.readFile(path, (err, data) => {
    // 无容错处理
    console.log(data)
  })

  // 正确
  fs.readFile(path, (error, data) => {
    if (error) throw error
    console.log(data)
  })
  ```

- 5.2 [`no-buffer-constructor`](https://eslint.org/docs/rules/no-buffer-constructor)：禁用 `Buffer()` 构造函数

- 5.3 [`no-new-require`](https://eslint.org/docs/rules/no-new-require)：禁止调用 `require` 时使用 `new` 操作符。

- 5.4 [`no-path-concat`](https://eslint.org/docs/rules/no-new-require)：禁止对 `__dirname` 和 `__filename` 进行字符串连接。当程序运行平台的操作系统不一致时，会出现路径分隔符不同的情况，此时字符串拼接的路径可能是一个无效的路径，可以使用 `path.resolve()` 得到有效的完整路径。

### 代码风格相关

- 6.1 [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing)：禁止在中括号内出现多余的空格。

  ```js
  // 错误
  const arr1 = [ 'item1', 'item2' ]

  // 正确
  const arr2 = ['item1', 'item2']
  ```

- 6.2 [`block-spacing`](https://eslint.org/docs/rules/block-spacing)：强制在代码块的开括号后和闭括号前使用一个空格。

  ```js
  // 错误
  function foo () {return true}

  // 正确
  function bar () { return true }
  ```

- 6.3 [`brace-style`](https://eslint.org/docs/rules/brace-style)：强制大括号保持一致的风格。

  ```js
  // 正确
  if (x) {
    // Do something
  } else {
    // Do other
  }

  // 正确
  try { somethingRisky() } catch (err) { handleError(err) }
  ```

- 6.4 [`camelcase`](https://eslint.org/docs/rules/camelcase)：强制变量使用驼峰命名，常量（全部大写）除外。

- 6.5 [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)：强制使用尾随逗号。

- 6.6 [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)：强制在逗号后面使用空格。

- 6.7 [`comma-style`](https://eslint.org/docs/rules/comma-style)：强制逗号放在数组元素、对象属性或变量声明之后，且在同一行。

- 6.8 [`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)：禁止在计算属性中使用空格。

- 6.9 [`eol-last`](https://eslint.org/docs/rules/eol-last)：强制文件末尾保留一行空行。

- 6.10 [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)：禁止在函数标识符和其调用之间有空格。

- 6.11 [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)：强制在函数括号内使用一致的换行。

  ```js
  // 错误
  function foo (bar,
    baz
  ) {
    // Do something
  }

  // 正确
  function foo (bar, baz) {
    // Do something
  }

  // 正确
  function foo (
    bar,
    baz,
   ) {
    // Do something
  }
  ```

- 6.12 [`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)：禁止在箭头函数体之前出现换行。

- 6.13 [`indent`](https://eslint.org/docs/rules/indent)：强制使用两个空格的缩进。

- 6.14 [`key-spacing`](https://eslint.org/docs/rules/key-spacing)：强制在对象字面量的键和值之前使用一致的空格。键与分号之前没有空格；分号与值之间有一个空格。

- 6.15 [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing)：强制在关键字（例如 `if`、`switch` 等等）周围有空格。

- 6.16 [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)：强制类成员之间有空行。跳过对第一个和最后一个成员的检查。跳过对单行类成员之后的空行的检查。

- 6.17 [`max-len`](https://eslint.org/docs/rules/max-len)：强制每行最多 120 个字符。

- 6.18 [`max-lines`](https://eslint.org/docs/rules/max-lines)：强制每个文件的最大行数（去除空格和注释）不能超过 300 行。一个文件的行数太多会严重影响代码的可阅读性，如果出现这种情况，建议重构代码。

- 6.19 [`new-cap`](https://eslint.org/docs/rules/new-cap)：强制构造函数首字母大写。

- 6.20 [`new-parens`](https://eslint.org/docs/rules/new-parens)：强制调用无参构造函数时带括号。

- 6.21 [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor)：禁止使用 `Array` 构造函数。

  ```js
  // 错误
  const foo = Array(0, 1, 2)
  const bar = new Array(0, 1, 2)

  // 正确
  const foo = Array(3)
  const bar = new Array(3)
  ```

- 6.22 [`no-bitwise`](https://eslint.org/docs/rules/no-bitwise)：禁止按位运算。

- 6.23 [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators)：禁止混合使用不同的操作符。

- 6.24 [`no-mixed-spaces-and-tabs`](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)：禁止使用空格和 `tab` 混合缩进。

- 6.25 [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)：禁止连续赋值。

  ```js
  // 错误
  const a = b = 0

  // 正确
  const a = 0
  const b = a
  ```

- 6.26 [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)：强制最大连续空行数为 2。

- 6.27 [`no-new-object`](https://eslint.org/docs/rules/no-new-object)：禁止使用 `Object` 构造函数。

- 6.28 [`no-tabs`](https://eslint.org/docs/rules/no-tabs)：禁用 `tab`。

- 6.29 [no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)：禁止行尾空白。

- 6.30 [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary)：禁止可以表达为更简单结构的三元操作符。

  ```js
  // 错误
  const isYes = answer === 1 ? true : false

  // 正确
  const isYes = answer === 1
  ```

- 6.31 [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)：禁止属性前有空白。

- 6.32 [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)：禁止单行语句之前有换行。

  ```js
  // 错误
  if (foo)
    bar()
  else
    baz()

  // 正确
  if (foo) bar()
  else baz()
  ```

- 6.33 [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing)：强制花括号内有空格，除了 `{}`。

- 6.34 [`object-property-newline`](https://eslint.org/docs/rules/object-property-newline)：强制将对象的属性放在不同的行上，除非它们都在同一行。

  ```js
  // 错误
  const obj = {
      foo: 'foo', bar: 'bar',
      baz: 'baz',
  }

  // 正确
  const obj = { foo: 'foo', bar: 'bar', baz: 'baz' }

  // 正确
  const obj = {
    foo: 'foo', bar: 'bar', baz: 'baz',
  }

  // 正确
  const obj = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz',
  }
  ```

- 6.35 [`one-var`](https://eslint.org/docs/rules/one-var)：强制函数中定义了初始值的变量分开声明。

- 6.36 [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak)：强制操作符使用一致的换行符风格。

  ```js
  // 错误
  const foo = 'some str'
            + 'other str'
  const bar = condition ?
    returnSomeValue() :
    returnOtherValue()

  // 正确
  const foo = 'some str' +
              'other str'
  const bar = condition
    ? returnSomeValue()
    : returnOtherValue()
  ```

- 6.37 [`quotes`](https://eslint.org/docs/rules/quotes)：强制使用单引号。

- 6.38 [`semi`](https://eslint.org/docs/rules/semi)：禁止使用分号。

- 6.39 [`semi-spacing`](https://eslint.org/docs/rules/semi-spacing)：强制分号之后有空格。

  ```js
  // 错误
  for (i = 0 ; i < 10 ; i++) {}
  for (i = 0;i < 10;i++) {}

  // 正确
  for (i = 0; i < 10; i++) {}
  ```

- 6.40 [`semi-style`](https://eslint.org/docs/rules/semi-style)：强制分号出现在句子末尾。

- 6.41 [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)：强制语句块之前有空格。

- 6.42 [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren)：强制函数圆括号之前有一个空格。

- 6.43 [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens)：禁止圆括号内的空格。

- 6.44 [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops)：强制中缀操作符之间有空格。

- 6.45 [`space-unary-ops`](https://eslint.org/docs/rules/space-unary-ops)：强制单词类一元操作符（例如：`new`、`delete`、`typeof`、`void`、`yield`）与操作对象之间存在空格；禁止非单词类一元操作符（例如：`-`、`+`、`--`、`++`、`!`、`!!`）与操作对象之间存在空格。

- 6.46 [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)：强制在注释前有空白。

- 6.47 [`switch-colon-spacing`](https://eslint.org/docs/rules/switch-colon-spacing)：强制在 `switch` 的冒号左边无空格，右边有空格。

- 6.48 [`template-tag-spacing`](https://eslint.org/docs/rules/template-tag-spacing)：禁止在模板标记和它们的字面量之间有空格。

- 6.49 [`unicode-bom`](https://eslint.org/docs/rules/unicode-bom)：禁止使用 Unicode 字节顺序标记 (BOM)。

### ES6 相关

- 7.1 [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing)：强制箭头函数的箭头之前或之后有空格。

- 7.2 [`constructor-super`](https://eslint.org/docs/rules/constructor-super)：强制派生类的构造函数必须调用 `super()`。禁止非派生类的构造函数调用 `super()`。

  ```js
  // 错误
  class A {
    constructor () {
      super() // 非派生类调用 `super()`
      // Do something
    }
  }
  class B extends A {
    constructor () {
      // 派生类没有调用 `super()`
    }
  }

  // 正确
  class A {
    constructor () {
      // Do something
    }
  }
  class B extends A {
    constructor () {
      super()
      // Do something
    }
  }
  ```

- 7.3 [`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)：强制 `generator` 函数中 `*` 号周围有空格。

- 7.4 [`no-class-assign`](https://eslint.org/docs/rules/no-class-assign)：禁止修改类（`class`） 声明的变量。

- 7.5 [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)：禁止在可能与比较操作符相混淆的地方使用箭头函数，除非箭头函数体用括号括起来。

  ```js
  // 错误
  const x = a => 1 ? 2 : 3

  // 正确
  const y = a => (1 ? 2 : 3)
  ```

- 7.6 [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign)：禁止修改用 `const` 声明的变量。

- 7.7 [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)：禁止类成员中有重复的名称。

- 7.8 [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)：禁止重复导入（`import`）。

- 7.9 [`no-new-symbol`](https://eslint.org/docs/rules/no-new-symbol)：禁止使用 `new Symbol()`。

- 7.10 [`no-this-before-super`](https://eslint.org/docs/rules/no-this-before-super)：禁止在调用 `super()` 之前使用 `this` 或 `super`。

- 7.11 [`no-useless-computed-key`](https://eslint.org/docs/rules/no-useless-computed-key)：禁止在对象中使用不必要的计算属性。

  ```js
  // 错误
  const foo = { ['a']: 'b' }

  // 正确
  const bar = { a: 'b' }
  ```

- 7.12 [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)：禁用不必要的构造函数。

- 7.13 [`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename)：禁止在 `import`、`export` 和解构赋值时将引用重命名为相同的名字。

- 7.14 [`no-var`](https://eslint.org/docs/rules/no-var)：强制使用 `let` 或 `const` 声明变量，而不是 `var`。

- 7.15 [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand)：强制对象字面量的属性（非字面量属性）使用简写语法。

  ```js
  // 错误
  const obj1 = {
    a: a,
  }

  // 正确
  const obj2 = {
    a,
    'b': b,
  }
  ```

- 7.16 [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)：强制使用剩余参数（`...rest`）代替 `arguments`。

  ```js
  // 错误
  function foo () {
    console.log(arguments)
  }

  // 正确
  function bar (...rest) {
    console.log(rest)
  }
  ```

- 7.17 [`rest-spread-spacing`](https://eslint.org/docs/rules/rest-spread-spacing)：禁止剩余和扩展运算符（`...`）与其表达式之间有空格。

- 7.18 [`symbol-description`](https://eslint.org/docs/rules/symbol-description)：强制创建 `symbol` 时带有描述。

  ```js
  // 错误
  const foo = Symbol()

  // 正确
  const bar = Symbol('some description')
  ```

- 7.19 [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)：禁止模板字符串的花括号内出现空格。

  ```js
  // 错误
  const foo = `some ${ str }`

  // 正确
  const bar = `some ${str}`
  ```

- 7.20 [`yield-star-spacing`](https://eslint.org/docs/rules/yield-star-spacing)：强制在 `yield *` 表达式中的 `*` 周围使用一个空格。
