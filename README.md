# batfolio-inc-final-project: Trip Planner, A Potassium Group Idea
For the final project of CS320 User Interface, the Batfolio Group were tasked with creating TripPlanner, an one-stop application for all things trip related.

According to The Potassium Group (our client)
“The primary job of this application is to simplify and consolidate the complex and involved process of planning and managing a vacation.”  

## Motivation

The primary purpose of this application is to simplify the process of trip planning. Through our research and needfinding (see slides in repo for more details), we found that users want an all in one website that takes care of their travel needs. We also realized that travel sites should include information on the most popular tourist attractions and finally: easily accessible and simple to use websites are of a priority to users.
 

## Developer Bios

**Bolanle Oladeji :**

Bolanle is a fourth year Computer Science student at The College of Wooster (COW).

**Aavash Upadhyaya :**

Aavash is also a fourth year Computer Science student at COW.

**Turbat Enkhtur :**

Turbat is a third year Computer Science student at COW.

## How to Setup and Build Trip Planner


## Backend - Flask
### Installation
                    
### 1 .Clone the git repo and create an environment 
          
Depending on your operating system,make a virtual environment
          
**Windows**
          
```bash
git clone https://github.com/Wooster-CS320-UI-Fall22/batfolio-inc-final-project.git
cd FinalProjectCode/backend
py -3 -m venv venv
```
          
**macOS/Linux**
          
```bash
git clone https://github.com/Wooster-CS320-UI-Fall22/batfolio-inc-final-project.git
cd FinalProjectCode/backend
python3 -m venv venv
```

### 2 .Activate the environment
          
**Windows** 

```venv\Scripts\activate```
          
**macOS**

```. venv/bin/activate```
or
```source venv/bin/activate```

### 3 .Install the requirements

Applies for windows/macOS/Linux

```pip install -r requirements.txt```


### 5. Run the application 

**For macOS**
Make the run file executable by running the code

```chmod 777 run```

Then start the application by executing the run file

```./run```

**On windows**

`python main.py`

** You want to make a new terminal in VS Code to run the frontend, so that you can run both backend and frontend simultaneously like below: **


<img width="995" alt="Screen Shot 2022-12-11 at 8 27 04 AM" src="https://user-images.githubusercontent.com/64922713/206891509-ebc1e72f-0389-4de7-a715-d290c75deb57.png">


## Frontend 

### Installation

First, we need to install the packages listed in package.json, in the frontend folder.

```
cd FinalProjectCode/frontend
npm install
```

`npm start`


## How to Use Trip Planner

### First off, let's sign up!
<img width="478" alt="jlo_nbc_meme" src="https://user-images.githubusercontent.com/64922713/206892144-d43c4aac-0b1e-4069-aa86-3b529a7ae12f.png">



<img width="1440" alt="WelcomePg" src="https://user-images.githubusercontent.com/77792660/206988993-6fede41b-11fc-453a-bbe4-946b07f275e4.png">

Click the Sign Up Button:

<img width="1440" alt="Signup" src="https://user-images.githubusercontent.com/77792660/206933540-23c56529-eebd-4632-8e6e-9d4845ddbfc4.png">

Make sure to select your destination please!🤗


<img width="1438" alt="LandingPg" src="https://user-images.githubusercontent.com/77792660/206988778-c2b16dd2-fc74-45fb-9a4e-d6278e7979d5.png">


Then, you are brought to the main page of selecting flights

<img width="1440" alt="FlightsPg" src="https://user-images.githubusercontent.com/61502798/207222005-31eed0bd-3437-4e2d-8fc5-2af09578c7c4.png">


Follow the breadcrumb, to navigate to hotels and restaurants.

If you would like to finalize your trip, click the button Finalize Trip on any of the Flight -> Restaurant -> Hotels pages,
or view everything in the MyTrips.


<img width="1440" alt="MyTripsPg" src="https://user-images.githubusercontent.com/61502798/207221887-30ac50ff-1fcf-4f68-af1b-2774868713cb.png">

Please Log Out when you are done. Note: your reservations and log in info will not persist after logging out, because local storage is cleared once the log out button is clicked.


Thank you for using Trip Planner! If you have any questions please reach out to the team. 


Note: Partially adapted from https://dev.to/dev_elie/connecting-a-react-frontend-to-a-flask-backend-h1o instructions 


