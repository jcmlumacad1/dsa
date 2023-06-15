function findMaxRecursive(a, i, j) {
    if (i == j) return i
    let iMax = findMaxRecursive(a, i, j-1)
    if (a[j] > a[iMax]) return j
    return iMax
}
