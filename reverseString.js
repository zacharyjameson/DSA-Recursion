/*
3. Reverse String

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string. 
*/

const reverse = function(hello) {
    if(hello === "") {
        return "";
    } else {
        return reverse(hello.substr(1)) + hello.charAt(0);
    }
}

console.log(reverse("May the force be with you!"));