function calculateBMI(weight, height) {
    return weight / [height * height];
}

//to determine bmi
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight'
    }
    else if (bmi >= 18.5 && bmi <= 22.9) {
        return 'Normal'
    }
    else if (bmi >= 23 && bmi <= 24.9) {
        return 'Overweight'
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return 'Pre Obese'
    } 
    else if (bmi >= 30 && bmi <= 34.9) {
        return 'Obese Class 1'
    } 
    else if (bmi >= 35 && bmi <= 39.9) {
        return 'Obese Class 11'
    }
    else {
        return 'Obese Class 111'
    }
}

let weight = 70
let height = 1.75

let bmi = calculateBMI(weight, height)
let bmicategory = getBMICategory(bmi)


console.log(bmi + ' ' + bmicategory)
