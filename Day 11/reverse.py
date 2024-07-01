n = 123
rev = 0
lastdigit = 0

while n > 0:
  lastdigit = n % 10
  rev = rev * 10 + lastdigit
  n = n // 10

print(rev)


 
