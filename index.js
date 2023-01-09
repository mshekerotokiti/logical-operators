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

const isTired = false;
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired
// true, true , false but will be inverted to true the operation will be all true
if (shouldDrive) {
    console.log(`Sarah is able to drive`)
}
else {
    console.log(`Someone else should drive`)
};