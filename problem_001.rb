# Problem 1 「3と5の倍数」
# 10未満の自然数のうち, 3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり, これらの合計は 23 になる.
# 同じようにして, 1000 未満の 3 か 5 の倍数になっている数字の合計を求めよ.
def multiple_of_three_or_five(number)
  number % 3 == 0 || number % 5 == 0
end

sum = 0

for n in 1..999 do
  if multiple_of_three_or_five(n)
    sum += n
  end
end

p sum

# 一行で。。。
puts [*1...1000].select { |n| (n % 3).zero? || (n % 5).zero? }.inject(:+)
