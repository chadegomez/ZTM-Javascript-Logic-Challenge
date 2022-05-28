const answer = (arr, target) => {
    let result = [];
    for (num of arr) {
        for (num2 of arr) {
            if (num + num2 === target && num !== num2) {
                result = [num, num2];
                return result;
            }
        }
    }
    return result;
}



console.log(answer([4, 7, 87, 23, 30], 30));