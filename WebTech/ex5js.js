document.getElementById("long-short-compute").addEventListener("click", (e) => {
    const input = document.getElementById("long-short").value;
    const inputArray = input.split(" ");
    const short = inputArray.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, inputArray[0]);
    const long = inputArray.reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, inputArray[0]);

    document.getElementById("long-short-output").innerHTML = `
        Short: <strong>${short}</strong>
        Long: <strong>${long}</strong>
    `;
});

document.getElementById("bmi-compute").addEventListener("click", (e) => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    const bmi = weight / ((height / 100) ** 2);
    let type = "Unknown";

    if (bmi < 18.5) type = "Underweight";
    if (bmi>18.6 && bmi < 24.9) type = "Normal";
    if (bmi>25 && bmi < 29.9) type = "Overweight";
    if (bmi > 30) type = "Obese";

    document.getElementById("bmi-output").innerText = bmi;
    document.getElementById("bmi-type-output").innerText = type;
    
});

document.getElementById("from-data").addEventListener("keyup", (e) => {
    const fromdata = document.getElementById("from-data").value;

    const from = document.getElementById("from")
        .selectedOptions[0]
        .getAttribute("value");
    const to = document.getElementById("to")
        .selectedOptions[0]
        .getAttribute("value");

    if (from == to) return document.getElementById("to-data").value = fromdata;
    if (from == "usd")
        return document.getElementById("to-data").value = fromdata * 80;

    document.getElementById("to-data").value = fromdata / 80;
});

let heads = 0;
let tails = 0;
document.getElementById("flip").addEventListener("click", (e) => {
    if (Math.random() > 0.5) {
        document.getElementById("coin-img").setAttribute("src", "https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png");
        document.getElementById("heads-total").innerText = ++heads;
    } else {
        document.getElementById("coin-img").setAttribute("src", "https://thumbs.dreamstime.com/b/one-rupee-coin-shiny-white-background-30801135.jpg");
        document.getElementById("tails-total").innerText = ++tails;
    }
});

document.getElementById("submit").addEventListener("click", (e) => {
    const half = 100 + (100 / 100 * 9);
    const one = 200 + (200 / 100 * 9);
    const two = 400 + (400 / 100 * 9);

    const small = document.getElementById("small").value;
    const medium = document.getElementById("medium").value;
    const large = document.getElementById("large").value;
    const tip = document.querySelector("input[name='tip']:checked").value;

    let cost = (small * half) + (medium * one) + (large * two);
    cost = cost + (cost / 100 * tip);

    document.getElementById("price").innerText = cost;
});

document.getElementById("farm-compute").addEventListener("click", (e) => {
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    const farm = document.getElementById("farm");
    farm.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            const image = Math.random() > 0.5 ? "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3154404/apple-clipart-xl.png" : "https://pics.clipartpng.com/midle/Orange_PNG_Clipart-235.png";
            
            const td = document.createElement("td");
            td.innerHTML = `<img src='${image}' width=100px height=100px>`;
            tr.appendChild(td);
        }

        farm.appendChild(tr);
    }
});
