function findMax(arr: any[]): number {
  let iMax = 0
  for (let k = 1; k < arr.length; k++) {
    if (arr[iMax] < arr[k]) iMax = k
  }
  return iMax
}
