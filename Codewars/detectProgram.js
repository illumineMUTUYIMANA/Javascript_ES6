function isPangram(phrase) {
    const lowerCased = phrase.toLowerCase();
    const uniqueLetters = new Set();
    let patern = /[a-z]/;
    for (const char of lowerCased) {
        if (patern.test(char)) {
            uniqueLetters.add(char);
        }
    }
    return uniqueLetters.size === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))