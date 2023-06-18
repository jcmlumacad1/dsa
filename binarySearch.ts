function binarySearch(x, a) {
  let n = a.length - 1
  let i = 0
  let j = n
  while (i <= j) {
    let m = Math.floor((i + j) / 2)
    if (x === a[m]) return m
    if (x > a[m]) {
      i = m + 1
    } else {
      j = m - 1
    }
  }
  return -1
}
