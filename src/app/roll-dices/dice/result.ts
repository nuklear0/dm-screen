export class Result {
  diceSides: number;
  rollResult: number;

  constructor(diceSides: number, result: number) {
    this.diceSides = diceSides;
    this.rollResult = result;
  }
}
