import bcrypt

# Contraseña a hashear
password = "Windows2024!".encode('utf-8')

# Generar el hash
hashed = bcrypt.hashpw(password, bcrypt.gensalt())

# Convertir a formato string para SQL
print(hashed.decode('utf-8'))
