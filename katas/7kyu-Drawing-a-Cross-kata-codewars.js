// The aim of this kata is to write function drawACross / draw_a_cross which returns a cross shape with 'x' characters on a square grid of size and height of our sole input n. 
// All non-'x' characters in the grid should be filled with a space character (" ").
// For example for drawACross(7) / draw_a_cross(7), the function should draw the following grid:
// x     x
//  x   x
//   x x
//    x
//   x x
//  x   x
// x     x
// The arms of the cross must only intersect through one central 'x' character, and start in the corner of the grid, 
// so for even values of n, return "Centered cross not possible!"
// If n<3, function should return "Not possible to draw cross for grids less than 3x3!"

// Test.assertEquals(drawACross(7), 'x     x\n x   x \n  x x  \n   x   \n  x x  \n x   x \nx     x', 'Should draw a centered cross in a grid of height and width n!')
// Test.assertEquals(drawACross(15), 'x             x\n x           x \n  x         x  \n   x       x   \n    x     x    \n     x   x     \n      x x      \n       x       \n      x x      \n     x   x     \n    x     x    \n   x       x   \n  x         x  \n x           x \nx             x', 'Should draw a centered cross in a grid of height and width n!')
// Test.assertEquals(drawACross(25), 'x                       x\n x                     x \n  x                   x  \n   x                 x   \n    x               x    \n     x             x     \n      x           x      \n       x         x       \n        x       x        \n         x     x         \n          x   x          \n           x x           \n            x            \n           x x           \n          x   x          \n         x     x         \n        x       x        \n       x         x       \n      x           x      \n     x             x     \n    x               x    \n   x                 x   \n  x                   x  \n x                     x \nx                       x', 'Should draw a centered cross in a grid of height and width n!')
// Test.assertEquals(drawACross(6), 'Centered cross not possible!', 'If a centred cross is not possible, display the correct error message!')
// Test.assertEquals(drawACross(10), 'Centered cross not possible!', 'If a centred cross is not possible, display the correct error message!')
// Test.assertEquals(drawACross(2), 'Not possible to draw cross for grids less than 3x3!', 'Numbers less than three should return the correct error message')

function drawACross(n){
    if (n<3){return "Not possible to draw cross for grids less than 3x3!"}
    if (n%2===0){return "Centered cross not possible!"}

    const matrix = new Array(n).fill().map(_=> new Array(n).fill(" ")) // creamos una matriz

    for (let i=0; i<n; i++){
        matrix[i][i]="x" // acceder a cada indice de una matriz
        matrix[n-i-1][i]="x" 
    }

    const cross = matrix.map(element => element.join("")).join("\n") // juntar los caracteres de la matriz

    return cross
}

console.log(drawACross(7))