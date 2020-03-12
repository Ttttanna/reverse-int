module.exports = function reverse (n) {
  let arr = String(n).split("");
  let answer = [];
  for (let int of arr) {
    if ( 0 <= (+int) && (+int) <= 9) {
      answer.push(int);
    }
  }
  if (answer[answer.length -1] === 0) {
    answer.pop();
  }
  return answer.reverse().join("");
}
