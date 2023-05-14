//rules: each word is at least one syllable. a e i o u y
// each vowel represents a syllable except 1. the word ends in e (except when preficed with "l"). 2. when two syllables are back to back. 3. the word ends with y. 

function haikuCheck(poem) {
  //array of lines
  const lineArray = poem.split("/n"); 
  const lines = lineArray.map(function(line){
    return line.replace(/[^\w\s]/, ""); //this removes the punctuation
  })
  // now poem is split into an array of lines without punctuation called lines
  // if lines.length > 3 then it's not a haiku
  if (lines.length != 3) {
    return false;
  } else {
  // split each line into an array of words using map
  // wordArrays;
    // (3) [Array(4), Array(6), Array(3)]
    // 0: (4) ['An', 'old', 'silent', 'pong']
    // 1: (6) ['A', 'frog', 'jumps', 'into', 'the', 'pond-']
    // 2(3) ['Splash!', 'Silence', 'again.']
  const wordArrays = lines.map(function(line) {
      return line.split(" ");
    })
    
  
  }
}

// if two in a row
// if ends in e
// if ends in ed
let vowelChecker = wordArrays.map(vowelTest, wordArrays)


// /
// ^[aeiou]$
// i
// ^ asserts position at start of the string
// Match a single character present in the list below [aeiou]
// aeiou matches a single character in the list aeiou (case insensitive)
// $ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)
// Global pattern flags 
// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
function vowelTest(s) {
  return (/^[aeiou]$/i).test(s);
}

function checkPoemLine(line){
    let sylCount = 0;
    const words = line.split(" ");
    words.map(function(element) {
      count+=sylableCheck(element)
    });
    return sylCount;