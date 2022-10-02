const form : any = document.getElementById('pass-gen-id');


const uppercase  = form.elements['uppercase'];
const lowercase = form.elements['lowercase'];
const special = form.elements['special'];
const numbers = form.elements['numbers'];
const slider = form.elements['slider'];


const lowercaseArray : string[] = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseArray : string[] = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
const specialArray : string[] = "!!!!!@@@@@$$$$$%%%%%&".split("");
const numbersArray : string[] = "12345678901234567890123456".split("");



function
display()
{
    console.log(slider.value)
}



