// Provided solution:

function nbYear(p0, percent, aug, p) {
    for (var y = 0; p0 < p; y++) {
        p0 = p0 * (1 + percent / 100) + aug;
        console.log(p0)
    }
    return y;
  }

console.log(nbYear(1000, 2, 50, 1080))
