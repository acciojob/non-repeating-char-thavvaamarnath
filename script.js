function firstNonRepeatedChar(str) {
    // Create an object to store the frequency of each character
    let charCount = {};

    // Loop through the string and count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Loop through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if there is no non-repeated character
}

// Test the function with example inputs
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
