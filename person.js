class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is ${this.name}!`; // Return a string with the name of the person
  }
}

module.exports = {
    Person,
};
