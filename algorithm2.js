function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; 
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
// Example
let arr = [15, 7, 20, 9, 4];
console.log("Original array:", arr);

let sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
