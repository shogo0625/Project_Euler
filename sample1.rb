sum = 0
num = [*1..64]
num.each {|n| sum += n ** 4}
p sum
