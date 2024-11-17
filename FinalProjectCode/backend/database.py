import sqlite3 
#Open database
conn = sqlite3.connect('database.db')


# #Create table
# conn.execute('''CREATE TABLE users 
#   (userId INTEGER PRIMARY KEY, 
#   password TEXT,
#   email TEXT,
#   firstName TEXT,
#   lastName TEXT,
#   address1 TEXT,
#   address2 TEXT,
#   zipcode TEXT,
#   city TEXT,
#   state TEXT,
#   country TEXT, 
#   phone TEXT
#   )''')

# conn.execute('''CREATE TABLE hotels
#   (hotelId INTEGER PRIMARY KEY,
#   name TEXT,
#   price INTEGER,
#   description TEXT,
#   image TEXT
#   )''')

# conn.execute('''CREATE TABLE flights
#   (flightId INTEGER PRIMARY KEY,
#   name TEXT,
#   price INTEGER,
#   description TEXT,
#   image TEXT
#   )''')

# conn.execute('''CREATE TABLE cart3
#   (flightId INTEGER PRIMARY KEY,
#   name TEXT,
#   price INTEGER,
#   description TEXT,
#   image TEXT
#   )''')

# conn.execute('''CREATE TABLE trips
#   (userId INTEGER,
#   tripId INTEGER PRIMARY KEY,
#   FOREIGN KEY(userId) REFERENCES users(userId),
#   FOREIGN KEY(tripId) REFERENCES hotels(hotelId)
#   )''')

# storage = [(13,'Asiana Airlines', 1200, "come fly with us!", "https://images.unsplash.com/photo-1637739306321-a6702e60fd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF2ZSUyMGFuZCUyMGJ1c3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60")]
# conn.executemany('INSERT INTO flights VALUES (?,?,?,?,?)',storage)
conn.commit()
conn.close()