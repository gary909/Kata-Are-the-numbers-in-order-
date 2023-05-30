function inAscOrder(arr) {
    //create copy of arr without mutation
    let myArr = arr.slice();
    // sort arr into order
    myArr.sort((a,b)=>a-b);
    // make string then compare
    let text1 = myArr.toString();
    let text2 = arr.toString();
    if(text1 == text2){
        return true;
    } else {
        return false;
    }
}

console.log(inAscOrder([1, 2, 4, 7, 19])); // true
console.log(inAscOrder([1, 2, 3, 4, 5])); // true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); // false
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); // false

