<?php
// htmlspecialchars(変換したい文字列, 変換のためのフラグ, webページの文字コード)
// htmlspecialchars($message, ENT_QUOTES, ‘UTF-8’ );

// 変数
$myName = "Nakajima";
// 定数
define('MYNAME', 'Nakajima');
const NAME = 'Shogo';

// 改行
echo 'Hello' . PHP_EOL;

// 複数行のテキスト
// $text = <<<'EOT'　nowdoc
// $text = <<<"EOT"　heredoc
$text = <<<EOT
hello! $myName
  this is looong
text!
EOT . PHP_EOL;
echo $text;

// データ型を調べる
$a = true;
var_dump($a); // => bool
// 型変換 値の前に()で型を指定　キャスト
$b = (float)10;
var_dump($b); // => float

// 関数外で定義した変数を関数内で使う　引数で渡す or global
$rate = 1.1;
// 関数自体を値として扱う　無名関数、クロージャ
$sum = function ($a, $b, $c, $rate) {
  // global $rate;
  return ($a + $b + $c) * $rate;
};
echo $sum(100, 200, 300, $rate) . PHP_EOL; // => 660

// 条件演算子 ? trueの時の値 : falseの時の値;
function add($a, $b)
{
  $sum = $a + $b;
  return $sum > 0 ? $sum : '0以下です';
}
echo add(4, -10) . PHP_EOL;

// 引数の型指定
// declare(strict_types=1);　強力な型付けにしたい場合は記入
function showInfo(string $name, int $score): void // 返り値がない場合はvoid付ける
{
  echo $name . ': ' . $score . PHP_EOL;
}
showInfo('Nakajima', 100);
// 返り値がある場合は、voidの代わりに 返す値の型を指定　当てはまらない場合エラー
// 例 ： string　？を付けると : ?string　nullかその型かの意味

// 配列を分かりやすく表示
$scores1 = [
  90,
  40,
  100,
];
var_dump($scores1);
print_r($scores1);
echo $scores1[1] . PHP_EOL; // => 40　インデックスで取得
// array(3) {
//   [0]=>
//   int(90)
//   [1]=>
//   int(40)
//   [2]=>
//   int(100)
// }
// Array
// (
//     [0] => 90
//     [1] => 40
//     [2] => 100
// )
// キー付きの配列の場合
$scores2 = [
  'first'  => 90,
  'second' => 40,
  'third'  => 100,
];
var_dump($scores2);
print_r($scores2);
echo $scores2['second'] . PHP_EOL; // => 40　キーで取得
// array(3) {
//   ["first"]=>
//   int(90)
//   ["second"]=>
//   int(40)
//   ["third"]=>
//   int(100)
// }
// Array
// (
//     [first] => 90
//     [second] => 40
//     [third] => 100
// )

// foreach ($scores as $key => $score)　キーは省略可

// 配列を配列の要素として展開
// $thirtyForty = [30, 40];
// $nums = [10, 20, ...$thirtyForty, 50];

// 可変長引数
function sum(...$numbers)
{
  $total = 0;
  foreach ($numbers as $number) {
    $total += $number;
  }
  return $total;
}
echo sum(55, 35, 10) . PHP_EOL;

// 関数で配列を返す
function getStats(...$numbers)
{
  $total = 0;
  foreach ($numbers as $number) {
    $total += $number;
  }
  return [$total, $total / count($numbers)];
}
// print_r(getStats(1, 3, 5));
list($sum, $average) = getStats(1, 3, 5); // 配列をそれぞれの変数に代入する
[$sum, $average] = getStats(1, 3, 5);
echo $sum . PHP_EOL;
echo $average . PHP_EOL;
