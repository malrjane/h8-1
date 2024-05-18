import Character from "../classCharacter";

test('character', () => {
  const character = new Character('Лучник');
  expect(character.name).toBe('Лучник');
});