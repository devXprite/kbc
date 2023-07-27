let score = 0;

for (let i = 0; i <= 15; i++) {
    if (i <= 4) {
        score += 1000;
    } else {
        score += score;
    }

    console.log(i+1, score);
}