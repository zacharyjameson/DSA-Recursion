/*
4. nth Triangular Number

Calculate the nth triangular number. 
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, and 
is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd           3rd             nth? 

 */

const nthTriangle = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + nthTriangle(n - 1);
};

let n = 4;
console.log(nthTriangle(n));
