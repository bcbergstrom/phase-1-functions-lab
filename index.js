// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup-42)
}

function distanceFromHqInFeet(pickup){
    return (distanceFromHqInBlocks(pickup) *264)
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination-start)*264
}
function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start,destination)
    if(distanceTravelled <= 400){
        return 0
    } else if(distanceTravelled > 400 && distanceTravelled <= 2000){
        return ((distanceTravelled - 400)*0.02) 
    } else if (distanceTravelled  > 2000 && distanceTravelled < 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
}