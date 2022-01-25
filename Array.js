/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
const sum = function (x, y) {
  if (x === y) {
    return 6 * x;
  } else {
    return x + y;
  }
};
// console.log("Exercise 1:")
// console.log(sum(2,3))
// console.log(sum(4,4))
/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
const check = (x, y) => {
  if (x == 50 || y == 50) {
    return true;
  } else if (x + y == 50) {
    return true;
  } else return false;
};
// console.log(check(51,5))
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
const removeCharacter = (x, y) => {
  const string = y.split("");
  if (x > -1) {
    string.splice(x, 1);
    return string;
  } else return "The index must be 0 or greater.";
};
// console.log(removeCharacter(-2, "hello"))
/* 4. Create a function to find and return the largest of three given integers. */
const findLargest = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else return z;
};
// console.log(findLargest(5,2,4))
/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
const inRange = (x, y) => {
  if ((x >= 40 && x <= 60) || (x >= 70 && x <= 100)) {
    if ((y >= 40 && y <= 60) || (y >= 70 && y <= 100)) {
      return true;
    } else return false;
  } else return false;
};
// console.log(inRange(80,20))
/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
const copy = (x, y) => {
  console.log(x);
  console.log(typeof x);
  if (typeof x == "string" && y > 0) {
    let result = x;
    for (let i = 0; i < y; i++) {
      result += x;
    }
    return result;
  } else return "check parameters";
};
// console.log(copy("hey ", 4))
/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
const beginsWith = (x) => {
  str = x.trim();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New")
    return true;
  else return false;
};
// console.log(beginsWith("New York"))
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
const sumArray = (x) => {
  if (x.length == 3) {
    return x[0] + x[1] + x[2];
  } else return "array must have 3 elements";
};
// console.log(sumArray([1, 2, 3, 5]))
/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
const contains = (x) => {
  if (x.length == 2) {
    if (x[0] == 1 || x[1] == 1 || x[0] == 3 || x[1] == 3) return true;
    else return false;
  } else return "array must have 2 elements";
};
// console.log(contains([2,3]))
/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
const notContains = (x) => {
  if (x.length == 2) {
    if (x[0] != 1 && x[1] != 1 && x[0] != 3 && x[1] != 3) return true;
    else return false;
  } else return "array must have 2 elements";
};
// console.log(notContains([2,3]))
/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */
const arr = ["hi", "hey", "hello"];
const longestString = (x) => {
  let longest = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i].length > longest) {
      longest = x[i].length;
      result = x[i];
    }
  }
  return result;
};
// console.log(longestString(arr))
/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
const angleType = (x) =>
  x >= 0 && x < 90
    ? "acute"
    : x === 90
    ? "right"
    : x >= 90 && x <= 180
    ? "obtuse"
    : x === 180
    ? "straight"
    : "please provide an angle between 0 and 180 degrees";
// console.log(angleType(290))

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
const findIndex = (x) => {
  let largest = x[0];
  let index = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] > largest) {
      largest = x[i];
      index = i;
    }
  }
  return index;
};
// console.log(findIndex([7, 2, 4, 25, 17, 5]))

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
const findEven = (x) => {
  let evens = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      evens.push(x[i]);
    }
  }
  let largest = evens[0];
  for (let i = 0; i < evens.length; i++) {
    if (evens[i] > largest) {
      largest = evens[i];
    }
  }
  return largest;
};
// console.log(findEven([1, 3, 5, 6, 2, 10, 13, 11, 15, 8, 20]))

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
const positiveNegative = (x, y) => {
  if ((x > 0 && y < 0) || (x < 0 && y > 0)) return true;
  else return false;
};
// console.log(positiveNegative(-4,2))
/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
const convert = str => {
    if (str.length >= 3) {
        const result = []
        let arr = str.split("")
        result.push(arr.slice(0, 3).join("").toLowerCase())
        result.push(arr.slice(3).join("").toUpperCase())
        return result.join("")
    } else return str.toUpperCase()
}
// console.log(convert("foo"))
/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
const strangeSum = (x, y) => {
  let sum = x + y;
  return sum >= 50 && sum <= 80 ? "65" : "80";
};
// console.log(strangeSum(25, 60))
/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
const makeAcronym = (x) => {
  let result = [];
  let arr = x.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i].trim();
    let newArr = arr[i].split("");
    let letter = newArr[0].toUpperCase();
    result.push(letter);
  }
  return result.join("");
};
// console.log(makeAcronym("we already won"))
