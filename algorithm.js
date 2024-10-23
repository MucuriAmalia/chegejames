let sentence = "I am pursuing a Software Development course to enhance my skills as a Full Stack Developer and Statistician.";
let lengthOfSentence = 0;
let wordCount = 0;
let vowelCount = 0;
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let inWord = false;


for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    lengthOfSentence++;

   if (vowels.includes (char)){
    vowelCount++;
   }
  
   if (char !== ' ' && char !== '.') {
        if (!inWord) {
            wordCount++;
            inWord = true; 
        }
    } 
    else {
        inWord = false;
    }
    if (char === '.') {
        break;
    }
}
console.log("Length of the sentence: " + lengthOfSentence);
console.log("Number of words: " + wordCount);
console.log("Number of vowels: " + vowelCount);
