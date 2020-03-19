export const getRandomItemsFromArray = (arr, numbers) => {
  const result = []
  for (let index = numbers; index > 0; index--) {
    result.push(arr[Math.floor(Math.random() * arr.length)])
  }
  return result
}
