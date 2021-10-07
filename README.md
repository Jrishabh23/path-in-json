#we are try to find path in JSON Algorithm

TODO: find value of given path

Step 1: Check object is empty or not
Step 1.1: If object is empty then return undefined
Step 2: Given path is split into array
Step 3: find length of path
Step 4: Path iterate in for...in loop
Step 4.1: Check if object[path[i]] is undefined then return
Step 4.2: Check if object[path[i]] is not undefined then copy last object value and array value like remaining path
Step 4.2.1: Check if object is undefined then return
