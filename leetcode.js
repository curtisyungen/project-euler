// LEETCODE
// leetcode.com
// =====================================================================

// Problem 6: Zig Zag Conversion
// https://leetcode.com/problems/zigzag-conversion/
// Sample Input: convert('PAYPALISHIRING', 3);

function convert(s, numRows) {
  // Loop through each character
  // When counter reaches numRows or 0, change sign
  // Push each letter into an array holding this row

  if (s.length < 3 || numRows === 1) {
    return s;
  }

  let rows = [];
  for (var r = 0; r <= numRows; r++) {
    rows.push([]);
  }

  let sign = 1;
  let targetRow = 0;

  for (var ch in s) {
    rows[targetRow].push(s[ch]);
    targetRow += sign;

    if (targetRow === numRows - 1) {
      sign = -1;
    } else if (targetRow === 0) {
      sign = 1;
    }
  }

  let finalStr = '';
  for (var i in rows) {
    for (var j in rows[i]) {
      finalStr += rows[i][j];
    }
  }

  console.log(finalStr);
}

// Problem 9: Palindrome Number
// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let newNum = new Array();
  while (x > 0) {
    newNum.push(x % 10);
    x = Math.floor(x / 10);
  }

  let newArr = new Array();
  for (var i = newNum.length - 1; i >= 0; i--) {
    newArr.push(newNum[i]);
  }

  for (var j in newNum) {
    if (newNum[j] !== newArr[j]) {
      return false;
    }
  }

  return true;
};

// Problem 10: Regular Expression Matching
// https://leetcode.com/problems/regular-expression-matching/
var isMatch = function(s, p) {};

console.log(isMatch('aba', 'a*c*b.*'));

// Problem 11: Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
  let maxArea = 0;
  let leftIdx = 0;
  let rightIdx = height.length - 1;

  while (leftIdx < rightIdx) {
    maxArea = Math.max(maxArea, Math.min(height[leftIdx], height[rightIdx]) * (rightIdx - leftIdx));

    if (height[leftIdx] < height[rightIdx]) {
      leftIdx += 1;
    } else {
      rightIdx -= 1;
    }
  }

  return maxArea;
};

// Problem 12: Integer to Roman
// https://leetcode.com/problems/integer-to-roman/submissions/

var intToRoman = function(num) {
  let numeral = '';

  let thousands = Math.floor(num / 1000);
  for (var i = 0; i < thousands; i++) {
    numeral += 'M';
  }

  num -= thousands * 1000;

  let hundreds = Math.floor(num / 100);
  if (hundreds === 4) {
    numeral += 'CD';
  } else if (hundreds === 9) {
    numeral += 'CM';
  } else {
    let tempHundreds = hundreds;
    if (hundreds >= 5) {
      numeral += 'D';
      tempHundreds -= 5;
    }
    for (var k = 0; k < tempHundreds; k++) {
      numeral += 'C';
    }
  }

  num -= hundreds * 100;

  let tens = Math.floor(num / 10);
  if (tens === 4) {
    numeral += 'XL';
  } else if (tens === 9) {
    numeral += 'XC';
  } else {
    let tempTens = tens;
    if (tens >= 5) {
      numeral += 'L';
      tempTens -= 5;
    }
    for (var m = 0; m < tempTens; m++) {
      numeral += 'X';
    }
  }

  num -= tens * 10;

  let ones = Math.floor(num / 1);
  if (ones === 4) {
    numeral += 'IV';
  } else if (ones === 9) {
    numeral += 'IX';
  } else {
    if (ones >= 5) {
      numeral += 'V';
      ones -= 5;
    }
    for (var p = 0; p < ones; p++) {
      numeral += 'I';
    }
  }

  return numeral;
};
