num1 = []
30.times {|n| num1 << (205 * n)}
num2 = []
40.times {|n| num2 << (82 * n)}
num3 = []
10.times {|n| num3 << (30 * n)}
array = []
num1.each do |n1|
  array << n1
  num2.each do |n2|
    array << n2
    array << n1 + n2
    num3.each do |n3|
      array << n3
      array << n1 + n3
      array << n2 + n3
      array << n1 + n2 + n3
    end
  end
end

p array.uniq.count - 1

