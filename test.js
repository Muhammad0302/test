// Q#1: Write a function that will take an array as input, sort, and return the array in
// descending
// order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].
// Code in javascript:
function sortDescending(arr) {
	// Implementing selection sort in descending order
	for (let i = 0; i < arr.length - 1; i++) {
		let maxIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] > arr[maxIndex]) {
				maxIndex = j;
			}
		}
		if (maxIndex !== i) {
			let temp = arr[i];
			arr[i] = arr[maxIndex];
			arr[maxIndex] = temp;
		}
	}
	return arr;
}
const inputArray = [3, 2, 7, 4, 6, 9];
const sortedArray = sortDescending(inputArray);
console.log(sortedArray); // Output: [9, 7, 6, 4, 3, 2]

// Q#2: Write a function that will take a string as input, check and return if it is palindrome
// or
// not. For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false.
// Code in javascript:
function isPalindrome(str) {
	str = str.toLowerCase();
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		while (!isAlphaNumeric(str[left]) && left < right) {
			left++;
		}

		while (!isAlphaNumeric(str[right]) && left < right) {
			right--;
		}
		if (str[left] !== str[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}
function isAlphaNumeric(char) {
	return /[a-z0-9]/.test(char);
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('doctor'));
console.log(isPalindrome('A man, a plan, a canal, Panama!'));

// Q#3: Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
// because 11 and 19 are the largest numbers.
// Code in javascript:
function sumOfTwoLargest(arr) {
	let firstLargest = -Infinity;
	let secondLargest = -Infinity;
	for (let num of arr) {
		if (num > firstLargest) {
			secondLargest = firstLargest;
			firstLargest = num;
		} else if (num > secondLargest) {
			secondLargest = num;
		}
	}
	return firstLargest + secondLargest;
}

console.log(sumOfTwoLargest([3, 7, 1, 5, 11, 19]));
console.log(sumOfTwoLargest([10, 20, 30, 40]));
console.log(sumOfTwoLargest([-1, -5, -10, -2]));

// Q#4: Write a function that will take an array as input and return an array with every
// missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8]
// Code in javascript:
function findMissingNumbers(arr) {
	let max = Math.max(...arr);
	let allNumbers = new Set(Array.from(Array(max + 1).keys()));
	let arrSet = new Set(arr);
	let missingNumbers = [...allNumbers].filter((num) => !arrSet.has(num));
	return missingNumbers;
}
console.log(findMissingNumbers([3, 4, 9, 1, 7, 3, 2, 6]));
console.log(findMissingNumbers([0, 1, 2, 3]));
console.log(findMissingNumbers([]));
console.log(findMissingNumbers([10, 8, 5, 3, 1]));

// Q#5: Write a function that will take an array of numbers and return the number most
// repeated
// in the array with how many times it was repeated. For example, if the array is
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.
// Code in javascript:
function findMostRepeated(arr) {
	let frequency = {};
	arr.forEach((num) => {
		if (frequency[num]) {
			frequency[num]++;
		} else {
			frequency[num] = 1;
		}
	});
	let maxCount = 0;
	let mostRepeatedNumber = null;

	Object.keys(frequency).forEach((key) => {
		if (frequency[key] > maxCount) {
			maxCount = frequency[key];
			mostRepeatedNumber = key;
		}
	});
	return `${mostRepeatedNumber} is repeated ${maxCount} times`;
}
console.log(
	findMostRepeated([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5])
);
console.log(findMostRepeated([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
console.log(findMostRepeated([1, 1, 1, 1, 2, 2, 2, 3, 3, 4]));

// Q#6: Write a function that will take an array as input, it will rotate the array to the right 1
// time
// and return the rotated array. Rotation of the array means that each element is shifted
// right
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]
// Code in javascript:
function rotateArrayRight(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const lastElement = arr[arr.length - 1];
	for (let i = arr.length - 1; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = lastElement;
	return arr;
}
console.log(rotateArrayRight([3, 8, 9, 7, 6]));
console.log(rotateArrayRight([1]));
console.log(rotateArrayRight([]));
console.log(rotateArrayRight([1, 2, 3, 4, 5]));
