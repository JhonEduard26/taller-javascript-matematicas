//@ts-check

/**
 * @param {number[]} numbers 
 * @returns {number}
 */
function average(numbers) {
  return (numbers.reduce((prev, current) => prev + current)) / numbers.length
}

average([14, 23, 33, 65])
//23.333333333333332

/**
 * 
 * @param {number[]} list 
 * @returns {boolean}
 */
const isListEven = (list) => list.length % 2 === 0

/**
 * 
 * @param {number[]} list 
 * @returns {number}
 */
function calculateMedian(list) {
  const ordenedList = list.sort((a, b) => a - b)
  const medium = ordenedList.length / 2
  return isListEven(ordenedList)
    ? (ordenedList.at(medium) + ordenedList.at(medium - 1)) / 2
    : ordenedList.at(medium)
}

calculateMedian([5, 2, 1000, 10, 500, 20]) // 8.5
calculateMedian([20, 2, 7, 15, 1]) // 7

/**
 * 
 * @param {array[]} list 
 * @returns {array[]}
 */
function sortBidimensionalList(list) {
  return list.sort((a, b) => b[1] - a[1])
}

/**
 * 
 * @param {number[]} list 
 * @returns {Object}
 */
function calculateMode(list) {
  let myObj = {}
  for (let i = 0; i < list.length; i++) {
    let element = list[i]
    if (myObj[element]) {
      myObj[element] = myObj[element] + 1
    } else {
      myObj[element] = 1
    }
  }
  return myObj
}

const listTwoItems = Object.entries(calculateMode([1, 5, 5, 5, 5, 4, 4, 4, 3, 3]))
const mostRepeated = sortBidimensionalList(listTwoItems)[0]
console.log('La moda es: ' + mostRepeated[0])