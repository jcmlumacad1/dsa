function insertionSort(a) {
  for (let j = 1; j < a.length; j++) {
    let el = a[j]
    let i = j - 1
    while (i > -1 && a[i] > el) {
      a[i + 1] = a[i]
      i--
    }
    a[i + 1] = el
  }
}
