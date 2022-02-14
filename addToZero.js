// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let outcome = false;

for(let i = 0; i < array.length; i++) {
    for(let o = 0; o < array.length; o++) {
        if(i !== o) {
            if(array[i] + array[o] === 0) {
                outcome = true;
            }
        }
    }
}

console.log(true);