function hasTargetSum(arr, target) {
  // Initialize an empty set to store the numbers we have already seen
  const seen = new Set();

  // Loop through each number in the array
  for (let num of arr) {
    // Calculate the complement that, when added to the current number, equals the target
    const complement = target - num;

    // If the complement is in the 'seen' set, we've found the pair
    if (seen.has(complement)) {
      return true;
    }

    // Add the current number to the 'seen' set for future reference
    seen.add(num);
  }

  // If no pair is found, return false
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([1, 2, 3, 4, 5], 9)); // true
console.log(hasTargetSum([1, 2, 3, 4, 5], 10)); // false
