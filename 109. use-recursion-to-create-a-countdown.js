// Only change code below this line
function countdown(n){
  if (n < 1){
    return [];
  }
  else {
    var count = countdown(n - 1);
    count.unshift(n);
    return count;
  }
  return;
}
// Only change code above this line