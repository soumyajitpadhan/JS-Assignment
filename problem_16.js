let row = 5;

for (let i = 1; i <= row; i++) {

    let temp = "";

    for (let j = 1; j <= i; j++) {
        if (j % 3 === 0) {
            continue;
        }

        if (j % 7 === 0) {
            break;
        }

        temp += j + " ";
    }

    console.log(temp);

}