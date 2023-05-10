const heroesHealth = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

export default function sortHeroesHealthStatus(heroesHealthArray) {
  return heroesHealthArray.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(sortHeroesHealthStatus(heroesHealth));
