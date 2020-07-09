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
}
