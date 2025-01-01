function firstOrNull(array) {
    return array.length === 0 ? null : array[0];
}
firstOrNull(["Rod", "Jane", "Fred"]);
firstOrNull([1, 2, 3]);
var first = firstOrNull(["Rod", "Jane", "Fred"]);
console.log(first);
