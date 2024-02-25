/// TEST 1:: Longest Consecutive Sequence

// INPUT: string
// OUTPUT: increase string

function longestIncreasingSubstringLength(a) {
  let minChar = a[0], curChar = a[0];
  for (let i = 1; i < a.length; i++) {
      if (a[i] >= minChar) {
          if (orderOfChar(a[i]) - 1  == orderOfChar(curChar[curChar.length -1])) {
            curChar += a[i];
          }
      } else {
        minChar = a[i];
        curChar = a[i];
      }
  }
  return curChar.length;
}

const orderOfChar = (str) => str.charCodeAt(0) - "a".charCodeAt(0) + 1;
const defaultInputStr = `4
aabc
abcdefghijklmnopqrstuvwxyz
aaaaaaaaaaaaaaaaaaaaaa
abacad`;
console.log("TEST 1::");
const startTime = performance.now();
for (const str of defaultInputStr.split("\n")) {
  if (!isNaN(Number(str))) continue;
  console.log(longestIncreasingSubstringLength(str));
}
const endTime = performance.now();
const processingTime = endTime - startTime;
console.log("Time process code TEST 1:: ", processingTime, "milliseconds");


/// TEST 2:: PLAYING DIABLO II

// INPUT:
/* 
  m: Số lượng quái vật
  d: Độ bền ban đầu của thanh kiếm
  k: Độ bền giảm mỗi lần giết quái vật
  c: Chi phí sửa chữa thanh kiếm
*/

// OUTPUT:
/*
  Số lượng gold tối thiểu cần thiết để qua màn.
  In ra -1 nếu không thể qua màn.
*/ 

function minGoldToPassLevel(m, d, k, c) {
  let monstersLeft = m;
  let durability = d;
  let goldNeeded = 0;
  if (d < k || (d==k && m > 1)) return -1;
  while (monstersLeft > 0) {
      let maxMonsters = d % k == 0 ? (d/k) - 1 : Math.floor(d / k);

      if (Math.floor(d / k) === monstersLeft) return goldNeeded;
    
      let killedMonsters = Math.min(maxMonsters, monstersLeft);
      monstersLeft -= killedMonsters;

      durability -= killedMonsters * k;
      if (durability <= killedMonsters * k) {
          goldNeeded += c;
          durability = d;
      }
  }

  return goldNeeded;
}
console.log("TEST 2::");

const defaultInput = ['10 5 1 2', '10 4 1 2'];
const startTime2 = performance.now();

for (const ele of defaultInput) {
  const [m, d, k, c] = ele.split(" ");
  let result = minGoldToPassLevel(parseInt(m), parseInt(d), parseInt(k), parseInt(c));
  console.log("Minimum amount of gold to pass the level:", result);
}
const endTime2 = performance.now();
const processingTime2 = endTime2 - startTime2;
console.log("Time process code TEST 2:: ", processingTime2, "milliseconds");





