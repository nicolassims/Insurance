/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary River Falls Homes Construction Company. || created: 09.22.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let policyNum, birthDate, premiumDueDate, numAccidents, customerAge, agePrice, monthlyInsurancePremium, continueInt;
let lastName, firstName;

function main() {
    if (continueInt == 1 || continueInt == null) {
        setPolicyNum();
        setLastName();
        setFirstName();
        setBirthDate();
        setPremiumDueDate();
        setNumAccidents();
        setCustomerAge();
        setAgePrice();
        setMonthlyInsurancePremium();
        printClosingRemark();
        setContinueInt();
    }
    printGoodbye();
}

main();

function setPolicyNum() {
    policyNum = PROMPT.question('Please enter the number of your insurance policy.\n>');
}

function setLastName() {
    lastName = PROMPT.question('Please enter your last name.\n>');
}

function setFirstName() {
    firstName = PROMPT.question('Please enter your first name.\n>');
}

function setBirthDate() {
    birthDate = PROMPT.question('Please enter your birthdate in the YYYY-MM-DD format.\n>');
}

function setPremiumDueDate() {
    premiumDueDate = PROMPT.question('Please enter the date your premium will be due in the YYYY-MM-DD format.\n>');
}

function setNumAccidents() {
    numAccidents = PROMPT.question('How many accidents have you been at fault for in the past three years?\n>');
}

function setCustomerAge() {
    customerAge = Date.now() - Date.parse(birthDate);
}

function setAgePrice() {
    const SIXTYFIVEYEARS = 2051201880000, FORTYFIVEYEARS = 1420062840000, THIRTYYEARS = 946708560000,
        FIFTEENYEARS = 473354280000, AGE15TO30PRICE = 20, AGE30TO45PRICE = 10, AGE60PLUSPRICE = 30;
    if (customerAge > FIFTEENYEARS && customerAge < THIRTYYEARS) {
        agePrice = AGE15TO30PRICE;
    } else if (customerAge >= THIRTYYEARS && customerAge < FORTYFIVEYEARS) {
        agePrice = AGE30TO45PRICE;
    } else if (customerAge >= SIXTYFIVEYEARS) {
        agePrice = AGE60PLUSPRICE;
    } else {
        agePrice = 0;
    }
}

function setMonthlyInsurancePremium() {
    const BASEPRICE = 100,  ACCIDENTPRICE = 50;
    monthlyInsurancePremium = Number(BASEPRICE + agePrice + numAccidents * ACCIDENTPRICE);
}

function printClosingRemark() {
    console.log('Thank you for using this terminal, ' + firstName + ' ' + lastName +'.\nYour total price is $'
        + monthlyInsurancePremium + ', and your policy number is #' + policyNum + '.\nYour premium will be due on ' +
        premiumDueDate + '.');
}

function setContinueInt() {
    continueInt = PROMPT.question('Please enter a \'1\' if you want to continue using this program.\n' +
        'If not, enter anything else.\n>');
    return main();
}

function printGoodbye() {
    console.log('Goodbye, and have a nice day.');
}