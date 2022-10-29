function BMI (weight = 55 , height = 1.7) {
    let result = weight / (height * height);
    return result;
}

console.log(BMI) 

let StatusText = document.getElementById(`result`)

function Status(BodyMass) {
    if (BodyMass < 18.5){
     StatusText.style.color=`orange`
        return "نقص بالوزن";
    }

else if (BodyMass >= 18.5  && BodyMass < 25) {
    StatusText.style.color=`green`
return `وزنك صحي`;

}



else if (BodyMass >= 25) {
    StatusText.style.color=`red`
return `لديك زيادة وزن`;

}
}
function calculate ()
{
    let weight = document.getElementById(`weight`).value;
let height = document.getElementById(`height`).value;


let bmi_value = BMI(weight,height);
let desc = Status(bmi_value);

let div = document.getElementById(`result`);

div.innerText = bmi_value + " == " + desc;



}
