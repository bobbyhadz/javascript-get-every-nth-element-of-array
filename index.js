// EXAMPLE 1 - Get every Nth Element of Array in JavaScript

function getEveryNth(arr, nth) {
  const result = [];

  for (let index = 0; index < arr.length; index += nth) {
    result.push(arr[index]);
  }

  return result;
}

// 👇️ [1, 3, 5]
console.log(getEveryNth([1, 2, 3, 4, 5, 6], 2));

// 👇️ [2, 8, 14]
console.log(getEveryNth([2, 4, 6, 8, 10, 12, 14], 3));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get every Nth Element of Array using `Array.filter()`

// function getEveryNth(arr, nth) {
//   return arr.filter((_element, index) => {
//     return index % nth === 0;
//   });
// }

// // 👇️ [1, 3, 5]
// console.log(getEveryNth([1, 2, 3, 4, 5, 6], 2));

// // 👇️ [2, 8, 14]
// console.log(getEveryNth([2, 4, 6, 8, 10, 12, 14], 3));
