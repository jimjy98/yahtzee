import { Game } from "types";

const calculateSum = (scores: Game["scores"], u: string, cols: string[]) => {
  let sum = 0;
    cols.forEach((col) => {
        //@ts-ignore
        if (scores[col][u]) {
            // @ts-ignore
            sum += parseInt(scores[col][u]);
      }
  });
  return sum;
};

export const rowGuides = [
  { key: "aces", title: <h1>Aces</h1>, description: <>Count of 1's</> },
  { key: "twos", title: <h1>Twos</h1>, description: <>Count of 2's</> },
  { key: "threes", title: <h1>Threes</h1>, description: <>Count of 3's</> },
  { key: "fours", title: <h1>Fours</h1>, description: <>Count of 4's</> },
  { key: "fives", title: <h1>Fives</h1>, description: <>Count of 5's</> },
  { key: "sixes", title: <h1>Sixes</h1>, description: <>Count of 6's</> },
  {
    title: <h1>Total Score</h1>,
    description: null,
    getResult: (scores: Game["scores"], u: string) => {
      return calculateSum(scores, u, [
        "aces",
        "twos",
        "threes",
        "fours",
        "fives",
        "sixes",
      ]);
    },
  },
  {
    title: <h1>Bonus</h1>,
    description: <>If total score is 63 or over</>,
    getResult: (scores: Game["scores"], u: string) => {
      const totalScore = calculateSum(scores, u, [
        "aces",
        "twos",
        "threes",
        "fours",
        "fives",
        "sixes",
      ]);
      return totalScore >= 63 ? 35 : 0;
    },
  },
  {
    title: <h1>Total Upper</h1>,
    description: null,
    getResult: (scores: Game["scores"], u: string) => {
      const totalScore = calculateSum(scores, u, [
        "aces",
        "twos",
        "threes",
        "fours",
        "fives",
        "sixes",
      ]);
      return totalScore >= 63 ? totalScore + 35 : totalScore;
    },
  },
  {
    key: "threeOfAKind",
    title: <h1>3 of a kind</h1>,
    description: <>Total all dice</>,
  },
  {
    key: "fourOfAKind",
    title: <h1>4 of a kind</h1>,
    description: <>Total all dice</>,
  },
  { key: "fullHouse", title: <h1>Full house</h1>, description: <>Score 25</> },
  {
    key: "shortStraight",
    title: <h1>Sm. Straight</h1>,
    description: <>Score 30</>,
  },
  {
    key: "longStraight",
    title: <h1>Lg. Straight</h1>,
    description: <>Score 40</>,
  },
  { key: "yahtzee", title: <h1>Yahtzee</h1>, description: <>Score 50</> },
  { key: "chance", title: <h1>Chance</h1>, description: <>Total all dice</> },
  {
    title: <h1>Yahtzee Bonus</h1>,
    description: <>Score 100</>,
    getResult: () => {},
  },
  {
    title: <h1>Total Lower</h1>,
    description: null,
    getResult: (scores: Game["scores"], u: string) => {
      return calculateSum(scores, u, [
        "threeOfAKind",
        "fourOfAKind",
        "fullHouse",
        "shortStraight",
        "longStraight",
        "yahtzee",
        "chance",
      ]);
    },
  },
  {
    title: <h1>Grand Total</h1>,
    description: null,
    getResult: (scores: Game["scores"], u: string) => {
      return (
        calculateSum(scores, u, [
          "threeOfAKind",
          "fourOfAKind",
          "fullHouse",
          "shortStraight",
          "longStraight",
          "yahtzee",
          "chance",
        ]) +
        calculateSum(scores, u, [
          "aces",
          "twos",
          "threes",
          "fours",
          "fives",
          "sixes",
        ])
      );
    },
  },
];
