var text = "";
var total = 0;

for (var i = 0; i < 6; i++) {
    if (i == 3) {
        text = "finished";
    } else if (i == 5) {
        i++;
    }
    total += 1;
}

console.log(text + " at the number " + i + " with a total of " + total);