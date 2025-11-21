//switch

switch (key) {
  case value1:
    // code to be executed if key === value1
    break;
  case value2:
    // code to be executed if key === value2
    break;
  default:
  // code to be executed if key doesn't match any case
}

const month = 3;
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  default:
    console.log("invalid month"); //if break is not used it will execute below it execpt default
}
