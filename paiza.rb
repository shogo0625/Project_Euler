# 複数行の標準入力を読み込む　readlines　1行はgets
# 改行文字を含めない場合はchomp付ける

# 連番の配列
p [*1..10]
# => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
p [*'a'..'f']
# => ["a", "b", "c", "d", "e", "f"]

# N番目から M文字
line = "Perfect"
p line[2, 3]
# => "rfe"

# splitメソッド　引数に渡した区切り文字で文字列を配列に分解
p 'Ruby&Java&Perl&PHP'.split('&')
# => ["Ruby", "Java", "Perl", "PHP"]

# abs メソッド　数値の絶対値に変更
p -100.abs # => 100

# べき乗演算子
p 5 ** 3 # => 125

# scanメソッド　マッチした文字列を抽出し配列で返す
p "yynny".scan(/\y/) # => ["y", "y", "y"]
p "yynny".scan(/./) # => ["y", "y", "n", "n", "y"]

# joinメソッド　配列の要素を結合　引数に区切り文字も渡せる
p ["こん", "にち", "は"].join # => "こんにちは"

# gsubメソッド　第一引数で指定した文字列を第２引数で渡した文字列で置換
p "testatexample.com".gsub("at", "@") # => "test@example.com"

# injectメソッド　引数に初期値値を渡せる デフォルトは0
p (1..10).inject { |sum, i| sum + i } # => 55
# シンボルで演算子を渡す 上記と同じ結果
p (1..10).inject(:+) # => 55
