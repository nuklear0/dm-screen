export class Character {
  public name: string;
  public initiative: number;
  public hp: number;

  constructor(name: string, initiative: number, hp: number) {
    this.name = name;
    this.initiative = initiative;
    this.hp = hp;
  }
}
