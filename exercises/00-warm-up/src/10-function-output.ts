export {};

function s(word1:string,w2:string) {
  return word1.concat(' ').concat(w2);
}

const result = s("hello","world"); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
