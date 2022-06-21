function isPalindrome(word) {
  // Regular Expression (patterns used to match character combos)
  // can also use * /[\W_]/g *
  let regExp = /[^A-Za-z0-9]/g
  
  // .toLowerCase() => makes the word/string lowercase
  // .replace(regExp, '') => removes spaces & punctuation
  let lowercaseWord = word.toLowerCase().replace(regExp, '')
  
  // .split() => taking the word/string & splitting it into individual letters
  // .reverse() => reverse the word/string/letters after splitting
  // .join() => joins the reverse word/string/letters
  let reverseWord = lowercaseWord.split('').reverse().join('')

  // checking to see if the lowercaseWord & reverseWord are exactly the same (palindrome)
  return reverseWord === lowercaseWord
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
