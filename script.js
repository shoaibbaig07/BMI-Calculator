let height = document.getElementById("height");
let weight = document.getElementById("weight");
let result = document.getElementById("result");

function calculate() {
    const wt = parseFloat(weight.value);
    const ht = parseFloat(height.value) / 100;

    if (wt <= 0 || isNaN(wt) || ht <= 0 || isNaN(ht)) {
        return result.textContent = "Enter valid height and weight values";
        return;
    }

    let bmi = wt / (ht * ht);
    bmi = bmi.toFixed(2);

    let category;
    if (bmi < 18.5)
        category = "UnderWeight";
    else if (bmi < 25)
        category = "Normal weight";
    else if (bmi < 30)
        category = "Over weight";
    else
        category = "Obesity";


    result.textContent = `Your BMI: ${bmi} (${category})`;
};