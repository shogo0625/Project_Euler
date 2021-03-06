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

# sliceメソッド 文字列でも使える
p ["Ruby","Python","Java"].slice(0..1) # => ["Ruby", "Python"]
p ["Ruby","Python","Java"].slice(-1, 1) # => ["Java"]

# splitメソッド　引数に渡した区切り文字で文字列を配列に分解
p 'Ruby&Java&Perl&PHP'.split('&')
# => ["Ruby", "Java", "Perl", "PHP"]

# abs メソッド　数値の絶対値に変更
p -100.abs # => 100

# べき乗演算子
p 5 ** 3 # => 125

# scanメソッド　マッチした文字列を抽出し配列で返す
p "yynny".scan(/y/) # => ["y", "y", "y"]
p "yynny".scan(/./) # => ["y", "y", "n", "n", "y"]
# 任意の文字数で分割する
length = 3
p "123456789".scan(/.{1,#{length}}/) # => ["123", "456", "789"]
# 「.」が改行を除く任意の1文字
# {}の中で「それを何回繰り返すか」という数を指定
# 今回のケースでは「1回以上最大(length)回」

# joinメソッド　配列の要素を結合　引数に区切り文字も渡せる
p ["こん", "にち", "は"].join # => "こんにちは"

# gsubメソッド　第一引数で指定した文字列を第２引数で渡した文字列で置換
p "testatexample.com".gsub("at", "@") # => "test@example.com"

# injectメソッド　引数に初期値値を渡せる デフォルトは0
p (1..10).inject { |sum, i| sum + i } # => 55
# シンボルで演算子を渡す 上記と同じ結果
p (1..10).inject(:+) # => 55

# uniqメソッド　配列内の要素がすべて正しいか
p [3, 3, 3].uniq.one? # => true
p ["a", "a", "a"].uniq.count == 1 # => true

# mapメソッドの引数にメソッドを渡して要素それぞれに適用
p ['h', 'e', 'y'].map(&:upcase).join # => "HEY"

# divmodメソッド　商と余りを配列にして返す
answer = 100.divmod(3)
p "A: #{answer[0]} 余り#{answer[1]}" # => "A: 33 余り1"

# selectメソッド(find_allも一緒)　ブロック内の式がtrueの要素だけ配列で返す
p [1, 2, 3, 4, 5, 6].select { |n| n.even? } # => [2, 4, 6]
# rejectメソッド　selectの逆　falseだけ配列にして返す
p [1, 2, 3, 4, 5, 6].reject { |n| n.even? } # => [1, 3, 5]

# gre引数にマッチする要素だけ抽出し配列で返す
p [1, "a", 2, "b", 3, "c" ].grep(/[a-z]/) # => ["a", "b", "c"]

# 次の繰り返しにスキップ　next

# spintfメソッド　指定した桁数に合わせる
p sprintf("%003d", "7") # => "007"

# timesメソッド　オブジェクト.times
str = ""
3.times { str += "あ"}
p str # => "あああ"

# sortメソッド　sort_by ＋ ブロック
p [1, 2, 3, 4, 5, 6].sort.reverse # => [6, 5, 4, 3, 2, 1]
p ["aaaaa","b","tt"].sort_by {|l| l.size } # =>  ["b", "tt", "aaaaa"]

# 小数点　切り捨て　切り上げ　四捨五入
p 1.4.floor # => 1
p 1.4.ceil # => 2
p 1.5.round # => 2
p 1.23456.round(3) # 1.235
# to_f メソッド
p 10.to_f / 3 # => 3.333333...

# any? と include? で文字列の中に複数の文字列の内の1つでも当てはまるか確かめる
str = ["あ", "い", "う", "え", "お"]
p str.any? { |s| "さとう".include?(s) } # => true

# each_with_index
languages = ["Ruby", "PHP", "Java"]
languages.each_with_index do |lang, index|
  p "#{index}: #{lang}"
end
# each.with_index（指定した番号から数えられる）
languages.each.with_index(1) do |lang, index|
  p "#{index}: #{lang}"
end
