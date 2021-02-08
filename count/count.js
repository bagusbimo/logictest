arr = ['a', 'a', 'a', 'b', 'c', 'c', 'b', 'b', 'b', 'd', 'd', 'e', 'e', 'e'];
var count = {};
arr.forEach( function(i) {
    count[i] = (count[i]||0) + 1;
});
console.log(count);