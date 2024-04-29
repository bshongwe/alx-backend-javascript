# 0x03. ES6 data manipulation 📚⚖️ 📅

## Resources 📚

Read or watch:
- Array
- Typed Array
- Set Data Structure
- Map Data Structure
- WeakMap

## Learning Objectives 🎓
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- How to use map, filter, and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements 📝
-	All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
-	Allowed editors: vi, vim, emacs, Visual Studio Code
-	All your files should end with a new line
-	A README.md file, at the root of the folder of the project, is mandatory
-	Your code should use the js extension
-	Your code will be tested using Jest and the command npm run test
-	Your code will be verified against lint using ESLint
-	Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
-	All of your functions must be exported

# Tasks 📝

## Task 0. Basic list of objects (mandatory)
Create a function named `getListStudents` that returns an array of objects.
-	Each object should have three attributes: id (Number),
<code>firstName</code> (String), and <code>location</code> (String).

## 1. More mapping (mandatory)
Create a function `getListStudentIds` that returns an array of ids from a list
of object.
-	This function is taking one argument which is an array of
objects - and this array is the same format as getListStudents from the
previous task.
-	If the argument is not an array, the function is returning an empty
array.
-	You must use the map function on the array.

## 2. Filter (mandatory)
Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

## 3. Reduce (mandatory)
Create a function `getStudentIdsSum` that returns the sum of all the student ids.

## 4. Combine (mandatory)
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

## 5. Typed Arrays (mandatory)
Create a function `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

## 6. Set data structure (mandatory)
Create a function `setFromArray` that returns a Set from an array.

## 7. More set data structure (mandatory)
Create a function `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

## 8. Clean set (mandatory)
Create a function `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

## 9. Map data structure (mandatory)
Create a function `groceriesList` that returns a map of groceries with the name and quantity.

## 10. More map data structure (mandatory)
Create a function `updateUniqueItems` that returns an updated map for all items with an initial quantity of 1.

## 11. Weak link data structure (#advanced)
Export a const instance of WeakMap and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument.


