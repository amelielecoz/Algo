//Random number is chosen between 10 and 100000

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min
}

const MIN = 1
const MAX = 1000

const N = getRandomIntInclusive(MIN, MAX);

const fizzbuzz = () => {
    console.log(`Display numbers between ${MIN} and ${N}`)
    for (let index = MIN; index < N; index++) {
        if (index % 15 === 0) {
            console.log(index, 'FizzBuzz')
        }
        else if (index % 3 === 0) {
            console.log(index, 'Fizz')
        }
        else if (index % 5 === 0) {
            console.log(index, 'Buzz')
        }
    }
}

fizzbuzz();
