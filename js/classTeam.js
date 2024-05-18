export default class Team {
  constructor() {
    this.members = new Set();
  }


  add(newCharacter) {
    if (this.members.has(newCharacter)) {
      throw new Error("Такой персонаж уже существует");
    } else {
      this.members.add(newCharacter);
    }
  }

  addAll(...Allmembers) {
    Allmembers.forEach(member => {
      this.members.add(member);
    });
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}