// function division(){
//     let num1 =10
//     let num2 =5
//     let num3 = num1/num2
//     console.log(num3)
// }

// division()

//calculate area of triangle
function area(){
    let areatri=document.getElementById('area')
    let he=24
    let b=12
    let area=he*b/2
    areatri.innerHTML=area;
    
}


function volume(){
    let vol=document.getElementById('volume')
    let pi=3.14
    let r=7
    let h=24
    let volume=pi*r*r*h
    vol.innerHTML=volume;
}

function bmi(){
    let Bmi=document.getElementById('bmi')
    let weight=70
    let height=1.75
    let bmi=weight/(height*height)
    Bmi.innerHTML=bmi;
}

function Simpleinterest(){
    let interest=document.getElementById('Simpleinterest')
    let principal=10000
    let rate=1.6
    let time=5
    let Simpleinterest=principal*rate*time
    interest.innerHTML=Simpleinterest;
}

function greaterno(){
    let greater=document.getElementById('greaterno')
    let a=40
    let b=60
    let greaterno=(a>b)?a:b
    greater.innerHTML=greaterno;
}
