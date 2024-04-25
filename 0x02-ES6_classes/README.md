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
### Install NodeJS 12.11.x

<br></br>

(in your home directory):

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

<br></br>

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel and ESList by using the supplied
package.json and run npm install.

### Configuration files:
Add the files below to your project directory

```
    package.json
    babel.config.js
    .eslintrc.js
```

<br></br>

### Finally…
Don’t forget to run npm install from the terminal of your project folder to
install all necessary project dependencies.

# Tasks

## Task 0. You used to attend a place like this
Implement a class named ClassRoom with a constructor that accepts
maxStudentsSize (Number) and assigns it to _maxStudentsSize.
-	Edge Test: Check if the ClassRoom instance has the correct
_maxStudentsSize value.

## 1. Let's make some classrooms
Import the <code>ClassRoom</code> class from <code>0-classroom.js</code>.
-	Implement a function named <code>initializeRooms</code> that returns an
array of 3 <code>ClassRoom</code> objects with sizes 19, 20, and 34 (in this
order).
-	Edge Test: Verify that the array contains the expected
<code>ClassRoom</code> instances with the correct sizes.

## Task 2. A Course, Getters, and Setters
Implement a class named <code>HolbertonCourse</code> with a constructor that
accepts <code>name (String)</code>, <code>length (Number)</code>, and
<code>students (Array of Strings)</code>.
-	Implement getters and setters for each attribute.
-	Edge Test: Verify that attempting to set attributes with incorrect
types throws the expected errors.

## Task 3. Methods, static methods, computed methods names..... MONEY
Implement a class named <code>Currency</code> with a constructor that accepts
<code>code (String)</code> and <code>name (String)</code>.
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
Implement a class named <code>Building</code> with a constructor that accepts
</code>sqft (Number)</code>.
-	Implement a <code>getter</code> for <code>sqft</code>.
-	Make the class abstract and ensure that any class extending from it
must implement a method named <code>evacuationWarningMessage</code>.
-	Edge Test: Ensure that attempting to create an instance of
<code>Building</code> throws an error.

## Task 6. Inheritance
Import Building from 5-building.js.
-	Implement a class named <code>SkyHighBuilding</code> that extends
<code>Building</code> with a constructor that accepts
<code>sqft (Number)</code> and <code>floors (Number)</code>.
-	Implement getters for <code>sqft</code> and <code>floors</code>.
-	Override the method <code>evacuationWarningMessage</code> to return:
Evacuate slowly the <code>NUMBER_OF_FLOORS</code> floors.
-	Edge Test: Verify that the <code>SkyHighBuilding</code> class inherits
from Building and overrides the method as expected.

## Task 7. Airport
Implement a class named <code>Airport</code> with a constructor that accepts
<code>name (String)</code> and <code>code (String)</code>.
-	Implement getters for name and code.
- Override the default <code>toString</code> method to return the
<code>airport</code> code.
- Edge Test: Check if the default <code>toString</code> method returns the
<code>airport</code> code.

## Task 8. Primitive - Holberton Class
Implement a class named <code>HolbertonClass</code> with a constructor that
accepts <code>size (Number)</code> and <code>location (String)</code>.
-	Implement getters for size and location.
-	Implement implicit conversions for <code>Number</code> and
<code>String</code>.
-	Edge Test: Verify that casting to Number returns the size and casting
to <code>String</code> returns the <code>location</code>.

## Task 9. Hoisting
Fix the given code and make it work.
-	Ensure that the StudentHolberton class references the
<code>HolbertonClass</code> class correctly.
-	Edge Test: Confirm that the corrected code executes without errors and
produces the expected output.

## Task 10. Vroom
Implement a class named <code>Car</code> with a constructor that accepts
<code>brand (String)</code>, <code>motor (String)</code>, and <code>color (String)</code>.
-	Implement getters for <code>brand</code> , <code>motor</code> and <code>color</code>.
-	Add a method named <code>cloneCar</code> that returns a new object of
the class.
-	Edge Test: Verify that calling cloneCar returns a new instance of Car.

## Task 11. EVCar
Import <code>Car</code> from <code>10-car.js</code>.
-	Implement a class named <code>EVCar</code> that extends
<code>Car</code> with a constructor that accepts <code>brand (String)</code>,
<code>motor (String)</code>, <code>color (String)</code>, and
<code>range (String)</code>.
-	Implement getters for brand, motor, color, and range.
-	Override the <code>cloneCar</code> method to return an instance of <code>Car</code>.
-	Edge Test: Check if <code>cloneCar</code> returns an instance of
<code>Car</code> when called on an <code>EVCar</code> object.
