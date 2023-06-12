function moveHanoiTower(n, fromP, toP, useP) {
	if (n > 0) {
		moveHanoiTower(n-1, fromP, useP, toP)
		console.log("move disk from the ", fromP, " post to the ", toP, " post.")
		moveHanoiTower(n-1, useP, toP, fromP)
	}
}
