function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
// Solution 1: Pass a string
console.log(greeter(user.join(" "))); // "Hello, Jane Doe"

// Solution 2: Modify function to accept an array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user)); // "Hello, Jane Doe"