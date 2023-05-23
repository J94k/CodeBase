a = int(input("Enter number: "))
result = 0

while int(a) > 0:
    n = a % 10
    a = a // 10
    result += n

print("Result:", result)

