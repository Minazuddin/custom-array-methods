This package applies to array of strings, numbers and objects.

It performs basic array operations such as, 
1.randomize array elements
2.remove duplicate elements
3.remove an element from the array
3.update an element in the array

IMPLEMENTATION

const { 
    randomize, 
    removeElement, 
    updateElement, 
    removeDuplicates 
} = require('custom-array-methods-useful')

array of string/number/Object:

//1. Randomize

randomize(arr)

//2. Remove element from the array

removeElement(arr, element_to_be_removed)

//3. Update an element (object) in the array

updateElement(arr, element_to_be_updated, new_element)

//4. Remove duplicates from the array

removeDuplicates(arr)