module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },

  env: {
    node: true,
    es6: true,
  },

  rules: {
    // 强制 `for` 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': 'error',
    // 强制在 `getter` 属性中出现一个 `return` 语句，并禁止隐式返回
    'getter-return': ['error', { allowImplicit: false }],
    // 警告在循环中出现 `await`
    'no-await-in-loop': 'warn',
    // 禁止与 `-0` 进行比较
    'no-compare-neg-zero': 'error',
    // 禁止在条件语句中出现赋值操作符，除非用括号括起来
    'no-cond-assign': ['error', 'except-parens'],
    // 禁止在条件中使用常量表达式
    'no-constant-condition': ['error', { checkLoops: true }],
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'error',
    // 禁用 `debugger`
    'no-debugger': 'error',
    // 禁止在 `function` 定义中出现重复的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': 'error',
    // 禁止重复 `case` 标签
    'no-duplicate-case': 'error',
    // 禁止空块语句，除了 `catch` 子句
    'no-empty': ['error', { allowEmptyCatch: true }],
    // 禁止在正则表达式中出现空字符集
    'no-empty-character-class': 'error',
    // 禁止对 `catch` 子句中的异常重新赋值
    'no-ex-assign': 'error',
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',
    // 禁止在函数周围出现不必要的括号
    'no-extra-parens': ['error', 'functions'],
    // 禁用不必要的分号
    'no-extra-semi': 'error',
    // 禁止对 `function` 声明重新赋值
    'no-func-assign': 'error',
    // 禁止 `function` 声明出现在嵌套的语句块中
    'no-inner-declarations': ['error', 'functions'],
    // 禁止在 `RegExp` 构造函数中出现无效的正则表达式
    'no-invalid-regexp': 'error',
    // 禁止使用不规则的空白
    'no-irregular-whitespace': 'error',
    // 禁止将全局对象当作函数进行调用
    'no-obj-calls': 'error',
    // 禁止直接使用 `Object.prototypes` 的内置属性
    'no-prototype-builtins': 'error',
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',
    // 禁用稀疏数组
    'no-sparse-arrays': 'error',
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'error',
    // 禁止使用令人困惑的多行表达式
    'no-unexpected-multiline': 'error',
    // 禁止在 `return`、`throw`、`continue` 和 `break` 语句后出现永远不会执行的代码
    'no-unreachable': 'error',
    // 禁止在 `finally` 语句块中出现控制流语句
    'no-unsafe-finally': 'error',
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 'error',
    // 强制使用 `isNaN` 判断 `NaN`
    'use-isnan': 'error',
    // 强制 `typeof` 表达式与有效的字符串进行比较
    'valid-typeof': 'error',

    // 强制有 `setter` 时，必须出现 `getter`
    'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: false }],
    // 强制数组方法的回调函数中有 `return` 语句，且禁止隐式返回
    'array-callback-return': ['error', { allowImplicit: false }],
    // 强制使用一直的大括号使用约定，单行时允许隐藏大括号，多行时必须使用大括号
    curly: ['error', 'multi-line'],
    // 在使用属性时，如果属性要换行，强制在点号之前换行
    'dot-location': ['error', 'property'],
    // 在相等比较时，除了比较 `null` 外，其余的比较都用 `===` 和 `!==` 进行比较
    eqeqeq: ['error', 'always', { 'null': 'ignore' }],
    // 禁用 `caller` 或 `callee`
    'no-caller': 'error',
    // 禁止在 `case` 或 `default` 子句中出现词法声明（`let`、`const`、`function` 和 `class`）
    'no-case-declarations': 'error',
    // 禁止使用空解构模式
    'no-empty-pattern': 'error',
    // 禁用 `eval()`
    'no-eval': 'error',
    // 禁止扩展原生对象
    'no-extend-native': 'error',
    // 禁止不必要的函数绑定
    'no-extra-bind': 'error',
    // 禁用不必要的标签
    'no-extra-label': 'error',
    // 禁止 `case` 语句落空
    'no-fallthrough': 'error',
    // 禁止小数前面或后面省略零
    'no-floating-decimal': 'error',
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',
    // 禁用隐式的 `eval()`
    'no-implied-eval': 'error',
    // 禁用迭代器
    'no-iterator': 'error',
    // 禁止除了循环或 `switch` 之外使用标签
    'no-labels': ['error', { allowLoop: true, allowSwitch: true }],
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',
    // 禁止循环中存在 `function` 定义
    'no-loop-func': 'error',
    // 禁止不是用来作为缩进的多个空格
    'no-multi-spaces': 'error',
    // 禁止多行字符串
    'no-multi-str': 'error',
    // 禁止使用 `new` 关键字调用构造函数，但不将结果赋值给一个变量
    'no-new': 'error',
    // 禁用 `Function` 构造函数
    'no-new-func': 'error',
    // 禁止对 `String`、`Number` 和 `Boolean` 使用 `new`
    'no-new-wrappers': 'error',
    // 禁用八进制字面量
    'no-octal': 'error',
    // 禁止在字符串字面量中使用八进制转义序列
    'no-octal-escape': 'error',
    // 禁用 `__proto__`
    'no-proto': 'error',
    // 禁止多次声明同一变量
    'no-redeclare': 'error',
    // 禁止在返回语句中出现赋值语句，除非使用括号把它们括起来
    'no-return-assign': ['error', 'except-parens'],
    // 禁用不必要的 `return await`
    'no-return-await': 'error',
    // 禁止自身赋值
    'no-self-assign': ['error', { props: true }],
    // 禁止自身比较
    'no-self-compare': 'error',
    // 禁止使用逗号操作符，除了 `for` 循环或表达式序列被明确包裹在括号内
    'no-sequences': 'error',
    // 禁止抛出异常字面量
    'no-throw-literal': 'error',
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',
    // 禁止某些情况下未使用过的表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
    // 禁用未使用过的标签
    'no-unused-labels': 'error',
    // 禁用不必要的 `.call()` 和 `.apply()`
    'no-useless-call': 'error',
    // 禁止没有必要的字符拼接
    'no-useless-concat': 'error',
    // 禁用不必要的转义
    'no-useless-escape': 'error',
    // 禁止多余的 `return` 语句
    'no-useless-return': 'error',
    // 禁止使用 `void` 操作符
    'no-void': 'error',
    // 禁用 `with` 语句
    'no-with': 'error',
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': 'error',
    // 需要把立即执行的函数包裹起来
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    // 禁止 Yoda 条件
    yoda: ['error', 'never'],

    // 禁止删除变量
    'no-delete-var': 'error',
    // 禁用与变量同名的标签
    'no-label-var': 'error',
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 'error',
    // 禁用未声明的变量
    'no-undef': 'error',
    // 禁止初始化变量值为 `undefined`
    'no-undef-init': 'error',
    // 禁止将 `undefined` 作为变量
    'no-undefined': 'error',
    // 禁止未使用过的变量
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^ignore',
    }],
    // 禁止定义前使用
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: false,
    }],

    // 强制回调错误处理
    'handle-callback-err': ['error', '^(err|error)$'],
    // 禁用 `Buffer()` 构造函数
    'no-buffer-constructor': 'error',
    // 禁止使用 `new require()`
    'no-new-require': 'error',
    // 当使用 `__dirname` 和 `__filename` 时不允许字符串拼接
    'no-path-concat': 'error',

    // 强制数组括号使用一直的换行符，如果一个括号有换行符，另一个也必须有
    'array-bracket-newline': ['error', 'consistent'],
    // 禁止在数组括号内使用空格
    'array-bracket-spacing': ['error', 'never', {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    // 强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // 强制使用小骆驼形式命名变量，不检查属性
    camelcase: ['error', { properties: 'never' }],
    // 强制使用拖尾逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 强制在逗号后面使用空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 强制将逗号放置在当前行的末尾
    'comma-style': ['error', 'last'],
    // 禁止在计算属性的方括号中使用空格
    'computed-property-spacing': ['error', 'never'],
    // 强制文件末尾保留一行空行
    'eol-last': ['error', 'always'],
    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': ['error', 'consistent'],
    // 禁止在箭头函数体之前出现换行
    'implicit-arrow-linebreak': ['error', 'beside'],
    // 强制使用两个空格的缩进
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
    }],
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 强制关键字周围空格都有一个空格
    'keyword-spacing': ['error', { before: true, after: true }],
    // 强制使用 Unix 换行符
    'linebreak-style': ['error', 'unix'],
    // 强制在类成员之间出现空行，跳过对单行类成员的检查
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // 强制代码一行的最大长度为 120 个字符
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: false,
      ignoreRegExpLiterals: true,
    }],
    // 强制文件的最大行数为 500 行
    'max-lines': ['error', {
      max: 500,
      skipBlankLines: true,
      skipComments: true,
    }],
    // 强制构造函数首字母大写
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    // 强制调用无参构造函数时带括号
    'new-parens': 'error',
    // 禁用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁用按位运算符
    'no-bitwise': 'error',
    // 禁止混合使用不同的操作符
    'no-mixed-operators': ['error', {
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    }],
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 禁止出现多行空行
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    // 禁止使用 Object 构造函数
    'no-new-object': 'error',
    // 禁用 tab
    'no-tabs': 'error',
    // 禁止行尾空白
    'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
    // 禁止可以表达为更简单结构的三元操作符
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 强制单个语句的位置
    'nonblock-statement-body-position': ['error', 'beside'],
    // 强制在花括号中有空格
    'object-curly-spacing': ['error', 'always'],
    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    // 强制函数中的变量在分开声明
    'one-var': ['error', { initialized: 'never' }],
    // 强制操作符使用一致的换行符风格
    'operator-linebreak': ['error', 'after', {
      overrides: { '?': 'before', ':': 'before' },
    }],
    // 尽可能使用单引号
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    // 禁止使用分号代替 ASI（自动分号插入）
    semi: ['error', 'never'],
    // 强制分号后有空格
    'semi-spacing': ['error', { before: false, after: true }],
    // 强制语句块之前有空格
    'space-before-blocks': ['error', 'always'],
    // 强制函数圆括号之前有一个空格
    'space-before-function-paren': ['error', 'always'],
    // 禁止圆括号内的空格
    'space-in-parens': ['error', 'never'],
    // 强制操作符周围有空格
    'space-infix-ops': 'error',
    // 强制单词类一元操作符周围有空格，非单词类一元操作符周围无空格
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    // 强制在注释前有空白
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['*package', '!', '/', ',', '='],
      },
      block: {
        balanced: true,
        markers: ['*package', '!', ',', ':', '::', 'flow-include'],
        exceptions: ['*'],
      },
    }],
    // 强制在 switch 的冒号右边有空格
    'switch-colon-spacing': ['error', { before: false, after: true }],
    // 禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': ['error', 'never'],
    // 禁止使用 Unicode 字节顺序标记 (BOM)
    'unicode-bom': ['error', 'never'],

    // 强制箭头函数的箭头之前和之后都要有空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 验证构造函数中 super() 的调用是否正确
    'constructor-super': 'error',
    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': ['error', 'both'],
    // 禁止修改类声明的变量
    'no-class-assign': 'error',
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数，除非用括号括起来
    'no-confusing-arrow': ['error', { allowParens: true }],
    // 禁止修改 `const` 声明的变量
    'no-const-assign': 'error',
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 'error',
    // 禁止重复模块导入
    'no-duplicate-imports': 'error',
    // 禁止 Symbol 和 new 一起使用
    'no-new-symbol': 'error',
    // 在构造函数中，禁止在调用 `super()` 之前使用 `this` 或 `super`
    'no-this-before-super': 'error',
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁用不必要的构造函数
    'no-useless-constructor': 'error',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 强制对象字面量简写语法
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    // 强制使用剩余参数代替 arguments
    'prefer-rest-params': 'error',
    // 禁止剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': ['error', 'never'],
    // 要求 symbol 描述
    'symbol-description': 'error',
    // 禁止模板字符串中有空格
    'template-curly-spacing': ['error', 'never'],
    // 强制在 `yield *` 表达式中 `*` 周围使用空格
    'yield-star-spacing': ['error', 'both'],
  },
}
