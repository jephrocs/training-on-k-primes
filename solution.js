//non recursive but too slow
function countKprimes(k, start, nd) {
    const kPrimes = []
    prime = (num) => {
        const fact = [];
        for (let di = 2; num > 1; di++) {
            for (; num % di === 0; num /= di) {
                fact.push(di)
            }
        } return fact
    }
    for (var i = start; i <= nd; i++) {
        if (prime(i).length === k) {
            kPrimes.push(i)
        }
    } return kPrimes
}


//recursive but 'RangeError: Maximum call stack size exceeded'
countKprimes = (k, start, nd) => {
    const kPrimes = []
    primer = (num, factor = 2, factors = []) => {
        if (num < 2) {
            return factors;
        }
        if (num % factor == 0) {
            factors.push(factor);
            primer(num / factor, factor, factors);
        }
        else {
            primer(num, factor + 1, factors);
        }
        return factors;
    }
    for (var i = start; i <= nd; i++) {
        if (primer(i).length === k) {
            kPrimes.push(i)
        }
    } return kPrimes
}

puzzle = (s) => {
    var arr = []
    var sol = 0
    var sevenPrime = countKprimes(7, 0, s)
    for (var i = 0; i < sevenPrime.length; i++) {
        arr.push(countKprimes(3, 0, s - sevenPrime[i]))
    }
    for (var j = 0; j < arr.length; j++) {
        sol = sol + arr[j].length

    } return sol
}