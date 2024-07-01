// METHOD 1
// let numbers = [1,2,3,4,5,6,7,8,9,10];


// function calculateStats(arr) {
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     let sum = arr.reduce((acc, num) => acc + num, 0);
//     let avg = sum / arr.length;

    
//     document.getElementById("max").innerHTML = "Maximum: " + max;
//     document.getElementById("min").innerHTML = "Minimum: " + min;
//     document.getElementById("sum").innerHTML = "Sum: " + sum;
//     document.getElementById("avg").innerHTML = "Average: " + avg.toFixed(2); 
// }
// calculateStats(numbers);
 



// METHOD 2
// Sample array of numbers
let numbers = [10, 5, 8, 3, 15, 7, 6, 12];

// Function to calculate maximum, minimum, sum, and average
function calculateStats(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i]; // sum = sum + arr[i]
    }
    let avg = sum / arr.length;

    // Update inner HTML of the elements
    document.getElementById("max").innerHTML = "Maximum: " + max;
    document.getElementById("min").innerHTML = "Minimum: " + min;
    document.getElementById("sum").innerHTML = "Sum: " + sum;
    document.getElementById("avg").innerHTML = "Average: " + avg.toFixed(2); // To print average up to 2 decimal places
}

// Call the function with the numbers array
calculateStats(numbers);









