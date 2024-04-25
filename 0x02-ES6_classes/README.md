# 0x02. ES6 Classes 📚

<code>OOP</code>  <code>JavaScript</code> <code>ES6</code>

## Resources
Read or watch:
- Classes
- Metaprogramming

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone,
without the help of Google:
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire
project running npm run full-test

## Setup
Install NodeJS 12.11.x

<br></br>

```
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

<br></br>

## Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel and ESList by using the supplied
package.json and run npm install.

## Configuration files:
Add the files below to your project directory
```
    package.json
    babel.config.js
    .eslintrc.js
```

<br></br>

## Finally…
Don’t forget to run npm install from the terminal of your project folder to
install all necessary project dependencies.

# Tasks

## Task 0. You used to attend a place like this
Implement a class named ClassRoom with a constructor that accepts
maxStudentsSize (Number) and assigns it to _maxStudentsSize.
-	Edge Test: Check if the ClassRoom instance has the correct
_maxStudentsSize value.

## 1. Let's make some classrooms
Import the ClassRoom class from 0-classroom.js.
-	Implement a function named initializeRooms that returns an array of 3
ClassRoom objects with sizes 19, 20, and 34 (in this order).
-	Edge Test: Verify that the array contains the expected ClassRoom
instances with the correct sizes.

## Task 2. A Course, Getters, and Setters
Implement a class named HolbertonCourse with a constructor that accepts name
(String), length (Number), and students (Array of Strings).
-	Implement getters and setters for each attribute.
-	Edge Test: Verify that attempting to set attributes with incorrect
types throws the expected errors.

## Task 3. Methods, static methods, computed methods names..... MONEY
Implement a class named Currency with a constructor that accepts code (String)
and name (String).
-	Implement getters and setters for each attribute.
-	Implement a method named displayFullCurrency that returns the
attributes in the format: name (code).
-	Edge Test: Check if the displayFullCurrency method returns the expected
format.

## Task 4. Pricing
Import the Currency class from 3-currency.js.
-	Implement a class named Pricing with a constructor that accepts
<code>amount (Number)</code> and <code>currency (Currency)</code>.
-	Implement getters and setters for each attribute.
-	Implement a method named displayFullPrice that returns the attributes in
the format: <code>amount currency_name (currency_code)</code>.
-	Implement a static method named convertPrice that accepts
<code>amount (Number)</code> and <code>conversionRate (Number)</code> and
returns the <code>converted price</code>.
-	Edge Test: Verify that displayFullPrice and convertPrice methods work
as expected.

## Task 5. A Building
Implement a class named Building with a constructor that accepts sqft (Number).
-	Implement a getter for sqft.
-	Make the class abstract and ensure that any class extending from it
must implement a method named evacuationWarningMessage.
-	Edge Test: Ensure that attempting to create an instance of Building
throws an error.

## Task 6. Inheritance
Import Building from 5-building.js.
-	Implement a class named SkyHighBuilding that extends Building with a
constructor that accepts <code>sqft (Number)</code> and <code>floors (Number)</code>.
-	Implement getters for <code>sqft</code> and <code>floors</code>.
-	Override the method <code>evacuationWarningMessage</code> to return:
Evacuate slowly the <code>NUMBER_OF_FLOORS</code> floors.
-	Edge Test: Verify that the SkyHighBuilding class inherits from Building
and overrides the method as expected.

## Task 7. Airport
Implement a class named Airport with a constructor that accepts name (String)
and code (String).
-	Implement getters for name and code.
- Override the default toString method to return the airport code.
- Edge Test: Check if the default toString method returns the airport code.

## Task 8. Primitive - Holberton Class
Implement a class named HolbertonClass with a constructor that accepts size (Number) and location (String).
        Implement getters for size and location.
        Implement implicit conversions for Number and String.
        Edge Test: Verify that casting to Number returns the size and casting to String returns the location.

    9. Hoisting
        Fix the given code and make it work.
        Ensure that the StudentHolberton class references the HolbertonClass class correctly.
        Edge Test: Confirm that the corrected code executes without errors and produces the expected output.

    10. Vroom
        Implement a class named Car with a constructor that accepts brand (String), motor (String), and color (String).
        Implement getters for brand, motor, and color.
        Add a method named cloneCar that returns a new object of the class.
        Edge Test: Verify that calling cloneCar returns a new instance of Car.

    11. EVCar
        Import Car from 10-car.js.
        Implement a class named EVCar that extends Car with a constructor that accepts brand (String), motor (String), color (String), and range (String).
        Implement getters for brand, motor, color, and range.
        Override the cloneCar method to return an instance of Car.
        Edge Test: Check if cloneCar returns an instance of Car when called on an EVCar object.
