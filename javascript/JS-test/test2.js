// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  const arr3 = arr2.filter(x => !arr1.includes(x))
  const odd = []
  const even = []

  for(let i of arr3) {
    if(i % 2 === 0) {
      even.push(i)
    } else {
      odd.push(i)
    }
  }

  odd.reverse()

  return answer = [...odd,...arr1,...even]

}

console.log(result(arr1, arr2));