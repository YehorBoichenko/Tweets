/**

Checks if two users are equal based on their IDs.
@param {Object} userA - The first user object to compare.
@param {Object} userB - The second user object to compare.
@returns {boolean} - Returns true if the users have the same ID, otherwise false.
*/
export const areUsersEqual = (userA, userB) => userA.id === userB.id;
/**

Filters out the unique values from an array, based on a custom comparison function.
@param {Array} arrayA - The first array to compare.
@param {Array} arrayB - The second array to compare.
@param {Function} compareFunction - The custom comparison function used to compare elements of the arrays.
@returns {Array} - An array containing only the unique values from arrayA, based on the comparison with arrayB.
*/
export const filterUniqueValues = (arrayA, arrayB, compareFunction) =>
  arrayA.filter(
    (arrayAValue) =>
      !arrayB.some((arrayBValue) => compareFunction(arrayAValue, arrayBValue))
  );
// Returns a filtered array containing elements of arrayA that are not equal to any elements of arrayB,
// based on the comparison function provided
