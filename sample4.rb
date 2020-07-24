num = [*1..30000]
sum = 0
answer = num.select {|n| n % 3 == 0 || n.to_s.include?("3")}
p answer.sum
