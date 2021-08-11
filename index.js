const Calculate = {
  factorial(num) {
    for(let i = num - 1; i >= 1; i--) {
        num *= i;
    }

    return num !== 0 ? num : 1;
  }

}

module.exports = Calculate;