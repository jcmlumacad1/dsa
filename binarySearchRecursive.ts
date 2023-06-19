function binarySearchRecursive(x, a, i, j) {
  if (i > j) return -1
  let m = Math.floor((i + j) / 2)
  if (x === a[m]) return m
  if (x < a[m]) {
    return binarySearchRecursive(x, a, i, m - 1)
  }
  return binarySearchRecursive(x, a, m + 1, j)
}
