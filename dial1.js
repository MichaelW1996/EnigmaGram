const dial1 = {
  pos: 5, //any figure from 0-25, the start position of the dial
  trigger: 14, //any figure from 0-25, the position of the dial that will trigger the next dial to move
  //this is the area where the alphabet is renumbered - im using 0-25 to replace A-Z
  0: 23,
  1: 5,
  2: 18,
  3: 14,
  4: 21,
  5: 1,
  6: 20,
  7: 17,
  8: 12,
  9: 11,
  10: 24,
  11: 9,
  12: 8,
  13: 15,
  14: 3,
  15: 13,
  16: 25,
  17: 7,
  18: 2,
  19: 22,
  20: 6,
  21: 4,
  22: 19,
  23: 0,
  24: 10,
  25: 16,
};

const dial2 = {
  pos: 22, //any figure from 0-25, the start position of the dial
  trigger: 11, //any figure from 0-25, the position of the dial that will trigger the next dial to move
  //this is the area where the alphabet is renumbered - im using 0-25 to replace A-Z
  0: 20,
  1: 15,
  2: 23,
  3: 10,
  4: 12,
  5: 18,
  6: 21,
  7: 14,
  8: 25,
  9: 19,
  10: 3,
  11: 22,
  12: 4,
  13: 16,
  14: 7,
  15: 1,
  16: 13,
  17: 24,
  18: 5,
  19: 9,
  20: 0,
  21: 6,
  22: 11,
  23: 2,
  24: 17,
  25: 8,
};

const letter2ind = (letter) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let index = alphabet.indexOf(letter);
  return index;
};

// console.log(letter2ind("F"));

const dialconvert = (index, dial) => {
  //asks what dial we are on & input index, written in a way to be usable for all dials multiple times
  let newi = index + dial.pos; //new index is equal to the input index + the position of the dial
  if (newi >= 26) {
    //if the index plus position is 26 or greater, loop back to start
    newi -= 26;
  }
  let swapi = dial[newi]; //swapped index is the new index swapped to its value in the dial
  return swapi;
};

console.log(dialconvert(letter2ind("Z"), dial1));
