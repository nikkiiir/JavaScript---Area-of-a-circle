// function to calulate the area of a circle
function CalculateArea() { 
    let radius = document.getElementById('txtRadius').value;
    const PI = 3.141592653589793;

    let diameter = radius * radius;
    let circumference = diameter * PI;

    //output
    alert("The area of the circle is " + circumference);
    console.log("The area of the circle is " + circumference);

   
}