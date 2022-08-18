function BMI (width = 1.7 , height = 46) {
    let result = width / (height * height);
    return result
}
console.log(BMI(10,40))
console.log()
console.log()
console.log()
console.log()
console.log()
let StatusText = document.getElementById(`result`)


Object.onmouseover = function(){
    alert(Status(bmi(80,1.8)))
};

Object.addEventListener("mouseover", alert(Status(BMI(80,1.8))))



function status (BMI) {
    if (bmi < 18.5){
     StatusText.style.color=`orange`
        return "نقص بالوزن";
    }

else if (bmi >= 18.5  && bmi < 25) {
    StatusText.style.color=`green`
return `وزنك صحي`;

}



else if (bmi >= 25) {
    StatusText.style.color=`red`
return `لديك زيادة وزن`;

}
}
function calculate ()
{
    let weight = document.getElementById(`weight`).value;
let height = document.getElementById(`height`).value;


let bmi = BMI(weight,height);
let desc = Status(bmi);

let div = document.getElementById(`result`);

div.innerText = bmi + " == " + desc;



}
