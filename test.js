const a = require('./');
array = [
  {
    letter: 2,
    dog: 'cat'
  },
  {
    letter: 1,
    dog: 'donkey'
  },
  {
    letter: 4,
    dog: 'doggy'
  }
];

array.where("dog != 'doggy'");

// console.log(array.where("dog != doggy"));
