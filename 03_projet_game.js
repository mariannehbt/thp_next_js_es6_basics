// On affiche les règles du jeu
console.log("Bonjour ! J'ai choisi un chiffre aléatoire entre 1 et 5. Tu dois deviner ce chiffre en 10 coups maximum.");

// On génère aléatoirement un chiffre entre 1 et 5 (en appellant la fonction avec (1, 5) comme paramètres)
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

let choosenNumber = getRandomIntInclusive(1, 5);

// Test : affichage du nombre aléatoirement choisi
	// console.log(choosenNumber);

// On récupère la réponse du joueur, mais la proposition sort en string donc on convertit en float
let proposition = parseFloat(prompt("Propose un chiffre"));

// Test : affichage de la proposition du joueur ; type de la proposition ; test avec +1 pour vérifier qu'on a bien converti en nombre
	// console.log(proposition);
	// console.log(typeof proposition)
	// console.log(proposition + 1)

// On met en place une boucle qui limite les essais à 10
let i = 1
// On utilise un label pour provoquer la fin de la boucle en cas de victoire
labelAnnuleBoucle: while (i <= 10 ) {
	console.log("Proposition n°" + i + ' : ' + proposition);
	// On teste la réponse du joueur
	switch (true) {
		// Une fois les 10 tours passés sans réussir, la fonction renvoi : "Perdu ! Essaye encore"
		case (i == 10):
		console.log('Perdu, essaye encore !');
		break;
		// On limite l'entrée entre 1 et 5 (on place la condition en premier)
		case (proposition > 5 || proposition < 1):
		console.log('Propose un chiffre entre 1 et 5 stp !');
		break;
		// En cas de victoire : "Bravo ! Tu as gagné !"
		case (proposition == choosenNumber):
		console.log('Bravo ! Tu as gagné !');
		break labelAnnuleBoucle;
		// Si la proposition du joueur est plus grande que le chiffre de l'ordinateur, la fonction renvoi "Le chiffre à trouver est plus petit !"
		case (proposition > choosenNumber):
		console.log('Le chiffre à trouver est plus petit !');
		break;
		// Si, à l'inverse, elle est plus petite, la fonction renvoi "Le chiffre à trouver est plus grand !"
		case (proposition < choosenNumber):
		console.log('Le chiffre à trouver est plus grand !');
		break;
		// Pour toute autre entrée qu'un chiffre entre 1 et 5 (ex: lettre, symbole, etc.)
		default:
		console.log("Es-tu sur d'avoir proposé un chiffre entre 1 et 5 ?");
		}
	proposition = prompt("Proposez un chiffre")
	i = i + 1;
}