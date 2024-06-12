export interface Level {
    number: number;
    score: number;
    isLocked: boolean;
    bestScore:number
  }
  export class Level {
    constructor(public id: number, public score: number, public locked: boolean) {}
  }