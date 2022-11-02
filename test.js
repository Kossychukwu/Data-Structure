//finding the sum of distinct numbers in two arrays using two methods

function findDistinctSum(x, y) {
  let newArray = [];
  let firstArray = x.filter((x) => !y.includes(x));
  let secondArray = y.filter((y) => !x.includes(y));
  newArray.push(...firstArray);
  newArray.push(...secondArray);
  return newArray.reduce((a, b) => a + b);
}

console.log(findDistinctSum([3, 1, 7, 9], [2, 4, 1, 9, 3])); //returns 13

//second method

const findSum = (x, y) => {
  let arr = [...x, ...y];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
      continue;
    }
    count += arr[i];
  }
  return count;
};

console.log(findSum([3, 1, 7, 9], [2, 4, 1, 9, 3])); //returns 13

// queston 2 - Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set. using two methods.

const overlappingSum = (x, y) => {
  newArraySum = [];
  let firstyArray = x.filter((x) => y.includes(x));
  let secondArray = y.filter((y) => x.includes(y));
  newArraySum.push(...firstyArray);
  newArraySum.push(...secondArray);

  const sum = newArraySum.reduce((a, b) => a + b);

  return sum;
};

console.log(overlappingSum([12, 13, 6, 10], [13, 10, 16, 15])); //returns 46

//second method

const overlapping = (arr1, arr2) => {
  let arr = [...arr1, ...arr2];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      continue;
    }

    counter += arr[i];
  }
  return counter;
};

console.log(overlapping([12, 13, 6, 10], [13, 10, 16, 15]));
