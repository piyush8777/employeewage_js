/*************************************************************
 * Purpose - Implementing employee wage program in javascript
 * 
 * @author Piyush
 * @since 13-07-2021
 **************************************************************/

console.log("Welcome to Java Script EmployeeWage");

//UC1: Check employee is absent or present

const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2; // get random number 0 or 1
if(empCheck == IS_ABSENT){
	console.log("Employee is Absent");
}
else{
	console.log("Employee is present");
}