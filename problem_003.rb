# Problem 3 「最大の素因数」　ex: 2　3　5　7　11　13　17　19　23　29
# 13195 の素因数は 5, 7, 13, 29 である.
# 600851475143 の素因数のうち最大のものを求めよ.
a = 2
num = 600851475143

while a < num do
  if num % a == 0
    num = num / a
  end
  a += 1
end

p a