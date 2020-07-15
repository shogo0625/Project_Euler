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
