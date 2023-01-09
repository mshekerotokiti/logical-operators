const hasDriversLicense = true; //variable A
const hasGoodVision = true; //variable B
console.log(hasDriversLicense && hasGoodVision); // && this is the and operator
console.log(hasDriversLicense || hasGoodVision);// || this is the or operator
console.log( !hasDriversLicense); // ! not operator

/*const shouldDrive = hasDriversLicense && hasGoodVision
if (shouldDrive){
    console.log(`Sarah is able to drive`)
}
else {
    console.log(`Someone else should drive`)
}; */

console.log(hasDriversLicense && hasGoodVision && isTired) //returns false
const isTired = false;
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired

if (shouldDrive) {
    console.log(`Sarah is able to drive`)
}
else {
    console.log(`Someone else should drive`)
};