function generateOdds(len) {
  const arr = [];
  for (let i = 0; i < len; i + 1) {
    arr.push(1 + 2 * i);
    console.log(i);
  }
  console.log(arr);
  return arr;
}
generateOdds(10);