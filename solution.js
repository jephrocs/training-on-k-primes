// function countKprimes(k, start, nd) {
//     function is_prime(num) {
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     }
//     const result = [];
//     for (let i = 2; i <= num; i++) {
//         while (is_prime(i) && num % i === 0) {
//             if (!result.includes(i)) result.push(i);
//             num /= i;
//         }
//     }
//     return result;
// }


// // k = prime factors 

// console.log(countKprimes(100));

// function findPrimeFactors(num) {

//     var primeFactors = [];
//     while (num % 2 === 0) {
//         primeFactors.push(2);
//         num = num / 2;
//     }

//     var sqrtNum = Math.sqrt(num);
//     for (var i = 3; i <= sqrtNum; i++) {
//         while (num % i === 0) {
//             primeFactors.push(i);
//             num = num / i;
//         }
//     }

//     if (num > 2) {
//         primeFactors.push(num);
//     }
//     return primeFactors;
// }
// function countKprimes(k, start, nd) {
//     var kPrimes = []
//     for (var j = start; j < nd; j++) {
//         function findPrimeFactors(num) {

//             var primeFactors = [];
//             while (num % 2 === 0) {
//                 primeFactors.push(2);
//                 num = num / 2;
//             }

//             var sqrtNum = Math.sqrt(num);
//             for (var i = 3; i <= sqrtNum; i++) {
//                 while (num % i === 0) {
//                     primeFactors.push(i);
//                     num = num / i;
//                 }
//             }

//             if (num > 2) {
//                 primeFactors.push(num);
//             }
//             return primeFactors;
//         }
//     } return kPrimes
// }

// function findPrimeFactors(k, num, nd) {
//     var numArr = []

//     var fro = num.toString()
//     var primeFactors = [];
//     while (num % 2 === 0) {
//         primeFactors.push(2);
//         num = num / 2;
//     }

//     var sqrtNum = Math.sqrt(num);
//     for (var i = 3; i <= sqrtNum; i++) {
//         while (num % i === 0) {
//             primeFactors.push(i);
//             num = num / i;
//         }
//     }

//     if (num > 2) {
//         primeFactors.push(num);
//     }
//     if (k == primeFactors.length) {
//         return [fro]
//     } else return []
// }

// console.log(findPrimeFactors(2, 10)); // [2, 5]
// console.log(findPrimeFactors(4, 32))


// function findPrimeFactors(k, start, nd) {
//     var numArr = []
//     var kPrimes = []
//     for (var m = start; m <= nd; m++) {
//         numArr.push(m);
//     }
//     for (var r = 0; r < numArr.length; r++) {
//         var primeFactors = [];
//         while (numArr[r] % 2 === 0) {
//             primeFactors.push(2);
//             numArr[r] = numArr[r] / 2;
//         }
//         var sqrtNum = Math.sqrt(numArr[r]);

//         for (var i = 3; i <= sqrtNum; i++) {
//             while (numArr[r] % i === 0) {
//                 primeFactors.push(i);
//                 numArr[r] = numArr[r] / i;
//             }
//         }
//         if (numArr[r] > 2) {
//             primeFactors.push(numArr[r]);
//         } console.log(primeFactors)
//         if (k == primeFactors.length) {
//             return kPrimes.push(numArr[r])
//         } else return []
//     }



// }

// console.log(findPrimeFactors(5, 500, 600));
// console.log(findPrimeFactors(4, 32, 44))

countKprimes = (k, start, nd) => {
    var numArr = []
    var kPrimes = []
    var countKpri = []
    for (var m = 1; m <= nd; m++) {
        numArr.push(m);
    }
    for (var i = 0; i <= nd; i++) {
        var primeFactors = [];
        var num = numArr[i]
        while (num % 2 === 0) {
            primeFactors.push(2);
            num = num / 2;
        }
        var sqrtNum = Math.sqrt(num);
        for (var j = 3; j <= sqrtNum; j++) {
            while (num % j === 0) {
                primeFactors.push(j);
                num = num / j;
            }
        }
        if (num > 2) {
            primeFactors.push(num);
        }
        if (primeFactors.length === k) {
            kPrimes.push(i + 1)
        }
    } for (var z = 0; z < kPrimes.length; z++) {
        if (start < kPrimes[z]) {
            countKpri.push(kPrimes[z])
        }
    } return countKpri
}
console.log(countKprimes(5, 500, 600));
console.log(countKprimes(3, 0, 100));
console.log(countKprimes(5, 1000, 1100));

puzzles = (s) => {

}