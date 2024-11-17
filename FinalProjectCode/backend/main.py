from flask import *
# import pyrebase
import sqlite3, hashlib, os
from werkzeug.utils import secure_filename
import time
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_cors import cross_origin


cors = CORS()


"""Application-factory pattern"""
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

config = {
  "apiKey": "AIzaSyANHSRMMSf7rPYVjQaEapNfdwpcQYkr7Cc",
  "authDomain": "ui-project-ca34b.firebaseapp.com",
  "databaseURL": "https://ui-project-ca34b-default-rtdb.firebaseio.com/",
  "storageBucket": "ui-project-ca34b.appspot.com"
}

# firebase = pyrebase.initialize_app(config)
# auth = firebase.auth()
# db = firebase.database()

# person = {"is_logged_in": False, "name": "", "email": "", "uid": ""}


# Initialize extensions
# To use the application instances above, instantiate with an application:
cors.init_app(app)

#app = Flask(__name__)
#app.secret_key = 'random string'
# UPLOAD_FOLDER = 'static/uploads'
# ALLOWED_EXTENSIONS = set(['jpeg', 'jpg', 'png', 'gif'])
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# CORS(app)

def dict_factory(cursor, row): 
	"""Converts rows that need to be retrieved into a dictionary object. This function replaces the existing row_factory attribute of the sqlite3 connection object.z"""
	d = {}
	for idx, col in enumerate(cursor.description):
		d[col[0]] = row[idx]
	return d

# def getLoginDetails():
#     with sqlite3.connect('database.db') as conn:
#         cur = conn.cursor()
#         if 'email' not in session:
#             loggedIn = False
#             firstName = ''
#             noOfTrips = 0
#         else:
#             loggedIn = True
#             cur.execute("SELECT userId, firstName FROM users WHERE email = ?", (session['email'], ))
#             userId, firstName = cur.fetchone()
#             cur.execute("SELECT count(tripId) FROM cart WHERE userId = ?", (userId, ))
#             noOfTrips = cur.fetchone()[0]
#     conn.close()
#     return (loggedIn, firstName, noOfTrips)


# @app.route("/", methods=["GET"], strict_slashes=False)
# @cross_origin()
# def root():
#     loggedIn, firstName, noOfTrips = getLoginDetails()
#     return render_template("index.html", loggedIn=loggedIn, firstName=firstName)

# @app.route('/time')
# @cross_origin()
# def get_current_time():
#     print(time.time())
#     response = jsonify('time', time.time())
#     response.headers.add('Access-Control-Allow-Origin', '*')
#     return response

# @app.route("/")
# def login():
#     return render_template("login.html")


# @app.route("/signup")
# def signup():
#     return render_template("signup.html")

# # @app.route("/thankyou")
# def thankyou():
#     if person["is_logged_in"] == True:
#         return render_template("thankyou.html", email = person["email"], name = person["name"])
#     else:
#         return redirect(url_for('login'))

# @app.route("/result", methods = ["POST", "GET"])
# def result():
#     if request.method == "POST":        
#         result = request.form           
#         email = result["email"]
#         password = result["pass"]
#         try:
#             user = auth.sign_in_with_email_and_password(email, password)
#             global person
#             person["is_logged_in"] = True
#             person["email"] = user["email"]
#             person["uid"] = user["localId"]
#             data = db.child("users").get()
#             person["name"] = data.val()[person["uid"]]["name"]

#             return redirect(url_for('thankyou'))
#         except:
#             return redirect(url_for('login'))
#     else:
#         if person["is_logged_in"] == True:
#             return redirect(url_for('thankyou'))
#         else:
#             return redirect(url_for('login'))

# @app.route("/register", methods = ["POST", "GET"])
# def register():
#     if request.method == "POST":       
#         result = request.form           
#         email = result["email"]
#         password = result["pass"]
#         name = result["name"]
#         try:
#             auth.create_user_with_email_and_password(email, password)
#             user = auth.sign_in_with_email_and_password(email, password)
#             global person
#             person["is_logged_in"] = True
#             person["email"] = user["email"]
#             person["uid"] = user["localId"]
#             person["name"] = name
#             data = {"name": name, "email": email}
#             db.child("users").child(person["uid"]).set(data)
#             return redirect(url_for('thankyou'))
#         except:
#             return redirect(url_for('register'))

#     else:
#         if person["is_logged_in"] == True:
#             return redirect(url_for('thankyou'))
#         else:
#             return redirect(url_for('register'))




@app.route("/", methods=['GET'])
@cross_origin()
def api_allTrips():

    # conn = sqlite3.connect('database.db')
    # conn.row_factory = dict_factory
    # cur = conn.cursor()
    # all_trips = cur.execute('SELECT * FROM trips;').fetchall()
    # response = jsonify(all_trips)
    # return response

    with sqlite3.connect("database.db") as conn:
        conn.row_factory = dict_factory
        cur = conn.cursor()
        cur.execute("SELECT * FROM trips")
        allTrips = cur.fetchall()
        cur = conn.cursor()
        #allTrips = cur.execute('SELECT * FROM trips;').fetchall()
        #conn.close()
    return jsonify(allTrips)


@app.route("/hotels/allhotels", methods=['GET'])
@cross_origin()
def api_allHotels():

    conn = sqlite3.connect('database.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_hotels = cur.execute('SELECT * FROM hotels;').fetchall()
    response = jsonify(all_hotels)
    return response


@app.route("/allcart", methods=['GET'])
@cross_origin()
def api_allCart():

    conn = sqlite3.connect('database.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_carts = cur.execute('SELECT * FROM cart;').fetchall()
    response = jsonify(all_carts)
    return response    

@app.route("/allcart2", methods=['GET'])
@cross_origin()
def api_allCart2():

    conn = sqlite3.connect('database.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_carts2= cur.execute('SELECT * FROM cart2;').fetchall()
    response = jsonify(all_carts2)
    return response    

@app.route("/allcart3", methods=['GET'])
@cross_origin()
def api_allCart3():

    conn = sqlite3.connect('database.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_carts3= cur.execute('SELECT * FROM cart3;').fetchall()
    response = jsonify(all_carts3)
    return response    


@app.route("/hotels/addHotel", methods=['GET'])
def api_addHotel():
    if 'hotelId' in request.args:
        hotelId = int(request.args['hotelId'])
    else:
        return "Error: No id field provided. Please specify an id."
    with sqlite3.connect("database.db") as conn:
        cur = conn.cursor()
        cur.execute('''CREATE TABLE IF NOT EXISTS cart(hotelId real PRIMARY KEY, name TEXT,
  price INTEGER,
   description TEXT,
 image TEXT )''')
        record = cur.execute('SELECT * FROM hotels WHERE hotels.hotelId=?',(hotelId,)).fetchone()
        if record==None:
            return "No such hotel exists"
        response = jsonify(record)    
        storage = [(record[0], record[1],record[2],record[3],record[4])]  
        conn.executemany('INSERT OR IGNORE INTO cart VALUES (?,?,?,?,?)',storage)  
        #cur.execute('INSERT OR IGNORE INTO cart VALUES(?,?,?,?,?)',(record['hotelId'],record['name'],record['price'],record['description'],record['image']))
        conn.commit()
        conn.close()
        return "Hotel has been added to the cart"

@app.route("/hotels/deleteHotel", methods=['GET'])
def api_deleteHotel():
    if 'hotelId' in request.args:
        hotelId = int(request.args['hotelId'])
    else:
        return "Error: No id field provided. Please specify an id."

    with sqlite3.connect("database.db") as conn:
        cur = conn.cursor()
        cur.execute('''CREATE TABLE IF NOT EXISTS cart(hotelId real PRIMARY KEY, name TEXT,
  price INTEGER,
   description TEXT,
 image TEXT )''')
        cur.execute('DELETE FROM cart WHERE hotelId=?',(hotelId,))
        conn.commit()
        conn.close()
        return 'Successfully deleted hotel'

@app.route("/restaurants/allrestaurants", methods=['GET'])
@cross_origin()
def api_allRestaurants():

    conn = sqlite3.connect('database.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_restaurants = cur.execute('SELECT * FROM restaurants;').fetchall()
    response = jsonify(all_restaurants)
    return response

@app.route("/resturant/addresturant", methods=['GET'])
def api_addRestaurant():
    if 'restaurantId' in request.args:
        restaurantId = int(request.args['restaurantId'])
    else:
        return "Error: No id field provided. Please specify an id."
    with sqlite3.connect("database.db") as conn:
        cur = conn.cursor()
        cur.execute('''CREATE TABLE IF NOT EXISTS cart2(restaurantId real PRIMARY KEY, name TEXT,
  price INTEGER,
   description TEXT,
 image TEXT )''')
        record = cur.execute('SELECT * FROM restaurants WHERE restaurants.restaurantId=?',(restaurantId,)).fetchone()
        if record==None:
            return "No such resturant exists"
        response = jsonify(record)    
        storage = [(record[0], record[1],record[2],record[3],record[4])]  
        conn.executemany('INSERT OR IGNORE INTO cart2 VALUES (?,?,?,?,?)',storage)  
        #cur.execute('INSERT OR IGNORE INTO cart VALUES(?,?,?,?,?)',(record['hotelId'],record['name'],record['price'],record['description'],record['image']))
        conn.commit()
        conn.close()
        return "Hotel has been added to the cart"

@app.route("/resturant/deleteresturant", methods=['GET'])
def api_deleteRestaurant():
    if 'restaurantId' in request.args:
        restaurantId = int(request.args['restaurantId'])
    else:
        return "Error: No id field provided. Please specify an id."

    with sqlite3.connect("database.db") as conn:
        cur = conn.cursor()
        cur.execute('''CREATE TABLE IF NOT EXISTS cart2(restaurantId real PRIMARY KEY, name TEXT,
  price INTEGER,
   description TEXT,
 image TEXT )''')
        cur.execute('DELETE FROM cart2 WHERE restaurantId=?',(restaurantId,))
        conn.commit()
        conn.close()
        return 'Successfully deleted resturant'
        
#for flights begin change
@app.route("/flights/allflights", methods=['GET'])
@cross_origin()
def api_allflights():

    conn = sqlite3.connect('database.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_flights = cur.execute('SELECT * FROM flights;').fetchall()
    response = jsonify(all_flights)
    return response

@app.route("/flights/addflights", methods=['GET'])
def api_addflights():
    if 'flightsId' in request.args:
        flightsId = int(request.args['flightsId'])
    else:
        return "Error: No id field provided. Please specify an id."
    with sqlite3.connect("database.db") as conn:
        cur = conn.cursor()
        cur.execute('''CREATE TABLE IF NOT EXISTS cart3(flightsId real PRIMARY KEY, name TEXT,
  price INTEGER,
   description TEXT,
 image TEXT )''')
        record = cur.execute('SELECT * FROM flights WHERE flights.flightsId=?',(flightsId,)).fetchone()
        if record==None:
            return "No such flight exists"
        response = jsonify(record)    
        storage = [(record[0], record[1],record[2],record[3],record[4])]  
        conn.executemany('INSERT OR IGNORE INTO cart3 VALUES (?,?,?,?,?)',storage)  
        #cur.execute('INSERT OR IGNORE INTO cart VALUES(?,?,?,?,?)',(record['flightsId'],record['name'],record['price'],record['description'],record['image']))
        conn.commit()
        conn.close()
        return "flight has been added to the cart"

@app.route("/flights/deleteflights", methods=['GET'])
def api_deleteflights():
    if 'flightsId' in request.args:
        flightsId = int(request.args['flightsId'])
    else:
        return "Error: No id field provided. Please specify an id."

    with sqlite3.connect("database.db") as conn:
        cur = conn.cursor()
        cur.execute('''CREATE TABLE IF NOT EXISTS cart3(flightsId real PRIMARY KEY, name TEXT,
  price INTEGER,
   description TEXT,
 image TEXT )''')
        cur.execute('DELETE FROM cart3 WHERE flightsId=?',(flightsId,))
        conn.commit()
        conn.close()
        return 'Successfully deleted flight'       
# @app.route("/addItem", methods=["GET", "POST"])
# def addItem():
#     if request.method == "POST":
#         name = request.form["name"]
#         price = float(request.form["price"])
#         description = request.form["description"]
#         stock = int(request.form["stock"])
#         categoryId = int(request.form["category"])
#         #Uploading image procedure
#         image = request.files["image"]
#     if image:
#         filename = secure_filename(image.filename)
#         image.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
#         imagename = filename
#     with sqlite3.connect("database.db") as conn:
#         try:
#             cur = conn.cursor()
#             cur.execute("""INSERT INTO trips (image) VALUES (?)""", (imagename))
#             conn.commit()
#             msg= "added successfully"
#         except:
#             msg= "error occured"
#             conn.rollback()
#             conn.close()
#             print(msg)
#     return redirect(url_for("root"))

# @app.route("/remove")
# def remove():
#     with sqlite3.connect("database.db") as conn:
#         cur = conn.cursor()
#         cur.execute("SELECT tripId, name, price, description, image, stock FROM trips")
#         data = cur.fetchall()
#         conn.close()
#     return render_template("remove.html", data=data)


# @app.route("/removeTrip")
# def removeTrip():
#     tripId = request.args.get("tripId")
#     with sqlite3.connect("database.db") as conn:
#         try:
#             cur = conn.cursor()
#             cur.execute("DELETE FROM trips WHERE tripID = ?", (tripId, ))
#             conn.commit()
#             msg = "Deleted successsfully"
#         except:
#             conn.rollback()
#             msg = "Error occured"
#             conn.close()
#             print(msg)
#     return redirect(url_for("root"))

if __name__ == '__main__':
    app.run(debug=True)