// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  // Your Code Here
  return input.reduce((total, number) => { return total += number }, 0)
}

console.log(result(input));