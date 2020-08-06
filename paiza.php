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

// ビルトイン関数
// strlen('') 文字列の長さを返す 日本語の場合は mb_strlen
echo strlen('hello') . PHP_EOL; // => 5

// number_format('') 3桁毎にカンマ入れる
echo number_format(52234897) . PHP_EOL; // => 52,234,897

// shuffle([1, 2, 3]) 配列の順番をシャッフル
// shuffle([1, 3, 5, 8]) . PHP_EOL; // => [3, 8, 5, 1]

// array_unique([1, 2, 2. 3]) ユニークの値だけで配列を返す

// sprintf("[%桁数,データ型][%桁数,データ型]", 渡す値カンマ区切り)　指定したフォーマットで文字列を返す
// printf　は戻り値がいらない場合に使う
// 左詰めにしたい場合は、桁数をマイナスに。　右詰めで0で埋めたい場合は、最初に0入れる

$input = " shogo_nakajima  ";
// trim('') 前後の空白や改行を削除
$input = trim($input);
// 文字列内の検索　日本語の場合は、 mb_strpos
echo strpos('', '_') . PHP_EOL; // => 5
// 文字列の置換
$input = str_replace('_', '-', $input);
echo $input . PHP_EOL; // => 'shogo-nakajima'

// substr(文字列, 位置, 桁数)　文字列の切り出し
// substr_replace(文字列, 置換文字列, 位置, 桁数)　位置と桁数を指定して文字列置換
$input = '20200320Item-A  1200';
$input = substr_replace($input, 'Item-B  ', 8, 8);

$date = substr($input, 0, 8);
$product = substr($input, 8, 8);
// $amount = substr($input, 16, 4);
$amount = substr($input, 16); // 最後の場合、桁数省略可

echo $date . PHP_EOL;
echo $product . PHP_EOL;
// echo $amount . PHP_EOL;
echo number_format($amount) . PHP_EOL;

$input = 'Call us at 03-3001-1256 or 03-3015-3222';
$pattern = '/\d{2}-\d{4}-\d{4}/';
// preg_match(パターン, 検索する対象の文字列, 結果を格納する変数) 特定の文字を検索し取得
preg_match($pattern, $input, $matches);
// preg_match_all で対象全て取得
preg_match_all($pattern, $input, $matches);
print_r($matches);
// preg_replace(パターン, 置換後の文字列, 検索する対象の文字列)　新しい文字列を返すため変数に代入
$input = preg_replace($pattern, '**-****-****', $input);
echo $input . PHP_EOL; // => 'Call us at **-****-**** or **-****-****'

// 配列から文字列
$d = [2020, 11, 15];
echo "$d[0]-$d[1]-$d[2]" . PHP_EOL;
echo implode('-', $d) . PHP_EOL; // => '2020-11-15'
// 文字列から配列
$t = '17:32:45';
print_r(explode(':', $t)); // => ['17', '32', '45']

// 数学に関する関数
$n = 5.6283;
// 切り上げ、切り捨て、四捨五入、（桁数指定）
echo ceil($n) . PHP_EOL; // 6
echo floor($n) . PHP_EOL; // 5
echo round($n) . PHP_EOL; // 6
echo round($n, 2) . PHP_EOL; // 5.63
// ランダムな乱数を生成
echo mt_rand(1, 6) . PHP_EOL;
// 最大値、最小値
echo max(3, 9, 4) . PHP_EOL;
echo min(3, 9, 4) . PHP_EOL;
// 円周率、平方根
echo M_PI . PHP_EOL;
echo M_SQRT2 . PHP_EOL;

// 配列の操作
$scores = [30, 40, 50];
// 先頭に追加
array_unshift($scores, 10, 20);
// 末尾に追加
array_push($scores, 60, 70);
$scores[] = 80;
// 先頭を削除
array_shift($scores);
// 末尾を削除
array_pop($scores);

print_r($scores);

// 配列の要素を切り出し、新しい配列を作成　新しい配列名 = array_slice(元の配列, index番号から, n番目まで)
$scores = [30, 40, 50, 60, 70];
// $partial = array_slice($scores, 2, 3);
// $partial = array_slice($scores, 2);
$partial = array_slice($scores, -2);

print_r($scores);
print_r($partial);

// 配列の指定の位置を削除（破壊的）　array_splice(配列, n番目から, m個, 追加する要素)
$scores = [30, 40, 50, 60, 70, 80];
// array_splice($scores, 2, 3);
array_splice($scores, 2, 3, 100);
array_splice($scores, 2, 0, [100, 101]); // 削除せず追加だけしたい場合は、0を渡す

print_r($scores);

// 配列のソート
$scores = [40, 50, 20, 30];
sort($scores); // 小さい順にソート　大きい順は rsort
shuffle($scores); // ランダムに並び替え
$picked = array_rand($scores, 2); // ランダムに指定個数要素を取得（値ではなくキーを返す）
echo $scores[$picked[0]] . PHP_EOL; // 値ではなくキーが代入されているため、インデックス番号で表示
echo $scores[$picked[1]] . PHP_EOL; // 上に同じ

// 配列の値の集計
$scores = array_fill(0, 5, 10); // （nのインデックスから, m個分, 埋める値）
$scores = range(1, 10); // （nから, mまで）
$scores = range(1, 10, 2); // （nから, mまで, i刻みで）

echo array_sum($scores) . PHP_EOL; // 合計値
echo array_sum($scores) / count($scores) . PHP_EOL; // 平均値を出す関数はないため、このように計算

// 配列の連結、差、共通の値
$a = [3, 4, 8];
$b = [4, 8, 12];
// 連結
$merged = array_merge($a, $b);
// $merged = [...$a, ...$b];
// 重複した値を取り除く
$uniques = array_unique($merged);
// $a の配列から $b の配列を引く
$diff1 = array_diff($a, $b);
print_r($diff1); // [3]
// $b の配列から $a の配列を引く
$diff2 = array_diff($b, $a);
print_r($diff2); // [12]
// 共通の要素を取得
$common = array_intersect($a, $b);
print_r($common); // [4, 8]

// array_map 第2引数に渡す配列の要素それぞれに、第1引数の処理をして新しい配列を返す
$prices = [100, 200, 300];

$newPrices = array_map(
  function ($n) {
    return $n * 1.1;
  },
  // fn ($n) => $n * 1.1,　このアロー関数は7.4から
  $prices
);
print_r($newPrices); // => [110, 220, 330]

// array_filter 第1引数に渡す配列の要素それぞれに、第2引数の条件がtrueの値で新しい配列を返す
$numbers = range(1, 10);
$evenNumbers = array_filter(
  $numbers,
  function ($n) {
    return $n % 2 === 0;
  }
  // fn($n) => $n % 2 === 0
);
print_r($evenNumbers);

// 配列のキーと値の操作
$scores = [
  'taguchi' => 80,
  'hayashi' => 70,
  'kikuchi' => 60,
];
$keys = array_keys($scores);
print_r($keys);
$values = array_values(($scores));
print_r($values);

if (array_key_exists('taguchi', $scores)) { // 指定のキーが配列内に存在するか
  echo 'taguchi is here!' . PHP_EOL;
}
if (in_array(80, $scores)) { // 指定の値が配列内に存在するか
  echo '80 is here!' . PHP_EOL;
}
echo array_search(70, $scores) . PHP_EOL; // 指定の値に対応するキーを取得

// キーを保持したままソート
asort($scores);
print_r($scores);
arsort($scores);
print_r($scores);
// キーの順番でソート
ksort($scores);
print_r($scores);
krsort($scores);
print_r($scores);

// 配列の中に配列がある場合のソート
$data = [
  ['name' => 'taguchi', 'score' => 80],
  ['name' => 'kikuchi', 'score' => 60],
  ['name' => 'hayashi', 'score' => 70],
  ['name' => 'tamachi', 'score' => 60],
];
// 1つの項目の比較しかできない
usort(
  $data,
  function ($a, $b) {
    if ($a['score'] === $b['score']) {
      return 0;
    }
    return $a['score'] > $b['score'] ? 1 : -1;
  }
);
// 複数の項目でソート
// array_column 指定したキーの値を配列で取得
$scores = array_column($data, 'score');
$names = array_column($data, 'name');
// array_multisort(
//   $scores, // 最初にソートする項目の値の配列
//   $names,  // 次にソートする項目の値の配列
//   $data    // 元の配列
// );
array_multisort(
  $scores,
  SORT_DESC,
  SORT_NUMERIC,
  $names,
  SORT_DESC,
  SORT_STRING,
  $data
);
print_r($data);
