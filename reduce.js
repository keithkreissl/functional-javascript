    function countWords(inputWords) {
	return inputWords.reduce(function(prev, current){
		if (isNaN(prev[current])){
			prev[current] = 1
		} else {
			prev[current] = prev[current] + 1
		}
		return prev
	}, {})
      // SOLUTION GOES HERE
    }

    module.exports = countWords
/*  REAL SOLUTION I didn't know about the || to initialize
      function countWords(arr) {
        return arr.reduce(function(countMap, word) {
          countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
          return countMap
        }, {}) // second argument to reduce initialises countMap to {}
      }
*/
