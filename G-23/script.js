document.getElementById("registrationForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let roll=document.getElementById("roll").value.trim();

let email=document.getElementById("email").value.trim();

let age=document.getElementById("age").value;

let phone=document.getElementById("phone").value.trim();

let gender=document.getElementById("gender").value;

let course=document.getElementById("course").value;

let address=document.getElementById("address").value.trim();

if(!/^[A-Za-z ]+$/.test(name))
{
alert("Name should contain only alphabets.");
return;
}

if(!/^[0-9]{10}$/.test(phone))
{
alert("Phone number must contain exactly 10 digits.");
return;
}
// Email validation
let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.(com|in|co\.in|org|org\.in|net|edu|edu\.in|gov\.in))$/;

if (!emailPattern.test(email)) {
    //alert("Enter a valid email address (e.g. user@gmail.com, user@company.in, user@college.co.in).");
    error.innerHTML="Please enter valid email";
    return;
}
if(!Number.isInteger(Number(age)))
{
alert("Age should be an integer.");
return;
}

let student={

name:name,
roll:roll,
email:email,
age:age,
phone:phone,
gender:gender,
course:course,
address:address

};

localStorage.setItem("studentData",JSON.stringify(student));

window.location.href="success.html";

});