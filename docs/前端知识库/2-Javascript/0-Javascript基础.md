# Javascript基础

## 一、数据类型

### 8种数据类型

最新的 ECMAScript 标准定义了 8 种数据类型：

1. 七种基本数据类型：

* **布尔值（Boolean）** ，有 2 个值分别是：true 和 false.
* **null** ，一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
* **undefined** ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
* **数字（Number）** ，整数或浮点数，例如： 42 或者 3.14159。
* **字符串（String）** ，字符串是一串表示文本值的字符序列，例如："Howdy" 。
* **代表（Symbol）** ( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
* **任意精度的整数 (BigInt)** ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。

2. 以及 **对象（Object）** ，即引用类型。包括 Object Array、Function 等。

### 区别

其中 Symbol 和 BigInt 是ES6 中新增的数据类型：

* Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
* BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

这些数据可以分为原始数据类型和引用数据类型：

* 栈：原始数据类型（Undefined、Null、Boolean、Number、String）
* 堆：引用数据类型（对象、数组和函数）

两种类型的区别在于**存储位置的不同：**

* 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
* 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中：

* 在数据结构中，栈中数据的存取方式为先进后出。
* 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

在操作系统中，内存被分为栈区和堆区：

* 栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
* 堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

## 二、JS判断数据类型的方法

### （1）typeof

```javascript
console.log(typeof2);// number
console.log(typeoftrue);// boolean
console.log(typeof'str');// string
console.log(typeof []);// object  
console.log(typeoffunction(){});// function
console.log(typeof{});// object
console.log(typeofundefined);// undefined
console.log(typeofnull);// object
```

其中数组、对象、null都会被判断为object，其他判断都正确。

### （2）instanceof

`instanceof`可以正确判断对象的类型， **其内部运行机制是判断在其原型链中能否找到该类型的原型** 。

```javascript
console.log(2instanceofNumber);// false
console.log(trueinstanceofBoolean);// false 
console.log('str'instanceofString);// false 
console.log([] instanceofArray);// true
console.log(function(){}instanceofFunction);// true
console.log({}instanceofObject);// true
```

可以看到，`instanceof` **只能正确判断引用数据类型** ，而不能判断基本数据类型。`instanceof` 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

### （3） constructor

```javascript
console.log((2).constructor === Number);// true
console.log((true).constructor === Boolean);// true
console.log(('str').constructor === String);// true
console.log(([]).constructor === Array);// true
console.log((function(){}).constructor === Function);// true
console.log(({}).constructor === Object);// true
```

`constructor`有两个作用，一是判断数据的类型，二是对象实例通过 `constrcutor` 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，`constructor`就不能用来判断数据类型了：

```javascript
functionFn(){};
Fn.prototype =newArray();
var f =newFn();
console.log(f.constructor===Fn);// false
console.log(f.constructor===Array);// true
```

### （4）Object.prototype.toString.call()

`Object.prototype.toString.call()` 使用 Object 对象的原型方法 toString 来判断数据类型：

```javascript
var a =Object.prototype.toString;
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));
```

同样是检测对象obj调用toString方法，obj.toString()的结果和 `Object.prototype.toString.call(obj)<span> </span>`的结果不一样，这是为什么？

这是因为toString是Object的原型方法，而 `Array`、`function`等 **类型作为Object的实例，都重写了toString方法** 。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的 `toString`方法（`function`类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object原型上的toString方法。

## 三、判断数组的方式有哪些

* 通过Object.prototype.toString.call()做判断

```javascript
Object.prototype.toString.call(obj).slice(8,-1) ==='Array';
```

* 通过原型链做判断

```javascript
obj.__proto__ ===Array.prototype;
```

* 通过ES6的Array.isArray()做判断

```javascript
Array.isArrray(obj);
```

* 通过instanceof做判断

```javascript
obj instanceofArray
```

* 通过 Array.prototype.isPrototypeOf

```javascript
Array.prototype.isPrototypeOf(obj)
```

## 四、null和undefined区别

* 首先 `Undefined` 和 `Null` 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 `undefined` 和 `null`。
* `undefined` 代表的含义是 **未定义** ，`null<span> </span>`代表的含义是 **空对象** 。一般变量声明了但还没有定义的时候会返回 `<span> </span>undefined`，`null`主要用于赋值给一些可能会返回对象的变量，作为初始化。
* `undefined` 在 JavaScript 中不是一个保留字，这意味着可以使用 `<span> </span>undefined` 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 `undefined` 值的判断。我们可以通过一些方法获得安全的 `undefined` 值，比如说 `void 0`。
* 当对这两种类型使用 `typeof<span> </span>`进行判断时，`Null` 类型化会返回 `object`，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 `<span> </span>true`，使用三个等号时会返回 `<span> </span>false`。

## 五、typeof null 的结果是什么

`typeof null<span> </span>`的结果是Object。

在 JavaScript 第一个版本中，所有值都存储在 32 位的单元中，每个单元包含一个小的 **类型标签(1-3 bits)** 以及当前要存储值的真实数据。类型标签存储在每个单元的低位中，共有五种数据类型：

```shell
000:object-当前存储的数据指向一个对象。
1:int-当前存储的数据是一个31位的有符号整数。
010:double-当前存储的数据指向一个双精度的浮点数。
100:string-当前存储的数据指向一个字符串。
110:boolean-当前存储的数据是布尔值。
```

如果最低位是 1，则类型标签标志位的长度只有一位；如果最低位是 0，则类型标签标志位的长度占三位，为存储其他四种数据类型提供了额外两个 bit 的长度。

有两种特殊数据类型：

* `undefined`的值是 (-2)30(一个超出整数范围的数字)；
* `null` 的值是机器码 NULL 指针(null 指针的值全是 0)

那也就是说null的类型标签也是000，和Object的类型标签一样，所以会被判定为Object。

## 六、intanceof操作符的实现原理及实现

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

```javascript
functionmyInstanceof(left,right){
// 获取对象的原型
letproto=Object.getPrototypeOf(left)
// 获取构造函数的 prototype 对象
letprototype=right.prototype;

// 判断构造函数的 prototype 对象是否在对象的原型链上
while (true) {
if (!proto) returnfalse;
if (proto===prototype) returntrue;
// 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
proto=Object.getPrototypeOf(proto);
}
}
```

## 七、JavaScript 精度问题

案例

* 0.1 + 0.2 = 0.30000000000000004
* 0.07*100 = 7.000000000000001

在开发过程中遇到类似这样的问题：

```javascript
let n1 =0.1, n2 =0.2
console.log(n1 + n2)  // 0.30000000000000004
```

这里得到的不是想要的结果，要想等于0.3，就要把它进行转化：

```javascript
(n1 + n2).toFixed(2) // 注意，toFixed为四舍五入
```

`toFixed(num)` 方法可把 Number 四舍五入为指定小数位数的数字。那为什么会出现这样的结果呢？

计算机是通过二进制的方式存储数据的，所以计算机计算0.1+0.2的时候，实际上是计算的两个数的二进制的和。0.1的二进制是 `0.0001100110011001100...`（1100循环），0.2的二进制是：`0.00110011001100...`（1100循环），这两个数的二进制都是无限循环的数。那JavaScript是如何处理无限循环的二进制小数呢？

一般我们认为数字包括整数和小数，但是在 JavaScript 中只有一种数字类型：Number，它的实现遵循IEEE 754标准，使用64位固定长度来表示，也就是标准的double双精度浮点数。在二进制科学表示法中，双精度浮点数的小数部分最多只能保留52位，再加上前面的1，其实就是保留53位有效数字，剩余的需要舍去，遵从“0舍1入”的原则。

根据这个原则，0.1和0.2的二进制数相加，再转化为十进制数就是：`0.30000000000000004`。

下面看一下**双精度数是如何保存**的：

FAILED

FAILED

* 第一部分（蓝色）：用来存储符号位（sign），用来区分正负数，0表示正数，占用1位
* 第二部分（绿色）：用来存储指数（exponent），占用11位
* 第三部分（红色）：用来存储小数（fraction），占用52位

对于0.1，它的二进制为：

```javascript
0.0001100110011001100110011001100110011001100110011001100110011...
```

转为科学计数法（科学计数法的结果就是浮点数）：

```javascript
1.1001100110011001100110011001100110011001100110011001*2^-4
```

可以看出0.1的符号位为0，指数位为-4，小数位为：

```javascript
1001100110011001100110011001100110011001100110011001
```

那么问题又来了，**指数位是负数，该如何保存**呢？

IEEE标准规定了一个偏移量，对于指数部分，每次都加这个偏移量进行保存，这样即使指数是负数，那么加上这个偏移量也就是正数了。由于JavaScript的数字是双精度数，这里就以双精度数为例，它的指数部分为11位，能表示的范围就是0~2047，IEEE固定 **双精度数的偏移量为1023** 。

* 当指数位不全是0也不全是1时(规格化的数值)，IEEE规定，阶码计算公式为 e-Bias。 此时e最小值是1，则1-1023= -1022，e最大值是2046，则2046-1023=1023，可以看到，这种情况下取值范围是 `-1022~1013`。
* 当指数位全部是0的时候(非规格化的数值)，IEEE规定，阶码的计算公式为1-Bias，即1-1023= -1022。
* 当指数位全部是1的时候(特殊值)，IEEE规定这个浮点数可用来表示3个特殊值，分别是正无穷，负无穷，NaN。 具体的，小数位不为0的时候表示NaN；小数位为0时，当符号位s=0时表示正无穷，s=1时候表示负无穷。

对于上面的0.1的指数位为-4，-4+1023 = 1019 转化为二进制就是：`1111111011`.

所以，0.1表示为：

```javascript
011111110111001100110011001100110011001100110011001100110011001
```

说了这么多，是时候该最开始的问题了，如何实现0.1+0.2=0.3呢？

对于这个问题，一个直接的解决方法就是设置一个误差范围，通常称为“机器精度”。对JavaScript来说，这个值通常为2-52，在ES6中，提供了 `Number.EPSILON`属性，而它的值就是2-52，只要判断 `0.1+0.2-0.3`是否小于 `Number.EPSILON`，如果小于，就可以判断为0.1+0.2 ===0.3

```javascript
functionnumberepsilon(arg1,arg2){
returnMath.abs(arg1-arg2) <Number.EPSILON;
}
console.log(numberepsilon(0.1+0.2,0.3));// true
```
