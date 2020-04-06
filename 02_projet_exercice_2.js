// Tableau associatif contenant un ensemble de villes avec leurs nombres d'habitants
const inhabitantsCityName = {Paris: "Parisiens", Blois: "Blésois", Marseille: "Marseillais", Lille: "Lillois"}

// Ensemble de tableaux, avec un ensemble de villes et le nom de leurs habitants
const numberInhabitants = [["Lille", 232741],["Paris", 2148000],["Blois", 45710], ["Marseille", 861635]]

// Fonction orderCities : retourne un tableau contenant le nom des habitants triés par nombre d'habitants dans la ville
let orderCities = (inhabitantsCityName, numberInhabitants) => {
	// On trie les villes par nombre d'habitants
	let sortCities = numberInhabitants.sort().reverse();
	// On créé un array pour ranger les data dans l'ordre voulu
	let sortInhabitants = [];
	// On trie les datas
	for (i in numberInhabitants) {
		sortInhabitants.push(inhabitantsCityName[numberInhabitants[i][0]]);
	}
	return sortInhabitants;
}

// On lance la fonction
console.log(orderCities(inhabitantsCityName, numberInhabitants))

// Résultat souhaité :
//["Parisiens", "Marseillais", "Lillois", "Blésois"]**