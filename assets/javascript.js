<script>
  function areAnagrams(word1, word2) {
    // Helper function to check if two words are anagrams
    return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function findAnagramsInArray(phrase, anagramsArray) {
    const result = [];
    for (const anagram of anagramsArray) {
        if (areAnagrams(phrase, anagram)) {
            result.push(anagram);
        }
    }
    return result;
}

// Example usage
const phrase = "listen";
const anagramsArray = ["enlist", "hello", "silent", "dog", "inlets"];
const matchingAnagrams = findAnagramsInArray(phrase, anagramsArray);
console.log(matchingAnagrams); // Output: [ 'enlist', 'silent', 'inlets' ]

</script>
