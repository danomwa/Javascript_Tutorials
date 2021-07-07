const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s.pop();
  s.pop();
  s.pop();
  s.unshift(2);
  s.push(5);
  s.push(7);
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();