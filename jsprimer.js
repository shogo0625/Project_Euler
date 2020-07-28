'use strict';
{
  // 文字列のN文字目を取得
  console.log('hello'[0]); // => h
  console.log('hello, world'.charAt(0)); // => h
  // hello 文字列を置き換え
  console.log('hello, world'.replace('hello', 'goodbye')); // => "goodbye, world"
  // 大文字・小文字(toDownCase)
  console.log('hello'.toUpperCase());
  // 数値から文字列へ変換
  let num = 333;
  console.log(typeof num.toString()); // => string
  console.log(String(num)); // => "333"
  // 文字列から数値へ変換・取得
  console.log(parseInt("30階")); // => 30
  console.log(parseFloat("53.4px")); // => 53.4
  console.log(typeof Number("333")); // => number

  // 普通のswitch文
  const version = "ES6";
  switch (version) {
    case "ES5":
      console.log("ECMAScript 5");
      break;
    case "ES6":
      console.log("ECMAScript 2015");
      break;
    case "ES7":
      console.log("ECMAScript 2016");
      break;
    default:
      console.log("しらないバージョンです");
      break;
  }
  // break ではなく関数のreturnとしてswitch文を抜ける
  function getECMAScriptName(version) {
    switch (version) {
      case "ES5":
        return "ECMAScript 5";
      case "ES6":
        return "ECMAScript 2015";
      case "ES7":
        return "ECMAScript 2016";
      default:
        return "しらないバージョンです";
    }
  }
  // 関数を実行して`return`された値を得る
  getECMAScriptName("ES6"); // => "ECMAScript 2015"

  // 引数の`num`が偶数ならtrueを返す
  function isEven(num) {
    return num % 2 === 0;
  }
  // 引数の`numbers`に偶数が含まれているならtrueを返す
  function isEvenIncluded(numbers) {
    let isEvenIncluded = false;
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      if (isEven(num)) {
        isEvenIncluded = true;
        break;
      }
    }
    return isEvenIncluded;
  }
  const array = [1, 5, 10, 15, 20];
  console.log(isEvenIncluded(array)); // => true
  // someメソッド　配列の各要素をテストする処理をコールバック関数として受け取る
  console.log(array.some(isEven)); // => true

  // 次の繰り返しにスキップ　continue

  // filterメソッド　配列から特定の値だけを集めた新しい配列を作る
  // 配列の各要素をテストする処理をコールバック関数として渡す
  console.log(array.filter(isEven)); // => [10, 20]

  // オブジェクトの値を列挙する繰り返し
  const obj = {
    "a": 1,
    "b": 2,
    "c": 3
  };
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    console.log(`key:${key}, value:${value}`);
  });
  // "key:a, value:1"
  // "key:b, value:2"
  // "key:c, value:3"
  console.log(Object.keys(obj)); // => ["one", "two", "three"]
  // `Object.values`は値を列挙した配列を返す
  console.log(Object.values(obj)); // => [1, 2, 3]
  // `Object.entries`は[キー, 値]の配列を返す
  console.log(Object.entries(obj)); // => [["one", 1], ["two", 2], ["three", 3]]

  // assignメソッド　オブジェクトのマージ Object.assign({}, object....)

  // プロパティの存在確認するin演算子とhasOwnPropertyメソッド
  // `obj`というオブジェクト自体に`toString`メソッドが定義されているわけではない
  console.log(obj.hasOwnProperty("toString")); // => false
  // `in`演算子は指定されたプロパティ名が見つかるまで親をたどるため、`Object.prototype`まで見にいく
  console.log("toString" in obj); // => true

  // 文字列を1文字ずつ表示
  const str = "𠮷野家";
  for (const value of str) {
    console.log(value);
  }
  // "𠮷"
  // "野"
  // "家"

  // 分割代入　配列のインデックスの値を定義し直す
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;
  console.log(first);  // => "one"
  console.log(second); // => "two"
  console.log(third);  // => "three"

  // findIndex find 配列の要素を取得する
  // colorプロパティを持つオブジェクトの配列
  const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
  ];
  // `color`プロパティが"blue"のオブジェクトのインデックスを取得
  const indexOfBlue = colors.findIndex((obj) => {
    return obj.color === "blue";
  });
  console.log(indexOfBlue); // => 2
  console.log(colors[indexOfBlue]); // => { "color": "blue" }

  // `color`プロパティが"blue"のオブジェクトを取得
  const blueColor = colors.find((obj) => {
    return obj.color === "blue";
  });
  console.log(blueColor); // => { "color": "blue" }

  // `color`プロパティが"blue"のオブジェクトがあるかどうか真偽値
  const isIncludedBlueColor = colors.some((obj) => {
    return obj.color === "blue";
  });
  console.log(isIncludedBlueColor); // => true
}
// sliceメソッド　配列の要素を取り出し
{
  const array = ["A", "B", "C", "D", "E"];
  // インデックス1から4の範囲を取り出す
  console.log(array.slice(1, 4)); // => ["B", "C", "D"]
  // 第二引数を省略した場合は、第一引数から末尾の要素までを取り出す
  console.log(array.slice(1)); // => ["B", "C", "D", "E"]
  // マイナスを指定すると後ろからの数えた位置となる
  console.log(array.slice(-1)); // => ["E"]
}
// includes メソッド　配列に含まれているか
{
  const array = ["Java", "JavaScript", "Ruby"];
  // `includes`は含まれているなら`true`を返す
  if (array.includes("JavaScript")) {
    console.log("配列にJavaScriptが含まれている");
  }
}
// 配列の追加と削除 push と pop　unshift と shift
{
  const array = ["A", "B", "C"];
  array.push("D"); // "D"を末尾に追加
  console.log(array); // => ["A", "B", "C", "D"]
  const poppedItem = array.pop(); // 最末尾の要素を削除し、その要素を返す
  console.log(poppedItem); // => "D"
  console.log(array); // => ["A", "B", "C"]

  array.unshift("S"); // "S"を先頭に追加
  console.log(array); // => ["S", "A", "B", "C"]
  const shiftedItem = array.shift(); // 先頭の要素を削除
  console.log(shiftedItem); // => "S"
  console.log(array); // => ["A", "B", "C"]
  // spliceメソッド　array.splice(インデックス, 削除する要素数, ...追加する要素);
  // 1番目から1つの要素("B")を削除
  array.splice(1, 1) // => ["A", "C"]
}
// 配列の結合・展開
{
  const array = ["A", "B", "C"];
  // Spread構文を使った場合
  const newArray = ["X", "Y", "Z", ...array];
  // concatメソッドの場合
  const newArrayConcat = ["X", "Y", "Z"].concat(array);
  console.log(newArray); // => ["X", "Y", "Z", "A", "B", "C"]
  console.log(newArrayConcat); // => ["X", "Y", "Z", "A", "B", "C"]
  // spread構文の方は途中にも入れれる
  const brandNewArray = ["X", ...array, "Z"];
  console.log(brandNewArray); // => ["X", "A", "B", "C", "Z"]
}
// 配列をフラット化
{
  const array = [[["A"], "B"], "C"];
  console.log(array.flat(Infinity)); // =>["A", "B", "C"]
}
// 配列のコピーを作成する　引数無しで concat or slice
{
  const array = ["A", "B", "C"];
  const copiedArray = array.slice(); // concatでも同じ
  console.log(copiedArray); // => ["A", "B", "C"]
}
// 配列の繰り返し処理　forEach map filter (reduce ブロックの後に 0 )
// コールバック関数を渡す　引数には、(累積値 reduceのみ), 要素, インデックス, 配列そのもの が渡される
{
  // forEachメソッド
  const array = [1, 2, 3];
  array.forEach((currentValue, index, array) => {
    console.log(currentValue, index, array);
  });
  // 1, 0, [1, 2, 3]
  // 2, 1, [1, 2, 3]
  // 3, 2, [1, 2, 3]
  // mapメソッド　各要素に処理を行い、新しい配列を作成する
  const mapArray = array.map((currentValue, index, array) => {
    return currentValue * 10;
  });
  console.log(mapArray); // => [10, 20, 30]
  // filterメソッド　各要素で真偽値を評価し、trueの要素だけで新しい配列を作成する
  const filterArray = array.filter((currentValue, index, array) => {
    return currentValue % 2 === 1;
  });
  console.log(filterArray); // => [1, 3]
  // reduceメソッド　累積値（アキュムレータ）と配列の要素を順番にコールバック関数へ渡し、1つの累積値を返す
  const array = [1, 2, 3];
  // すべての要素を加算した値を返す
  // accumulatorの初期値は`0`
  const totalValue = array.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
  }, 0);
  // 0 + 1 + 2 + 3という式の結果が返り値になる
  console.log(totalValue); // => 6
}
// 文字列の置換
{
  const str = "文字列";
  // "文字"を""（空文字列）へ置換することで"削除"を表現
  const newStr = str.replace("文字", "");
  console.log(newStr); // => "列"
  // `g`フラグあり正規表現の場合は、繰り返し置換を行う
  console.log(str.replace(/にわ/g, "niwa")); // => "niwaにはniwaniwaとりがいる"
  // 正規表現にカッコ入れてキャプチャした文字列を返す関数
  function toDateJa(dateString) {
    // パターンにマッチしたときのみ、コールバック関数で置換処理が行われる
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/, (all, year, month, day) => {
      // `all`には、マッチした文字列全体が入っているが今回は利用しない
      // `all`が次の返す値で置換されるイメージ
      return `${year}年${month}月${day}日`;
    });
  }
  // マッチしない文字列の場合は、そのままの文字列が返る
  console.log(toDateJa("本日ハ晴天ナリ")); // => "本日ハ晴天ナリ"
  // マッチした場合は置換した結果を返す
  console.log(toDateJa("今日は2017-03-01です")); // => "今日は2017年03月01日です"
}
// スコープチェーン　参照の順番
{
  // OUTERブロックスコープ
  const x = "outer";
  {
    // INNERブロックスコープ
    const x = "inner";
    // 現在のスコープ(INNERブロックスコープ)にある`x`を参照する
    console.log(x); // => "inner"
  }
  // 現在のスコープ(OUTERブロックスコープ)にある`x`を参照する
  console.log(x); // => "outer"
}
// コールバック関数の中でthisを使う場合、一度thisを別の変数に代入してから
{
  "use strict";
  const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
      // `that`は`prefixArray`メソッド呼び出しにおける`this`となる
      // つまり`that`は`Prefixer`オブジェクトを参照する
      const that = this;
      return strings.map(function (str) {
        // `this`ではなく`that`を参照する
        return that.prefix + "-" + str;
      });
    }
  };
  // `prefixArray`メソッドにおける`this`は`Prefixer`
  const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
  console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]
}
// 第2引数に渡すことも可能
{
  "use strict";
  const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
      // `Array#map`メソッドは第二引数に`this`となる値を渡せる
      return strings.map(function (str) {
        // `this`が第二引数の値と同じになる
        // つまり`prefixArray`メソッドと同じ`this`となる
        return this.prefix + "-" + str;
      }, this);
    }
  };
  // `prefixArray`メソッドにおける`this`は`Prefixer`
  const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
  console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]
}
// アロー関数を使うことで暗黙的なthisを受け取らない
{
  "use strict";
  const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
      return strings.map((str) => {
        // Arrow Function自体は`this`を持たない
        // `this`は外側の`prefixArray`関数が持つ`this`を参照する
        // そのため`this.prefix`は"pre"となる
        return this.prefix + "-" + str;
      });
    }
  };
  // このとき、`prefixArray`のベースオブジェクトは`Prefixer`となる
  // つまり、`prefixArray`メソッド内の`this`は`Prefixer`を参照する
  const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
  console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]
}
// クラスでは、プロパティの参照（getter）、プロパティへの代入（setter）時に呼び出される特殊なメソッドを定義できる
//プロパティのように振る舞うためアクセッサプロパティと呼ばれます。
{
  class NumberWrapper {
    constructor(value) {
      this._value = value;
    }
    // `_value`プロパティの値を返すgetter
    get value() {
      console.log("getter");
      return this._value;
    }
    // `_value`プロパティに値を代入するsetter
    set value(newValue) {
      console.log("setter");
      this._value = newValue;
    }
  }
  const numberWrapper = new NumberWrapper(1);
  // "getter"とコンソールに表示される
  console.log(numberWrapper.value); // => 1
  // "setter"とコンソールに表示される
  numberWrapper.value = 42;
  // "getter"とコンソールに表示される
  console.log(numberWrapper.value); // => 42
}
// クラスをインスタンス化せずに利用できる静的メソッド（クラスメソッド）
{
  class ArrayWrapper {
    constructor(array = []) {
      this.array = array;
    }

    // rest parametersとして要素を受けつける
    static of(...items) {
      return new ArrayWrapper(items);
    }

    get length() {
      return this.array.length;
    }
  }

  // 配列を引数として渡している
  const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
  // 要素を引数として渡している
  const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
  console.log(arrayWrapperA.length); // => 3
  console.log(arrayWrapperB.length); // => 3
}
// try...catch構文
{
  try {
    console.log("try節:この行は実行されます");
    // 未定義の関数を呼び出してReferenceError例外が発生する
    undefinedFunction();
    // 例外が発生したため、この行は実行されません
  } catch (error) {
    // 例外が発生したあとはこのブロックが実行される
    console.log("catch節:この行は実行されます");
    console.log(error instanceof ReferenceError); // => true
    console.log(error.message); // => "undefinedFunction is not defined"
  } finally {
    // このブロックは例外の発生に関係なく必ず実行される
    console.log("finally節:この行は実行されます");
  }

  // 渡された数値が0以上ではない場合に例外を投げる関数
  function assertPositiveNumber(num) {
    if (num < 0) {
      throw new Error(`${num} is not positive.`);
    }
  }

  try {
    // 0未満の値を渡しているので、関数が例外を投げる
    assertPositiveNumber(-1);
  } catch (error) {
    console.log(error instanceof Error); // => true
    console.log(error.message); // => "-1 is not positive."
  }

  try {
    // eval関数は渡した文字列をJavaScriptとして実行する関数
    // 正しくない構文をパースさせ、SyntaxErrorを実行時に発生させる
    eval("foo! bar!");
  } catch (error) {
    console.log(error instanceof SyntaxError); // => true
    console.log(error.name); // => "SyntaxError"
    console.log(error.message); // エラーメッセージが表示される
  }
}
// Promise
{
  // `Promise`インスタンスを作成
  const promise = new Promise((resolve, reject) => {
    // 非同期の処理が成功したときはresolve()を呼ぶ
    // 非同期の処理が失敗したときにはreject()を呼ぶ
  });
  const onFulfilled = () => {
    console.log("resolveされたときに呼ばれる");
  };
  const onRejected = () => {
    console.log("rejectされたときに呼ばれる");
  };
  // `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
  promise.then(onFulfilled, onRejected);
}
{
  /**
   * 1000ミリ秒未満のランダムなタイミングでレスポンスを疑似的にデータ取得する関数
   * 指定した`path`にデータがある場合、成功として**Resolved**状態のPromiseオブジェクトを返す
   * 指定した`path`にデータがない場合、失敗として**Rejected**状態のPromiseオブジェクトを返す
   */
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/success")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }
  // `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
  // /success/data のリソースは存在するので成功しonFulfilledが呼ばれる
  dummyFetch("/success/data").then(function onFulfilled(response) {
    console.log(response); // => { body: "Response body of /success/data" }
  }, function onRejected(error) {
    // この行は実行されません
  });
  // /failure/data のリソースは存在しないのでonRejectedが呼ばれる
  dummyFetch("/failure/data").then(function onFulfilled(response) {
    // この行は実行されません
  }, function onRejected(error) {
    console.log(error); // Error: "NOT FOUND"
  });
}
// Promiseインスタンスに対してthenメソッドで成功時のコールバック関数だけを登録
{
  function delay(timeoutMs) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeoutMs);
    });
  }
  // `then`メソッドで成功時のコールバック関数だけを登録
  delay(10).then(() => {
    console.log("10ミリ秒後に呼ばれる");
  });
}
// catchメソッドで失敗時のコールバック関数だけを登録
{
  function errorPromise(message) {
    return new Promise((resolve, reject) => {
      reject(new Error(message));
    });
  }
  // 非推奨: `then`メソッドで失敗時のコールバック関数だけを登録
  errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
    console.log(error.message); // => "thenでエラーハンドリング"
  });
  // 推奨: `catch`メソッドで失敗時のコールバック関数を登録
  errorPromise("catchでエラーハンドリング").catch(error => {
    console.log(error.message); // => "catchでエラーハンドリング"
  });
}
// Promise.resolveメソッドはnew Promiseの糖衣構文（シンタックスシュガー）
{
  // `resolve(42)`された`Promise`インスタンスを作成する
  const fulFilledPromise = Promise.resolve(42);
  fulFilledPromise.then(value => {
    console.log(value); // => 42
  });
}
// 実行順序 同期処理の後に非同期処理
{
  const promise = new Promise((resolve) => {
    console.log("1. resolveします");
    resolve();
  });
  promise.then(() => {
    console.log("3. コールバック関数が実行されました");
  });
  console.log("2. 同期的な処理が実行されました");
}
// Promiseチェーン
{
  // ランダムでFulfilledまたはRejectedの`Promise`インスタンスを返す関数
  function asyncTask() {
    return Math.random() > 0.5
      ? Promise.resolve("成功")
      : Promise.reject(new Error("失敗"));
  }
  // asyncTask関数は新しい`Promise`インスタンスを返す
  asyncTask()
    // thenメソッドは新しい`Promise`インスタンスを返す
    .then(function onFulfilled(value) {
      console.log(value); // => "成功"
    })
    // catchメソッドは新しい`Promise`インスタンスを返す
    .catch(function onRejected(error) {
      console.log(error.message); // => "失敗"
    });
}
// Promiseチェーンの最後にFainally節（成功・失敗どちらでも実行）を入れる
{
  // `promise`にはResolvedまたはRejectedなPromiseインスタンスがランダムで入る
  const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
  promise.then(() => {
    console.log("Promise#then");
  }).catch((error) => {
    console.log("Promise#catch");
  }).finally(() => {
    // 成功、失敗どちらの場合でも呼び出される
    console.log("Promise#finally");
  });
}
// Promiseチェーンで逐次処理
{
  function dummyfetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/responce")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }

  const results = [];
  // Resource Aを取得する
  dummyFetch("/resource/A").then(response => {
    results.push(response.body);
    // Resource Bを取得する
    return dummyFetch("/resource/B");
  }).then(response => {
    results.push(response.body);
  }).then(() => {
    console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
  });
}
// Promise.all
{
  // `timeoutMs`ミリ秒後にresolveする
  function delay(timeoutMs) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(timeoutMs);
      }, timeoutMs);
    });
  }
  const promise1 = delay(1);
  const promise2 = delay(2);
  const promise3 = delay(3);

  Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // => [1, 2, 3]
  });
}
// 2つ上のコードをPromiseチェーンからPromise.allへ
{
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }

  const fetchedPromise = Promise.all([
    dummyFetch("/resource/A"),
    dummyFetch("/resource/B")
  ]);
  // fetchedPromiseの結果をDestructuringでresponseA, responseBに代入している
  fetchedPromise.then(([responseA, responseB]) => {
    console.log(responseA.body); // => "Response body of /resource/A"
    console.log(responseB.body); // => "Response body of /resource/B"
  }).catch(error => {
    console.error(error); // Error: NOT FOUND
  });
}
// Promise.race
// Promiseインスタンスの配列を受け取り一番最初に処理が終了したPromiseインスタンスを返す
{
  // `timeoutMs`ミリ秒後にresolveする
  function delay(timeoutMs) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(timeoutMs);
      }, timeoutMs);
    });
  }
  // 1つでもresolveまたはrejectした時点で次の処理を呼び出す
  const racePromise = Promise.race([
    delay(1),
    delay(32),
    delay(64),
    delay(128)
  ]);
  racePromise.then(value => {
    // もっとも早く完了するのは1ミリ秒後
    console.log(value); // => 1
  });
}
// timeout 関数と dummyFetch関数 どちらの処理が早いか競争（race）
{
  // `timeoutMs`ミリ秒後にrejectする
  function timeout(timeoutMs) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
      }, timeoutMs);
    });
  }
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }
  // 500ミリ秒以内に取得できなければ失敗時の処理が呼ばれる
  Promise.race([
    dummyFetch("/resource/data"),
    timeout(500),
  ]).then(response => {
    console.log(response.body); // => "Response body of /resource/data"
  }).catch(error => {
    console.log(error.message); // => "Timeout: 500ミリ秒経過"
  });
}
// Async Function　非同期処理を行う関数を定義する構文　必ずProimiseインスタンスを返す
{
  // 関数の前にasyncを付ける
  async function doAsync() {
    return "値";
  }
  // doAsync関数はPromiseを返す
  doAsync().then(value => {
    console.log(value); // => "値"
  });
}
// 下のPromise.resolve(返り値)と同じ意味
{
  // 通常の関数でPromiseインスタンスを返している
  function doAsync() {
    return Promise.resolve("値");
  }
  doAsync().then(value => {
    console.log(value); // => "値"
  });
}
// Async Functionの種類
{
  // 関数宣言のAsync Function版
  async function fn1() { }
  // 関数式のAsync Function版
  const fn2 = async function () { };
  // Arrow FunctionのAsync Function版
  const fn3 = async () => { };
  // メソッドの短縮記法のAsync Function版
  const obj = { async method() { } };
}
// Async Functionが返すPromiseインスタンスの3つの種類
// 1. Async Functionが値をreturnした場合、その返り値を持つFulfilledなPromiseを返す
// 2. Async FunctionがPromiseをreturnした場合、その返り値のPromiseをそのまま返す
// 3. Async Function内で例外が発生した場合は、そのエラーを持つRejectedなPromiseを返す
{
  // 1. resolveFnは値を返している
  // 何もreturnしていない場合はundefinedを返したのと同じ扱いとなる
  async function resolveFn() {
    return "返り値";
  }
  resolveFn().then(value => {
    console.log(value); // => "返り値"
  });

  // 2. rejectFnはPromiseインスタンスを返している
  async function rejectFn() {
    return Promise.reject(new Error("エラーメッセージ"));
  }
  // rejectFnはRejectedなPromiseを返すのでcatchできる
  rejectFn().catch(error => {
    console.log(error.message); // => "エラーメッセージ"
  });

  // 3. exceptionFnは例外を投げている
  async function exceptionFn() {
    throw new Error("例外が発生しました");
    // 例外が発生したため、この行は実行されません
  }
  // Async Functionで例外が発生するとRejectedなPromiseが返される
  exceptionFn().catch(error => {
    console.log(error.message); // => "例外が発生しました"
  });
}
// await式 右辺のPromiseインスタンスがFulfilledまたはRejectedになるまでその場で非同期処理の完了を待つ
{
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }
  // リソースAとリソースBを順番に取得する
  async function fetchAB() {
    const results = [];
    const responseA = await dummyFetch("/resource/A");
    results.push(responseA.body);
    const responseB = await dummyFetch("/resource/B");
    results.push(responseB.body);
    return results;
  }
  // リソースを取得して出力する
  fetchAB().then((results) => {
    console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
  });
}
// 複数の非同期処理を行う際に、Async Functionはforループなどの反復処理と組み合わせる
{
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }
  // 複数のリソースを順番に取得する
  async function fetchResources(resources) {
    const results = [];
    for (let i = 0; i < resources.length; i++) {
      const resource = resources[i];
      // ループ内で非同期処理の完了を待っている
      const response = await dummyFetch(resource);
      results.push(response.body);
    }
    // 反復処理がすべて終わったら結果を返す(返り値となるPromiseを`results`でresolveする)
    return results;
  }
  // 取得したいリソースのパス配列
  const resources = [
    "/resource/A",
    "/resource/B"
  ];
  // リソースを取得して出力する
  fetchResources(resources).then((results) => {
    console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
  });
}
// 上のfor文だと全て取得するのに時間が掛かる
// await式とPromise．allメソッドを組み合わせる
{
  function dummyFetch(path) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
        } else {
          reject(new Error("NOT FOUND"));
        }
      }, 1000 * Math.random());
    });
  }
  // 複数のリソースをまとめて取得する
  async function fetchAllResources(resources) {
    // リソースを同時に取得する
    const promises = resources.map(function (resource) {
      return dummyFetch(resource);
    });
    // すべてのリソースが取得できるまで待つ
    // Promise.allは [ResponseA, ResponseB] のように結果が配列となる
    const responses = await Promise.all(promises);
    // 取得した結果からレスポンスのボディだけを取り出す
    return responses.map((response) => {
      return response.body;
    });
  }
  const resources = [
    "/resource/A",
    "/resource/B"
  ];
  // リソースを取得して出力する
  fetchAllResources(resources).then((results) => {
    console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
  });
}

// Map キーと値の組み合わせからなる抽象データ型。 他の言語では辞書やハッシュマップ、連想配列などと呼ばれる
// 初期値としてエントリーの配列を渡せる　=> [キー, 値]という形式の配列
{
  const map = new Map([["key1", "value1"], ["key2", "value2"]]);
  // 2つのエントリーで初期化されている
  console.log(map.size); // => 2
}
// 新しい要素をsetメソッドで追加、追加した要素をgetメソッドで取得
{
  const map = new Map();
  // 新しい要素の追加
  map.set("key", "value1");
  console.log(map.size); // => 1
  console.log(map.get("key")); // => "value1"
  // 要素の上書き
  map.set("key", "value2");
  console.log(map.get("key")); // => "value2"
  // キーの存在確認
  console.log(map.has("key")); // => true
  console.log(map.has("foo")); // => false
}
// deleteメソッドにキーを渡して値を削除 clearで全て削除
{
  const map = new Map();
  map.set("key1", "value1");
  map.set("key2", "value2");
  console.log(map.size); // => 2
  map.delete("key1");
  console.log(map.size); // => 1
  map.clear();
  console.log(map.size); // => 0
}
// マップの反復処理
// forEach メソッド　配列と異なり、インデックスの代わりにキーが渡される
{
  const map = new Map([["key1", "value1"], ["key2", "value2"]]);
  const results = [];
  map.forEach((value, key) => {
    results.push(`${key}:${value}`);
  });
  console.log(results); // => ["key1:value1","key2:value2"]
}
// keys メソッド　戻り地は配列ではなくIteratorオブジェクト for..ofやArray.fromで配列に変換
{
  const map = new Map([["key1", "value1"], ["key2", "value2"]]);
  const keys = [];
  // keysメソッドの戻り値(Iterator)を反復処理する
  for (const key of map.keys()) {
    keys.push(key);
  }
  console.log(keys); // => ["key1","key2"]
  // keysメソッドの戻り値(Iterator)から配列を作成する
  const keysArray = Array.from(map.keys());
  console.log(keysArray); // => ["key1","key2"]
}
// entriesメソッド　マップが持つすべての要素をエントリーとして挿入順に並べたIteratorオブジェクトを返す
{
  const map = new Map([["key1", "value1"], ["key2", "value2"]]);
  const entries = [];
  for (const [key, value] of map.entries()) {
    entries.push(`${key}:${value}`);
  }
  console.log(entries); // => ["key1:value1","key2:value2"]
}
// マップそのものからも取得可能
{
  const map = new Map([["key1", "value1"], ["key2", "value2"]]);
  const results = [];
  for (const [key, value] of map) {
    results.push(`${key}:${value}`);
  }
  console.log(results); // => ["key1:value1","key2:value2"]
}
// 商品のオブジェクトと注文数をマッピング
{
  // ショッピングカートを表現するクラス
  class ShoppingCart {
    constructor() {
      // 商品とその数を持つマップ
      this.items = new Map();
    }
    // カートに商品を追加する
    addItem(item) {
      const count = this.items.get(item) || 0;
      this.items.set(item, count + 1);
    }
    // カート内の合計金額を返す
    getTotalPrice() {
      return Array.from(this.items).reduce((total, [item, count]) => {
        return total + item.price * count;
      }, 0);
    }
    // カートの中身を文字列にして返す
    toString() {
      return Array.from(this.items).map(([item, count]) => {
        return `${item.name}:${count}`;
      }).join(",");
    }
  }
  const shoppingCart = new ShoppingCart();
  // 商品一覧
  const shopItems = [
    { name: "みかん", price: 100 },
    { name: "リンゴ", price: 200 },
  ];

  // カートに商品を追加する
  shoppingCart.addItem(shopItems[0]);
  shoppingCart.addItem(shopItems[0]);
  shoppingCart.addItem(shopItems[1]);

  // 合計金額を表示する
  console.log(shoppingCart.getTotalPrice()); // => 400
  // カートの中身を表示する
  console.log(shoppingCart.toString()); // => "みかん:2,リンゴ:1"
}

// Set オブジェクト　重複する値を持たない配列のようなもの
{
  // "value2"が重複するため、片方は無視される
  const set = new Set(["value1", "value2", "value2"]);
  // セットのサイズは2になる
  console.log(set.size); // => 2
}
// add セットに値を追加
{
  const set = new Set();
  // 値の追加
  set.add("a");
  console.log(set.size); // => 1
  // 重複する値は追加されない
  set.add("a");
  console.log(set.size); // => 1
  // 値の存在確認
  console.log(set.has("a")); // => true
  console.log(set.has("b")); // => false
}
// delete 値の削除　clear 値の全てを削除
{
  const set = new Set();
  set.add("a");
  set.add("b");
  console.log(set.size); // => 2
  set.delete("a");
  console.log(set.size); // => 1
  set.clear();
  console.log(set.size); // => 0
}
// forEach使える　セットの反復処理
{
  const set = new Set(["a", "b"]);
  const results = [];
  set.forEach((value) => {
    results.push(value);
  });
  console.log(results); // => ["a","b"]
}
// for...of文でSetオブジェクトを反復処理
{
  const set = new Set(["a", "b"]);
  const results = [];
  for (const value of set) {
    results.push(value);
  }
  console.log(results); // => ["a","b"]
}

// JSONオブジェクト
// JSON形式の文字列とJavaScriptのオブジェクトを相互に変換するメソッド
// JSON.parseメソッド 引数に与えられた文字列をJSONとしてパースし、オブジェクトとして返す
{
  // JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
  const json = '{ "id": 1, "name": "js-primer" }';
  const obj = JSON.parse(json);
  console.log(obj.id); // => 1
  console.log(obj.name); // => "js-primer"
}
// 文字列がJSONの配列を表す場合は、JSON.parseメソッドの返り値も配列になる
{
  const json = "[1, 2, 3]";
  console.log(JSON.parse(json)); // => [1, 2, 3]
}
// JSON形式でない文字列が与えられた場合、例外を返すため try...catch構文で例外処理
{
  const userInput = "not json value";
  try {
    const json = JSON.parse(userInput);
  } catch (error) {
    console.log("パースできませんでした");
  }
}
// JSON.stringifyメソッド オブジェクトをJSON文字列に変換する
{
  const obj = { id: 1, name: "js-primer", bio: null };
  console.log(JSON.stringify(obj)); // => '{"id":1,"name":"js-primer","bio":null}'
}
// 第二引数はreplacer引数とも呼ばれ、関数あるいは配列を渡せる
// 関数を渡した場合,プロパティのキーと値が渡され、返り値によって変換される際の挙動をコントロール
{
  const obj = { id: 1, name: "js-primer", bio: null };
  const replacer = (key, value) => {
    if (value === null) {
      return undefined;
    }
    return value;
  };
  console.log(JSON.stringify(obj, replacer)); // => '{"id":1,"name":"js-primer"}'
}
// 配列を渡した場合はプロパティのホワイトリストとして使われ、 その配列に含まれる名前のプロパティだけが変換
{
  const obj = { id: 1, name: "js-primer", bio: null };
  const replacer = ["id", "name"];
  console.log(JSON.stringify(obj, replacer)); // => '{"id":1,"name":"js-primer"}'
}
// 第三引数はspace引数とも呼ばれ、変換後のJSON形式の文字列を読みやすくフォーマットする際のインデントを設定できる
{
  const obj = { id: 1, name: "js-primer" };
  // replacer引数を使わない場合はnullを渡して省略するのが一般的です
  console.log(JSON.stringify(obj, null, 2)); // "\t"でタブ文字も渡せる
  /*
  {
     "id": 1,
     "name": "js-primer"
  }
  */
}
// toJSONメソッド　引数に直接渡されたときだけでなく引数のプロパティとして登場したときにも再帰的に処理される
// オブジェクトがtoJSONメソッドを持っている場合、JSON.stringifyメソッドは既定の文字列変換ではなくtoJSONメソッドの返り値を使う
{
  const obj = {
    foo: "foo",
    toJSON() {
      return "bar";
    }
  };
  console.log(JSON.stringify(obj)); // => '"bar"'
  console.log(JSON.stringify({ x: obj })); // => '{"x":"bar"}'
}
// toJSONメソッドは自作のクラスを特殊な形式でシリアライズする目的などに使われる

