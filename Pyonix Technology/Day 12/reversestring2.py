s1 = "Hello How are you?"

def rev (val):
  s2= ""
  for i in val:
    s2 = i + s2
  return s2 + " "
  
s2=s1.split(" ") #Splits s1 into a list of words using space as the delimiter.
out= ""
for word in s2:
  s1= rev(word)
  out = out + s1

print(out)
