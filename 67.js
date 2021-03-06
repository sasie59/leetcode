/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (
    (a.length > 10000 || a.length < 1) ||
    (b.length > 10000 || b.length < 1)
  )
    return false;

  if(a.length > b.length) {
    max = a;
    min = b;
  } else {
    min = a;
    max = b;
  }

  const pad0 = max.length - min.length;
  min = "0".repeat(pad0) + min;

  let result = '';
  let isCarry = 0;

  for (let i = min.length - 1; i >= 0; i--) {
    result = ((+min[i] ^ +max[i]) ^ +isCarry) + result;
    isCarry = (+min[i] & +max[i]) || ((+min[i] | +max[i]) & +isCarry);
  }

  return isCarry ? '1' + result: result;

  // 0^0^0 = 0
  // 1^0^0 = 1
  // 1^1^0 = 0
  // 1^1^1 = 1
  // 000 = 0
  // 100 = 0
  // 110 = 1
  // 111 = 1

  // let a_10 = parseInt(a, 2);
  // let b_10 = parseInt(b, 2);
  // return (a_10 + b_10).toString(2);
};


// console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
);