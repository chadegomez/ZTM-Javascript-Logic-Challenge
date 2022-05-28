// given array
const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const answer = array => {
    // sorts array numerically, smallest to largest
    const sortedArr = array.sort((a, b) => a - b);

    // temporarily holds matching numbers
    let temp = [];

    // holds the final, resulting array
    let result = [];

    // loops through the sorted array
    for (let i = 0; i < sortedArr.length; i++) {
        if (i === 0 || sortedArr[i] === sortedArr[i - 1]) {
            // if it is the first item of the array or the current item matches the previous one, pushes it to the temp array
            temp.push(sortedArr[i]);
        } else {
            // if the current item doesn't match the previous one, pushes the temp array into the result array
            result.push(temp);
            // clears the temp array
            temp = [];
            // pushes the next item into the temp array
            temp.push(sortedArr[i]);
        }
    }
    return result;
}

console.log(answer(arr));