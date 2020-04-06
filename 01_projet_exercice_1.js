// // On créé un array avec les 3 mots à tester
// let wordsToTest = ['aafbcbecf', 'abcdefgh', 'raddar'];

// On écrit une fonction firstSoloLetter qui renvoi la première lettre qui n'est pas répétée du mot passé en paramètre
function firstSoloLetter(monArgument) {
	let result = []
	for (let i = 0; i < monArgument.length; i++){
		if (monArgument.indexOf(monArgument.charAt(i)) == monArgument.lastIndexOf(monArgument.charAt(i))) {
			result.push(monArgument.charAt(i));
			break;
		}
	}
	if (result.length == 1) {
		return result[0];
	} else {
		return 'null'
	}
}

// On lance la fonction avec un mot passé en paramètre
console.log(firstSoloLetter('aafbcbecf'))

// Résultats souhaités :
// firstSoloLetter("aafbcbecf") renvoi "e"
// firstSoloLetter("abcdefgh") renvoi "a"
// firstSoloLetter("raddar") renvoi null