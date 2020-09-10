// countKprimes = (k, start, nd) => {
//     var numArr = []
//     var kPrimes = []
//     var countKpri = []
//     for (var m = 1; m <= nd; m++) {
//         numArr.push(m);
//     }
//     for (var i = 0; i <= nd; i++) {
//         var primeFactors = [];
//         var num = numArr[i]
//         while (num % 2 === 0) {
//             primeFactors.push(2);
//             num = num / 2;
//         }
//         var sqrtNum = Math.sqrt(num);
//         for (var j = 3; j <= sqrtNum; j++) {
//             while (num % j === 0) {
//                 primeFactors.push(j);
//                 num = num / j;
//             }
//         }
//         if (num > 2) {
//             primeFactors.push(num);
//         }
//         if (primeFactors.length === k) {
//             kPrimes.push(i + 1)
//         }
//     } for (var z = 0; z <= kPrimes.length; z++) {
//         if (start <= kPrimes[z]) {
//             countKpri.push(kPrimes[z])
//         }
//     } return countKpri
// }
//  console.log(countKprimes(5, 500, 600));
//  console.log(countKprimes(3, 0, 100));
//  console.log(countKprimes(5, 1000, 1100));
// countKprimes = (k, start, nd) => {
//     var numArr = []
//     var kPrimes = []
//     for (var m = 1; m <= nd; m++) {
//         numArr.push(m);
//     }
//     for (var i = 0; i <= numArr.length; i++) {
//         var primeFactors = [];
//         var num = numArr[i]
//         while (num % 2 === 0) {
//             primeFactors.push(2);
//             num = num / 2;
//         }
//         for (var j = 3; j <= Math.sqrt(num); j++) {
//             while (num % j === 0) {
//                 primeFactors.push(j);
//                 num = num / j;
//             }
//         }
//         if (num > 2) {
//             primeFactors.push(num);
//         }
//         if (primeFactors.length === k) {
//             kPrimes.push(i + 1)
//         }
//     } return kPrimes.filter(numbers => numbers >= start)
// }
// console.log(countKprimes(5, 500, 600));
// console.log(countKprimes(3, 0, 100));
// console.log(countKprimes(5, 1000, 1100));


// puzzle = (s) => {
//     var arr = []
//     var sol = 0
//     var sevenPrime = countKprimes(7, 0, s)
//     for (var i = 0; i < sevenPrime.length; i++) {
//         arr.push(countKprimes(3, 0, s - sevenPrime[i]))
//     }
//     for (var j = 0; j < arr.length; j++) {
//         sol = sol + arr[j].length

//     } return sol
// }
// console.log(puzzle(407))
// console.log(puzzle(143))
// console.log(puzzle(138))
// puzzle = (s) => {
//     for (var i = 2; i <= s; i++) {
//         if (Math.pow(i, 7) < s) {
//             var sevenPrime = Math.pow(i, 7)
//             s = s - sevenPrime
//             console.log(sevenPrime, s)
//             for (var j = 2; j <= s; j++) {
//                 if (Math.pow(j, 3) <= s) {
//                     // var threePrime = Math.pow(i, 3)
//                     console.log(Math.pow(j, 3))

//                     // s = s - threePrime
//                     // console.log(s)
//                 }
//             }
//         }
//     }
//     // console.log(Math.pow(2, 7));
//     // console.log(Math.pow(2, 3));
//     // console.log(Math.pow(2, 1));


// }

// console.log(puzzle(138))
// console.log(puzzle(3000))
// console.log(puzzle(143))

// for (var i = 1; i <= 10; i++) {
//     if (Math.pow(i, 2) < 60) {
//         console.log(Math.pow(i, 2))
//     }
// }

// countKprimes = (k, start, nd) => {
//     var numArr = []
//     var kPrimes = []
//     for (var m = 1; m <= nd; m++) {
//         numArr.push(m);
//     }
//     for (var i = 0; i <= numArr.length; i++) {
//         var primeFactors = [];
//         var num = numArr[i]
//         while (num % 2 === 0) {
//             primeFactors.push(2);
//             num = num / 2;
//         }
//         for (var j = 3; j <= Math.sqrt(num); j++) {
//             while (num % j === 0) {
//                 primeFactors.push(j);
//                 num = num / j;
//             }
//         }
//         if (num > 2) {
//             primeFactors.push(num);
//         }
//         if (primeFactors.length === k) {
//             kPrimes.push(i + 1)
//         }
//     } return kPrimes.filter(numbers => numbers >= start)
// }
// console.log(countKprimes(5, 500, 600));
// console.log(countKprimes(3, 0, 100));
// console.log(countKprimes(5, 1000, 1100));


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

// prime = (num) => {
//     const fact = [];
//     var value = num;
//     for (let divisor = 2; value > 1; divisor++) {
//         for (; value % divisor === 0; value /= divisor) {
//             fact.push(divisor)
//         }
//     } return fact
// }
// console.log(prime(32))


// countKprimes = (k, start, nd) => {
//     var numArr = []
//     var kPrimes = []
//     prime = (num) => {
//         const fact = [];
//         for (let di = 2; num > 1; di++) {
//             for (; num % di === 0; num /= di) {
//                 fact.push(di)
//             }
//         } return fact
//     }
//     for (var m = start; m <= nd; m++) {
//         numArr.push(m);
//     }
//     for (var i = 0; i < numArr.length; i++) {
//         if (prime(numArr[i]).length === k) {
//             kPrimes.push(numArr[i])
//         }
//     } return kPrimes
// }
// console.log(countKprimes(5, 500, 600));
// console.log(countKprimes(3, 0, 100));
// console.log(countKprimes(5, 1000, 1100));

countKprimes = (k, start, nd) => {
    const kPrimes = []
    prime = (num) => {
        const fact = [];
        for (var di = 2; 1 < num; di++) {
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
console.log(countKprimes(5, 500, 600));
console.log(countKprimes(3, 0, 100));
console.log(countKprimes(5, 1000, 1100));


// primer = (num) => {
//     const arr = []
//     if (Math.isPrime(num) === true) {
//         arr.push(num)
//         return arr
//     }
// }
// console.log(primer(3))