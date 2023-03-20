// Code your solution in this file!
const returnFirstTwoDrivers = (array) => array.slice(0, 2);

const returnLastTwoDrivers = (array) => array.slice(array.length - 2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
}

const fareDoubler = function (fare) {
    return fare * 2;
}

const fareTripler = function (fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
