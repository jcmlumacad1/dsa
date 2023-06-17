function linearSearchRecursive(x, a, i, j) {
  if (a[i] === x) return i
  if (i === j) return -1
  return linearSearchRecursive(x, a, i + 1, j)
}
