import base64

print('Available data formats: array of integers, hex;')
print('Available target formats: askii, bytes, base64;')
print('')

user_data = input('Your data:')
from_format = input('Data format:')
to_format = input('Target format:')
result = ''

if from_format == 'int_array':
    if to_format == 'askii':
        for n in user_data:
            result = result + chr(n) 
elif from_format == 'hex':
    if to_format == 'bytes':
        result = bytes.fromhex(user_data)
    if to_format == 'base64':
        result = base64.b64encode(bytes.fromhex(user_data))
else:
    result = 'Could not process. The result is the same as your source data.'

print('Result:')
print(result)
