// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier higher-order function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, func) {
    return func(drivers);
  };
  
  // Exporting the functions
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };