export {};

function truncateString(word: string, x:number){
    const str = word;
    const result = str.substring(0,x);
    return result;

}


console.log(truncateString("CODELEX", 4)); // Expected output: CODE
