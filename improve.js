// understand the function 
// function CalculateSum(arr){
//     let  sum =0;
//     for(let i =0;i<arr.length;i++){
//         sum = sum+ arr[i]
//     }
//     return sum;
// }
// console.log(CalculateSum([1, 2, 3]));

// step-2 Review the code effieciency
// O(n)This function is O(n), which is optimal for summing an array, so we can’t improve the algorithm complexity.
// step -3  Check for Readability

//The code is already simple, but we can use modern ES6 features.
// step-4 refactor the code usong ES-6
//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// const CalculateSum1 = arr=>arr.reduce((sum,num)=>sum+num,0)

// console.log(CalculateSum1([1, 2, 3]));

// // step5
// const CalculateSum2 = arr=>{
//     if(!Array.isArray(arr))throw new Error("input must be array")
//         return arr.reduce((sum,num)=> sum+num,0)
// }
// console.log(CalculateSum2([1, 2, 3]));

// Input: Array of items with key-value properties
let items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { color: 'blue', type: 'book', age: 17 }
  ];
  
  // Exclusion rules as key-value pairs
  const excludes = [
    { k: 'color', v: 'silver' },
    { k: 'type', v: 'tv' }
  ];
  
  // Optimized function to exclude items based on rules
  function excludeItems(items, excludes) {
    // Step 1: Create a Set of exclusion rules
    const exclusionSet = new Set(excludes.map(pair => `${pair.k}:${pair.v}`));
  
    // Step 2: Filter items by checking against exclusion rules
    return items.filter(item => {
      // Check if any key-value pair in the item matches an exclusion rule
      return !Object.entries(item).some(([key, value]) => exclusionSet.has(`${key}:${value}`));
    });
  }
  
  // Step 3: Call the function and log the result
  const filteredItems = excludeItems(items, excludes);
  console.log(filteredItems);

  // step-1
//   Create a Set of Exclusion Rules
//   Purpose: A Set allows constant-time lookups, making it faster to check if a rule applies.
//   Action: Convert each key-value pair from the excludes array into a string format key:value and store it in a Set.
//   javascript
//   Copy code
//   const exclusionSet = new Set(excludes.map(pair => `${pair.k}:${pair.v}`));
  // Result: exclusionSet = Set { "color:silver", "type:tv" }
  
  // step-2
//   Filter the items Array
// Purpose: Go through each item and check if it matches any rule in the exclusionSet.
// Action:
// Use Object.entries(item) to get key-value pairs of the item.
// Use .some() to check if any key-value pair exists in the exclusionSet.
// Return true for items that do not match any rule (i.e., should not be excluded).
// javascript
// Copy code
// items.filter(item => {
//   // Check if any key-value pair matches an exclusion rule
//   return !Object.entries(item).some(([key, value]) => exclusionSet.has(`${key}:${value}`));
// });
// step-3
// : Test and Output the Result
// Purpose: Validate the function with a sample input to ensure correctness.
// Action: Call excludeItems and log the result.
// javascript
// Copy code
// const filteredItems = excludeItems(items, excludes);
// console.log(filteredItems);
// // Output: [ { color: 'blue', type: 'book', age: 17 } 

//What does this function excludeItems do?

// The excludeItems function is designed to filter out items from the items array based on exclusion rules provided in the excludes array.
//  The excludes array contains key-value pairs, where each key-value pair specifies a property (k) and a value (v).
//  If any item in the items array has a property that matches the key-value pair in the excludes array, 
// that item will be excluded from the result.

// Is This Function Working as Expected?
// Issue: The current implementation of excludeItems has a logical flaw.
// It uses item[pair.k] === item[pair.v], which checks if the value of a property (e.g., color, type) matches the property name itself, rather than matching the value against pair.v in the exclusion.
// Fix: The comparison should be item[pair.k] === pair.v instead of item[pair.k] === item[pair.v].

// Time Complexity
// The time complexity of this function is O(n * m), where:
// n is the number of items in the items array.
// m is the number of exclusion rules in the excludes array.
// For each exclusion rule, the function loops through the items array, resulting in a time complexity of O(n * m).
// How to Optimize This Function?
// To optimize, you can:

// Use a Set for Exclusion Rules: Instead of looping through all exclusion rules for each item, you can create a Set of key:value strings to store exclusion rules. This will allow constant-time lookups (O(1)) for each item.
// Batch Filtering: You can process the exclusion rules more efficiently by combining them before filtering.
// function excludeItems(items, excludes) {
//     // Step 1: Create a Set of exclusion rules
//     const exclusionSet = new Set(excludes.map(pair => `${pair.k}:${pair.v}`));
  
//     // Step 2: Filter items based on exclusion rules
//     return items.filter(item => {
//       return !Object.entries(item).some(([key, value]) => exclusionSet.has(`${key}:${value}`));
//     });
//   }
  