import sqlite3

# Connect to the HealthNet database
conn = sqlite3.connect('HealthNet.db')
cursor = conn.cursor()

try:
    cursor.execute("DROP TABLE IF EXISTS Hospital;")
    print("Doctor table dropped successfully.")
    cursor.execute("DROP TABLE IF EXISTS SignupRequest;")
    print("SignupRequest table dropped successfully.")
except Exception as e:
    print("SignupRequest dropping Doctor table:", e)

conn.commit()
conn.close()