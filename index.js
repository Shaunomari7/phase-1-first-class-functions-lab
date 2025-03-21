// Code your solution in this file!
const drivers=['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers() {
    return drivers.slice(0,2);
} 

function returnLastTwoDrivers() {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier=function(multiplier) {
    return function(fares) {
        return fares*multiplier
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
 
const selectDifferentDrivers = function(drivers, driversFunction) {
    return driversFunction(drivers)
}