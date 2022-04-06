const countSubStr = function (str) {
  let n = str.length;
  let ans = n;
  for (let i = 0; i < str.length; i++) {
    debugger
    let left = i-1;
    let right = i+1;
    while(left >=0 && right <= n-1 && str[left] === str[right]){
      ans += 1;
      left = left - 1;
      right = right + 1; 
    }
    let index = i;
    let j = index + 1;
    while(index>=0 && j>=0 && j <= n-1 && str[index]===str[j]){
      ans += 1;
      index = index - 1;
      j=j+1
    }
    console.log(ans);
  }
  return ans;
}
