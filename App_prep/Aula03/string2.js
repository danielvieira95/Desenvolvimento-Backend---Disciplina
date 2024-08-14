function isPalindrome(str) {
    // Remove espaços em branco e transforma a string para minúsculas
    //str = str.replace(/\s+/g, '').toLowerCase();
  str = str.replace(/\s+/g, '').toUpperCase();
    // Reverte a string
    let reversedStr = str.split('').reverse().join('');

    // Verifica se a string original é igual à string revertida
    return str === reversedStr;
}

// Exemplo de uso
let palavra = "radar";
console.log(isPalindrome(palavra)); // true

palavra = "hello";
console.log(isPalindrome(palavra)); // false
