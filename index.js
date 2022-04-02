const isPalindrome = word => {
  let comparisonWord = word.split('').reverse().join('')
  return word === comparisonWord
}







// isPalindrome("madam")
// isPalindrome("robot")

// Step one is set a variable to hold the reverse string. 
// Reverse the original string by splitting it into array at each letter/index
  // Then reverse the array 
  // Then join it so it's a string again
// Step two, check if the original string is the same the new comparisonString
  // If so, return true
  // If no, return false

// I came to this conclusion becuase I was overthinking it. The below was returning me an array of the index numbers, not their corresponding letters. I'm sure there is a way around this but I found it simpler to use a string form instead. 
// I think I was having trouble becuase the for loop was looking at the index and pushing the index to the new array. Not the letter. I tried using currentLetter.toString but then it would give me the index number as a string but still a number. 
// My assertion (perhaps assumption) as to why the above, new method works, is because we're not looping. We are simply turning the string into an array, reversing the array, turning the array back into a string, then checking if it's still the same.

// I would still like to try and do this without using built in JavaScript methods but this is what I found easiest and has the best time space complexity of what I was trying to do. 


// function isPalindrome(word) {
//   // Write your algorithm here
//   let comparisonWord = ''
//   let wordArray = word.split('')

//   // for (let currentLetter = wordArray.length - 1; currentLetter >= 0; currentLetter--) {
//   //   console.log("Current letter " + currentLetter.toString())
//   //   comparisonWord += currentLetter.toString()
//   //   //consol

//   for (let currentLetter of wordArray) {

//   }
    
    
//     console.log("Comparison word " + comparisonWord)
//     console.log("OG word " + word)
//   }
// }

// isPalindrome("robot")




/* 
  Add your pseudocode here

  example string: "hello"

  const isPalindrome = ( string ) => {

    let comparisonString = []
    let newString = string.split("")

    for ( let i = newString.length - 1; i >= 0; i-- ) {
      comparisonString.push( i )
      comparisonString.join("")
      newString.join("")                            // this might be unecessary ( see below )
      
      if ( newString === comparisonString ) {       // might be able to just do: if ( string === comparisonString ) => true // if so^^^^
      }                                                           
        return true
      } else {
        return false
      }
    }
  }

  isPalindrome("hello")
  expected output false 

*/

/*
  Add written explanation of your solution here

  1. Set up the function.

  2. The function takes in a string. 

  3. Declare a variable, comparisonString ( empty array to store values of reverse array )

  4. Split the string passed to the function so you have a new array ( newString )

  5. For loop: starts at the last index of the  newString ( now as an array ) and iterates down till it reaches 0 ( aka the first index in the array )
    5a. For each index ( starting at the end ), that index gets pushed into the comparisonString.
    5b. We then join the comparisonString ( input string backwards )
    **** 5c. we then join the newString ( now have a copy of the original string ) ((( if this necessary ??? )))

  6. if statement: Checks if newString( or original string ) is deeply equal to comparisonString

  7. if yes, returns true
  8. if no, returns false


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;






//  the below was an experiment but I an into an issue. When I joined the array back together again it was just an array of index numbers, not letters.

  // for(let i = newString.length-1; i >= 0; i--) {
  //   comparisonString.push(i)
  //   comparisonString.join(",")    
  // }

  // console.log(comparisonString.join(""))

  // if(word == comparisonString) {
  //   return true
  // } else {
  //   return false
  // }


