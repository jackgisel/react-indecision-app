const firstName = (name) => {
  return name.split(' ')[0]
}

const firstName2 = (name) => name.split(' ')[0];


const multiplier = {
  numbers: [1,2,3,4,5],
  multiplyBy: 4,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
