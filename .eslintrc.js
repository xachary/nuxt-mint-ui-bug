// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'ecmaFeatures': {
    // lambda表达式
    'arrowFunctions': true,
    // 解构赋值
    'destructuring': true,
    // class
    'classes': true,
    // http://es6.ruanyifeng.com/#docs/function#函数参数的默认值
    'defaultParams': true,
    // 块级作用域，允许使用let const
    'blockBindings': true,
    // 允许使用模块，模块内默认严格模式
    'modules': true,
    // 允许字面量定义对象时，用表达式做属性名
    // http://es6.ruanyifeng.com/#docs/object#属性名表达式
    'objectLiteralComputedProperties': true,
    // 允许对象字面量方法名简写
    /*var o = {
     method() {
     return "Hello!";
     }
     };

     等同于

     var o = {
     method: function() {
     return "Hello!";
     }
     };
     */
    'objectLiteralShorthandMethods': true,
    /*
     对象字面量属性名简写
     var foo = 'bar';
     var baz = {foo};
     baz // {foo: "bar"}

     // 等同于
     var baz = {foo: foo};
     */
    'objectLiteralShorthandProperties': true,
    // http://es6.ruanyifeng.com/#docs/function#rest参数
    'restParams': true,
    // http://es6.ruanyifeng.com/#docs/function#扩展运算符
    'spread': true,
    // http://es6.ruanyifeng.com/#docs/iterator#for---of循环
    'forOf': true,
    // http://es6.ruanyifeng.com/#docs/generator
    'generators': true,
    // http://es6.ruanyifeng.com/#docs/string#模板字符串
    'templateStrings': true,
    'superInFunctions': true,
    // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符
    'experimentalObjectRestSpread': true
  },
  // add your custom rules here
  'rules': {
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 0,
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    'semi': 'off',
    // 禁用行尾空格
    'no-trailing-spaces': 0,
    // 不允许多个空行
    'no-multiple-empty-lines': 0,
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': 0,
    // 禁止出现未使用过的变量
    'no-unused-vars': 0,
    // 要求或禁止块内填充
    'padded-blocks': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 禁用不必要的嵌套块
    'no-lone-blocks': 0,
    // 禁止使用 var 多次声明同一变量
    'no-redeclare': 1,
    // 缩进
    'indent': 0,
    'space-before-function-paren': 0,
    'no-undef': 0,
    'no-template-curly-in-string': 0,
    'key-spacing': 0
  }
}
