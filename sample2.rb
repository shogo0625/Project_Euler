num = [1, 0, 5]
25.times do
  sum = num[-3..-1].sum
  num << sum
end
p num[27]

