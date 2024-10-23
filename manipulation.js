// Reversing a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("aron mucuri"));
  

// Counting characters
  function countCharacters(str){
    return str.length;
  }
  console.log(countCharacters("Your name is Amalia Mucuri"));

  // Capitalizing words
  function capitalizeWords(sentence){
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }
  console.log(capitalizeWords("mucuri aron is the great"));

  // Finding Maximum and Minimum number
  function findMax(arr){
    return Math.max(...arr)
  }
  function findMin(arr){
    return Math.min(...arr);
  }
  const array = [5, 7, 4, 8, 2];
  console.log(findMax(array));
  console.log(findMin(array));

  //Sum of all elements in an array
  function sumArray(arr){
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sumArray([10, 20, 30, 40, 50]));

  // Filter out even numbers
  function filterOddNumbers(arr){
    return arr.filter( num => num % 2 !==0);
  }
  console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  // Factorial
  function factorial(n){
    if (n === 0){
        return 1;
    }
    return n * factorial(n -1);
  }
  console.log(factorial(10));

  // Checking if a number is prime
  function checkPrime(num){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
  }
  console.log(checkPrime(13));
  
  // Fibonacci sequence 
  function fibonacci(n){
    const sequence = [0, 1];
    for (let i = 2; i < n; i++){
        sequence.push(sequence[i -1] + sequence[i - 2]);
    }
    return sequence;
  }
  console.log(fibonacci(7));