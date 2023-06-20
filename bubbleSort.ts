function bubbleSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = a.length - 1; j >= i + 1; j--) {
      if (a[j] < a[j - 1]) {
        [a[j], a[j - 1]] = [a[j - 1], a[j]];
      }
    }
  }
}
