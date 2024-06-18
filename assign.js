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


//calculating distance

function calculateCost(distance){
    let cost;

    if (distance>=0 && distance<=100){
        cost=5.00
    }
    else if(distance>100 && distance<=500){
        cost=8.00
    }
    else if(distance>500 && distance<=1000){
        cost=10.00
    }
    else if(distance>1000){
        cost=12.00
    }
    else{
        return "Invalid distance"
    }
    return  cost
}

console.log(calculateCost(100))

//calculating electricity bill

function calculateBill(units){
    let bill=0

    if (units<=50){
        bill=units*0.5
    }
    else if (units<=150){
        bill=[50*0.5]+[[units-50]*1.0]
    }
    else if(units<=250){
        bill=[50*0.5]+[100*1.0]+[[units-150]*1.2]
    }
    else {
        bill=[50*0.5]+[100*1.0]+[100*1.2]+[[units-250]*1.5]
    }

    //additional charges
    bill +=10
    return bill
}

console.log(calculateBill(100))