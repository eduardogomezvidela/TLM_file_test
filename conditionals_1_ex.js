/*
Is the number even or odd?

Instructions:
Write a function even_odd that takes one integer as an input and checks whether the
given integer is even or odd. Display the result.

*/

function even_odd(integer){
    if(integer % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(even_odd(4))
