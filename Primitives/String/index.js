let firstName = "Elias Jaber";
let lastName = " Shafin";
let fullName = firstName + lastName;
console.log("full name using (firstName+lastName) :",fullName);
console.log("full name using (concat) :",firstName.concat(lastName));
console.log("fullName length :",fullName.length);
console.log("fullName toUpper :",fullName.toUpperCase());
console.log("fullName toLower :",fullName.toLowerCase());
console.log("fullName slice [0-4] :",fullName.slice(0,4));
console.log("fullName subString :",fullName.substring(0,5));
let value=fullName.split(" ");
value.forEach(element => {
    console.log("split :",element);   
});
console.log("is fullName includes Shafin ",fullName.includes("Shafin"));
let newName="  new name with space first and last ";
console.log("Trime function using on newName :",newName.trim());