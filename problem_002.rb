# Problem 2 「偶数のフィボナッチ数」
# フィボナッチ数列の項は前の2つの項の和である. 最初の2項を 1, 2 とすれば, 最初の10項は以下の通りである.
# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
# 数列の項の値が400万以下の, 偶数値の項の総和を求めよ.
x = 1
y = 2
z = 0
even_numbers = []
while (x || y) <= 4000000 do
  z = x + y
  [x, y, z].each do |n|
    even_numbers.push(n).uniq! if n.even?
  end
  if x < y
    x = z
  else
    y = z
  end
  z = 0
end
p even_numbers.sum
