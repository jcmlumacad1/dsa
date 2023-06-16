function linearSearch(x, a) {
    let i = 0
    let n = a.length - 1
    while (i <= n && x != a[i]) i++
    if (i <= n) return i
    return -1
}
