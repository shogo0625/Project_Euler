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
