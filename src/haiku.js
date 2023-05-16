//rules: each word is at least one syllable. a e i o u y
// each vowel represents a syllable except 1. the word ends in e (except when preficed with "l"). 2. when two syllables are back to back. 3. the word ends with y. 
 
//Edge cases: if number?, non-english character?,
// poem = "An old silent pond\nA frog jumps into the pond—\nSplash! Silence again."
function haikuCheck(poem) {
  //split array by lines
  const lineArray = poem.split("\n"); 
  //removes punctuation
  const lines = lineArray.map(line => line.replace(/[^\w\s]/, "")); 
  //reg ex wizardry
  const syllableCount = lines.map(line => line.match(/([aeiouyAEIOUY]+[^e\s])|([aiouyAIOUY]+\b)|(\b[^aeiouy]+e\b)|([\w]+ee)/gm).length)
  //win????
  return JSON.stringify(syllableCount) == JSON.stringify([5, 7, 5]);
}


function findInteriorSyllable(line){
  return line.match(/([aeiouyAEIOUY]+[^e\s])/gm); // ['An', 'ol', 'si', 'le', 'po']
}
function endOfWordSyllable(line){
  return line.match(/([aiouyAIOUY]+\b)/gm);
}
function hasSingleE(line){
  return line.match(/(\b[^aeiouy]+e\b)/gm);
}
function doubleE(line){
  return line.match(/[\w]+ee)/gm);
}

treat
ambi 
tree
entree



//removes punctuation
// function replacePunctuation(line){
//   line.replace(/[^\w\s]/, "");
// }

// function 🤮🤮🤮(poem) {
//   return JSON.stringify(poem.split("\n").map(line => line.replace(/[^\w\s]/, "")).map(line => line.match(/([aeiouyAEIOUY]+[^e\s])|([aiouyAEIOUY]+\b)|(\b[^aeiouy]+e\b)/gm).length)) === JSON.stringify([5, 7, 5]);
// }
//
    
//    
//    function(line){
//      return line.split(" ");
//    })
//  }


// if two vowles in a row
// if ends in e
// if ends in ed
//let vowelChecker = wordArrays.map(vowelTest, wordArrays)
let vowelChecker = wordArrays.
[5, 7, 5]
// vowelChecker === [5, 7, 5]


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

  }

  // ([aeiouyAEIOUY]+[^e.\s])|([aiouyAEIOUY]+\b)|(\b[^aeiouy0-9.']+e\b)

  new Regex  (pattern, rules (i)(m))


  // An old silent pond\nA frog jumps into the pond—\nSplash! Silence again.

    // split each line into an array of words using map
  // wordArrays;
    // (3) [Array(4), Array(6), Array(3)]
    // 0: (4) ['An', 'old', 'silent', 'pong']
    // 1: (6) ['A', 'frog', 'jumps', 'into', 'the', 'pond-']
    // 2(3) ['Splash!', 'Silence', 'again.']