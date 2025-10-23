// countWords(words) - counts occurrences of each string in the input array
function countWords(words) {
	// result object
	var counts = {};
	if (!words || !words.length) return counts;

	for (var i = 0; i < words.length; i++) {
		var w = words[i];
		// if the property already exists increment, otherwise set to 1
		if (counts[w]) {
			counts[w] = counts[w] + 1;
		} else {
			counts[w] = 1;
		}
	}
    
	return counts;
}

// quick test - open browser console to see the result
console.log(countWords(['apple','grape','apple','apple'])); // expected: { apple: 3, grape: 1 }

