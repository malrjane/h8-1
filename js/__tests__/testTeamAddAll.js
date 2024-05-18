import Team  from "../classTeam";
import Character from "../classCharacter";


test('Не добавляет одного и того же персонажа в команду', () => {
  const team = new Team();
  const character = new Character('Лучник');

  team.add(character);
  console.log(team.members);

  expect(() => {
    team.add(character);
  }).toThrow();
})

test('Добавляет нового персонажа в команду', () => {
  const team = new Team();
  const character = new Character('Лучник');
  const character1 = new Character('Маг');

  team.add(character);
  team.add(character1);


  console.log(team);
  expect(team.members.size).toBe(2);
})

test('Добавляет всех персонажей в команду', () => {
  const team = new Team();
  const character = new Character('Лучник');
  const character1 = new Character('Маг');
  const character2 = new Character('Мечник');

  team.addAll(character, character1, character2);

  console.log(team.members);
  expect(team.members.size).toBe(3);
})


test('Преобразование Set в массив', () => {
  const team = new Team();
  const character = new Character('Лучник');
  const character1 = new Character('Маг');

  team.add(character);
  team.add(character1);


  console.log(team);
  team.toArray();

  expect(Array.isArray(team.members)).toBe(true);
})