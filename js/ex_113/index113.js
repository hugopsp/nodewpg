// If base and height are equal then calculate the perimeter of a square
// If base and height are not equal then calculate the perimeter of a rectangle
// This function returns a number that represents the shape perimiter
// Show the following output: %perimiter% is the shape perimiter
// If the perimeter is bigger than 100 then show the following output: The perimiter is to big
// Else show the following message: The perimiter is fine
// Call this function a couple of times with different values
// Test all posible cases

function getShapePerimiter(base, height) {

    let perimeter;

    if (base === height) {
        perimeter = base * height;
    }
    if (base != height) {
        perimeter = 2 * (base + height);
    }

    console.log(perimeter + " is the shape perimiter");
    

    if (perimeter > 100) {
        console.log('The perimiter is to big');
    }
    else {
        console.log('The perimiter is fine');
    }
    return perimeter;

}
getShapePerimiter(4,4);
getShapePerimiter(100,20);