let array1 = [1, 2, 3]
let array2 = [9, 9]
let array3 = [1, 9]
let array4 = [1, 0, 9, 4, 5, 1, 9]

const increment = (array) => {
    for(var i = array.length-1; i>=0; i--) {
        if(array[i] === 9) {
            array[i] = 0
            if(array[i - 1] === undefined) {
                array.unshift(1)
            }
        } else {
            array[i] += 1
            break;
        }
    }
    console.log('modified array', array)
}


increment(array1)
increment(array2)
increment(array3)
increment(array4)