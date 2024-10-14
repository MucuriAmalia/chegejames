// Define my sentence
let sentence = "I am pursuing a Software Development course to enhance my skills as a Full Stack Developer and Statistician.";
// Declare my counters
let lengthOfSentence = 0;
let wordCount = 0;
let vowelCount = 0;
// Define my vowels
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// Define a variable to check if we are in a word
let inWord = false;

// Loop  each character of my sentence
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    // Count sentence length
    lengthOfSentence++;

    // Check for vowels and count vowelCount
   if (vowels.includes (char)){
    vowelCount++;
   }
    // Check for words and count them
   if (char !== ' ' && char !== '.') {
        if (!inWord) {
            wordCount++;
            inWord = true; 
        }
    } 
    // Reset when encountering a space or point
    else {
        inWord = false;
    }
    // Stop loop if we reach the point
    if (char === '.') {
        break;
    }
}
// Results
console.log("Length of the sentence: " + lengthOfSentence);
console.log("Number of words: " + wordCount);
console.log("Number of vowels: " + vowelCount);
