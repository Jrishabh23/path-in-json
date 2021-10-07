/**
 *@desc Given object
 */
var object = {
    a: {
        b: {
            c: 12,
            j: false,
        },
        k: null,
    },
};
/**
 * @desc Find path of string in object
 * @param {*} obj
 * @param {*} str
 * @returns Given string path
 */
function findPath(obj, str) {
    /**
     * @desc It is check given obj is not empty
     * Step 1: If object is empty then return undefined
     * Step 2: If object not empty then continue
     */
    let isEmptyObject =
        !Object.getOwnPropertyNames(obj).length &&
        !Object.getOwnPropertySymbols(obj).length;
    if (isEmptyObject) return undefined;
    /**
     * @desc Given string path convert into array
     */
    let path = str.split(".");
    /**
     * @desc Given path iterate in for..in loop
     */
    for (let index in path) {
        obj = obj[path[index]];
        if (obj === undefined) return obj;
    }
    return obj;
}
/**
 * @desc Try to get path and Return value in log
 */
console.log(findPath(object, "a.b.c")); // 12
console.log(findPath(object, "a.b")); // {c: 12, j: false}
console.log(findPath(object, "a.b.d")); // undefined
console.log(findPath(object, "a.c")); // undefined
console.log(findPath(object, "a.b.c.d")); // undefined
console.log(findPath(object, "a.b.c.d.e")); // undefined
console.log(findPath(object, "a.b.j")); //false
console.log(findPath(object, "a.b.j.k")); //undefined
console.log(findPath(object, "a.k")); //null
