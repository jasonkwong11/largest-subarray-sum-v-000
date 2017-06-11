function largestSubarraySum(array) {
  let largestSum = array[0],
    sum = 0;
  array.forEach((num) => {
    sum += num;
    if (sum > largestSum) {
      largestSum = sum;
    }
  });
  return largestSum;
}