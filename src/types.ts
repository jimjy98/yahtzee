export interface Scores {
  aces: {};
  twos: {};
  threes: {};
  fours: {};
  fives: {};
  sixes: {};
  threeOfAKind: {};
  fourOfAKind: {};
  fullHouse: {};
  shortStraight: {};
  longStraight: {};
  yahtzee: {};
  chance: {};
}

export interface Game {
  title: string;
  date: Date;
  description: string;
  scores: Scores;
  users: string[];
}
