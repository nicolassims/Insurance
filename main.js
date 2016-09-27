/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary River Falls Homes Construction Company. || created: 09.22.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let policyNum, birthDate, premiumDueDate, numAccidents, customerAge, monthlyInsurancePremium;
let lastName, firstName;
const BASEPRICE = 100, AGE15TO30PRICE = 20, AGE30TO45PRICE = 10, AGE60PLUSPRICE = 30, ACCIDENTPRICE = 50;

function main() {
    setPolicyNum();
    setBirthDate();
    setPremiumDueDate();
    setNumAccidents();
    setCustomerAge();
    //printTotalPrice();
}

main();

function setPolicyNum() {
    policyNum = PROMPT.question('Please enter the number of your insurance policy.\n>');
}

function setBirthDate() {
    birthDate = PROMPT.question('Please enter your birthdate in the YYYY-MM-DD format.\n>');
}

function setPremiumDueDate() {
    premiumDueDate = PROMPT.question('Please enter the date your premium will be due in the YYYY-MM-DD format.\n>');
}

function setNumAccidents() {
    numAccidents = PROMPT.question('How many accidents have you been at fault for in the past three years?\nDon\'t lie! >:-<\n>');
}

function setCustomerAge() {
    const SIXTYFIVEYEARS = 2051201880000, FORTYFIVEYEARS = 1420062840000, THIRTYYEARS = 946708560000, FIFTEENYEARS = 473354280000;
    //Date.parse(birthDate) will return the number of milliseconds from that date since 1970, January 1st.
    //Date.now() will return the number of milliseconds since 1970, January 1st.
    customerAge = Date.parse(birthDate);
    let dateToday = Date.now();
    console.log(customerAge);
    console.log(dateToday);
}

//function printTotalPrice() {
    //console.log('Your total price is $' + totalPrice + ', and your house will be built on lot #' + lotNum + '.');
//}