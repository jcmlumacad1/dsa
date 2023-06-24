function mergeSort(a, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2)
    mergeSort(a, p, q)
    mergeSort(a, q + 1, r)
    merge(a, p, r, q)
  }
}

function merge(a, p, r, q) {
  let b = a.slice(p, q + 1)
  let c = a.slice(q + 1, r + 1)

  let s = f(b, c)
  for (let i = p; i <= r; i++) {
    a[i] = s.shift()
  }

  function f(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }
}
