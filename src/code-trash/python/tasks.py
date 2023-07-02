""" 
Задача 2: Найдите сумму цифр трехзначного числа.
"""

a = int(input("Enter number: "))
result = 0

while int(a) > 0:
    n = a % 10
    a = a // 10
    result += n

print("Result:", result)

""" 
Задача 4: Петя, Катя и Сережа делают из бумаги журавликов. Вместе они сделали S журавликов.
Сколько журавликов сделал каждый ребенок, если известно, что Петя и Сережа сделали одинаковое
количество журавликов, а Катя сделала в два раза больше журавликов, чем Петя и Сережа вместе?
"""

s = int(input("How many: "))
x = int(s / 6)

if x != 1 and x % 2 != 0:
    print("Wrong")
else:
    print("Петя:", x)
    print("Сережа:", x)
    print("Катя:", x * 4)


""" 
Задача 6: Вы пользуетесь общественным транспортом? Вероятно, вы расплачивались за проезд и
получали билет с номером. Счастливым билетом называют такой билет с шестизначным номером,
где сумма первых трех цифр равна сумме последних трех. Т.е. билет с номером 385916 – счастливый,
т.к. 3+8+5=9+1+6. Вам требуется написать программу, которая проверяет счастливость билета.
"""

ticket = int(input("Ticket number (6 numbers): "))
first = 0
last = 0

while ticket != 0:
    n = ticket % 10
    if int(ticket / 1000) > 0:
        last += n
    else:
        first += n
    ticket //= 10

if first == last:
    print("yes")
else:
    print("no")

""" 
Задача 8: Требуется определить, можно ли от шоколадки размером n × m долек отломить k долек,
если разрешается сделать один разлом по прямой между дольками (то есть разломить шоколадку
на два прямоугольника).
"""

n = int(input("n: "))
m = int(input("m: "))
k = int(input("k: "))

total = n * m
can_break = False

if total >= k and (k % n == 0 or k % m == 0):
    can_break = True

if can_break:
    print("yes")
else:
    print("no")

""" 
Задача 10: На столе лежат n монеток. Некоторые из них лежат вверх решкой,
а некоторые – гербом. Определите минимальное число монеток, которые нужно перевернуть,
чтобы все монетки были повернуты вверх одной и той же стороной.
Выведите минимальное количество монет, которые нужно перевернуть
"""

coins = ['О', 'Р', 'О', 'О', 'Р', 'Р', 'О']
heads = 0  # решкой вверх
tails = 0  # гербом вверх

for coin in coins:
    if coin == 'О':
        heads += 1
    elif coin == 'Р':
        tails += 1

if heads <= tails:
    print(heads)
else:
    print(tails)

""" 
Задача 12: Петя и Катя – брат и сестра. Петя – студент, а Катя – школьница.
Петя помогает Кате по математике. Он задумывает два натуральных числа X и Y (X,Y≤1000),
а Катя должна их отгадать. Для этого Петя делает две подсказки.
Он называет сумму этих чисел S и их произведение P. Помогите Кате отгадать задуманные
Петей числа.
"""

S = int(input("S: "))
P = int(input("P: "))
numbers = None

for x in range(1, S + 1):
    if S - x == P // x:
        numbers = x, S - x
        break

if numbers:
    X, Y = numbers
    print("Задуманные числа: X =", X, ", Y =", Y)
else:
    print("Невозможно определить")

""" 
Задача 14: Требуется вывести все целые степени двойки (т.е. числа вида 2k), 
не превосходящие числа N.
"""

N = int(input("N: "))
power = 0
result = 1

print("Целые степени двойки до ", N)
while result <= N:
    print(result)
    power += 1
    result = 2 ** power

"""
Задача 16: Требуется вычислить, сколько раз встречается некоторое число X в массиве A[1..N].
Пользователь в первой строке вводит натуральное число N – количество элементов в массиве.
В последующих  строках записаны N целых чисел Ai. Последняя строка содержит число X
"""

def count_occurrences(arr, X):

    return count

N = int(input("Количество элементов: "))
arr = []
for _ in range(N):
    num = int(input("Введите число: "))
    arr.append(num)

X = int(input("Введите число X: "))

count = 0

for num in arr:
    if num == X:
        count += 1

print("Число", X, "встречается", count, "раз")

""" 
Задача 18: Требуется найти в массиве A[1..N] самый близкий по величине элемент к заданному
числу X. Пользователь в первой строке вводит натуральное число N – количество элементов в
массиве. В последующих  строках записаны N целых чисел Ai. Последняя строка содержит число X
"""

N = int(input("Количество элементов: "))
arr = []
for _ in range(N):
    num = int(input("Введите число: "))
    arr.append(num)

X = int(input("Введите число X: "))

closest = arr[0]
diff = abs(X - arr[0])

for num in arr:
    if abs(X - num) < diff:
        closest = num
        diff = abs(X - num)

print("Самый близкий элемент - ", closest)

""" 
Задача 22: Даны два неупорядоченных набора целых чисел (может быть, с повторениями). Выдать без повторений в порядке возрастания все те числа, которые встречаются в обоих наборах.
Пользователь вводит 2 числа. n — кол-во элементов первого множества. m — кол-во элементов второго множества. Затем пользователь вводит сами элементы множеств.
"""

n = int(input("N: "))
m = int(input("M: "))
set1 = set()
set2 = set()

print("Элементы первого множества:")
for _ in range(n):
    num = int(input())
    set1.add(num)

print("Элементы второго множества:")
for _ in range(m):
    num = int(input())
    set2.add(num)

common = sorted(set1.intersection(set2))

print("Общие элементы:")
for element in common:
    print(element)


"""
Задача 24: В фермерском хозяйстве в Карелии выращивают чернику. Она растёт на круглой грядке, причём кусты высажены только по окружности. Таким образом, у каждого куста есть ровно два соседних. Всего на грядке растёт N кустов.
Эти кусты обладают разной урожайностью, поэтому ко времени сбора на них выросло различное число ягод — на i-ом кусте выросло ai ягод.
В этом фермерском хозяйстве внедрена система автоматического сбора черники. Эта система состоит из управляющего модуля и нескольких собирающих модулей. Собирающий модуль за один заход, находясь непосредственно перед некоторым кустом, собирает ягоды с этого куста и с двух соседних с ним.
Напишите программу для нахождения максимального числа ягод, которое может собрать за один заход собирающий модуль, находясь перед некоторым кустом заданной во входном файле грядки.
"""

N = int(input("Количество кустов на грядке: "))
garden = []

print("Число ягод на каждом кусте:")
for _ in range(N):
    num = int(input())
    garden.append(num)

max_count = 0

for i in range(len(garden)):
    count = garden[i] + garden[(i+1) % len(garden)] + garden[(i+2) % len(garden)]
    max_count = max(max_count, count)

print("Максимум ягод, которые можно собрать за один заход:", max_count)

""" 
Задача 26:  Напишите программу, которая на вход принимает два числа A и B, и возводит число А в целую степень B с помощью рекурсии.
"""

def power(base, exponent):
    if exponent == 0:
        return 1
    elif exponent < 0:
        return 1 / power(base, -exponent)
    else:
        return base * power(base, exponent - 1)

A = float(input("A: "))
B = int(input("B: "))

result = power(A, B)
print(result)

""" 
Задача 28: Напишите рекурсивную функцию sum(a, b), возвращающую сумму двух целых неотрицательных чисел. Из всех арифметических операций допускаются только +1 и -1.
Также нельзя использовать циклы.
"""

def sum(a, b):
    if a == 0:
        return b
    elif b == 0:
        return a
    else:
        return sum(a - 1, b + 1)

num1 = int(input("Первое число: "))
num2 = int(input("Второе число: "))

result = sum(num1, num2)
print("Сумма:", result)

""" 
Задача 30:  Заполните массив элементами арифметической прогрессии.
Её первый элемент, разность и количество элементов нужно ввести с клавиатуры.
Формула для получения n-го члена прогрессии: an = a1 + (n-1) * d.
Каждое число вводится с новой строки.
"""

a1 = int(input("Первый элемент прогрессии: "))
d = int(input("Разность: "))
n = int(input("Количество элементов: "))
progression = [a1]

for i in range(n):
    an = a1 + ((i-1) * d)
    progression.append(an)

print("Элементы:")
for element in progression:
    print(element)

""" 
Задача 32: Определить индексы элементов массива (списка), значения которых принадлежат
заданному диапазону (т.е. не меньше заданного минимума и не больше заданного максимума)
"""

arr = [1, 5, 3, 8, 2, 7, 6, 4]
min_val = 3
max_val = 6

indexes = []
for i in range(len(arr)):
    if min_val <= arr[i] <= max_val:
        indexes.append(i)

print("Индексы элементов:", indexes)

""" 
Задача 34:  Винни-Пух попросил Вас посмотреть, есть ли в его стихах ритм.
Поскольку разобраться в его кричалках не настолько просто, насколько легко он их придумывает, 
Вам стоит написать программу. Винни-Пух считает, что ритм есть, если число слогов (т.е. число гласных букв) 
в каждой фразе стихотворения одинаковое. Фраза может состоять из одного слова, если во фразе несколько слов, 
то они разделяются дефисами. Фразы отделяются друг от друга пробелами. Стихотворение  
Винни-Пух вбивает в программу с клавиатуры. В ответе напишите “Парам пам-пам”, если с ритмом все в 
порядке и “Пам парам”, если с ритмом все не в порядке
"""

def count_vowels(word):
    vowels = ['a', 'e', 'i', 'o', 'u']
    return sum(1 for char in word.lower() if char in vowels)

def check_rhythm(poem):
    phrases = poem.split()
    syllables = [count_vowels(phrase.replace('-', '')) for phrase in phrases]

    if len(set(syllables)) == 1:
        return "Парам пам-пам"
    else:
        return "Пам парам"

poem = input("Введите стих: ")

result = check_rhythm(poem)
print(result)

"""
Задача 36: Напишите функцию print_operation_table(operation, num_rows=6, num_columns=6),
которая принимает в качестве аргумента функцию, вычисляющую элемент по номеру строки и столбца.
Аргументы num_rows и num_columns указывают число строк и столбцов таблицы, которые должны быть распечатаны.
Нумерация строк и столбцов идет с единицы (подумайте, почему не с нуля). Примечание: бинарной операцией 
называется любая операция, у которой ровно два аргумента, как, например, у операции умножения.
"""

def print_operation_table(operation, num_rows=6, num_columns=6):
    for row in range(1, num_rows + 1):
        for column in range(1, num_columns + 1):
            result = operation(row, column)
            print(result, end='\t')
        print()

def multiplication(row, column):
    return row * column

print_operation_table(multiplication, 6, 6)

""" 
Задача 38: Дополнить телефонный справочник возможностью изменения и удаления данных.
Пользователь также может ввести имя или фамилию, и Вы должны реализовать функционал
для изменения и удаления данных
"""

from os import path

file_base = "base.txt"
last_id = 0
all_data = []

if not path.exists(file_base):
    with open(file_base, "w", encoding="utf-8") as _:
        pass


def read_records():
    global last_id, all_data

    with open(file_base, encoding="utf-8") as f:
        all_data = [i.strip() for i in f]
        if all_data:
            last_id = int(all_data[-1].split()[0])
            return all_data
    return []


def show_all():
    if all_data:
        print(*all_data, sep="\n")
    else:
        print("Empty data")


def add_new_contact():
    global last_id
    array = ["surname", "name", "patronymic", "phone_number"]
    string = ""
    for i in array:
        string += input(f"Enter {i}: ") + " "
    last_id += 1

    with open(file_base, "a", encoding="utf-8") as f:
        f.write(f"{last_id} {string}\n")


def update_contact():
    contact_id = input("Enter contact ID: ")
    updated_data = input("Enter updated data: ")

    with open(file_base, "r+", encoding="utf-8") as f:
        lines = f.readlines()
        for i, line in enumerate(lines):
            if line.startswith(contact_id):
                lines[i] = f"{contact_id} {updated_data}\n"
                break
        f.seek(0)
        f.writelines(lines)


def delete_contact():
    contact_id = input("Enter contact ID: ")

    with open(file_base, "r+", encoding="utf-8") as f:
        lines = f.readlines()
        f.seek(0)
        for line in lines:
            if not line.startswith(contact_id):
                f.write(line)
        f.truncate()


def main_menu():
    play = True
    while play:
        read_records()
        answer = input("Phone book:\n"
                       "1. Show all records\n"
                       "2. Add a record\n"
                       "3. Search a record\n"
                       "4. Change\n"
                       "5. Delete\n"
                       "6. Exp/Imp\n"
                       "7. Exit\n")
        match answer:
            case "1":
                show_all()
            case "2":
                add_new_contact()
            case "3":
                pass
            case "4":
                update_contact()
            case "5":
                delete_contact()
            case "6":
                pass
            case "7":
                play = False
            case _:
                print("Try again!\n")


main_menu()


""" 
Задача 40: Работать с файлом california_housing_train.csv, который находится в
папке sample_data. Определить среднюю стоимость дома, где кол-во людей
от 0 до 500(population).
"""

import pandas as pd

data = pd.read_csv('california_housing_train.csv')
filtered_by_range_population = data[(data['population'] >= 0) & (data['population'] <= 500)]
average_house_value = filtered_by_range_population['median_house_value'].mean()

print("Средняя стоимость дома:", average_house_value)

""" 
Задача 42: Узнать какая максимальная households в зоне минимального значения population.
"""

min_population = data['population'].min()
filtered_by_min_population = data[data['population'] == min_population]
max_households = filtered_by_min_population['households'].max()

print("Максимальное количество для минимального населениия:", max_households)

""" 
Задание 44: В ячейке ниже представлен код генерирующий DataFrame, которая состоит
всего из 1 столбца.Ваша задача перевести его в one hot вид. Сделайте его без
использования метода get_dummies.
"""

import random
import pandas as pd

lst = ['robot'] * 10
lst += ['human'] * 10
random.shuffle(lst)
data = pd.DataFrame({'whoAmI': lst})
data.head()

encoded_data = pd.concat([data['whoAmI'],
                         data['whoAmI'].apply(lambda x: 1 if x == 'human' else 0),
                         data['whoAmI'].apply(lambda x: 1 if x == 'robot' else 0)], axis=1)
encoded_data.columns = ['original', 'human', 'robot']
encoded_data.head()
