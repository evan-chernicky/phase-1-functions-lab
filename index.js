// Code your solution in this file!


function distanceFromHqInBlocks(distance) {

    return Math.abs(42 - distance);
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(blocks) {

   const numOfBlocks = distanceFromHqInBlocks(blocks);
   return numOfBlocks * 264;

}
distanceFromHqInFeet(50);

function distanceTravelledInFeet(start, destination) {

    return 264 * Math.abs(start - destination);

}
distanceTravelledInFeet(43, 42);

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    const feetWithDiscount = distanceInFeet - 400;

    if (distanceInFeet < 400) {
        return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return feetWithDiscount * 0.02;
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}
calculatesFarePrice(42,38);